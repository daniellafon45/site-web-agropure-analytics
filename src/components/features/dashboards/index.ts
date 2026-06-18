import type { ComponentType } from "react";
import {
  CropPracticesPanel,
  NationalPlatformPanel,
  StoneCordonsPanel,
  SurveyDigitizationPanel,
  TraceabilityPanel,
  WaterReservoirsPanel,
} from "./panels-agronomic";
import {
  AgAssistantPanel,
  AgCalculatorPanel,
  AgLogisticsPanel,
  HarvestTokenizationPanel,
  MarketToolsPanel,
  PestDiagnosticPanel,
} from "./panels-market";

type PanelProps = { data?: Record<string, unknown> };

export const TOOL_DASHBOARD_PANELS: Record<string, ComponentType<PanelProps>> = {
  "national-platform": NationalPlatformPanel,
  "survey-digitization": SurveyDigitizationPanel,
  traceability: TraceabilityPanel,
  "water-reservoirs": WaterReservoirsPanel,
  "crop-practices": CropPracticesPanel,
  "stone-cordons": StoneCordonsPanel,
  "pest-diagnostic": PestDiagnosticPanel,
  "ag-calculator": AgCalculatorPanel,
  "ag-assistant": AgAssistantPanel,
  "market-tools": MarketToolsPanel,
  "ag-logistics": AgLogisticsPanel,
  "harvest-tokenization": HarvestTokenizationPanel,
};

export {
  NationalPlatformPanel,
  SurveyDigitizationPanel,
  TraceabilityPanel,
  WaterReservoirsPanel,
  CropPracticesPanel,
  StoneCordonsPanel,
  PestDiagnosticPanel,
  AgCalculatorPanel,
  AgAssistantPanel,
  MarketToolsPanel,
  AgLogisticsPanel,
  HarvestTokenizationPanel,
};
