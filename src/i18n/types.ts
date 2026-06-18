export const LOCALES = ["fr", "en", "zh", "es"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  zh: "中文",
  es: "Español",
};

export const LOCALE_SHORT: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  zh: "中文",
  es: "ES",
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  fr: "fr",
  en: "en",
  zh: "zh-Hans",
  es: "es",
};

export const LOCALE_OG: Record<Locale, string> = {
  fr: "fr_CA",
  en: "en_US",
  zh: "zh_CN",
  es: "es_ES",
};

export const LOCALE_HREFLANG: Record<Locale, string> = {
  fr: "fr",
  en: "en",
  zh: "zh-Hans",
  es: "es",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export type CommodityMarketsCopy = {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaTitle: string;
  ctaButton: string;
  asOf: string;
  sourceLive: string;
  sourceMock: string;
  disclaimer: string;
  fpmaLink: string;
  fpmaHref: string;
  products: Record<string, string>;
  tickers: Record<string, string>;
  loading: string;
  scrollUp: string;
  scrollDown: string;
};

export type IndustryItem = {
  id: string;
  cardTitle: string;
  desc: string;
  label?: string;
};

export type FeatureTool = {
  id: string;
  label: string;
  description: string;
  stats: { value: string; label: string }[];
};

export type FeatureCategory = {
  id: string;
  label: string;
  tools: FeatureTool[];
};

export type DeliveryColumn = {
  title: string;
  description: string;
  bullets: string[];
};

export type CaseStudy = {
  tag: string;
  title: string;
  excerpt: string;
  cta: string;
  slug: string;
};


export type FaqItem = {
  id: string;
  question: string;
  /** Plain text for FAQPage JSON-LD */
  answer: string;
  /** Rich HTML for on-page display (links, internal blog) */
  answerHtml: string;
};

export type Translations = {
  meta: {
    homeTitle: string;
    homeDescription: string;
    privacyTitle: string;
    privacyDescription: string;
    notFoundTitle: string;
    notFoundBody: string;
    errorTitle: string;
    errorBody: string;
    backHome: string;
    retry: string;
  };
  nav: {
    sectors: string;
    features: string;
    delivery: string;
    cases: string;
    blog: string;
    markets: string;
    contact: string;
    requestDemo: string;
    letsTalk: string;
    demoShort: string;
    openMenu: string;
    menu: string;
    language: string;
    themeLight: string;
    themeDark: string;
  };
  footer: {
    sectorsTitle: string;
    companyTitle: string;
    privacy: string;
    linkedInAria: string;
    tagline: string;
    copyright: string;
    sectors: { label: string; href: string }[];
  };
  consent: {
    ariaLabel: string;
    message: string;
    accept: string;
    reject: string;
    learnMore: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      ctaPrimary: string;
    };
    intro: {
      label: string;
      text: string;
    };
    industries: {
      eyebrow: string;
      title: string;
      learnMore: string;
      items: IndustryItem[];
    };
    integrations: {
      title: string;
      description: string;
    };
    features: {
      title: string;
      description: string;
      learnMore: string;
      categories: FeatureCategory[];
    };
    delivery: {
      title: string;
      subtitle: string;
      columns: DeliveryColumn[];
    };
    trust: {
      title: string;
    };
    caseStudies: {
      eyebrow: string;
      title: string;
      items: CaseStudy[];
    };
    commodityMarkets: CommodityMarketsCopy;
    contact: {
      title: string;
      subtitle: string;
      cta: string;
      formTitle: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      company: string;
      website: string;
      websitePlaceholder: string;
      need: string;
      needPlaceholder: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successBody: string;
      honeypot: string;
      privacyConsentBefore: string;
      privacyConsentLink: string;
      privacyConsentAfter: string;
      errors: {
        lastName: string;
        firstName: string;
        emailRequired: string;
        emailInvalid: string;
        message: string;
        messageTooLong: string;
        consentRequired: string;
      };
    };
    faq: {
      title: string;
      subtitle: string;
      footerBefore: string;
      footerLink: string;
      footerAfter: string;
      items: FaqItem[];
    };
  };
  privacy: {
    title: string;
    updated: string;
    sections: { heading: string; body: string }[];
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    minRead: string;
    allArticles: string;
    relatedTitle: string;
    relatedAria: string;
    seeAlso: string;
    and: string;
    requestDemo: string;
    privacyPolicy: string;
    backToBlog: string;
    notFound: string;
    category: string;
  };
};
