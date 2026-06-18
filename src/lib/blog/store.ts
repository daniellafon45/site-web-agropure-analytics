import { contentToPlainText } from "./content";
import { LEGACY_STORAGE_KEY, STORAGE_KEY } from "./constants";
import { getSeedPostsForLocale } from "./seed-content";
import { DEFAULT_LOCALE, type Locale } from "@/i18n/types";
import type { BlogPost } from "./types";

import { slugify, estimateReadMinutes } from "./store-utils";

export { slugify, estimateReadMinutes };

function readCustomPosts(): BlogPost[] {
  if (typeof window === "undefined") return [];
  try {
    let raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      raw = localStorage.getItem(LEGACY_STORAGE_KEY);
      if (raw) {
        localStorage.setItem(STORAGE_KEY, raw);
        localStorage.removeItem(LEGACY_STORAGE_KEY);
      }
    }
    if (!raw) return [];
    const parsed = JSON.parse(raw) as BlogPost[];
    if (!Array.isArray(parsed)) return [];
    return parsed.map((p) => ({ ...p, coverImage: p.coverImage ?? "" }));
  } catch {
    return [];
  }
}

function writeCustomPosts(posts: BlogPost[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function getSeedPosts(locale: Locale = DEFAULT_LOCALE): BlogPost[] {
  return getSeedPostsForLocale(locale);
}

export function getAllPosts(locale: Locale = DEFAULT_LOCALE): BlogPost[] {
  const seeds = getSeedPostsForLocale(locale);
  const seedSlugs = new Set(seeds.map((p) => p.slug));
  const custom = readCustomPosts().filter((p) => !seedSlugs.has(p.slug));
  return [...seeds, ...custom].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getPostBySlug(slug: string, locale: Locale = DEFAULT_LOCALE): BlogPost | undefined {
  const seed = getSeedPostsForLocale(locale).find((p) => p.slug === slug);
  if (seed) return seed;
  return readCustomPosts().find((p) => p.slug === slug);
}

export function getPostById(id: string, locale: Locale = DEFAULT_LOCALE): BlogPost | undefined {
  return getAllPosts(locale).find((p) => p.id === id);
}

export function addCustomPost(
  input: Omit<BlogPost, "id" | "slug" | "readMinutes"> & { slug?: string },
): BlogPost {
  const slug = input.slug?.trim() || slugify(input.title);
  const words = contentToPlainText(input.content).split(/\s+/).filter(Boolean).length;
  const post: BlogPost = {
    id: `custom-${Date.now()}`,
    slug,
    title: input.title.trim(),
    excerpt: input.excerpt.trim(),
    content: input.content.trim(),
    coverImage: input.coverImage.trim(),
    category: input.category,
    author: input.author.trim() || "AgroPure Analytics",
    publishedAt: input.publishedAt,
    readMinutes: Math.max(1, Math.ceil(words / 200)),
  };

  const existing = readCustomPosts();
  const allSeedSlugs = new Set(
    (["fr", "en", "zh", "es"] as Locale[]).flatMap((l) =>
      getSeedPostsForLocale(l).map((p) => p.slug),
    ),
  );
  if (existing.some((p) => p.slug === post.slug) || allSeedSlugs.has(post.slug)) {
    throw new Error("Un article avec ce slug existe déjà.");
  }

  writeCustomPosts([post, ...existing]);
  return post;
}

export function deleteCustomPost(id: string) {
  const filtered = readCustomPosts().filter((p) => p.id !== id);
  writeCustomPosts(filtered);
}

export function updateCustomPost(
  id: string,
  input: Omit<BlogPost, "id" | "slug" | "readMinutes"> & { slug?: string },
): BlogPost {
  const existing = readCustomPosts();
  const index = existing.findIndex((p) => p.id === id);
  if (index === -1) {
    throw new Error("Article introuvable.");
  }

  const slug = input.slug?.trim() || slugify(input.title);
  const words = contentToPlainText(input.content).split(/\s+/).filter(Boolean).length;
  const post: BlogPost = {
    id,
    slug,
    title: input.title.trim(),
    excerpt: input.excerpt.trim(),
    content: input.content.trim(),
    coverImage: input.coverImage.trim(),
    category: input.category,
    author: input.author.trim() || "AgroPure Analytics",
    publishedAt: input.publishedAt,
    readMinutes: Math.max(1, Math.ceil(words / 200)),
  };

  const allSeedSlugs = new Set(
    (["fr", "en", "zh", "es"] as Locale[]).flatMap((l) =>
      getSeedPostsForLocale(l).map((p) => p.slug),
    ),
  );
  const slugTaken = existing.some((p) => p.slug === post.slug && p.id !== id);
  if (slugTaken || allSeedSlugs.has(post.slug)) {
    throw new Error("Un article avec ce slug existe déjà.");
  }

  const updated = [...existing];
  updated[index] = post;
  writeCustomPosts(updated);
  return post;
}

export function isCustomPost(id: string): boolean {
  return id.startsWith("custom-");
}

export function getCustomPosts(): BlogPost[] {
  return readCustomPosts();
}
