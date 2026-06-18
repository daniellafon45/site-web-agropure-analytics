/** Vidéo hero (servie depuis public/videos/ ou CDN via VITE_HERO_VIDEO_URL). */
export const HERO_VIDEO_SRC =
  (import.meta.env.VITE_HERO_VIDEO_URL as string | undefined) || "/videos/hero.mp4";
