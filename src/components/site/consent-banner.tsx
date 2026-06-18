import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLocale } from "@/i18n/context";
import { hasConsentDecision, setConsent } from "@/lib/consent/storage";
import { siteButtonClass } from "@/lib/site-button";

export function ConsentBanner() {
  const { locale, t } = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!hasConsentDecision());
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t.consent.ariaLabel}
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-white/10 bg-surface-dark text-white shadow-[0_-8px_30px_rgba(0,0,0,0.25)]"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm leading-relaxed text-white/85 sm:max-w-2xl">
          {t.consent.message}{" "}
          <Link to="/$locale/confidentialite" params={{ locale }} className="underline underline-offset-2">
            {t.consent.learnMore}
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => { setConsent(false); setVisible(false); }}
            className={siteButtonClass({ variant: "outline", size: "sm" })}
          >
            {t.consent.reject}
          </button>
          <button
            type="button"
            onClick={() => { setConsent(true); setVisible(false); }}
            className={siteButtonClass({ size: "sm", className: "text-surface-dark" })}
          >
            {t.consent.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
