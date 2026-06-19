import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { CommodityCard } from "@/components/ui/commodity-card";
import { useLocale } from "@/i18n/context";
import { COMMODITY_CODES, type CommodityMarketData, type CommodityQuote } from "@/lib/commodities";
import { siteButtonClass } from "@/lib/site-button";
import { cn } from "@/lib/utils";

const STATIC_VISIBLE_COUNT = 4;
const AUTO_SCROLL_MS = 4000;
const MANUAL_PAUSE_MS = 8000;
const CARD_STEP = "calc(4.5rem + 0.75rem)";

function formatAsOfDate(isoDate: string, locale: string): string {
  const date = new Date(isoDate.includes("T") ? isoDate : `${isoDate}T12:00:00`);
  if (Number.isNaN(date.getTime())) return isoDate;
  return new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(date);
}

function CommodityQuoteCard({
  quote,
  copy,
}: {
  quote: CommodityQuote;
  copy: ReturnType<typeof useLocale>["t"]["home"]["commodityMarkets"];
}) {
  return (
    <div className="px-2">
      <CommodityCard
        ticker={copy.tickers[quote.name] ?? quote.name.toUpperCase()}
        name={copy.products[quote.name] ?? quote.name}
        price={quote.price}
        unit={quote.unit}
        change={quote.changePct}
        category={quote.category}
        productKey={quote.name}
      />
    </div>
  );
}

const arrowButtonClass = cn(
  "flex size-9 items-center justify-center rounded-full border border-border bg-muted/50 text-foreground transition-colors",
  "hover:border-brand-light/40 hover:bg-muted dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light",
  "disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:bg-muted/50 dark:disabled:hover:border-white/15 dark:disabled:hover:bg-white/5",
);

function CommodityMarquee({
  quotes,
  copy,
}: {
  quotes: CommodityQuote[];
  copy: ReturnType<typeof useLocale>["t"]["home"]["commodityMarkets"];
}) {
  const count = quotes.length;
  const loopQuotes = useMemo(() => [...quotes, ...quotes], [quotes]);
  const [offset, setOffset] = useState(0);
  const [instant, setInstant] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const pauseUntilRef = useRef(0);

  const pauseAuto = useCallback(() => {
    pauseUntilRef.current = Date.now() + MANUAL_PAUSE_MS;
    setPaused(true);
  }, []);

  const stepDown = useCallback(() => {
    pauseAuto();
    setOffset((prev) => prev + 1);
  }, [pauseAuto]);

  const stepUp = useCallback(() => {
    pauseAuto();
    if (offset === 0) {
      setInstant(true);
      setOffset(count);
      requestAnimationFrame(() => {
        setInstant(false);
        setOffset(count - 1);
      });
      return;
    }
    setOffset((prev) => prev - 1);
  }, [count, offset, pauseAuto]);

  const handleTransitionEnd = useCallback(() => {
    if (offset >= count) {
      setInstant(true);
      setOffset(offset - count);
      requestAnimationFrame(() => setInstant(false));
    }
  }, [count, offset]);

  useEffect(() => {
    if (hovered) return;
    if (Date.now() < pauseUntilRef.current) {
      const remaining = pauseUntilRef.current - Date.now();
      const timer = window.setTimeout(() => setPaused(false), remaining);
      return () => window.clearTimeout(timer);
    }
    setPaused(false);
  }, [hovered, offset]);

  useEffect(() => {
    if (paused || hovered || count === 0) return;
    const id = window.setInterval(stepDown, AUTO_SCROLL_MS);
    return () => window.clearInterval(id);
  }, [count, hovered, paused, stepDown]);

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={stepUp}
        aria-label={copy.scrollUp}
        className={arrowButtonClass}
      >
        <ChevronUp className="size-5" aria-hidden />
      </button>
      <div
        className="commodity-marquee w-full"
        aria-label={copy.title}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={cn("commodity-marquee-track", instant && "commodity-marquee-track--instant")}
          style={{ transform: `translateY(calc(-1 * ${offset} * ${CARD_STEP}))` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {loopQuotes.map((quote, index) => (
            <CommodityQuoteCard key={`${quote.code}-${index}`} quote={quote} copy={copy} />
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={stepDown}
        aria-label={copy.scrollDown}
        className={arrowButtonClass}
      >
        <ChevronDown className="size-5" aria-hidden />
      </button>
    </div>
  );
}

function CommodityStaticList({
  quotes,
  copy,
}: {
  quotes: CommodityQuote[];
  copy: ReturnType<typeof useLocale>["t"]["home"]["commodityMarkets"];
}) {
  const maxStart = Math.max(0, quotes.length - STATIC_VISIBLE_COUNT);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (startIndex > maxStart) setStartIndex(maxStart);
  }, [startIndex, maxStart]);

  const visible = quotes.slice(startIndex, startIndex + STATIC_VISIBLE_COUNT);

  return (
    <div className="flex flex-col items-center gap-2" aria-label={copy.title}>
      <button
        type="button"
        onClick={() => setStartIndex((i) => Math.max(0, i - 1))}
        disabled={startIndex === 0}
        aria-label={copy.scrollUp}
        className={arrowButtonClass}
      >
        <ChevronUp className="size-5" aria-hidden />
      </button>
      <div className="flex w-full flex-col gap-3">
        {visible.map((quote) => (
          <CommodityQuoteCard key={quote.code} quote={quote} copy={copy} />
        ))}
      </div>
      <button
        type="button"
        onClick={() => setStartIndex((i) => Math.min(maxStart, i + 1))}
        disabled={startIndex >= maxStart}
        aria-label={copy.scrollDown}
        className={arrowButtonClass}
      >
        <ChevronDown className="size-5" aria-hidden />
      </button>
    </div>
  );
}

export function CommodityMarketsSection({ initialData }: { initialData: CommodityMarketData }) {
  const { locale, t } = useLocale();
  const copy = t.home.commodityMarkets;
  const data = initialData;
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const orderedQuotes = COMMODITY_CODES.map((code) =>
    data?.quotes.find((q) => q.code === code),
  ).filter((q): q is NonNullable<typeof q> => q != null);

  const latestAsOf =
    orderedQuotes.length > 0
      ? orderedQuotes.reduce(
          (latest, q) => (q.asOf > latest ? q.asOf : latest),
          orderedQuotes[0].asOf,
        )
      : null;

  return (
    <section id="marches-mondiaux" className="section-dark scroll-mt-28 px-4 py-20 sm:px-8">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground dark:text-white/50 uppercase">
            {copy.eyebrow}
          </span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl md:text-4xl">{copy.title}</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-secondary dark:text-white/65">
            {copy.subtitle}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-1 flex flex-col justify-center lg:order-2">
            <Reveal delay={0.1}>
              <h3 className="font-display text-2xl leading-snug md:text-3xl">{copy.ctaTitle}</h3>
              <a
                href="#contact"
                className={siteButtonClass({
                  variant: "brand",
                  className:
                    "mt-8 transition-all duration-300 hover:bg-brand-light hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5",
                })}
              >
                {copy.ctaButton}
              </a>
              <p className="mt-6 text-sm text-muted-foreground dark:text-white/45">
                {copy.disclaimer}
              </p>
              <a
                href={copy.fpmaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-brand-light hover:underline"
              >
                {copy.fpmaLink}
                <ExternalLink className="size-3.5" />
              </a>
            </Reveal>
          </div>

          <div className="order-2 flex flex-col lg:order-1">
            {orderedQuotes.length > 0 && reducedMotion && (
              <CommodityStaticList quotes={orderedQuotes} copy={copy} />
            )}
            {orderedQuotes.length > 0 && !reducedMotion && (
              <CommodityMarquee quotes={orderedQuotes} copy={copy} />
            )}
            {orderedQuotes.length === 0 && (
              <p className="py-8 text-center text-sm text-muted-foreground dark:text-white/50">
                {copy.loading}
              </p>
            )}
            {latestAsOf && (
              <p className="mt-4 text-center text-xs text-muted-foreground dark:text-white/45">
                {copy.asOf} {formatAsOfDate(latestAsOf, locale)}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
