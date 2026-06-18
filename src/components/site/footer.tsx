import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { useLocale } from "@/i18n/context";
import { LINKEDIN_URL } from "@/lib/seo/site-config";
import logoWhite from "@/assets/logo-agropure-white.png";

export function SiteFooter() {
  const { locale, t } = useLocale();

  return (
    <footer className="bg-surface-dark text-[#e5e2e1] border-t border-white/10">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-semibold mb-4 text-sm tracking-wide uppercase">{t.footer.sectorsTitle}</div>
            <ul className="space-y-2 text-sm text-white/75">
              {t.footer.sectors.map((sector) => (
                <li key={sector.href}>
                  <a href={sector.href} className="hover:text-white transition-colors">
                    {sector.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-4 text-sm tracking-wide uppercase">{t.footer.companyTitle}</div>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <Link to="/$locale/blog" params={{ locale }} className="hover:text-white transition-colors">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link to="/$locale/confidentialite" params={{ locale }} className="hover:text-white transition-colors">
                  {t.footer.privacy}
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <img src={logoWhite} alt="AgroPure Analytics" className="h-10 w-auto" />
            <p className="text-sm text-white/60 max-w-xs md:text-right">{t.footer.tagline}</p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.linkedInAria}
              className="size-10 grid place-items-center rounded-full border border-white/20 hover:bg-white/10"
            >
              <Linkedin className="size-5" />
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-white/50">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
