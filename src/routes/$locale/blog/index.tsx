import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { SiteFooter } from "@/components/site/footer";
import { useLocale } from "@/i18n/context";
import { getTranslations } from "@/i18n/translations";
import { getSeedPosts } from "@/lib/blog/store";
import { buildPageHead, localePath } from "@/lib/seo/site-config";
import { DEFAULT_LOCALE, isLocale } from "@/i18n/types";

export const Route = createFileRoute("/$locale/blog/")({
  head: ({ params }) => {
    const locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
    const t = getTranslations(locale);
    return buildPageHead({
      title: `${t.blog.title} | AgroPure Analytics`,
      description: t.blog.subtitle,
      path: localePath(locale, "blog"),
      locale,
    });
  },
  loader: ({ params }) => {
    const locale = isLocale(params.locale) ? params.locale : DEFAULT_LOCALE;
    return { posts: getSeedPosts(locale) };
  },
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const { locale, t } = useLocale();
  const { posts } = Route.useLoaderData();

  return (
    <>
      <main className="pt-28 pb-20 px-4 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="text-3xl md:text-4xl font-display">{t.blog.title}</h1>
          <p className="mt-4 max-w-2xl text-secondary leading-relaxed">{t.blog.subtitle}</p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover-lift"
              >
                {post.coverImage ? (
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="media-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                    {post.category}
                  </span>
                  <h2 className="mt-2 text-lg font-display leading-snug line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-secondary leading-relaxed line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="size-3.5" aria-hidden />
                    <span>
                      {post.readMinutes} {t.blog.minRead}
                    </span>
                  </div>
                  <Link
                    to="/$locale/blog/$slug"
                    params={{ locale, slug: post.slug }}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80"
                  >
                    {t.blog.readMore}
                    <ArrowRight className="size-4" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
