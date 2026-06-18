import {
  DEFAULT_LOCALE,
  LOCALE_HREFLANG,
  LOCALE_HTML_LANG,
  LOCALE_OG,
  LOCALES,
  type Locale,
} from "@/i18n/types";
import { BLOG_POST_SLUGS } from "@/lib/blog/constants";

/** Canonical production origin — used for canonical URLs, Open Graph and JSON-LD. */
export const SITE_URL = "https://agropure-analytics.com";

export const SITE_NAME = "AgroPure Analytics";

export const CONTACT_EMAIL = "contact@agropure-analytics.com";

/** Adresse de notification Web3Forms pour les soumissions du formulaire contact. */
export const FORM_NOTIFICATION_EMAIL = "noreply@agropure-analytics.com";

export const LINKEDIN_URL = "https://www.linkedin.com/company/agropure-analytics-ca/";

export const PUBLIC_PATHS = [
  "/fr",
  "/en",
  "/zh",
  "/es",
  "/fr/confidentialite",
  "/en/confidentialite",
  "/zh/confidentialite",
  "/es/confidentialite",
  "/fr/blog",
  "/en/blog",
  "/zh/blog",
  "/es/blog",
  ...LOCALES.flatMap((loc) => BLOG_POST_SLUGS.map((slug) => `/${loc}/blog/${slug}`)),
] as const;

export function localePath(locale: Locale, subpath = ""): string {
  const normalized = subpath.startsWith("/") ? subpath : subpath ? `/${subpath}` : "";
  return `/${locale}${normalized}`;
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

export function organizationJsonLd(locale: Locale = DEFAULT_LOCALE) {
  const descriptions: Record<Locale, string> = {
    fr: "Suite logicielle qui transforme les données agricoles en actions concrètes en temps réel pour gouvernements, agriculteurs, coopératives et assureurs.",
    en: "Software suite that turns agricultural data into real-time action for governments, farmers, cooperatives and insurers.",
    es: "Suite de software que transforma los datos agrícolas en acciones concretas en tiempo real para gobiernos, agricultores, cooperativas y aseguradoras.",
    zh: "将农业数据转化为政府、农民、合作社和保险公司实时行动的软件套件。",
  };
  const appDescriptions: Record<Locale, string> = {
    fr: "Plateformes nationales, applications agriculteur, diagnostic ravageurs et scoring crédit agricole.",
    en: "National platforms, farmer apps, pest diagnostics and agricultural credit scoring.",
    es: "Plataformas nacionales, apps para agricultores, diagnóstico de plagas y scoring crediticio agrícola.",
    zh: "国家级平台、农户应用、病虫害诊断与农业信贷评分。",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: ["AgroPure", "Agropure Analytics"],
        url: SITE_URL,
        logo: absoluteUrl("/apple-touch-icon.png"),
        email: CONTACT_EMAIL,
        sameAs: [LINKEDIN_URL],
        description: descriptions[locale],
        areaServed: [
          { "@type": "Continent", name: "Africa" },
          { "@type": "Country", name: "Canada" },
          { "@type": "Country", name: "United States" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: LOCALES.map((l) => LOCALE_HTML_LANG[l]),
      },
      {
        "@type": "SoftwareApplication",
        name: SITE_NAME,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "Contact for pricing",
        },
        description: appDescriptions[locale],
      },
    ],
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

type ArticleJsonLdInput = {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
  datePublished: string;
  author: string;
  image?: string;
};

export function articleJsonLd({
  title,
  description,
  path,
  locale = DEFAULT_LOCALE,
  datePublished,
  author,
  image,
}: ArticleJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    author: { "@type": "Organization", name: author },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: absoluteUrl(path),
    inLanguage: LOCALE_HTML_LANG[locale],
    ...(image ? { image } : {}),
  };
}

type PageHeadInput = {
  title: string;
  description?: string;
  path?: string;
  locale?: Locale;
  type?: "website" | "article";
  image?: string;
  robots?: string;
};

export function buildPageHead({
  title,
  description = "",
  path = localePath(DEFAULT_LOCALE),
  locale = DEFAULT_LOCALE,
  type = "website",
  image,
  robots = "index, follow, max-image-preview:large",
}: PageHeadInput) {
  const canonical = absoluteUrl(path);
  const ogImage = image ?? absoluteUrl("/og-image.png");
  const suffix = path.replace(`/${locale}`, "") || "";
  const xDefaultPath = localePath(DEFAULT_LOCALE, suffix.replace(/^\//, ""));

  const alternates = LOCALES.flatMap((loc) => {
    const altPath = localePath(loc, suffix.replace(/^\//, ""));
    return [
      { rel: "alternate" as const, hrefLang: LOCALE_HREFLANG[loc], href: absoluteUrl(altPath) },
      { property: "og:locale:alternate", content: LOCALE_OG[loc] },
    ];
  });

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "application-name", content: SITE_NAME },
      { name: "robots", content: robots },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: canonical },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: LOCALE_OG[locale] },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
      ...alternates.filter(
        (item): item is { property: string; content: string } => "property" in item,
      ),
    ],
    links: [
      { rel: "canonical", href: canonical },
      { rel: "alternate", hrefLang: "x-default", href: absoluteUrl(xDefaultPath) },
      ...alternates.filter(
        (item): item is { rel: "alternate"; hrefLang: string; href: string } => "hrefLang" in item,
      ),
    ],
  };
}
