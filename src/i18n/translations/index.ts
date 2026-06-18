import type { Locale } from "../types";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { zh } from "./zh";

const translations = { fr, en, zh, es } as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
