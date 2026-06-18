import { lazy, Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection, IndustriesSection } from "@/components/sections/industries-section";
import { IntegrationsSection } from "@/components/sections/integrations-section";
import { DeliverySection, TrustSection } from "@/components/sections/delivery-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { useLocale } from "@/i18n/context";
import { getTranslations } from "@/i18n/translations";
import { getCommodityPrices } from "@/lib/api/commodities.server";
import { buildPageHead, faqJsonLd, localePath } from "@/lib/seo/site-config";
import { DEFAULT_LOCALE, isLocale } from "@/i18n/types";

const FeaturesSection = lazy(() =>
  import("@/components/sections/features-section").then((m) => ({ default: m.FeaturesSection })),
);
const CommodityMarketsSection = lazy(() =>
  import("@/components/sections/commodity-markets-section").then((m) => ({
    default: m.CommodityMarketsSection,
  })),
);
const ContactSection = lazy(() =>
  import("@/components/sections/contact-section").then((m) => ({ default: m.ContactSection })),
);
const FaqSection = lazy(() =>
  import("@/components/sections/contact-section").then((m) => ({ default: m.FaqSection })),
);

function SectionFallback() {
  return <div className="min-h-[12rem]" aria-hidden />;
}

export const Route = createFileRoute("/$locale/")({
  head: ({ params }) => {
    const locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
    const t = getTranslations(locale);
    return buildPageHead({
      title: t.meta.homeTitle,
      description: t.meta.homeDescription,
      path: localePath(locale),
      locale,
    });
  },
  loader: async () => ({
    commodityPrices: await getCommodityPrices(),
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useLocale();
  const { commodityPrices } = Route.useLoaderData();
  const faqLd = JSON.stringify(faqJsonLd(t.home.faq.items));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqLd }} />
      <main>
        <HeroSection />
        <IndustriesSection />
        <IntegrationsSection />
        <Suspense fallback={<SectionFallback />}>
          <FeaturesSection />
        </Suspense>
        <DeliverySection />
        <TrustSection />
        <CaseStudiesSection />
        <Suspense fallback={<SectionFallback />}>
          <CommodityMarketsSection initialData={commodityPrices} />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FaqSection />
        </Suspense>
        <IntroSection />
        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
