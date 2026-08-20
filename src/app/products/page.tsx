import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { productCategories } from "@/data/products";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBanner } from "@/components/layout/cta-banner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = createMetadata({
  title: "Electrical Products",
  description:
    "Browse breakers, switchgear, transformers, MCC, busway, generators, UPS, chillers, and more. New and used electrical equipment with pricing.",
  path: "/products",
  keywords: ["electrical products", "used switchgear", "circuit breakers for sale"],
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Electrical Equipment Catalog"
        description="New and surplus electrical equipment from leading manufacturers. Pricing shown on inventory items—contact us for items not yet listed."
      />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => (
            <Link key={category.slug} href={`/products/${category.slug}`}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {category.subcategories.slice(0, 3).map((sub) => (
                      <Badge key={sub} variant="outline" className="text-xs">
                        {sub}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      <CtaBanner
        title="Can't Find What You Need?"
        description="Our emergency sourcing team locates hard-to-find electrical equipment fast."
        primaryHref="/contact"
        primaryLabel="Request a Quote"
      />
    </>
  );
}
