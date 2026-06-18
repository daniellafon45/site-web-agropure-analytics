import type { Locale } from "@/i18n/types";
import { contentToPlainText } from "../content";
import type { BlogPost } from "../types";
import { seedPostsEn } from "./articles-en";
import { seedPostsEs } from "./articles-es";
import { seedPostsFr } from "./articles-fr";
import { seedPostsZh } from "./articles-zh";
import { getCoverForSlug } from "./meta";
import type { SeedPostInput } from "./types";
import type { BlogPostSlug } from "../constants";

const POSTS_BY_LOCALE: Record<Locale, SeedPostInput[]> = {
  en: seedPostsEn,
  fr: seedPostsFr,
  es: seedPostsEs,
  zh: seedPostsZh,
};

function toBlogPost(post: SeedPostInput): BlogPost {
  const words = contentToPlainText(post.content).split(/\s+/).filter(Boolean).length;
  return {
    ...post,
    slug: post.slug as BlogPostSlug,
    coverImage: getCoverForSlug(post.slug as BlogPostSlug),
    readMinutes: Math.max(1, Math.ceil(words / 200)),
  };
}

export function getSeedPostsForLocale(locale: Locale): BlogPost[] {
  return POSTS_BY_LOCALE[locale].map(toBlogPost);
}

export function getSeedPostBySlug(slug: string, locale: Locale): BlogPost | undefined {
  return getSeedPostsForLocale(locale).find((p) => p.slug === slug);
}
