export const CONSENT_STORAGE_KEY = "agropure-consent-v1";

export type ConsentChoice = {
  essential: true;
  analytics: boolean;
  decidedAt: string;
};

export function getConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentChoice;
    if (parsed?.essential !== true || typeof parsed.analytics !== "boolean") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function setConsent(analytics: boolean): ConsentChoice {
  const choice: ConsentChoice = {
    essential: true,
    analytics,
    decidedAt: new Date().toISOString(),
  };
  if (typeof window !== "undefined") {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(choice));
  }
  return choice;
}

export function hasConsentDecision(): boolean {
  return getConsent() !== null;
}
