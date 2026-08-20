import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { industries } from "@/data/industries";
import { PageHero } from "@/components/layout/page-hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = createMetadata({
  title: "Industries Served",
  description:
    "Electrical equipment solutions for contractors, industrial plants, data centers, oil & gas, hospitals, utilities, and commercial buildings.",
  path: "/industries",
  keywords: ["industrial electrical supply", "data center equipment", "contractor electrical distributor"],
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industries We Serve"
        description="Tailored electrical procurement, decommissioning, and asset recovery for every sector."
      />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle>{industry.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">{industry.description}</CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
