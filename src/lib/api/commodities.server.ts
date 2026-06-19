import { createServerFn } from "@tanstack/react-start";
import {
  COMMODITY_CODES,
  type CommodityCategory,
  type CommodityMarketData,
  type CommodityQuote,
} from "@/lib/commodities";

const FETCH_BATCHES = [
  "GRAIN_WHEAT,GRAIN_CORN,GRAIN_SOY,GRAIN_SORGHUM",
  "FERT_UREA,FERT_DAP,FERT_POTASH,FERT_NH3",
  "FUEL_DIESEL,NAT_GAS",
];

const COMMODITY_META: Record<
  (typeof COMMODITY_CODES)[number],
  { nameKey: string; category: CommodityCategory; unit: string }
> = {
  GRAIN_WHEAT: { nameKey: "wheat", category: "grain", unit: "$/bu" },
  GRAIN_CORN: { nameKey: "corn", category: "grain", unit: "$/bu" },
  GRAIN_SOY: { nameKey: "soy", category: "grain", unit: "$/bu" },
  GRAIN_SORGHUM: { nameKey: "sorghum", category: "grain", unit: "$/bu" },
  FERT_UREA: { nameKey: "urea", category: "fertilizer", unit: "USD $/t" },
  FERT_DAP: { nameKey: "dap", category: "fertilizer", unit: "USD $/t" },
  FERT_POTASH: { nameKey: "potash", category: "fertilizer", unit: "USD $/t" },
  FERT_NH3: { nameKey: "ammonia", category: "fertilizer", unit: "USD $/t" },
  FUEL_DIESEL: { nameKey: "diesel", category: "fuel", unit: "$/gal" },
  NAT_GAS: { nameKey: "natGas", category: "fuel", unit: "$/MMBtu" },
};

const MOCK_PRICES: Record<(typeof COMMODITY_CODES)[number], { price: number; changePct: number }> =
  {
    GRAIN_WHEAT: { price: 5.42, changePct: 1.2 },
    GRAIN_CORN: { price: 4.18, changePct: -0.8 },
    GRAIN_SOY: { price: 10.35, changePct: 0.5 },
    GRAIN_SORGHUM: { price: 4.05, changePct: -0.3 },
    FERT_UREA: { price: 412, changePct: 2.1 },
    FERT_DAP: { price: 538, changePct: 1.5 },
    FERT_POTASH: { price: 385, changePct: -1.2 },
    FERT_NH3: { price: 625, changePct: 3.4 },
    FUEL_DIESEL: { price: 3.72, changePct: 0.9 },
    NAT_GAS: { price: 2.85, changePct: -2.1 },
  };

let cache: { data: CommodityMarketData; expires: number } | null = null;
const CACHE_TTL_MS = 60 * 60 * 1000;

type GrainBriefRow = {
  code?: string;
  commodity_code?: string;
  value?: number;
  price?: number;
  unit?: string;
  change_pct?: number;
  change_percent?: number;
  as_of?: string;
  date?: string;
  price_date?: string;
  label?: string;
  source?: string;
};

function normalizeUnit(unit: string | undefined, fallback: string): string {
  if (!unit) return fallback;
  const u = unit.toLowerCase();
  if (u.includes("bushel")) return "$/bu";
  if (u.includes("ton")) return "USD $/t";
  if (u.includes("gallon") || u.includes("gal")) return "$/gal";
  if (u.includes("mmbtu")) return "$/MMBtu";
  return fallback;
}

function rowToQuote(
  code: (typeof COMMODITY_CODES)[number],
  row: GrainBriefRow,
): CommodityQuote | null {
  const meta = COMMODITY_META[code];
  const price = row.value ?? row.price;
  if (price == null || Number.isNaN(Number(price))) return null;
  return {
    code,
    name: meta.nameKey,
    category: meta.category,
    price: Number(price),
    unit: normalizeUnit(row.unit, meta.unit),
    changePct: row.change_pct ?? row.change_percent ?? null,
    asOf: row.price_date ?? row.as_of ?? row.date ?? new Date().toISOString().slice(0, 10),
    dataSource: row.source,
    label: row.label,
  };
}

function applyChangeFromPrevious(
  quotes: CommodityQuote[],
  previous: CommodityQuote[] | undefined,
): CommodityQuote[] {
  if (!previous?.length) return quotes;
  const prevMap = new Map(previous.map((q) => [q.code, q.price]));
  return quotes.map((q) => {
    if (q.changePct != null) return q;
    const prevPrice = prevMap.get(q.code);
    if (prevPrice == null || prevPrice <= 0) return q;
    const changePct = Math.round(((q.price - prevPrice) / prevPrice) * 10000) / 100;
    return { ...q, changePct };
  });
}

function buildMockData(): CommodityMarketData {
  const now = new Date().toISOString();
  return {
    source: "mock",
    updatedAt: now,
    quotes: COMMODITY_CODES.map((code) => {
      const meta = COMMODITY_META[code];
      const mock = MOCK_PRICES[code];
      return {
        code,
        name: meta.nameKey,
        category: meta.category,
        price: mock.price,
        unit: meta.unit,
        changePct: mock.changePct,
        asOf: now.slice(0, 10),
        dataSource: "mock",
      };
    }),
  };
}

function mergeWithFallback(liveQuotes: CommodityQuote[]): CommodityMarketData {
  const liveByCode = new Map(liveQuotes.map((q) => [q.code, q]));
  const mockQuotes = buildMockData().quotes;
  const quotes = COMMODITY_CODES.map(
    (code) => liveByCode.get(code) ?? mockQuotes.find((q) => q.code === code)!,
  );
  return {
    quotes,
    source: liveQuotes.length > 0 ? "grainbrief" : "mock",
    updatedAt: new Date().toISOString(),
  };
}

function parseGrainBriefRecord(record: Record<string, GrainBriefRow>): CommodityQuote[] {
  const quotes: CommodityQuote[] = [];
  for (const [code, row] of Object.entries(record)) {
    if (!COMMODITY_META[code as (typeof COMMODITY_CODES)[number]]) continue;
    const quote = rowToQuote(code as (typeof COMMODITY_CODES)[number], row);
    if (quote) quotes.push(quote);
  }
  return quotes;
}

async function fetchGrainBriefBatch(codes: string): Promise<Record<string, GrainBriefRow>> {
  const url = `https://grainbrief.com/api/prices/live?codes=${codes}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25_000);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });
    if (!response.ok) return {};
    const json = (await response.json()) as Record<string, GrainBriefRow>;
    if (!json || typeof json !== "object" || Array.isArray(json)) return {};
    return json;
  } catch {
    return {};
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchGrainBrief(): Promise<CommodityMarketData | null> {
  const batches = await Promise.all(FETCH_BATCHES.map((codes) => fetchGrainBriefBatch(codes)));
  const merged = Object.assign({}, ...batches) as Record<string, GrainBriefRow>;
  const quotes = parseGrainBriefRecord(merged);
  if (quotes.length === 0) return null;

  const previousQuotes = cache?.data.source === "grainbrief" ? cache.data.quotes : undefined;
  const withChange = applyChangeFromPrevious(quotes, previousQuotes);

  return mergeWithFallback(withChange);
}

export const getCommodityPrices = createServerFn({ method: "GET" }).handler(
  async (): Promise<CommodityMarketData> => {
    if (cache && cache.expires > Date.now()) {
      return cache.data;
    }

    const previousForMock = cache?.data.quotes;
    const live = await fetchGrainBrief();

    let result: CommodityMarketData;
    if (live) {
      result = live;
    } else if (cache?.data) {
      result = cache.data;
    } else {
      result = buildMockData();
      if (previousForMock) {
        result = {
          ...result,
          quotes: applyChangeFromPrevious(result.quotes, previousForMock),
        };
      }
    }

    cache = { data: result, expires: Date.now() + CACHE_TTL_MS };
    return result;
  },
);
