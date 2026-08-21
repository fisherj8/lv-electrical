import { createMetadata } from "@/lib/seo";
import { brands } from "@/data/brands";
import { PageHero } from "@/components/layout/page-hero";
import { SectionHeader } from "@/components/layout/section-header";
import { SpecTag } from "@/components/products/spec-tag";

export const metadata = createMetadata({
  title: "Electrical Equipment Brands",
  description:
    "We supply and purchase equipment from Schneider Electric, Square D, Eaton, Siemens, ABB, GE, Allen-Bradley, and more.",
  path: "/brands",
  keywords: ["Square D equipment", "Eaton switchgear", "Siemens breakers", "ABB transformers"],
});

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brands"
        title="Manufacturers We Supply & Purchase"
        description="New and surplus electrical equipment from the industry's most trusted brands."
      />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeader
          eyebrow="Manufacturers"
          title="All Major Brands"
          description="We buy and sell equipment from leading electrical and power generation manufacturers nationwide."
        />
        <div className="mt-10 flex flex-wrap gap-2">
          {brands.map((brand) => (
            <SpecTag key={brand.slug} className="bg-card px-4 py-2 text-xs normal-case tracking-normal">
              {brand.name}
            </SpecTag>
          ))}
        </div>
      </section>
    </>
  );
}
