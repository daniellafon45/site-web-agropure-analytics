import { Clock } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassDashboardShellProps = {
  brandLabel: string;
  statusLabel: string;
  toolId: string;
  className?: string;
  children: ReactNode;
};

function toolIdToHex(toolId: string): string {
  let hash = 0;
  for (let i = 0; i < toolId.length; i++) {
    hash = toolId.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hex = Math.abs(hash).toString(16).toUpperCase().padStart(8, "0").slice(0, 8);
  return `0X-${hex.slice(0, 2)}-${hex.slice(2, 4)}-${hex.slice(4, 6)}-${hex.slice(6, 8)}`;
}

export function GlassDashboardShell({
  brandLabel,
  statusLabel,
  toolId,
  className,
  children,
}: GlassDashboardShellProps) {
  return (
    <div
      className={cn(
        "glass-panel w-full max-w-md overflow-hidden rounded-[2rem] border border-black/10 bg-white/70 shadow-2xl backdrop-blur-xl transition-transform duration-500 group-hover:-translate-y-1",
        className,
      )}
    >
      <header className="flex items-center justify-between border-b border-black/10 bg-white/40 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="liquid-orb" aria-hidden />
          <div className="flex gap-1.5" aria-hidden>
            <span className="size-2 rounded-full bg-black/20" />
            <span className="size-2 rounded-full bg-black/20" />
            <span className="size-2 rounded-full bg-black/20" />
          </div>
        </div>
        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/50">
          {brandLabel}
        </span>
      </header>

      <div className="flex flex-col gap-6 p-6 sm:p-8">{children}</div>

      <footer className="flex items-center justify-between border-t border-black/10 px-6 pb-4 pt-3">
        <div className="flex items-center gap-1.5 text-[10px] text-black/50">
          <Clock className="size-3" aria-hidden />
          <span>{statusLabel}</span>
        </div>
        <span className="font-mono text-[9px] tracking-tighter text-black/60">{toolIdToHex(toolId)}</span>
      </footer>
    </div>
  );
}
