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
    <div className={cn("space-y-2", className)}>
      <p className="text-[9px] uppercase tracking-widest text-neutral-500 line-clamp-2 leading-tight">{label}</p>
      <p className="text-xl font-light text-neutral-800">{value}</p>
      <div className="h-1 w-full rounded-full bg-neutral-200 overflow-hidden">
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
