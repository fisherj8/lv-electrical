import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { getProductCategory, productCategories } from "@/data/products";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBanner } from "@/components/layout/cta-banner";
import { Badge } from "@/components/ui/badge";
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
        <h2 className="text-2xl font-bold">Subcategories</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {category.subcategories.map((sub) => (
            <Badge key={sub} className="px-4 py-2 text-sm">
              {sub}
            </Badge>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/contact" className={cn(buttonVariants(), "bg-brand hover:bg-brand-light")}>
            Request Pricing
          </Link>
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
