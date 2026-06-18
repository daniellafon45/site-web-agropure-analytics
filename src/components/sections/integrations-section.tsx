import { Reveal } from "@/components/site/reveal";
import { useTheme } from "@/components/site/theme-provider";
import { useLocale } from "@/i18n/context";
import { INTEGRATION_LOGOS } from "@/lib/integration-logos";

const MARQUEE_SET = Array.from({ length: 3 }, () => INTEGRATION_LOGOS).flat();
const MARQUEE_ITEMS = [...MARQUEE_SET, ...MARQUEE_SET];

export function IntegrationsSection() {
  const { t } = useLocale();
  const { resolved } = useTheme();
  const isDark = resolved === "dark";

  return (
    <section id="integrations" className="bg-background py-16 md:py-20 overflow-hidden scroll-mt-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display leading-tight text-foreground">
              {t.home.integrations.title}
            </h2>
            <p className="mt-4 text-base text-secondary leading-relaxed">{t.home.integrations.description}</p>
          </div>
        </Reveal>
      </div>

      <div className="integrations-marquee relative">
        <div className="logo-track logo-track--integrations">
          {MARQUEE_ITEMS.map((logo, index) => (
            <a
              key={index}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${logo.name}, site officiel`}
              className="shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={isDark ? logo.white : logo.color}
                alt={logo.name}
                width={160}
                height={40}
                loading="lazy"
                className="h-8 md:h-10 w-auto max-w-[140px] object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
