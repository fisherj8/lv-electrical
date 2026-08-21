import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { getProductCategory, productCategories } from "@/data/products";
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

  return (
    <>
      <PageHero
        eyebrow="Product Category"
        title={category.name}
        description={category.description}
      />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="border border-border bg-card p-8 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Available Types</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight">Equipment We Source & Supply</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {category.subcategories.map((sub) => (
              <SpecTag key={sub} className="px-3 py-1.5 text-xs">
                {sub}
              </SpecTag>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 border-t border-border/70 pt-8">
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-brand hover:bg-brand-light")}>
              Request Pricing
            </Link>
            <Link href="/products" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "border-brand/25")}>
              Back to Catalog
            </Link>
          </div>
        </div>
      </section>
      <CtaBanner
        title={`Need ${category.name}?`}
        description="Same-day quotes available. Call or submit your equipment requirements."
        primaryHref="/contact"
        primaryLabel="Get a Quote"
      />
    </>
  );
}
