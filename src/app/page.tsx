import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Shield,
  Truck,
  Zap,
} from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { productCategories } from "@/data/products";
import { industries } from "@/data/industries";
import { brands } from "@/data/brands";
import { CtaBanner } from "@/components/layout/cta-banner";
import { InventorySearch } from "@/components/forms/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.15),_transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
          <Badge className="bg-amber-500/15 text-amber-300 hover:bg-amber-500/15">
            North America · Emergency Sourcing Available
          </Badge>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            {site.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={site.contact.phoneHref}
              className="inline-flex items-center gap-3 rounded-xl bg-amber-500 px-6 py-4 text-xl font-bold text-slate-950 transition-colors hover:bg-amber-400"
            >
              <Phone className="size-6" />
              {site.contact.phone}
            </a>
            <Link
              href="/sell-equipment"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-slate-700 bg-transparent text-white hover:bg-slate-900"
              )}
            >
              We Buy Surplus Equipment
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Truck, title: "Nationwide Shipping", text: "Fast delivery across North America" },
            { icon: Shield, title: "One Year Warranty", text: "Quality equipment you can trust" },
            { icon: Zap, title: "Emergency Sourcing", text: "24hr emergency option available" },
          ].map((item) => (
            <Card key={item.title} className="border-slate-200">
              <CardHeader>
                <item.icon className="size-8 text-amber-500" />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{item.text}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">Services</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">Complete Electrical Solutions</h2>
            </div>
            <Link href="/services" className={cn(buttonVariants({ variant: "outline" }))}>
              View All Services
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="h-full transition-shadow hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {service.shortDescription}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">Product Catalog</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Electrical Equipment Inventory</h2>
            <p className="mt-4 text-muted-foreground">
              Breakers, switchgear, transformers, MCC, busway, generators, UPS, and more from top manufacturers.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {productCategories.slice(0, 8).map((category) => (
                <Link key={category.slug} href={`/products/${category.slug}`}>
                  <Badge variant="outline" className="px-3 py-1 text-sm hover:bg-slate-100">
                    {category.name}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
          <InventorySearch />
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold tracking-tight">Why Customers Choose Us</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {site.whyChooseUs.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg border border-border p-4">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-amber-500" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Industries We Serve</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="rounded-lg border border-border px-4 py-3 font-medium transition-colors hover:border-amber-500/50 hover:bg-amber-50/50"
                >
                  {industry.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Brands We Supply</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {brands.map((brand) => (
                <Badge key={brand.slug} variant="secondary" className="px-3 py-1">
                  {brand.name}
                </Badge>
              ))}
            </div>
            <Link href="/brands" className={cn(buttonVariants({ variant: "outline" }), "mt-6")}>
              View All Brands
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have Surplus Electrical Equipment?"
        description="We buy breakers, switchgear, transformers, MCC, busway, and more. Get a fast quote with photo upload."
        primaryHref="/sell-equipment"
        primaryLabel="Sell Your Equipment"
        secondaryHref="/contact"
        secondaryLabel="Request a Quote"
      />
    </>
  );
}
