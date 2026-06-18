import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { LocaleProvider, useLocale } from "../i18n/context";
import { ThemeProvider } from "../components/site/theme-provider";
import { themeInitScript } from "../lib/theme";
import { DEFAULT_LOCALE, LOCALE_HTML_LANG, isLocale } from "../i18n/types";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { siteButtonClass } from "../lib/site-button";
import { SITE_NAME, buildPageHead, organizationJsonLd, localePath } from "../lib/seo/site-config";

const ORGANIZATION_JSON_LD = JSON.stringify(organizationJsonLd(DEFAULT_LOCALE));

function NotFoundComponent() {
  return (
    <LocaleProvider locale={DEFAULT_LOCALE}>
      <NotFoundInner />
    </LocaleProvider>
  );
}

function NotFoundInner() {
  const { t } = useLocale();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">{t.meta.notFoundTitle}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t.meta.notFoundBody}</p>
        <div className="mt-6">
          <Link
            to="/$locale"
            params={{ locale: DEFAULT_LOCALE }}
            className={siteButtonClass({ variant: "brand", size: "sm" })}
          >
            {t.meta.backHome}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <LocaleProvider locale={DEFAULT_LOCALE}>
      <ErrorInner error={error} reset={reset} />
    </LocaleProvider>
  );
}

function ErrorInner({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  const { t } = useLocale();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">{t.meta.errorTitle}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t.meta.errorBody}</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className={siteButtonClass({ variant: "brand", size: "sm" })}
          >
            {t.meta.retry}
          </button>
          <Link
            to="/$locale"
            params={{ locale: DEFAULT_LOCALE }}
            className={siteButtonClass({ variant: "muted", size: "sm" })}
          >
            {t.meta.backHome}
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    const page = buildPageHead({
      title: `${SITE_NAME}, Agricultural data into real-time action`,
      description:
        "National platforms, farmer apps and credit scoring for agriculture in Africa, Canada and the USA.",
      path: localePath(DEFAULT_LOCALE),
      locale: DEFAULT_LOCALE,
    });

    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        ...page.meta,
      ],
      links: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap",
        },
        { rel: "stylesheet", href: appCss },
        ...page.links,
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const localeSegment = pathname.split("/")[1] ?? "";
  const htmlLang = isLocale(localeSegment)
    ? LOCALE_HTML_LANG[localeSegment]
    : LOCALE_HTML_LANG[DEFAULT_LOCALE];

  return (
    <html lang={htmlLang} suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ORGANIZATION_JSON_LD }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
