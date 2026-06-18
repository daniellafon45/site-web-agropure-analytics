import { Menu } from "lucide-react";
import { Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLocale } from "@/i18n/context";
import type { Locale } from "@/i18n/types";
import { Logo } from "./logo";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";
import { siteButtonClass } from "@/lib/site-button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const SCROLL_THRESHOLD = 10;

type NavLink =
  | { label: string; href: string }
  | { label: string; to: "/$locale/blog"; params: { locale: Locale } };

const linkClassName = "block py-2.5 text-base font-medium hover:text-primary transition-colors";

export function SiteNav({ embedded: _embedded = false }: { embedded?: boolean }) {
  const { locale, t } = useLocale();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);

  const pathname = router.state.location.pathname;
  const isHome = /^\/(fr|en|zh|es)\/?$/.test(pathname);

  useEffect(() => {
    if (!isHome) {
      setAtTop(false);
      return;
    }

    const onScroll = () => setAtTop(window.scrollY <= SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const links: NavLink[] = [
    { label: t.nav.sectors, href: "#secteurs" },
    { label: t.nav.features, href: "#fonctionnalites" },
    { label: t.nav.markets, href: "#marches-mondiaux" },
    { label: t.nav.delivery, href: "#deploiement" },
    { label: t.nav.cases, to: "/$locale/blog", params: { locale } },
    { label: t.nav.contact, href: "#contact" },
  ];

  const closeMenu = () => setOpen(false);
  const lightHeader = isHome && atTop;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        lightHeader ? "bg-transparent" : "bg-background border-b border-border shadow-sm"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 py-6 flex items-center justify-between gap-4">
        <Logo variant={lightHeader ? "light" : "default"} />

        <div
          className={`flex items-center gap-6 sm:gap-8 text-lg font-medium shrink-0 ${
            lightHeader ? "text-white" : "text-foreground"
          }`}
        >
          <a
            href="#contact"
            className={`hidden sm:inline transition-opacity hover:opacity-70 ${
              lightHeader ? "text-white" : "text-primary"
            }`}
          >
            {t.nav.requestDemo}
          </a>

          <LanguageSwitcher light={lightHeader} />
          <ThemeToggle light={lightHeader} />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={`inline-flex size-11 items-center justify-center transition-opacity hover:opacity-70 ${
                lightHeader ? "rounded-md bg-black/30 text-white" : "text-foreground"
              }`}
              aria-label={t.nav.openMenu}
            >
              <Menu className="size-7" strokeWidth={1.75} />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100vw-2rem,22rem)] p-6">
              <SheetTitle className="text-left text-lg font-display">{t.nav.menu}</SheetTitle>
              <nav className="mt-8 flex flex-col gap-1">
                {links.map((l) =>
                  "to" in l ? (
                    <Link
                      key={l.to}
                      to={l.to}
                      params={l.params}
                      onClick={closeMenu}
                      className={linkClassName}
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a key={l.href} href={l.href} onClick={closeMenu} className={linkClassName}>
                      {l.label}
                    </a>
                  ),
                )}
              </nav>
              <a
                href="#contact"
                onClick={closeMenu}
                className={siteButtonClass({ variant: "brand", size: "sm", className: "mt-6" })}
              >
                {t.nav.requestDemo}
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
