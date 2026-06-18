/** Chemins statiques des médias hero (servis depuis public/videos/). */
export const HERO_POSTER_WEBP = "/videos/hero-poster.webp";
export const HERO_POSTER_JPG = "/videos/hero-poster.jpg";
export const HERO_VIDEO_SRC =
  (import.meta.env.VITE_HERO_VIDEO_URL as string | undefined) || "/videos/hero.mp4";
