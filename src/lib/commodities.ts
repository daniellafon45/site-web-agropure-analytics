export type CommodityCategory = "grain" | "fertilizer" | "fuel";

export type CommodityQuote = {
  code: string;
  name: string;
  category: CommodityCategory;
  price: number;
  unit: string;
  changePct: number | null;
  asOf: string;
  dataSource?: string;
  label?: string;
};

export type CommodityMarketData = {
  quotes: CommodityQuote[];
  source: "grainbrief" | "mock";
  updatedAt: string;
};

export const COMMODITY_CODES = [
  "GRAIN_WHEAT",
  "GRAIN_CORN",
  "GRAIN_SOY",
  "GRAIN_SORGHUM",
  "FERT_UREA",
  "FERT_DAP",
  "FERT_POTASH",
  "FERT_NH3",
  "FUEL_DIESEL",
  "NAT_GAS",
] as const;
