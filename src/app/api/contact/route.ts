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
  const inquiryType = String(formData.get("inquiryType") ?? "").trim();
  const inquiryLabels: Record<string, string> = {
    "equipment-request": "Equipment Request",
    "sell-equipment": "Sell Equipment",
  };

  if (!name || !email || !phone || !message) {
    return NextResponse.json(
      { ok: false, message: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  const fields: Record<string, string> = {
    "Form Type": formType,
    "Request Type": inquiryLabels[inquiryType] ?? inquiryType,
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

  const photos = formData.getAll("photos").filter((item): item is File => item instanceof File && item.size > 0);

  const attachments = await Promise.all(
    photos.slice(0, 5).map(async (file) => {
      const buffer = Buffer.from(await file.arrayBuffer());
      return {
        filename: file.name,
        content: buffer.toString("base64"),
      };
    })
  );

  if (photos.length > 0) {
    fields.Photos = `${photos.length} file(s) attached`;
  }

  const result = await sendContactEmail({
    subject: `[LV Electrical] ${subject}`,
    html: formatFormFields(fields),
    replyTo: email,
    attachments: attachments.length > 0 ? attachments : undefined,
  });

  return NextResponse.json(result, { status: result.ok ? 200 : 500 });
}
