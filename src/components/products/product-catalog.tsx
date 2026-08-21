import {
  getCategoriesForGroup,
  productCategories,
  productGroups,
} from "@/data/products";
import { ProductCategoryCard } from "@/components/products/product-category-card";

type ProductCatalogProps = {
  variant?: "grouped" | "featured" | "full";
};

export function ProductCatalog({ variant = "grouped" }: ProductCatalogProps) {
  if (variant === "featured") {
    return (
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {productCategories.slice(0, 6).map((category) => (
          <ProductCategoryCard key={category.slug} category={category} />
        ))}
      </div>
    );
  }

  if (variant === "full") {
    return (
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {productCategories.map((category) => (
          <ProductCategoryCard key={category.slug} category={category} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-14">
      {productGroups.map((group) => {
        const categories = getCategoriesForGroup(group);
        if (categories.length === 0) return null;

        return (
          <div key={group.label}>
            <div className="mb-6 max-w-2xl border-l-2 border-brand pl-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{group.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.description}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {categories.map((category) => (
                <ProductCategoryCard key={category.slug} category={category} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
