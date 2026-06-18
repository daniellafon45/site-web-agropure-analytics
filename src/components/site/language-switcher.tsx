import { useRouter } from "@tanstack/react-router";
import { LOCALE_LABELS, LOCALES, type Locale } from "@/i18n/types";
import { useLocale } from "@/i18n/context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const { locale, t } = useLocale();
  const router = useRouter();

  const handleChange = (next: Locale) => {
    const currentPath = router.state.location.pathname;
    const suffix = currentPath.replace(`/${locale}`, "") || "";
    window.location.href = `/${next}${suffix}`;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={t.nav.language}
        className={`flex min-h-11 min-w-11 items-center justify-center px-1 text-base font-medium outline-none cursor-pointer transition-opacity hover:opacity-70 sm:min-w-0 sm:px-0 sm:text-lg ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        <span className="sm:hidden">{locale.toUpperCase()}</span>
        <span className="hidden sm:inline">{LOCALE_LABELS[locale]}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={12}
        collisionPadding={{ top: 72, bottom: 16 }}
        className="z-[70] min-w-[10rem] rounded-lg border-border bg-card text-card-foreground shadow-lg"
      >
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(value) => handleChange(value as Locale)}
        >
          {LOCALES.map((code) => (
            <DropdownMenuRadioItem key={code} value={code}>
              {LOCALE_LABELS[code]}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
