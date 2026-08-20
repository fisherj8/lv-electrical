import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { services } from "@/data/services";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBanner } from "@/components/layout/cta-banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = createMetadata({
  title: "Electrical Services",
  description:
    "Procurement, surplus purchasing, decommissioning, rigging, emergency sourcing, and asset recovery for electrical contractors and facility owners.",
  path: "/services",
  keywords: ["electrical services", "equipment decommissioning", "surplus electrical buyers"],
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Electrical Equipment Services"
        description="From procurement and emergency sourcing to complete decommissioning and asset recovery—we deliver the expertise, logistics, and manpower to get the job done right."
      />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle>{service.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">{service.shortDescription}</CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      <CtaBanner
        title="Need a Same-Day Quote?"
        description="Call or send us your equipment list for fast pricing and availability."
        primaryHref="/contact"
        primaryLabel="Get a Quote"
        secondaryHref="/sell-equipment"
        secondaryLabel="Sell Equipment"
      />
    </>
  );
}
