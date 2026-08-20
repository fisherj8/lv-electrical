import { NextResponse } from "next/server";
import { formatFormFields, sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const subject = String(formData.get("subject") ?? "Website Inquiry").trim();
  const formType = String(formData.get("formType") ?? "contact").trim();

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { ok: false, message: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  const fields: Record<string, string> = {
    "Form Type": formType,
    Name: name,
    Company: String(formData.get("company") ?? ""),
    Email: email,
    Phone: phone,
    Subject: subject,
    Equipment: String(formData.get("equipment") ?? ""),
    "Preferred Call Time": String(formData.get("preferredTime") ?? ""),
    "Tax ID": String(formData.get("taxId") ?? ""),
    Message: message,
  };

  const result = await sendContactEmail({
    subject: `[LV Electrical] ${subject}`,
    html: formatFormFields(fields),
    replyTo: email,
  });

  return NextResponse.json(result, { status: result.ok ? 200 : 500 });
}
