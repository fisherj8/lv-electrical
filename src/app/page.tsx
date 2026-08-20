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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(46,90,39,0.35),_transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
          <Badge className="border-brand-light/30 bg-brand/30 text-white hover:bg-brand/30">
            Emergency Sourcing Available
          </Badge>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            {site.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={site.contact.phoneHref}
              className="inline-flex items-center gap-3 rounded-xl bg-brand px-6 py-4 text-xl font-bold text-white transition-colors hover:bg-brand-light"
            >
              <Phone className="size-6" />
              {site.contact.phone}
            </a>
            <Link
              href="/sell-equipment"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "border-brand/50 bg-transparent text-white hover:bg-brand/20"
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
            <Card key={item.title} className="border-brand/15">
              <CardHeader>
                <item.icon className="size-8 text-brand" />
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{item.text}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-brand/10 bg-brand/5">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand">Services</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">Complete Electrical Solutions</h2>
            </div>
            <Link href="/services" className={cn(buttonVariants({ variant: "outline" }), "border-brand/30 hover:bg-brand/10")}>
              View All Services
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="h-full transition-shadow hover:border-brand/30 hover:shadow-md">
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
        <p className="text-sm font-semibold uppercase tracking-wider text-brand">Product Catalog</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">Electrical Equipment Inventory</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Breakers, switchgear, transformers, MCC, busway, generators, UPS, and more from top manufacturers.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {productCategories.map((category) => (
            <Link key={category.slug} href={`/products/${category.slug}`}>
              <Badge variant="outline" className="border-brand/25 px-3 py-1 text-sm hover:bg-brand/10">
                {category.name}
              </Badge>
            </Link>
          ))}
        </div>
        <Link href="/products" className={cn(buttonVariants(), "mt-8 bg-brand hover:bg-brand-light")}>
          Browse All Products
        </Link>
      </section>

      <section className="border-y border-brand/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold tracking-tight">Why Customers Choose Us</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {site.whyChooseUs.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-lg border border-brand/15 p-4">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />
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
                  className="rounded-lg border border-brand/15 px-4 py-3 font-medium transition-colors hover:border-brand/40 hover:bg-brand/5"
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
                <Badge key={brand.slug} variant="secondary" className="bg-brand/10 px-3 py-1 text-brand-dark">
                  {brand.name}
                </Badge>
              ))}
            </div>
            <Link href="/brands" className={cn(buttonVariants({ variant: "outline" }), "mt-6 border-brand/30")}>
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
