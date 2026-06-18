import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { sendContactEmail } from "../contact-mail.server";

function normalizeWebsite(value: string | undefined): string | undefined {
  if (!value?.trim()) return undefined;
  const trimmed = value.trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

const optionalField = z
  .string()
  .trim()
  .transform((value) => value || undefined)
  .optional();

const contactSchema = z.object({
  lastName: z.string().trim().min(1, "Le nom est requis."),
  firstName: z.string().trim().min(1, "Le prénom est requis."),
  email: z.string().trim().email("Courriel invalide."),
  phone: optionalField,
  company: optionalField,
  website: z
    .string()
    .trim()
    .transform((value) => normalizeWebsite(value))
    .optional(),
  message: z.string().trim().min(1, "Décrivez votre besoin.").max(5000, "Message trop long."),
  consent: z.literal(true, { errorMap: () => ({ message: "Consentement requis." }) }),
  botField: z.string().optional(),
});

export const submitContactForm = createServerFn({ method: "POST" })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    if (data.botField?.trim()) {
      return { ok: true as const };
    }

    await sendContactEmail({
      lastName: data.lastName,
      firstName: data.firstName,
      email: data.email,
      phone: data.phone,
      company: data.company,
      website: data.website,
      message: data.message,
    });

    return { ok: true as const };
  });
