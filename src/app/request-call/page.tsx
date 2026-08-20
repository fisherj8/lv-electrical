import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata = createMetadata({
  title: "Request a Call",
  description: "Request a callback from the LV Electrical Supply team for quotes, sourcing, and surplus equipment inquiries.",
  path: "/request-call",
});

export default function RequestCallPage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Call"
        title="We'll Call You"
        description="Submit your details and preferred time—we'll reach out to discuss your electrical equipment needs."
      />
      <section className="mx-auto max-w-2xl px-4 py-16">
        <ContactForm
          formType="call"
          defaultSubject="Request a Call"
          title="Request a Callback"
          description="Our team responds quickly during business hours with 24hr emergency support available."
        />
      </section>
    </>
  );
}
