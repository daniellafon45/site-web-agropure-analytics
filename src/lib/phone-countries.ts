import { PHONE_COUNTRY_DATA } from "./phone-countries-data";

export type PhoneCountry = {
  iso2: string;
  name: string;
  dialCode: string;
  flag: string;
};

function isoToFlag(iso2: string): string {
  return iso2
    .toUpperCase()
    .split("")
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .join("");
}

export const PHONE_COUNTRIES: PhoneCountry[] = PHONE_COUNTRY_DATA.map((country) => ({
  ...country,
  flag: isoToFlag(country.iso2),
}));

const countryByIso = new Map(PHONE_COUNTRIES.map((country) => [country.iso2, country]));

export function getDefaultCountryIso(locale: string): string {
  switch (locale) {
    case "fr":
      return "FR";
    case "en":
      return "CA";
    case "es":
      return "ES";
    case "zh":
      return "CN";
    default:
      return "CA";
  }
}

export function getCountryByIso(iso2: string): PhoneCountry {
  return countryByIso.get(iso2) ?? countryByIso.get("CA")!;
}

export function formatPhoneForSubmit(dialCode: string, localNumber: string): string | undefined {
  const trimmed = localNumber.replace(/\s/g, "").trim();
  if (!trimmed) return undefined;
  return `+${dialCode} ${trimmed}`;
}
