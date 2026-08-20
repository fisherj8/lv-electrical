import { site } from "@/data/site";

type EmailPayload = {
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: Array<{
    filename: string;
    content: string;
  }>;
};

export async function sendContactEmail(payload: EmailPayload): Promise<{ ok: boolean; message: string }> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.log("[email:dev]", payload.subject, payload.html.slice(0, 200));
    return {
      ok: true,
      message: "Message received (development mode — configure RESEND_API_KEY to send email).",
    };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM ?? "LV Electrical <onboarding@resend.dev>",
      to: [site.contact.formEmail],
      subject: payload.subject,
      html: payload.html,
      reply_to: payload.replyTo,
      attachments: payload.attachments,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error("[email:error]", error);
    return { ok: false, message: "Failed to send message. Please call us directly." };
  }

  return { ok: true, message: "Thank you — we'll be in touch shortly." };
}

export function formatFormFields(fields: Record<string, string>): string {
  return Object.entries(fields)
    .filter(([, value]) => value.trim().length > 0)
    .map(([key, value]) => `<p><strong>${key}:</strong> ${value.replace(/\n/g, "<br/>")}</p>`)
    .join("");
}
