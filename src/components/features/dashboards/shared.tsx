import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function parseStatPercent(value: string): number {
  const normalized = value.toLowerCase().trim();
  const match = normalized.match(/-?\d+(?:\.\d+)?/);
  if (!match) return 70;
  const num = parseFloat(match[0]);
  const abs = Math.abs(num);

  if (normalized.includes("×") || /\d\s*x\b/.test(normalized)) {
    return Math.min(abs * 30, 100);
  }

  if (normalized.includes("%")) {
    return Math.min(abs, 100);
  }

  if (normalized.includes("/")) {
    return 100;
  }

  if (normalized.includes("min") || normalized.includes("分钟")) {
    if (normalized.includes("<")) return Math.min(100 - abs * 3, 95);
    return Math.min(abs * 6, 100);
  }

  if (/\d\s*h\b/.test(normalized) || normalized.includes("小时") || normalized.includes("heure")) {
    return Math.min(55 + abs * 0.7, 100);
  }

  if (normalized.includes("ha")) {
    return Math.min(abs * 14, 100);
  }

  if (abs >= 100) return 88;
  if (abs >= 10) return Math.min(50 + abs * 0.35, 100);

  return Math.min(abs, 100);
}

type DashboardMetricGridProps = {
  stats: { label: string; value: string }[];
  className?: string;
};

export function DashboardMetricGrid({ stats, className }: DashboardMetricGridProps) {
  return (
    <div className={cn("grid grid-cols-3 gap-3", className)}>
      {stats.map((stat, i) => {
        const percent = parseStatPercent(stat.value);
        return (
          <div key={stat.label} className="space-y-1">
            <div className="text-[9px] uppercase tracking-wider text-black/50 line-clamp-2 leading-tight">
              {stat.label}
            </div>
            <div className="text-lg font-light text-black">{stat.value}</div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-black/5">
              <motion.div
                className="h-full rounded-full bg-black/40"
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: i * 0.1 }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function PanelFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative h-44 w-full overflow-hidden rounded-xl border border-black/10 bg-black/[0.03]",
        className,
      )}
    >
      {children}
    </div>
  );
}
