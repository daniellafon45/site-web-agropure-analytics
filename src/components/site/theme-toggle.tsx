import { Moon, Sun } from "lucide-react";
import { useLocale } from "@/i18n/context";
import { useTheme } from "./theme-provider";

export function ThemeToggle({ light = false }: { light?: boolean }) {
  const { resolved, toggle } = useTheme();
  const { t } = useLocale();
  const isDark = resolved === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? t.nav.themeLight : t.nav.themeDark}
      className={`inline-flex size-11 items-center justify-center rounded-full transition-colors ${
        light
          ? "text-white hover:bg-white/10"
          : "text-foreground hover:bg-foreground/5"
      }`}
    >
      {isDark ? <Sun className="size-6" /> : <Moon className="size-6" />}
    </button>
  );
}
