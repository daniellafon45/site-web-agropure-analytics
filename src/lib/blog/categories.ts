import { DEFAULT_BLOG_CATEGORIES } from "./types";

const STORAGE_KEY = "aquapure-blog-categories";

function readCustomCategories(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as string[];
    return Array.isArray(parsed) ? parsed.filter((c) => typeof c === "string") : [];
  } catch {
    return [];
  }
}

function writeCustomCategories(categories: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(categories));
}

export function getAllCategories(): string[] {
  const merged = [...DEFAULT_BLOG_CATEGORIES, ...readCustomCategories()];
  return [...new Set(merged)].sort((a, b) => a.localeCompare(b, "fr"));
}

export function addCategory(name: string): string {
  const trimmed = name.trim();
  if (!trimmed) {
    throw new Error("Le nom de la catégorie est requis.");
  }
  if (trimmed.length > 48) {
    throw new Error("La catégorie ne peut pas dépasser 48 caractères.");
  }

  const exists = getAllCategories().some((c) => c.toLowerCase() === trimmed.toLowerCase());
  if (exists) {
    throw new Error("Cette catégorie existe déjà.");
  }

  const custom = readCustomCategories();
  writeCustomCategories([...custom, trimmed]);
  return trimmed;
}

export function deleteCustomCategory(name: string) {
  const custom = readCustomCategories().filter(
    (c) => c.toLowerCase() !== name.trim().toLowerCase(),
  );
  writeCustomCategories(custom);
}

export function isDefaultCategory(name: string): boolean {
  return DEFAULT_BLOG_CATEGORIES.some((c) => c.toLowerCase() === name.toLowerCase());
}
