export const FEATURED_CASE_STUDY_SLUGS = [
  "national-crop-monitoring-platform",
  "real-time-pest-diagnostics-field",
  "agricultural-credit-scoring-insurers",
] as const;

export const BLOG_POST_SLUGS = [
  ...FEATURED_CASE_STUDY_SLUGS,
  "cooperative-traceability-supply-chain",
  "digital-farm-survey-mobile-data",
  "field-boundary-detection-ai-parcels",
  "smallholder-credit-data-africa",
  "satellite-drought-monitoring-crops",
  "agtech-api-white-label-integration",
  "parametric-insurance-crop-data",
] as const;

export type BlogPostSlug = (typeof BLOG_POST_SLUGS)[number];

export const DEFAULT_BLOG_CATEGORIES = [
  "Gouvernement",
  "Agriculteurs",
  "Coopératives",
  "Assurances",
  "Données & satellite",
  "Marchés",
] as const;

export const STORAGE_KEY = "agropure-blog-custom";
export const LEGACY_STORAGE_KEY = "aquapure-blog-custom";
