import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { sampleInventory } from "@/data/products";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBanner } from "@/components/layout/cta-banner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = { searchParams: Promise<{ q?: string }> };

export const metadata = createMetadata({
  title: "Inventory Search",
  description:
    "Search LV Electrical Supply inventory for breakers, switchgear, transformers, and more. Pricing displayed—contact us to purchase.",
  path: "/inventory",
  keywords: ["electrical inventory", "used switchgear for sale", "electrical equipment pricing"],
});

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
}

export default async function InventoryPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q?.toLowerCase().trim() ?? "";

  const results = sampleInventory.filter((item) => {
    if (!query) return true;
    return [item.name, item.category, item.manufacturer, item.sku, item.condition]
      .join(" ")
      .toLowerCase()
      .includes(query);
  });

  return (
    <>
      <PageHero
        eyebrow="Inventory"
        title="Equipment Inventory"
        description="Browse current inventory with pricing. Full database and customer portal integration coming soon."
      />
      <section className="mx-auto max-w-7xl px-4 py-16">
        {query ? (
          <p className="mb-6 text-muted-foreground">
            Showing {results.length} result{results.length === 1 ? "" : "s"} for &ldquo;{q}&rdquo;
          </p>
        ) : null}
        <div className="overflow-hidden rounded-xl border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SKU</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Manufacturer</TableHead>
                <TableHead>Condition</TableHead>
                <TableHead className="text-right">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-mono text-xs">{item.sku}</TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.manufacturer}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{item.condition}</Badge>
                  </TableCell>
                  <TableCell className="text-right font-semibold">{formatPrice(item.price)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {results.length === 0 ? (
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">No inventory items match your search.</p>
            <Link href="/contact" className={cn(buttonVariants(), "mt-4")}>
              Request Equipment
            </Link>
          </div>
        ) : null}
      </section>
      <CtaBanner
        title="Need Something Not Listed?"
        description="Our sourcing team finds hard-to-find equipment with same-day quotes."
        primaryHref="/contact"
        primaryLabel="Request a Quote"
      />
    </>
  );
}
