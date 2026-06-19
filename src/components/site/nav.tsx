import { Menu } from "lucide-react";
import { Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useIsDesktopNav } from "@/hooks/use-media-query";
import { useLocale } from "@/i18n/context";
import type { Locale } from "@/i18n/types";
import { homeHashHref } from "@/lib/home-links";
import { Logo } from "./logo";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";
import { siteButtonClass } from "@/lib/site-button";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const SCROLL_THRESHOLD = 10;

type NavLink =
  | { label: string; href: string }
  | { label: string; to: "/$locale/blog"; params: { locale: Locale } };

const linkClassName = "block py-2.5 text-base font-medium hover:text-primary transition-colors";

export function SiteNav() {
  const { locale, t } = useLocale();
  const router = useRouter();
  const isDesktopNav = useIsDesktopNav();
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
  const lightHeader = isHome && atTop && isDesktopNav;

  const solidHeader = !lightHeader;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[80] transition-[background-color,opacity,box-shadow] duration-300 pt-[env(safe-area-inset-top,0px)]",
        lightHeader && "bg-transparent",
        solidHeader &&
          "border-b border-border bg-background shadow-sm lg:bg-background/95 lg:backdrop-blur-sm",
        open && "max-lg:pointer-events-none max-lg:opacity-0",
      )}
    >
      <div className="mx-auto flex min-w-0 max-w-[1200px] items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8 lg:py-6">
        <Logo
          variant={lightHeader ? "light" : "default"}
          className="h-8 w-auto max-w-[9.5rem] shrink-0 sm:max-w-none sm:h-10 lg:h-12"
        />

        <div
          className={`flex shrink-0 items-center gap-1.5 text-base font-medium sm:gap-3 sm:text-lg lg:gap-6 ${
            lightHeader ? "text-white" : "text-foreground"
          }`}
        >
          <a
            href={homeHashHref(locale, "#contact")}
            className={`hidden sm:inline transition-opacity hover:opacity-70 ${
              lightHeader ? "text-white" : "text-primary"
            }`}
          >
            {t.nav.requestDemo}
          </a>

          <div className={cn("flex items-center gap-1.5 sm:gap-3", open && "hidden")}>
            <LanguageSwitcher light={lightHeader} />
            <ThemeToggle light={lightHeader} />
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn(
                "inline-flex size-10 shrink-0 items-center justify-center rounded-md transition-colors sm:size-11",
                lightHeader
                  ? "bg-black/30 text-white hover:bg-black/40"
                  : "text-foreground hover:bg-muted",
                open && "hidden",
              )}
              aria-label={t.nav.openMenu}
              aria-expanded={open}
            >
              <Menu className="size-7" strokeWidth={1.75} />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100vw-2rem,22rem)] p-6 pt-14">
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
                    <a
                      key={l.href}
                      href={homeHashHref(locale, l.href)}
                      onClick={closeMenu}
                      className={linkClassName}
                    >
                      {l.label}
                    </a>
                  ),
                )}
              </nav>
              <a
                href={homeHashHref(locale, "#contact")}
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
