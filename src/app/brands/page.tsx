import { createMetadata } from "@/lib/seo";
import { brands } from "@/data/brands";
import { PageHero } from "@/components/layout/page-hero";
import { Badge } from "@/components/ui/badge";

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
        <div className="flex flex-wrap gap-3">
          {brands.map((brand) => (
            <Badge key={brand.slug} variant="secondary" className="px-4 py-2 text-base">
              {brand.name}
            </Badge>
          ))}
        </div>
      </section>
    </>
  );
}
