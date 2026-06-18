import type { Locale } from "@/i18n/types";
import { getFeatureDashboardI18n } from "@/i18n/feature-dashboards";

/** Locale-neutral numeric values merged with translated panel copy */
const PANEL_VALUES: Record<string, Record<string, unknown>> = {
  "national-platform": { ndvi: "0.62", risk: 72 },
  "survey-digitization": { progress: 67 },
  traceability: {},
  "water-reservoirs": { reservoirs: 42 },
  "stone-cordons": { traces: 5, km: "12.45" },
  "pest-diagnostic": { confidence: 85, reports: 342 },
  "harvest-tokenization": {},
};

export type FeatureDashboardConfig = {
  brandLabel: string;
  statusLabel: string;
  panelData: Record<string, unknown>;
};

export function getFeatureDashboard(locale: Locale, toolId: string): FeatureDashboardConfig {
  const i18n = getFeatureDashboardI18n(locale, toolId);
  const values = PANEL_VALUES[toolId] ?? {};

  return {
    brandLabel: i18n.brandLabel,
    statusLabel: i18n.statusLabel,
    panelData: { ...values, ...i18n.panel },
  };
}
