import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata = createMetadata({
  title: "Credit Application",
  description: "Apply for credit terms with LV Electrical Supply for electrical equipment purchases.",
  path: "/credit-application",
});

export default function CreditApplicationPage() {
  return (
    <>
      <PageHero
        eyebrow="Credit Application"
        title="Apply for Credit Terms"
        description="Submit your company information to begin the credit application process. Our team will follow up with next steps."
      />
      <section className="mx-auto max-w-2xl px-4 py-16">
        <ContactForm
          formType="credit"
          defaultSubject="Credit Application"
          title="Credit Application Request"
          description="Provide your company details and we'll send credit application paperwork."
        />
      </section>
    </>
  );
}
