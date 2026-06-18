import { Outlet, createFileRoute, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { LocaleProvider } from "@/i18n/context";
import { ConsentBanner } from "@/components/site/consent-banner";
import { isLocale, LOCALE_HTML_LANG, type Locale } from "@/i18n/types";

export const Route = createFileRoute("/$locale")({
  beforeLoad: ({ params }) => {
    if (!isLocale(params.locale)) {
      throw notFound();
    }
  },
  component: LocaleLayout,
});

function LocaleLayout() {
  const { locale } = Route.useParams() as { locale: Locale };

  useEffect(() => {
    document.documentElement.lang = LOCALE_HTML_LANG[locale];
    localStorage.setItem("agropure-locale", locale);
  }, [locale]);

  return (
    <LocaleProvider locale={locale}>
      <Outlet />
      <ConsentBanner />
    </LocaleProvider>
  );
}
