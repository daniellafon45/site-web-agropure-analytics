import { useState } from "react";
import { Link } from "@tanstack/react-router";
import contactBackground from "@/assets/contact-formulaire.webp";
import { useLocale } from "@/i18n/context";
import { submitContactForm } from "@/lib/api/contact.functions";
import { isServiceNotConfiguredError } from "@/lib/contact-form-utils";
import { submitContactViaWeb3Forms } from "@/lib/contact-web3forms-fallback";
import { formatPhoneForSubmit, getCountryByIso, getDefaultCountryIso } from "@/lib/phone-countries";
import { Reveal } from "@/components/site/reveal";
import { PhoneInput } from "@/components/ui/phone-input";
import { siteButtonClass } from "@/lib/site-button";
import { cn } from "@/lib/utils";

const formFieldClass =
  "mt-1 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function ContactSection() {
  const { locale, t } = useLocale();
  const c = t.home.contact;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [phoneCountry, setPhoneCountry] = useState(() => getDefaultCountryIso(locale));
  const [phoneNumber, setPhoneNumber] = useState("");

  function markSubmitSuccess() {
    setPhoneNumber("");
    setPhoneCountry(getDefaultCountryIso(locale));
    setStatus("success");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    const country = getCountryByIso(phoneCountry);
    const phone = formatPhoneForSubmit(country.dialCode, phoneNumber);

    const payload = {
      firstName: String(fd.get("firstName") ?? ""),
      lastName: String(fd.get("lastName") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone,
      company: String(fd.get("company") ?? "") || undefined,
      website: String(fd.get("website") ?? "") || undefined,
      message: String(fd.get("message") ?? ""),
      consent: fd.get("consent") === "on",
      botField: String(fd.get("botField") ?? ""),
    };

    try {
      await submitContactForm({ data: payload });
      markSubmitSuccess();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Error";

      if (isServiceNotConfiguredError(message)) {
        try {
          await submitContactViaWeb3Forms({
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            phone: payload.phone,
            company: payload.company,
            website: payload.website,
            message: payload.message,
          });
          markSubmitSuccess();
          return;
        } catch (fallbackErr) {
          setStatus("error");
          setErrorMsg(fallbackErr instanceof Error ? fallbackErr.message : message);
          return;
        }
      }

      setStatus("error");
      setErrorMsg(message);
    }
  }

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden px-4 py-20 scroll-mt-28 sm:px-8"
    >
      <img
        src={contactBackground}
        alt=""
        width={1920}
        height={1080}
        loading="lazy"
        decoding="async"
        className="media-cover absolute inset-0"
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/25" aria-hidden />

      <div className="relative z-10 mx-auto grid max-w-[1200px] items-start gap-12 lg:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-white drop-shadow-md md:text-4xl">
            {c.title}
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-white/90 drop-shadow-md">{c.subtitle}</p>
          <a
            href="#contact-form"
            className={siteButtonClass({ variant: "brand", className: "mt-8" })}
          >
            {c.cta}
          </a>
        </Reveal>

        <Reveal delay={100}>
          <div
            id="contact-form"
            className="rounded-2xl border border-border bg-background p-6 text-foreground shadow-2xl md:p-8"
          >
            <h3 className="mb-6 text-lg font-semibold">{c.formTitle}</h3>
            {status === "success" ? (
              <div className="rounded-xl border border-border bg-muted p-6 text-center">
                <p className="font-semibold">{c.successTitle}</p>
                <p className="mt-2 text-sm text-muted-foreground">{c.successBody}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="botField"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                />
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs font-medium text-foreground">{c.firstName}*</label>
                    <input name="firstName" required className={formFieldClass} />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground">{c.lastName}*</label>
                    <input name="lastName" required className={formFieldClass} />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs font-medium text-foreground">{c.email}*</label>
                    <input name="email" type="email" required className={formFieldClass} />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground">{c.phone}</label>
                    <PhoneInput
                      countryIso={phoneCountry}
                      value={phoneNumber}
                      onCountryChange={setPhoneCountry}
                      onNumberChange={setPhoneNumber}
                      placeholder={c.phonePlaceholder}
                      countryLabel={c.phoneCountryLabel}
                    />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs font-medium text-foreground">{c.company}</label>
                    <input name="company" className={formFieldClass} />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground">{c.website}</label>
                    <input
                      name="website"
                      placeholder={c.websitePlaceholder}
                      className={formFieldClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground">{c.need}*</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder={c.needPlaceholder}
                    className={cn(formFieldClass, "resize-y")}
                  />
                </div>
                <label className="flex cursor-pointer items-start gap-2 text-xs text-muted-foreground">
                  <input
                    name="consent"
                    type="checkbox"
                    required
                    className="mt-0.5 accent-primary"
                  />
                  <span>
                    {c.privacyConsentBefore}{" "}
                    <Link
                      to="/$locale/confidentialite"
                      params={{ locale }}
                      className="text-primary underline"
                    >
                      {c.privacyConsentLink}
                    </Link>
                    {c.privacyConsentAfter}
                  </span>
                </label>
                {status === "error" && (
                  <p className="text-sm text-red-600 dark:text-red-400">{errorMsg}</p>
                )}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={siteButtonClass({
                    variant: "brand",
                    block: true,
                    className: "disabled:opacity-60",
                  })}
                >
                  {status === "loading" ? c.submitting : c.submit}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export { FaqSection } from "./faq-section";
