export type ContactFormPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  message: string;
};

export async function submitContactViaWeb3Forms(data: ContactFormPayload): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    throw new Error(
      "Le service d'envoi n'est pas configuré. Réessayez plus tard ou contactez-nous par courriel.",
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
