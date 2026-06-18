import { Reveal } from "@/components/site/reveal";
import { useLocale } from "@/i18n/context";
import { HERO_VIDEO_MOBILE_SRC, HERO_VIDEO_SRC } from "@/lib/hero-media";
import { siteButtonClass } from "@/lib/site-button";

export function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="bg-background p-3 sm:p-4 min-h-svh">
      <div className="relative isolate flex min-h-[calc(100svh-1.5rem)] flex-col overflow-hidden rounded-[20px] bg-[#1a2e1f] sm:rounded-[24px]">
        <video
          className="media-cover absolute inset-0 motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={HERO_VIDEO_MOBILE_SRC} type="video/mp4" media="(max-width: 767px)" />
          <source src={HERO_VIDEO_SRC} type="video/mp4" media="(min-width: 768px)" />
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
