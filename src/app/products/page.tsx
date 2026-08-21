import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeader } from "@/components/layout/section-header";
import { CtaBanner } from "@/components/layout/cta-banner";
import { ProductCatalog } from "@/components/products/product-catalog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
        description="New and surplus electrical equipment from leading manufacturers. Contact us for pricing and availability on any category below."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <SectionHeader
          eyebrow="What We Supply"
          title="Every Type of Power Equipment"
          description="All major brands, any age, any condition. Whether you need a single unit or full facility support, we can source it."
        />
        <div className="mt-12">
          <ProductCatalog variant="grouped" />
        </div>
        <div className="mt-12 border border-border bg-muted/30 p-8 md:flex md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">Not sure if we have it?</h3>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              We also source hard-to-find breakers, controls, disconnects, and complete decommissioning lots.
            </p>
          </div>
          <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "mt-4 bg-brand hover:bg-brand-light md:mt-0")}>
            Request an Offer
          </Link>
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
