import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProductCategory } from "@/data/products";
import { SpecTag } from "@/components/products/spec-tag";

type ProductCategoryCardProps = {
  category: ProductCategory;
};

export function ProductCategoryCard({ category }: ProductCategoryCardProps) {
  return (
    <Link href={`/products/${category.slug}`} className="group block h-full">
      <article className="flex h-full flex-col border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-[0_12px_40px_rgba(46,90,39,0.1)]">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-brand">
            {category.name}
          </h3>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-brand" />
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {category.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5 border-t border-border/70 pt-5">
          {category.subcategories.map((sub) => (
            <SpecTag key={sub}>{sub}</SpecTag>
          ))}
        </div>
      </article>
    </Link>
  );
}
