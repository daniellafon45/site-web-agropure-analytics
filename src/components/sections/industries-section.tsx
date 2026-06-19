import { useCallback, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { useLocale } from "@/i18n/context";
import { isSectorHashId } from "@/lib/home-links";
import { cn } from "@/lib/utils";
import { siteButtonClass } from "@/lib/site-button";
import imgGouvernement from "@/assets/sectors/gouvernement.png";
import imgAgriculteur from "@/assets/sectors/agriculteur.png";
import imgCoop from "@/assets/sectors/coop.png";
import imgAssurance from "@/assets/sectors/assurance.png";

const IMAGES: Record<string, string> = {
  gouvernement: imgGouvernement,
  agriculteur: imgAgriculteur,
  cooperative: imgCoop,
  assurance: imgAssurance,
};

function isDesktopPointer() {
  return (
    typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );
}

export function IntroSection() {
  const { t } = useLocale();
  return (
    <section id="mission" className="px-4 sm:px-8 py-16 md:py-20 scroll-mt-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/5">
            <span className="text-xs font-semibold text-secondary tracking-[0.2em] uppercase">
              {t.home.intro.label}
            </span>
          </div>
          <div className="lg:w-3/5">
            <p className="text-2xl md:text-4xl font-display font-light leading-tight text-foreground tracking-tight">
              {t.home.intro.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IndustriesSection() {
  const { t } = useLocale();
  const items = t.home.industries.items;
  const [activeId, setActiveId] = useState<string | null>(null);

  const focusSectorFromHash = useCallback(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (!isSectorHashId(id)) return;

    setActiveId(id);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 520);
  }, []);

  useEffect(() => {
    focusSectorFromHash();
    window.addEventListener("hashchange", focusSectorFromHash);
    return () => window.removeEventListener("hashchange", focusSectorFromHash);
  }, [focusSectorFromHash]);

  return (
    <section id="secteurs" className="section-dark px-4 sm:px-8 py-20 scroll-mt-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-[0.2em] text-muted-foreground dark:text-white/50 uppercase">
              {t.home.industries.eyebrow}
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-display leading-tight">
              {t.home.industries.title}
            </h2>
          </div>
        </Reveal>

        <div
          className="flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-4"
          onMouseLeave={() => setActiveId(null)}
        >
          {items.map((it, i) => {
            const active = activeId === it.id;
            return (
              <article
                key={it.id}
                id={it.id}
                role="button"
                tabIndex={0}
                aria-expanded={active}
                aria-label={it.cardTitle}
                className={cn(
                  "relative isolate overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-out scroll-mt-28",
                  "min-h-[220px] aspect-[4/3] lg:aspect-square lg:min-h-0",
                  "lg:flex-1 lg:min-w-0 lg:basis-0",
                  active ? "min-h-[360px] lg:flex-[2.5]" : "",
                )}
                onMouseEnter={() => {
                  if (isDesktopPointer()) setActiveId(it.id);
                }}
                onClick={() => {
                  if (!isDesktopPointer()) setActiveId(active ? null : it.id);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveId(active ? null : it.id);
                  }
                }}
              >
                <img
                  src={IMAGES[it.id]}
                  alt={`${it.cardTitle}, AgroPure Analytics`}
                  width={800}
                  height={560}
                  loading={i === 0 ? "eager" : "lazy"}
                  className={cn(
                    "media-cover absolute inset-0 transition-all duration-500",
                    active ? "scale-105 opacity-0" : "opacity-100",
                  )}
                />

                <div
                  className={cn(
                    "absolute inset-0 flex flex-col justify-end transition-opacity duration-500",
                    active ? "opacity-0 pointer-events-none" : "opacity-100",
                  )}
                  aria-hidden={active}
                >
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/75 to-transparent" />
                  <p className="relative z-10 px-4 pb-6 text-center text-lg font-semibold text-white md:text-xl">
                    {it.cardTitle}
                  </p>
                </div>

                <div
                  className={cn(
                    "absolute inset-0 flex flex-col justify-between bg-[#2a2a2a] p-7 transition-opacity duration-500 md:p-10",
                    active ? "opacity-100" : "opacity-0 pointer-events-none",
                  )}
                  aria-hidden={!active}
                >
                  <p className="max-w-prose text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">
                    {it.desc}
                  </p>
                  <a
                    href="#contact"
                    onClick={(e) => e.stopPropagation()}
                    className={cn(siteButtonClass({ variant: "brand" }), "mt-8 self-start")}
                  >
                    {t.home.industries.learnMore}
                    <ArrowRight className="size-4" aria-hidden />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
