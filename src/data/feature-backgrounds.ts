import nationalPlatformBg from "@/assets/features/national-platform.png";
import surveyDigitizationBg from "@/assets/features/survey-digitization.png";
import traceabilityBg from "@/assets/features/traceability.png";
import waterReservoirsBg from "@/assets/features/water-reservoirs.png";
import cropPracticesBg from "@/assets/features/crop-practices.png";
import stoneCordonsBg from "@/assets/features/stone-cordons.png";
import pestDiagnosticBg from "@/assets/features/pest-diagnostic.png";
import agCalculatorBg from "@/assets/features/ag-calculator.png";
import agAssistantBg from "@/assets/features/ag-assistant.png";
import marketToolsBg from "@/assets/features/market-tools.png";
import agLogisticsBg from "@/assets/features/ag-logistics.png";
import harvestTokenizationBg from "@/assets/features/harvest-tokenization.png";
import aerialFieldsFallback from "@/assets/aerial-fields.png";

export const FEATURE_BACKGROUNDS: Record<string, string> = {
  "national-platform": nationalPlatformBg,
  "survey-digitization": surveyDigitizationBg,
  traceability: traceabilityBg,
  "water-reservoirs": waterReservoirsBg,
  "crop-practices": cropPracticesBg,
  "stone-cordons": stoneCordonsBg,
  "pest-diagnostic": pestDiagnosticBg,
  "ag-calculator": agCalculatorBg,
  "ag-assistant": agAssistantBg,
  "market-tools": marketToolsBg,
  "ag-logistics": agLogisticsBg,
  "harvest-tokenization": harvestTokenizationBg,
};

export function getFeatureBackground(toolId: string): string {
  return FEATURE_BACKGROUNDS[toolId] ?? aerialFieldsFallback;
}
