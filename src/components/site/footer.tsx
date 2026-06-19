import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { useLocale } from "@/i18n/context";
import { homeHashHref } from "@/lib/home-links";
import { LINKEDIN_URL } from "@/lib/seo/site-config";
import { ThemeAwareLogo } from "@/components/site/theme-aware-logo";
import logo from "@/assets/logo-agropure.png";
import logoWhite from "@/assets/logo-agropure-white.png";

export function SiteFooter() {
  const { locale, t } = useLocale();

  return (
    <footer className="bg-background text-foreground border-t border-border dark:bg-surface-dark dark:text-[#e5e2e1] dark:border-white/10">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-semibold mb-4 text-sm tracking-wide uppercase">{t.footer.sectorsTitle}</div>
            <ul className="space-y-2 text-sm text-muted-foreground dark:text-white/75">
              {t.footer.sectors.map((sector) => (
                <li key={sector.href}>
                  <a
                    href={homeHashHref(locale, sector.href)}
                    className="hover:text-foreground dark:hover:text-white transition-colors"
                  >
                    {sector.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-4 text-sm tracking-wide uppercase">{t.footer.companyTitle}</div>
            <ul className="space-y-2 text-sm text-muted-foreground dark:text-white/75">
              <li>
                <Link to="/$locale/blog" params={{ locale }} className="hover:text-foreground dark:hover:text-white transition-colors">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link to="/$locale/confidentialite" params={{ locale }} className="hover:text-foreground dark:hover:text-white transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <ThemeAwareLogo
              color={logo}
              white={logoWhite}
              alt="AgroPure Analytics"
              width={200}
              height={48}
              className="h-10 w-auto"
            />
            <p className="text-sm text-muted-foreground dark:text-white/60 max-w-xs md:text-right">{t.footer.tagline}</p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.linkedInAria}
              className="size-10 grid place-items-center rounded-full border border-border hover:bg-muted dark:border-white/20 dark:hover:bg-white/10"
            >
              <Linkedin className="size-5" />
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border dark:border-white/10 text-xs text-muted-foreground dark:text-white/50">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
