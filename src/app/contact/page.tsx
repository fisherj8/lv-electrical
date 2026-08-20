import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { createMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = createMetadata({
  title: "Contact & Quote Request",
  description: `Contact LV Electrical Supply for quotes, emergency sourcing, and equipment inquiries. Call ${site.contact.phone} or submit a quote request online.`,
  path: "/contact",
  keywords: ["electrical equipment quote", "contact LV Electrical", "electrical supply quote request"],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get a Quote"
        description="Request a quote, sell surplus equipment, or ask a question — our team responds quickly."
      />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Phone className="size-5 text-brand" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href={site.contact.phoneHref} className="text-xl font-bold hover:text-brand">
                  {site.contact.phone}
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Mail className="size-5 text-brand" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a href={`mailto:${site.contact.email}`} className="hover:text-brand">
                  {site.contact.email}
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="size-5 text-brand" />
                  Address
                </CardTitle>
              </CardHeader>
              <CardContent>{site.contact.address.full}</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="size-5 text-brand" />
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{site.contact.hours}</p>
                <p className="mt-2 text-sm text-muted-foreground">{site.contact.emergencyHours}</p>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2">
            <ContactForm
              formType="quote"
              title="Contact Us"
              description="Select equipment request or sell equipment and tell us what you need."
            />
          </div>
        </div>
      </section>
    </>
  );
}
