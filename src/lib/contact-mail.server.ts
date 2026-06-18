/** Envoi via Web3Forms — le destinataire se configure sur web3forms.com (voir FORM_NOTIFICATION_EMAIL). */
import { getWeb3FormsAccessKey } from "./config.server";
import { CONTACT_EMAIL } from "./seo/site-config";

export type ContactMailPayload = {
  lastName: string;
  firstName: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  message: string;
};

export async function sendContactEmail(data: ContactMailPayload): Promise<void> {
  const accessKey = getWeb3FormsAccessKey();
  if (!accessKey) {
    throw new Error(
      `Le service d'envoi n'est pas configuré. Écrivez-nous à ${CONTACT_EMAIL} ou réessayez plus tard.`,
    );
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `Demande de contact — ${data.firstName} ${data.lastName}`,
      name: `${data.firstName} ${data.lastName}`,
      from_name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone || "Non renseigné",
      company: data.company || "Non renseigné",
      website: data.website || "Non renseigné",
      message: data.message,
    }),
  });

  let result: { success?: boolean; message?: string } = {};
  try {
    result = (await response.json()) as { success?: boolean; message?: string };
  } catch {
    throw new Error("Réponse invalide du service d'envoi. Réessayez plus tard.");
  }

  if (result.success) return;
  if (result.message) throw new Error(result.message);
  throw new Error("L'envoi a échoué. Réessayez plus tard.");
}
