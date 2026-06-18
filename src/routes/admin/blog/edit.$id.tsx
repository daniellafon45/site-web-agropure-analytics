import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { RichTextEditor } from "@/components/blog/rich-text-editor";
import { DEFAULT_BLOG_CATEGORIES } from "@/lib/blog/constants";
import { getPostById, isCustomPost, updateCustomPost } from "@/lib/blog/store";
import { DEFAULT_LOCALE } from "@/i18n/types";

export const Route = createFileRoute("/admin/blog/edit/$id")({
  component: AdminBlogEdit,
});

function AdminBlogEdit() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState<string>(DEFAULT_BLOG_CATEGORIES[0]);
  const [author, setAuthor] = useState("AgroPure Analytics");
  const [publishedAt, setPublishedAt] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const post = getPostById(id, DEFAULT_LOCALE);
    if (!post || !isCustomPost(post.id)) {
      setLoaded(true);
      return;
    }
    setTitle(post.title);
    setSlug(post.slug);
    setExcerpt(post.excerpt);
    setCategory(post.category);
    setAuthor(post.author);
    setPublishedAt(post.publishedAt);
    setContent(post.content);
    setLoaded(true);
  }, [id]);

  if (!loaded) return null;

  const post = getPostById(id, DEFAULT_LOCALE);
  if (!post || !isCustomPost(post.id)) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-8">
        <p className="text-destructive">Article personnalisé introuvable.</p>
        <Link to="/admin/blog" className="mt-4 inline-block text-primary hover:underline">
          Retour
        </Link>
      </main>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      updateCustomPost(id, {
        title,
        slug: slug || undefined,
        excerpt,
        content,
        category,
        author,
        publishedAt,
        coverImage: "",
      });
      navigate({ to: "/admin/blog" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur");
    }
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Link to="/admin/blog" className="text-sm text-primary hover:underline">
        ← Retour
      </Link>
      <h2 className="mt-4 text-2xl font-semibold">Modifier l'article</h2>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        {error ? <p className="text-sm text-destructive">{error}</p> : null}

        <label className="block text-sm">
          Titre
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2"
          />
        </label>

        <label className="block text-sm">
          Slug
          <input
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2"
          />
        </label>

        <label className="block text-sm">
          Extrait
          <textarea
            required
            rows={3}
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2"
          />
        </label>

        <label className="block text-sm">
          Catégorie
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2"
          >
            {DEFAULT_BLOG_CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm">
            Auteur
            <input
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2"
            />
          </label>
          <label className="block text-sm">
            Date
            <input
              type="date"
              value={publishedAt}
              onChange={(e) => setPublishedAt(e.target.value)}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2"
            />
          </label>
        </div>

        <div>
          <span className="text-sm font-medium">Contenu</span>
          <div className="mt-2">
            <RichTextEditor value={content} onChange={setContent} />
          </div>
        </div>

        <button
          type="submit"
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          Mettre à jour
        </button>
      </form>
    </main>
  );
}
