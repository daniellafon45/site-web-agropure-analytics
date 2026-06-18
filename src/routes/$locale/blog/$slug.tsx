import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { SiteFooter } from "@/components/site/footer";
import { BlogContent } from "@/components/blog/blog-content";
import { BlogArticleLinks } from "@/components/blog/blog-article-links";
import { useLocale } from "@/i18n/context";
import { getTranslations } from "@/i18n/translations";
import { getSeedPostBySlug } from "@/lib/blog/seed-content";
import { articleJsonLd, buildPageHead, localePath, absoluteUrl } from "@/lib/seo/site-config";
import { DEFAULT_LOCALE, isLocale } from "@/i18n/types";

export const Route = createFileRoute("/$locale/blog/$slug")({
  head: ({ params }) => {
    const locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
    const post = getSeedPostBySlug(params.slug, locale);
    if (!post) {
      const t = getTranslations(locale);
      return buildPageHead({
        title: t.blog.notFound,
        description: t.blog.notFound,
        path: localePath(locale, `blog/${params.slug}`),
        locale,
        robots: "noindex, follow",
      });
    }
    return buildPageHead({
      title: `${post.title} | AgroPure Analytics`,
      description: post.excerpt,
      path: localePath(locale, `blog/${post.slug}`),
      locale,
      type: "article",
      image: post.coverImage ? absoluteUrl(post.coverImage) : undefined,
    });
  },
  loader: ({ params }) => {
    const locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
    const post = getSeedPostBySlug(params.slug, locale);
    return { post };
  },
  component: BlogArticlePage,
});

function BlogArticlePage() {
  const { locale, t } = useLocale();
  const { post } = Route.useLoaderData();

  if (!post) {
    return (
      <>
        <main className="pt-28 pb-20 px-4 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-2xl font-display">{t.blog.notFound}</h1>
            <Link
              to="/$locale/blog"
              params={{ locale }}
              className="mt-6 inline-block text-primary font-medium"
            >
              {t.blog.backToBlog}
            </Link>
          </div>
        </main>
        <SiteFooter />
      </>
    );
  }

  const jsonLd = articleJsonLd({
    title: post.title,
    description: post.excerpt,
    path: localePath(locale, `blog/${post.slug}`),
    locale,
    datePublished: post.publishedAt,
    author: post.author,
    image: post.coverImage ? absoluteUrl(post.coverImage) : undefined,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="pt-28 pb-20 px-4 sm:px-8">
        <article className="mx-auto max-w-3xl">
          <Link
            to="/$locale/blog"
            params={{ locale }}
            className="text-sm text-primary hover:underline"
          >
            ← {t.blog.backToBlog}
          </Link>

          {post.coverImage ? (
            <div className="mt-8 aspect-[16/10] overflow-hidden rounded-2xl">
              <img src={post.coverImage} alt={post.title} className="media-cover" />
            </div>
          ) : null}

          <span className="mt-8 inline-block text-[10px] font-bold tracking-widest text-primary uppercase">
            {post.category}
          </span>
          <h1 className="mt-3 text-3xl md:text-4xl font-display leading-tight">{post.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-secondary">
            <span>{post.author}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.publishedAt}>{post.publishedAt}</time>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5" aria-hidden />
              {post.readMinutes} {t.blog.minRead}
            </span>
          </div>
          <p className="mt-6 text-lg text-secondary leading-relaxed">{post.excerpt}</p>

          <BlogContent content={post.content} />

          <BlogArticleLinks currentPostId={post.id} currentSlug={post.slug} />
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
