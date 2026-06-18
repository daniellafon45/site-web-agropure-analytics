import { cn } from "@/lib/utils";

type SiteButtonOptions = {
  variant?: "white" | "brand" | "outline" | "muted";
  size?: "default" | "sm";
  block?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-300 ease-in-out";

const sizes = {
  default: "px-10 py-4 text-base",
  sm: "px-6 py-3 text-sm",
} as const;

const variants = {
  white: "bg-white text-black hover:bg-primary hover:text-white",
  brand: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-white/25 bg-transparent text-inherit hover:bg-white/10",
  muted: "border border-input bg-background text-foreground hover:bg-muted",
} as const;

export function siteButtonClass({
  variant = "white",
  size = "default",
  block = false,
  className,
}: SiteButtonOptions = {}) {
  return cn(base, sizes[size], variants[variant], block && "w-full", className);
}
