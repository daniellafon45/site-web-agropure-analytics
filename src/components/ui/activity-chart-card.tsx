import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

export type ActivityChartPoint = {
  day: string;
  value: number;
};

type ActivityChartCardProps = {
  title?: string;
  totalValue: string;
  subtitle?: string;
  data: ActivityChartPoint[];
  className?: string;
  /** When true, uses neutral bars suited for glass dashboard panels */
  glass?: boolean;
};

const chartVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const barVariants = {
  hidden: { scaleY: 0, opacity: 0, transformOrigin: "bottom" },
  visible: {
    scaleY: 1,
    opacity: 1,
    transformOrigin: "bottom",
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export function ActivityChartCard({
  title = "Activity",
  totalValue,
  subtitle,
  data,
  className,
  glass = false,
}: ActivityChartCardProps) {
  const maxValue = React.useMemo(
    () => data.reduce((max, item) => (item.value > max ? item.value : max), 0),
    [data],
  );

  return (
    <div
      className={cn(
        "w-full",
        glass ? "bg-transparent border-0 shadow-none" : "rounded-xl border bg-card p-5 shadow",
        className,
      )}
      aria-labelledby="activity-card-title"
    >
      <div className="mb-4">
        <p
          id="activity-card-title"
          className={cn(
            "text-[10px] uppercase tracking-widest",
            glass ? "text-neutral-500" : "text-muted-foreground",
          )}
        >
          {title}
        </p>
        <p className={cn("text-2xl font-light mt-1", glass ? "text-neutral-800" : "text-foreground")}>
          {totalValue}
        </p>
        {subtitle ? (
          <p className={cn("text-[10px] mt-1", glass ? "text-neutral-500" : "text-muted-foreground")}>
            {subtitle}
          </p>
        ) : null}
      </div>

      <motion.div
        className="flex h-28 w-full items-end justify-between gap-2"
        variants={chartVariants}
        initial="hidden"
        animate="visible"
        aria-label="Activity chart"
      >
        {data.map((item, index) => (
          <div
            key={`${item.day}-${index}`}
            className="flex h-full w-full flex-col items-center justify-end gap-2"
            role="presentation"
          >
            <motion.div
              className={cn(
                "w-full rounded-sm",
                glass ? "bg-neutral-700/80" : "bg-primary",
              )}
              style={{
                height: `${maxValue > 0 ? (item.value / maxValue) * 100 : 0}%`,
                minHeight: item.value > 0 ? "8px" : "2px",
              }}
              variants={barVariants}
              aria-label={`${item.day}: ${item.value}`}
            />
            <span
              className={cn(
                "text-[9px]",
                glass ? "text-neutral-400" : "text-muted-foreground",
              )}
            >
              {item.day}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
