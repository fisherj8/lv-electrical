import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ProductCategory } from "@/data/products";
import { getProductIcon } from "@/lib/product-icons";
import { SpecTag } from "@/components/products/spec-tag";
import { cn } from "@/lib/utils";

type ProductCategoryCardProps = {
  category: ProductCategory;
  variant?: "light" | "dark";
  groupLabel?: string;
};

export function ProductCategoryCard({
  category,
  variant = "light",
  groupLabel,
}: ProductCategoryCardProps) {
  const Icon = getProductIcon(category.slug);
  const dark = variant === "dark";

  return (
    <Link href={`/products/${category.slug}`} className="group block h-full">
      <article
        className={cn(
          "flex h-full flex-col rounded-xl border p-6 transition-all duration-200 hover:-translate-y-1",
          dark
            ? "border-white/10 bg-white/[0.04] hover:border-brand-light/30 hover:bg-white/[0.06] hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
            : "border-border bg-card shadow-sm hover:border-brand/30 hover:shadow-[0_12px_40px_rgba(46,90,39,0.1)]"
        )}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div
              className={cn(
                "flex size-10 shrink-0 items-center justify-center rounded-lg",
                dark ? "bg-brand/20 text-brand-light" : "bg-brand/10 text-brand"
              )}
            >
              <Icon className="size-5" />
            </div>
            <div>
              {groupLabel ? (
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-light">{groupLabel}</p>
              ) : null}
              <h3
                className={cn(
                  "text-lg font-semibold tracking-tight transition-colors group-hover:text-brand-light",
                  dark ? "text-white" : "text-foreground group-hover:text-brand"
                )}
              >
                {category.name}
              </h3>
            </div>
          </div>
          <ArrowUpRight
            className={cn(
              "size-4 shrink-0 transition-all group-hover:-translate-y-px group-hover:translate-x-px",
              dark ? "text-white/40 group-hover:text-brand-light" : "text-muted-foreground group-hover:text-brand"
            )}
          />
        </div>
        <p className={cn("mt-4 flex-1 text-sm leading-relaxed", dark ? "text-white/60" : "text-muted-foreground")}>
          {category.description}
        </p>
        <div className={cn("mt-5 flex flex-wrap gap-1.5 border-t pt-5", dark ? "border-white/10" : "border-border/70")}>
          {category.subcategories.map((sub) => (
            <SpecTag key={sub} variant={dark ? "dark" : "light"}>
              {sub}
            </SpecTag>
          ))}
        </div>
      </article>
    </Link>
  );
}
