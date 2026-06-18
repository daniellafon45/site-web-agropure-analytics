export type BlogCategory = string;

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: BlogCategory;
  author: string;
  publishedAt: string;
  readMinutes: number;
};

export { DEFAULT_BLOG_CATEGORIES } from "./constants";
