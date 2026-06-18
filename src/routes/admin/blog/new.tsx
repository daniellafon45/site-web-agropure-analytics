import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { RichTextEditor } from "@/components/blog/rich-text-editor";
import { DEFAULT_BLOG_CATEGORIES } from "@/lib/blog/constants";
import { addCustomPost } from "@/lib/blog/store";

export const Route = createFileRoute("/admin/blog/new")({
  component: AdminBlogNew,
});

function AdminBlogNew() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState<string>(DEFAULT_BLOG_CATEGORIES[0]);
  const [author, setAuthor] = useState("AgroPure Analytics");
  const [publishedAt, setPublishedAt] = useState(new Date().toISOString().slice(0, 10));
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const post = addCustomPost({
        title,
        slug: slug || undefined,
        excerpt,
        content,
        category,
        author,
        publishedAt,
        coverImage: "",
      });
      navigate({ to: "/admin/blog/edit/$id", params: { id: post.id } });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur");
    }
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Link to="/admin/blog" className="text-sm text-primary hover:underline">
        ← Retour
      </Link>
      <h2 className="mt-4 text-2xl font-semibold">Nouvel article</h2>

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
          Slug (optionnel)
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
            <RichTextEditor value={content} onChange={setContent} placeholder="Rédigez l'article…" />
          </div>
        </div>

        <button
          type="submit"
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          Enregistrer
        </button>
      </form>
    </main>
  );
}
