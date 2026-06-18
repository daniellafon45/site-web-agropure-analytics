import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useBlogPosts } from "@/hooks/use-blog-posts";
import { useLocale } from "@/i18n/context";
import { FEATURED_CASE_STUDY_SLUGS } from "@/lib/blog/constants";

const RELATED_BY_SLUG: Record<string, string[]> = {
  "national-crop-monitoring-platform": [
    "digital-farm-survey-mobile-data",
    "field-boundary-detection-ai-parcels",
  ],
  "real-time-pest-diagnostics-field": ["satellite-drought-monitoring-crops", "agtech-api-white-label-integration"],
  "agricultural-credit-scoring-insurers": [
    "smallholder-credit-data-africa",
    "parametric-insurance-crop-data",
  ],
};

type BlogArticleLinksProps = {
  currentPostId: string;
  currentSlug: string;
};

export function BlogArticleLinks({ currentPostId, currentSlug }: BlogArticleLinksProps) {
  const { posts } = useBlogPosts();
  const { locale, t } = useLocale();

  const relatedPosts = posts.filter((p) => p.id !== currentPostId).slice(0, 4);
  const relatedSlugs = RELATED_BY_SLUG[currentSlug];
  const seedRelated = relatedSlugs
    ?.map((slug) => posts.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  if (relatedPosts.length === 0) return null;

  return (
    <nav aria-label={t.blog.relatedAria} className="mt-12 border-t border-border pt-10">
      {seedRelated && seedRelated.length > 0 && (
        <p className="text-base text-secondary leading-relaxed">
          {t.blog.seeAlso}{" "}
          {seedRelated.map((post, index) => (
            <span key={post.id}>
              {index > 0 && (index === seedRelated.length - 1 ? ` ${t.blog.and} ` : ", ")}
              <Link
                to="/$locale/blog/$slug"
                params={{ locale, slug: post.slug }}
                className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
              >
                {post.title}
              </Link>
            </span>
          ))}
          .
        </p>
      )}

      <h2 className="mt-8 text-lg font-semibold">{t.blog.relatedTitle}</h2>
      <ul className="mt-4 space-y-3">
        {relatedPosts.map((post) => (
          <li key={post.id}>
            <Link
              to="/$locale/blog/$slug"
              params={{ locale, slug: post.slug }}
              className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-card p-4 hover:border-primary/30 transition-colors"
            >
              <div className="min-w-0">
                <span className="text-xs text-muted-foreground">{post.category}</span>
                <span className="block text-sm font-semibold group-hover:text-primary transition-colors">
                  {post.title}
                </span>
              </div>
              <ArrowRight className="size-4 shrink-0 text-muted-foreground group-hover:text-primary mt-1" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
        <Link to="/$locale/blog" params={{ locale }} className="font-medium text-primary hover:underline">
          {t.blog.allArticles}
        </Link>
        <span className="text-muted-foreground" aria-hidden>
          ·
        </span>
        <a href="/#contact" className="font-medium text-primary hover:underline">
          {t.blog.requestDemo}
        </a>
        <span className="text-muted-foreground" aria-hidden>
          ·
        </span>
        <Link to="/$locale/confidentialite" params={{ locale }} className="font-medium text-primary hover:underline">
          {t.blog.privacyPolicy}
        </Link>
      </div>
    </nav>
  );
}

export { FEATURED_CASE_STUDY_SLUGS };
