import { useMemo, useState } from "react";
import { GlassFeatureDashboard } from "@/components/features/feature-tool-dashboard";
import { Reveal } from "@/components/site/reveal";
import { getFeatureBackground } from "@/data/feature-backgrounds";
import { useLocale } from "@/i18n/context";
import { siteButtonClass } from "@/lib/site-button";
import { cn } from "@/lib/utils";

export function FeaturesSection() {
  const { t } = useLocale();
  const categories = t.home.features.categories;
  const defaultToolId = categories[0]?.tools[0]?.id ?? "";
  const [activeToolId, setActiveToolId] = useState(defaultToolId);

  const activeTool = useMemo(() => {
    for (const cat of categories) {
      const tool = cat.tools.find((item) => item.id === activeToolId);
      if (tool) return tool;
    }
    return categories[0]?.tools[0];
  }, [categories, activeToolId]);

  const backgroundSrc = getFeatureBackground(activeToolId);

  return (
    <section id="fonctionnalites" className="px-4 sm:px-8 py-16 md:py-24 scroll-mt-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-display leading-tight max-w-4xl">
            {t.home.features.title}
          </h2>
          <p className="mt-4 text-secondary max-w-4xl leading-relaxed">{t.home.features.description}</p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          <div className="flex flex-col lg:min-h-full">
            {activeTool && (
              <div key={activeTool.id} className="animate-in fade-in duration-300">
                <h3 className="text-2xl md:text-3xl font-display font-medium leading-tight">
                  {activeTool.label}
                </h3>
                <p className="mt-3 text-secondary leading-relaxed max-w-md">{activeTool.description}</p>
              </div>
            )}

            {categories.map((cat) => (
              <div key={cat.id} className="mt-8">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  {cat.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.tools.map((tool) => {
                    const isActive = activeToolId === tool.id;
                    return (
                      <button
                        key={tool.id}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setActiveToolId(tool.id)}
                        className={cn(
                          "rounded-lg px-3 py-2 text-sm transition-colors",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                          isActive
                            ? "bg-foreground text-background font-medium"
                            : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                        )}
                      >
                        {tool.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

          </div>

          <a
            href="#contact"
            aria-label={t.home.features.learnMore}
            className="group relative block aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-full self-stretch min-h-[280px] rounded-3xl overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <img
              key={activeToolId}
              src={backgroundSrc}
              alt=""
              className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105 animate-in fade-in duration-500"
            />
            <div
              className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/25"
              aria-hidden
            />
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 transition-transform duration-300 group-hover:scale-[1.02]">
              {activeTool && (
                <GlassFeatureDashboard
                  key={activeTool.id}
                  toolId={activeTool.id}
                  stats={activeTool.stats}
                />
              )}
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-6 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0">
              <span className={siteButtonClass({ size: "sm" })}>{t.home.features.learnMore}</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
