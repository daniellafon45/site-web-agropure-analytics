const FEATURE_LOADERS: Record<string, () => Promise<{ default: string }>> = {
  "national-platform": () => import("@/assets/features/national-platform.png"),
  "survey-digitization": () => import("@/assets/features/survey-digitization.png"),
  traceability: () => import("@/assets/features/traceability.png"),
  "water-reservoirs": () => import("@/assets/features/water-reservoirs.png"),
  "crop-practices": () => import("@/assets/features/crop-practices.png"),
  "stone-cordons": () => import("@/assets/features/stone-cordons.png"),
  "pest-diagnostic": () => import("@/assets/features/pest-diagnostic.png"),
  "ag-calculator": () => import("@/assets/features/ag-calculator.png"),
  "ag-assistant": () => import("@/assets/features/ag-assistant.png"),
  "market-tools": () => import("@/assets/features/market-tools.png"),
  "ag-logistics": () => import("@/assets/features/ag-logistics.png"),
  "harvest-tokenization": () => import("@/assets/features/harvest-tokenization.png"),
};

const backgroundCache = new Map<string, string>();
let aerialFallback: string | null = null;

async function getAerialFallback(): Promise<string> {
  if (!aerialFallback) {
    const mod = await import("@/assets/aerial-fields.png");
    aerialFallback = mod.default;
  }
  return aerialFallback;
}

export async function loadFeatureBackground(toolId: string): Promise<string> {
  const cached = backgroundCache.get(toolId);
  if (cached) return cached;

  const loader = FEATURE_LOADERS[toolId];
  const src = loader ? (await loader()).default : await getAerialFallback();
  backgroundCache.set(toolId, src);
  return src;
}

/** Synchronous fallback for first paint — uses aerial fields until dynamic load completes. */
export function getFeatureBackgroundPlaceholder(): string {
  return aerialFallback ?? "";
}
