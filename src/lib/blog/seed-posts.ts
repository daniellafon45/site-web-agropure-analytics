import { getSeedPostsForLocale } from "./seed-content";

export { getSeedPostsForLocale, getSeedPostBySlug } from "./seed-content";

/** @deprecated Use getSeedPostsForLocale */
export function getSeedPosts(locale: Parameters<typeof getSeedPostsForLocale>[0]) {
  return getSeedPostsForLocale(locale);
}
