import type { BlogPostSlug } from "../constants";
import imgGouvernement from "@/assets/sectors/gouvernement.png";
import imgAgriculteur from "@/assets/sectors/agriculteur.png";
import imgCoop from "@/assets/sectors/coop.png";
import imgAssurance from "@/assets/sectors/assurance.png";
import aerialFields from "@/assets/aerial-fields.png";

export type SeedPostMeta = {
  id: string;
  slug: BlogPostSlug;
  publishedAt: string;
  coverImage: string;
};

export const SEED_POST_META: Record<BlogPostSlug, Omit<SeedPostMeta, "coverImage"> & { coverKey: string }> = {
  "national-crop-monitoring-platform": {
    id: "seed-national-crop",
    slug: "national-crop-monitoring-platform",
    publishedAt: "2026-03-15",
    coverKey: "gouvernement",
  },
  "real-time-pest-diagnostics-field": {
    id: "seed-pest-diagnostics",
    slug: "real-time-pest-diagnostics-field",
    publishedAt: "2026-03-22",
    coverKey: "agriculteur",
  },
  "agricultural-credit-scoring-insurers": {
    id: "seed-credit-scoring",
    slug: "agricultural-credit-scoring-insurers",
    publishedAt: "2026-04-01",
    coverKey: "assurance",
  },
  "cooperative-traceability-supply-chain": {
    id: "seed-cooperative-trace",
    slug: "cooperative-traceability-supply-chain",
    publishedAt: "2026-04-08",
    coverKey: "coop",
  },
  "digital-farm-survey-mobile-data": {
    id: "seed-digital-survey",
    slug: "digital-farm-survey-mobile-data",
    publishedAt: "2026-04-15",
    coverKey: "gouvernement",
  },
  "field-boundary-detection-ai-parcels": {
    id: "seed-field-boundary",
    slug: "field-boundary-detection-ai-parcels",
    publishedAt: "2026-04-22",
    coverKey: "aerial",
  },
  "smallholder-credit-data-africa": {
    id: "seed-smallholder-credit",
    slug: "smallholder-credit-data-africa",
    publishedAt: "2026-05-01",
    coverKey: "coop",
  },
  "satellite-drought-monitoring-crops": {
    id: "seed-drought-monitor",
    slug: "satellite-drought-monitoring-crops",
    publishedAt: "2026-05-08",
    coverKey: "agriculteur",
  },
  "agtech-api-white-label-integration": {
    id: "seed-agtech-api",
    slug: "agtech-api-white-label-integration",
    publishedAt: "2026-05-15",
    coverKey: "aerial",
  },
  "parametric-insurance-crop-data": {
    id: "seed-parametric-insurance",
    slug: "parametric-insurance-crop-data",
    publishedAt: "2026-05-22",
    coverKey: "assurance",
  },
};

const COVERS: Record<string, string> = {
  gouvernement: imgGouvernement,
  agriculteur: imgAgriculteur,
  coop: imgCoop,
  assurance: imgAssurance,
  aerial: aerialFields,
};

export function getCoverForSlug(slug: BlogPostSlug): string {
  const meta = SEED_POST_META[slug];
  return COVERS[meta.coverKey] ?? aerialFields;
}
