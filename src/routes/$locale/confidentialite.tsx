import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site/footer";
import { useLocale } from "@/i18n/context";
import { getTranslations } from "@/i18n/translations";
import { buildPageHead, localePath } from "@/lib/seo/site-config";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/i18n/types";

export const Route = createFileRoute("/$locale/confidentialite")({
  head: ({ params }) => {
    const locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
    const t = getTranslations(locale);
    return buildPageHead({
      title: t.meta.privacyTitle,
      description: t.meta.privacyDescription,
      path: localePath(locale, "confidentialite"),
      locale,
    });
  },
  component: PrivacyPage,
});

function PrivacyPage() {
  const { locale, t } = useLocale();

  return (
    <>
      <main className="pt-28 pb-20 px-4 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-display">{t.privacy.title}</h1>
          <p className="mt-2 text-sm text-secondary">{t.privacy.updated}</p>
          <div className="mt-10 space-y-8">
            {t.privacy.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold">{section.heading}</h2>
                <p className="mt-2 text-secondary leading-relaxed">{section.body}</p>
              </section>
            ))}
          </div>
          <Link to="/$locale" params={{ locale }} className="mt-10 inline-block text-sm text-primary hover:underline">
            ← {t.meta.backHome}
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
