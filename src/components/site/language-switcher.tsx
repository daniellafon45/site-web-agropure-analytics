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
        className={`text-lg font-medium outline-none cursor-pointer transition-opacity hover:opacity-70 ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {LOCALE_LABELS[locale]}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="min-w-[10rem] rounded-lg border-border bg-card text-card-foreground shadow-lg"
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
