import type { Locale } from "@/i18n/types";

export const SECTOR_HASH_IDS = [
  "gouvernement",
  "agriculteur",
  "cooperative",
  "assurance",
] as const;

export type SectorHashId = (typeof SECTOR_HASH_IDS)[number];

export function homeHashHref(locale: Locale, href: string): string {
  const id = href.replace(/^#/, "");
  return `/${locale}#${id}`;
}

export function isSectorHashId(id: string): id is SectorHashId {
  return (SECTOR_HASH_IDS as readonly string[]).includes(id);
}
