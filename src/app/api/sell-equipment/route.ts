import { NextResponse } from "next/server";
import { formatFormFields, sendContactEmail } from "@/lib/email";

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const equipmentList = String(formData.get("equipmentList") ?? "").trim();

  if (!name || !email || !phone || !equipmentList) {
    return NextResponse.json(
      { ok: false, message: "Please fill in all required fields." },
      { status: 400 }
    );
  }

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

  const fields: Record<string, string> = {
    Name: name,
    Company: String(formData.get("company") ?? ""),
    Email: email,
    Phone: phone,
    Location: String(formData.get("location") ?? ""),
    "Equipment Description": equipmentList,
    Photos: photos.length > 0 ? `${photos.length} file(s) attached` : "None uploaded",
  };

  const result = await sendContactEmail({
    subject: "[LV Electrical] Surplus Equipment Submission",
    html: formatFormFields(fields),
    replyTo: email,
    attachments: attachments.length > 0 ? attachments : undefined,
  });

  return NextResponse.json(result, { status: result.ok ? 200 : 500 });
}
