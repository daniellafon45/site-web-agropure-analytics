import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection, IndustriesSection } from "@/components/sections/industries-section";
import { IntegrationsSection } from "@/components/sections/integrations-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { DeliverySection, TrustSection } from "@/components/sections/delivery-section";
import { CaseStudiesSection } from "@/components/sections/case-studies-section";
import { CommodityMarketsSection } from "@/components/sections/commodity-markets-section";
import { ContactSection, FaqSection } from "@/components/sections/contact-section";
import { useLocale } from "@/i18n/context";
import { getTranslations } from "@/i18n/translations";
import { buildPageHead, faqJsonLd, localePath, organizationJsonLd } from "@/lib/seo/site-config";
import { HERO_VIDEO_MOBILE_SRC, HERO_VIDEO_SRC } from "@/lib/hero-media";
import { DEFAULT_LOCALE, isLocale, type Locale } from "@/i18n/types";

export const Route = createFileRoute("/$locale/")({
  head: ({ params }) => {
    const locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
    const t = getTranslations(locale);
    const page = buildPageHead({
      title: t.meta.homeTitle,
      description: t.meta.homeDescription,
      path: localePath(locale),
      locale,
    });
    return {
      ...page,
      links: [
        ...page.links,
        {
          rel: "preload",
          href: HERO_VIDEO_MOBILE_SRC,
          as: "video",
          type: "video/mp4",
          media: "(max-width: 767px)",
          fetchPriority: "high",
        },
        {
          rel: "preload",
          href: HERO_VIDEO_SRC,
          as: "video",
          type: "video/mp4",
          media: "(min-width: 768px)",
          fetchPriority: "high",
        },
      ],
    };
  },
  component: HomePage,
});

function HomePage() {
  const { locale, t } = useLocale();
  const faqLd = JSON.stringify(faqJsonLd(t.home.faq.items));
  const orgLd = JSON.stringify(organizationJsonLd(locale));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: orgLd }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqLd }} />
      <main>
        <HeroSection />
        <IndustriesSection />
        <IntegrationsSection />
        <FeaturesSection />
        <DeliverySection />
        <TrustSection />
        <CaseStudiesSection />
        <CommodityMarketsSection />
        <FaqSection />
        <IntroSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
