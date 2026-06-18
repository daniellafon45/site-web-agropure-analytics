import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { getCustomPosts, getSeedPosts, deleteCustomPost, isCustomPost } from "@/lib/blog/store";
import type { BlogPost } from "@/lib/blog/types";
import { DEFAULT_LOCALE } from "@/i18n/types";

export const Route = createFileRoute("/admin/blog/")({
  component: AdminBlogIndex,
});

function AdminBlogIndex() {
  const [customPosts, setCustomPosts] = useState<BlogPost[]>([]);
  const seedPosts = getSeedPosts(DEFAULT_LOCALE);

  useEffect(() => {
    setCustomPosts(getCustomPosts());
  }, []);

  const handleDelete = (id: string) => {
    if (!confirm("Supprimer cet article local ?")) return;
    deleteCustomPost(id);
    setCustomPosts(getCustomPosts());
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="rounded-lg border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-900 dark:text-amber-100">
        Les articles publiés ici sont stockés localement (navigateur) et ne sont pas indexés. Les 10
        études de cas SEO sont intégrées au code source.
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold">Articles personnalisés</h2>
        <Link
          to="/admin/blog/new"
          className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          Nouvel article
        </Link>
      </div>

      {customPosts.length === 0 ? (
        <p className="mt-6 text-sm text-muted-foreground">Aucun article personnalisé pour le moment.</p>
      ) : (
        <ul className="mt-6 divide-y divide-border rounded-xl border border-border">
          {customPosts.map((post) => (
            <li key={post.id} className="flex flex-wrap items-center justify-between gap-3 px-4 py-4">
              <div>
                <p className="font-medium">{post.title}</p>
                <p className="text-xs text-muted-foreground">{post.slug} · {post.publishedAt}</p>
              </div>
              <div className="flex gap-2">
                <Link
                  to="/admin/blog/edit/$id"
                  params={{ id: post.id }}
                  className="text-sm text-primary hover:underline"
                >
                  Modifier
                </Link>
                <button
                  type="button"
                  onClick={() => handleDelete(post.id)}
                  className="text-sm text-destructive hover:underline"
                >
                  Supprimer
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <h2 className="mt-12 text-xl font-semibold">Articles SEO (lecture seule)</h2>
      <ul className="mt-4 divide-y divide-border rounded-xl border border-border">
        {seedPosts.map((post) => (
          <li key={post.id} className="px-4 py-4">
            <p className="font-medium">{post.title}</p>
            <p className="text-xs text-muted-foreground">
              {post.slug} · {post.category} · {isCustomPost(post.id) ? "custom" : "seed"}
            </p>
            <Link
              to="/$locale/blog/$slug"
              params={{ locale: DEFAULT_LOCALE, slug: post.slug }}
              className="mt-1 inline-block text-sm text-primary hover:underline"
              target="_blank"
            >
              Voir sur le site →
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
