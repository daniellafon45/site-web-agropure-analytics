import { useLocale } from "@/i18n/context";
import { DashboardMetricGrid } from "@/components/features/dashboards/shared";
import { TOOL_DASHBOARD_PANELS } from "@/components/features/dashboards";
import { GlassDashboardShell } from "@/components/features/glass-dashboard-shell";
import { getFeatureDashboard } from "@/data/feature-dashboards";
import type { FeatureTool } from "@/i18n/types";
import { cn } from "@/lib/utils";

type GlassFeatureDashboardProps = {
  toolId: string;
  stats: FeatureTool["stats"];
  className?: string;
};

export function GlassFeatureDashboard({ toolId, stats, className }: GlassFeatureDashboardProps) {
  const { locale } = useLocale();
  const config = getFeatureDashboard(locale, toolId);
  const Panel = TOOL_DASHBOARD_PANELS[toolId];

  return (
    <GlassDashboardShell
      brandLabel={config.brandLabel}
      statusLabel={config.statusLabel}
      toolId={toolId}
      className={cn(className)}
    >
      <DashboardMetricGrid stats={stats} />
      {Panel ? <Panel data={config.panelData} /> : null}
    </GlassDashboardShell>
  );
}

export { GlassFeatureDashboard as FeatureToolDashboard };
