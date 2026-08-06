import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function parseStatPercent(value: string): number {
  const match = value.match(/-?\d+(?:\.\d+)?/);
  if (!match) return 70;
  const num = Math.abs(parseFloat(match[0]));
  if (value.includes("×")) return Math.min(num * 25, 100);
  if (value.includes("/")) return 100;
  return Math.min(num, 100);
}

type MetricStatRowProps = {
  label: string;
  value: string;
  className?: string;
  delay?: number;
};

export function MetricStatRow({ label, value, className, delay = 0 }: MetricStatRowProps) {
  const percent = parseStatPercent(value);

  return (
    <div className={cn("flex h-full min-w-0 flex-col gap-2", className)}>
      <p className="min-h-[2.25rem] text-[9px] uppercase tracking-widest text-neutral-500 line-clamp-2 leading-tight">
        {label}
      </p>
      <p className="mt-auto text-xl font-light leading-none text-neutral-800">{value}</p>
      <div className="h-1 w-full shrink-0 overflow-hidden rounded-full bg-neutral-200">
        <motion.div
          className="h-full rounded-full bg-neutral-800"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay }}
        />
      </div>
    </div>
  );
}
