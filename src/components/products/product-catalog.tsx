import {
  getCategoriesForGroup,
  productCategories,
  productGroups,
} from "@/data/products";
import { ProductCategoryCard } from "@/components/products/product-category-card";
import { SectionHeader } from "@/components/layout/section-header";
import { DarkSection } from "@/components/layout/dark-section";

type ProductCatalogProps = {
  variant?: "grouped" | "featured" | "full";
  dark?: boolean;
};

function FeaturedGrid({ dark }: { dark: boolean }) {
  const cardVariant = dark ? "dark" : "light";

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {productCategories.slice(0, 6).map((category) => (
        <ProductCategoryCard key={category.slug} category={category} variant={cardVariant} />
      ))}
    </div>
  );
}

function FullGrid({ dark }: { dark: boolean }) {
  const cardVariant = dark ? "dark" : "light";

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {productCategories.map((category) => (
        <ProductCategoryCard key={category.slug} category={category} variant={cardVariant} />
      ))}
    </div>
  );
}

function GroupedGrid({ dark }: { dark: boolean }) {
  const cardVariant = dark ? "dark" : "light";

  return (
    <div className="space-y-14">
      {productGroups.map((group) => {
        const categories = getCategoriesForGroup(group);
        if (categories.length === 0) return null;

        return (
          <div key={group.label}>
            {!dark ? (
              <div className="mb-6 max-w-2xl border-l-2 border-brand pl-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{group.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{group.description}</p>
              </div>
            ) : null}
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {categories.map((category) => (
                <ProductCategoryCard
                  key={category.slug}
                  category={category}
                  variant={cardVariant}
                  groupLabel={dark ? group.label : undefined}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ProductCatalog({ variant = "grouped", dark = false }: ProductCatalogProps) {
  const grid =
    variant === "featured" ? (
      <FeaturedGrid dark={dark} />
    ) : variant === "full" ? (
      <FullGrid dark={dark} />
    ) : (
      <GroupedGrid dark={dark} />
    );

  if (dark) {
    return (
      <DarkSection>
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            align="center"
            dark
            eyebrow="What We Supply"
            title="Every Type of Electrical Equipment"
            description="All major brands, any age, any condition. Whether you need a single unit or full facility support, we can source it."
            className="mx-auto max-w-3xl text-center"
          />
          <div className="mt-14">{grid}</div>
        </div>
      </DarkSection>
    );
  }

  return grid;
}
