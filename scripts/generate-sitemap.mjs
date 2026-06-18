import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const SITE_URL = "https://agropure-analytics.com";
const LOCALES = ["fr", "en", "zh", "es"];
const HREFLANG = { fr: "fr", en: "en", zh: "zh-Hans", es: "es" };

const SLUGS = [
  "national-crop-monitoring-platform",
  "real-time-pest-diagnostics-field",
  "agricultural-credit-scoring-insurers",
  "cooperative-traceability-supply-chain",
  "digital-farm-survey-mobile-data",
  "field-boundary-detection-ai-parcels",
  "smallholder-credit-data-africa",
  "satellite-drought-monitoring-crops",
  "agtech-api-white-label-integration",
  "parametric-insurance-crop-data",
];

/** Strip locale prefix: /fr/blog/x → /blog/x, /en → "" */
function neutralPath(path) {
  return path.replace(/^\/(fr|en|zh|es)(?=\/|$)/, "") || "";
}

function alternates(neutral) {
  return LOCALES.map((loc) => {
    const href = neutral ? `${SITE_URL}/${loc}${neutral}` : `${SITE_URL}/${loc}`;
    return `    <xhtml:link rel="alternate" hreflang="${HREFLANG[loc]}" href="${href}"/>`;
  }).join("\n");
}

function urlEntry(localePath, priority, changefreq = "weekly") {
  const neutral = neutralPath(localePath);
  const loc = `${SITE_URL}${localePath.startsWith("/") ? localePath : `/${localePath}`}`;
  const xDefault = neutral ? `${SITE_URL}/en${neutral}` : `${SITE_URL}/en`;
  const lastmod = new Date().toISOString().slice(0, 10);
  return `  <url>
    <loc>${loc}</loc>
${alternates(neutral)}
    <xhtml:link rel="alternate" hreflang="x-default" href="${xDefault}"/>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const paths = [
  ...LOCALES.map((l) => `/${l}`),
  ...LOCALES.map((l) => `/${l}/confidentialite`),
  ...LOCALES.map((l) => `/${l}/blog`),
  ...LOCALES.flatMap((l) => SLUGS.map((s) => `/${l}/blog/${s}`)),
];

const body = paths
  .map((p) => {
    const priority =
      p.endsWith("/blog") || p.match(/\/blog\//)
        ? p.includes("/blog/")
          ? "0.8"
          : "0.9"
        : p.includes("confidentialite")
          ? "0.5"
          : "1.0";
    return urlEntry(p, priority);
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`;

const root = dirname(fileURLToPath(import.meta.url));
writeFileSync(join(root, "../public/sitemap.xml"), xml, "utf8");
console.log(`Wrote ${paths.length} URLs to public/sitemap.xml`);
