import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { useLocale } from "@/i18n/context";
import { siteButtonClass } from "@/lib/site-button";
import { getCoverForSlug } from "@/lib/blog/seed-content/meta";
import type { BlogPostSlug } from "@/lib/blog/constants";
import aerialFields from "@/assets/aerial-fields.png";

const CASE_COVER: Record<string, string> = {
  "national-crop-monitoring-platform": getCoverForSlug("national-crop-monitoring-platform"),
  "real-time-pest-diagnostics-field": getCoverForSlug("real-time-pest-diagnostics-field"),
  "agricultural-credit-scoring-insurers": getCoverForSlug("agricultural-credit-scoring-insurers"),
};

export function CaseStudiesSection() {
  const { locale, t } = useLocale();

  return (
    <section id="etudes-de-cas" className="section-dark px-4 sm:px-8 py-20 scroll-mt-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground dark:text-white/50 uppercase">
            {t.home.caseStudies.eyebrow}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-display">{t.home.caseStudies.title}</h2>
        </Reveal>
        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
          {t.home.caseStudies.items.map((item, i) => {
            const cover = CASE_COVER[item.slug] ?? aerialFields;
            return (
              <Reveal key={item.slug} delay={i * 80} className="flex h-full flex-col">
                <article className="flex h-full min-h-0 flex-col isolate rounded-2xl overflow-hidden bg-card border border-border dark:bg-white/5 dark:border-white/10 hover-lift">
                  <div className="aspect-[16/10] shrink-0 overflow-hidden">
                    <img
                      src={cover}
                      alt={item.title}
                      className="media-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex min-h-0 flex-1 flex-col p-6">
                    <span className="text-[10px] font-bold tracking-widest text-brand-light uppercase">
                      {item.tag}
                    </span>
                    <h3 className="mt-2 min-h-[2.75rem] text-lg font-display leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="mt-2 min-h-[4.25rem] flex-1 text-sm text-secondary dark:text-white/65 leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                    <div className="mt-auto pt-6">
                      <Link
                        to="/$locale/blog/$slug"
                        params={{ locale, slug: item.slug as BlogPostSlug }}
                        className={siteButtonClass({ size: "sm" })}
                      >
                        {item.cta} <ArrowRight className="size-4" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
