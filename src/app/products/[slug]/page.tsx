import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { getProductCategory, productCategories } from "@/data/products";
import { getProductIcon } from "@/lib/product-icons";
import { heroImages } from "@/lib/hero-images";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBanner } from "@/components/layout/cta-banner";
import { SpecTag } from "@/components/products/spec-tag";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = getProductCategory(slug);
  if (!category) return {};

  return createMetadata({
    title: category.name,
    description: category.description,
    path: `/products/${category.slug}`,
    keywords: category.keywords,
  });
}

export default async function ProductCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getProductCategory(slug);
  if (!category) notFound();

  const Icon = getProductIcon(category.slug);

  return (
    <>
      <PageHero
        eyebrow="Product Category"
        title={category.name}
        description={category.description}
        imageSrc={heroImages.panel}
      />
      <section className="bg-surface-dark py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-brand/20 text-brand-light">
                <Icon className="size-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-light">Available Types</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">Equipment We Source & Supply</h2>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {category.subcategories.map((sub) => (
                <SpecTag key={sub} variant="dark" className="px-3 py-1.5 text-xs">
                  {sub}
                </SpecTag>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-8">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-white text-surface-dark hover:bg-white/90")}>
                Request Pricing
              </Link>
              <Link
                href="/products"
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "border-white/30 text-white hover:bg-white/10")}
              >
                Back to Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CtaBanner
        title={`Need ${category.name}?`}
        description="Same-day quotes available. Call or submit your equipment requirements."
        primaryHref="/contact"
        primaryLabel="Get a Quote"
        highlights={["Same-day quotes", "Nationwide shipping", "Emergency sourcing"]}
      />
    </>
  );
}
