import { useState } from "react";
import { ArrowRight, Code2, Palette, Globe } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { useTheme } from "@/components/site/theme-provider";
import { useLocale } from "@/i18n/context";
import { PARTNER_LOGOS } from "@/lib/partner-logos";
import { siteButtonClass } from "@/lib/site-button";
import { cn } from "@/lib/utils";

const ICONS = [Code2, Palette, Globe];

export function DeliverySection() {
  const { t } = useLocale();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="deploiement" className="section-dark px-4 sm:px-8 py-20 md:py-28 scroll-mt-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-display leading-tight max-w-2xl">
            {t.home.delivery.title}
          </h2>
          <p className="mt-4 text-white/65 max-w-2xl leading-relaxed">{t.home.delivery.subtitle}</p>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {t.home.delivery.columns.map((col, i) => {
            const Icon = ICONS[i];
            const isActive = activeIndex === i;
            return (
              <Reveal key={col.title} delay={i * 100}>
                <div
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  onClick={() => setActiveIndex(isActive ? null : i)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveIndex(isActive ? null : i);
                    }
                  }}
                  className={cn(
                    "w-full text-left pt-8 px-4 -mx-4 rounded-xl transition-all duration-200 cursor-pointer active:scale-[0.98]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-dark)]",
                    isActive ? "bg-white/8 shadow-lg pb-6" : "hover:bg-white/5",
                  )}
                >
                  <Icon className="size-6 text-brand-light mb-4" />
                  <h3 className="text-xl font-display mb-2">{col.title}</h3>
                  <p className="text-sm text-white/60 mb-4">{col.description}</p>
                  <ul className="space-y-2">
                    {col.bullets.map((b) => (
                      <li key={b} className="text-sm text-white/75 flex items-start gap-2">
                        <span className="text-brand-light mt-1">•</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div
                    className={cn(
                      "transition-all duration-300 overflow-hidden",
                      isActive ? "max-h-24 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0",
                    )}
                  >
                    <a
                      href="#contact"
                      onClick={(e) => e.stopPropagation()}
                      className={siteButtonClass({ variant: "brand", size: "sm" })}
                    >
                      {t.nav.requestDemo}
                      <ArrowRight className="size-4" aria-hidden />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TrustSection() {
  const { t } = useLocale();
  const { resolved } = useTheme();
  const isDark = resolved === "dark";

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8 mb-10 text-center">
        <p className="text-base md:text-lg font-display text-secondary tracking-tight">
          {t.home.trust.title}
        </p>
      </div>
      <ul className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-10 gap-y-8 px-4 sm:px-8 md:gap-x-14">
        {PARTNER_LOGOS.map((logo) => (
          <li key={logo.id} className="flex h-12 w-36 shrink-0 items-center justify-center sm:h-14 sm:w-40">
            <a
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${logo.name}, site officiel`}
              className="flex h-full w-full items-center justify-center opacity-70 transition-opacity duration-300 hover:opacity-100"
            >
              <img
                src={isDark ? logo.white : logo.color}
                alt={logo.name}
                width={160}
                height={56}
                loading="lazy"
                className="max-h-full max-w-full object-contain object-center"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
