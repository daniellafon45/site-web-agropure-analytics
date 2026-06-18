import { useState } from "react";
import { Reveal } from "@/components/site/reveal";
import { useLocale } from "@/i18n/context";
import { HERO_POSTER_JPG, HERO_POSTER_WEBP, HERO_VIDEO_SRC } from "@/lib/hero-media";
import { siteButtonClass } from "@/lib/site-button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { t } = useLocale();
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <section className="bg-background p-3 sm:p-4 min-h-svh">
      <div className="relative isolate flex min-h-[calc(100svh-1.5rem)] flex-col overflow-hidden rounded-[20px] bg-black sm:rounded-[24px]">
        <picture
          aria-hidden
          className={cn(
            "media-cover absolute inset-0 z-0 transition-opacity duration-700 ease-out",
            videoPlaying && "pointer-events-none opacity-0",
          )}
        >
          <source srcSet={HERO_POSTER_WEBP} type="image/webp" />
          <img
            src={HERO_POSTER_JPG}
            alt=""
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="media-cover size-full"
          />
        </picture>

        <video
          className="media-cover absolute inset-0 z-0 motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlaying={() => setVideoPlaying(true)}
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 sm:px-8 pb-16 pt-24 text-center">
          <div className="max-w-4xl">
            <Reveal>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-sans font-medium leading-tight text-white tracking-tight">
                {t.home.hero.title}
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-lg md:text-xl lg:text-2xl text-white/85 max-w-2xl mx-auto leading-relaxed font-light">
                {t.home.hero.subtitle}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 flex justify-center">
                <a
                  href="#contact"
                  className={siteButtonClass({
                    variant: "brand",
                    className: "hover:bg-white hover:text-primary",
                  })}
                >
                  {t.home.hero.ctaPrimary}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
