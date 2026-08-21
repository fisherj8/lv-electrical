import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { heroImages } from "@/lib/hero-images";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBanner } from "@/components/layout/cta-banner";
import { ProductCatalog } from "@/components/products/product-catalog";
import { DarkSection } from "@/components/layout/dark-section";
import { darkPrimaryButton } from "@/lib/button-styles";

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
        imageSrc={heroImages.lineup}
      />
      <ProductCatalog variant="grouped" dark />
      <DarkSection className="py-0 pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-8 md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-white">Not sure if we have it?</h3>
              <p className="mt-2 max-w-xl text-sm text-white/60">
                We also source hard-to-find breakers, controls, disconnects, and complete decommissioning lots.
              </p>
            </div>
            <Link href="/contact" className={darkPrimaryButton("mt-4 md:mt-0")}>
              Request an Offer
            </Link>
          </div>
        </div>
      </DarkSection>
      <CtaBanner
        title="Can't Find What You Need?"
        description="Our emergency sourcing team locates hard-to-find electrical equipment fast."
        primaryHref="/contact"
        primaryLabel="Request a Quote"
        highlights={["Emergency sourcing", "Hard-to-find equipment", "Same-day response"]}
      />
    </>
  );
}
