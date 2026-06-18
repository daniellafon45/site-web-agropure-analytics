import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { COMMODITY_IMAGES } from "@/lib/commodity-images";
import { cn } from "@/lib/utils";

export type CommodityCardProps = React.HTMLAttributes<HTMLDivElement> & {
  ticker: string;
  name: string;
  price: number;
  unit: string;
  change: number | null;
  category: "grain" | "fertilizer" | "fuel";
  productKey: string;
};

const CommodityCard = React.forwardRef<HTMLDivElement, CommodityCardProps>(
  ({ className, ticker, name, price, unit, change, productKey, ...props }, ref) => {
    const isPositive = change != null && change >= 0;
    const hasChange = change != null;

    const formattedPrice = new Intl.NumberFormat("fr-FR", {
      minimumFractionDigits: price >= 100 ? 0 : 2,
      maximumFractionDigits: price >= 100 ? 0 : 2,
    }).format(price);

    const formattedChange = hasChange ? `${Math.abs(change).toFixed(2)}%` : "—";

    return (
      <motion.div
        ref={ref}
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        className={cn(
          "flex min-h-[4.5rem] w-full items-center justify-between gap-4 p-4",
          "rounded-xl border border-border bg-card text-foreground shadow-sm",
          "dark:border-white/10 dark:bg-white/5 dark:text-white",
          "transition-shadow hover:border-brand-light/30 hover:shadow-md",
          className,
        )}
        {...props}
      >
        <div className="flex min-w-0 items-center gap-4">
          <img
            src={COMMODITY_IMAGES[productKey]}
            alt=""
            width={40}
            height={40}
            loading="lazy"
            className="size-10 shrink-0 rounded-full object-cover ring-1 ring-border dark:ring-white/10"
          />
          <div className="min-w-0">
            <p className="truncate font-bold text-lg">{ticker}</p>
            <p className="truncate text-sm text-muted-foreground dark:text-white/55">{name}</p>
          </div>
        </div>

        <div className="shrink-0 text-right">
          <p className="font-semibold text-lg tabular-nums">{formattedPrice}</p>
          <p className="text-[10px] uppercase tracking-wide text-muted-foreground dark:text-white/45">{unit}</p>
          <div className="mt-0.5 flex items-center justify-end gap-1">
            {hasChange &&
              (isPositive ? (
                <ArrowUpRight className="size-3.5 text-emerald-400" />
              ) : (
                <ArrowDownRight className="size-3.5 text-red-400" />
              ))}
            <span
              className={cn(
                "text-sm tabular-nums",
                !hasChange && "text-muted-foreground dark:text-white/40",
                hasChange && (isPositive ? "text-emerald-400" : "text-red-400"),
              )}
            >
              {formattedChange}
            </span>
          </div>
        </div>
      </motion.div>
    );
  },
);

CommodityCard.displayName = "CommodityCard";

export { CommodityCard };
