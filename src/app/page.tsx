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
import { industries } from "@/data/industries";
import { brands } from "@/data/brands";
import { CtaBanner } from "@/components/layout/cta-banner";
import { SectionHeader } from "@/components/layout/section-header";
import { ProductCatalog } from "@/components/products/product-catalog";
import { SpecTag } from "@/components/products/spec-tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-black text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(46,90,39,0.35),_transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28">
          <p className="inline-flex border border-brand-light/30 bg-brand/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-light">
            Emergency Sourcing Available
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            {site.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={site.contact.phoneHref}
              className="inline-flex items-center gap-3 bg-brand px-6 py-4 text-xl font-bold text-white transition-colors hover:bg-brand-light"
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
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: Truck, title: "Nationwide Shipping", text: "Fast delivery across North America" },
            { icon: Shield, title: "One Year Warranty", text: "Quality equipment you can trust" },
            { icon: Zap, title: "Emergency Sourcing", text: "24hr emergency option available" },
          ].map((item) => (
            <Card key={item.title} className="rounded-none border-border/80 shadow-none">
              <CardHeader>
                <item.icon className="size-7 text-brand" />
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{item.text}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <SectionHeader
            eyebrow="Services"
            title="Complete Electrical Solutions"
            actionHref="/services"
            actionLabel="View All Services"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group block h-full">
                <article className="flex h-full flex-col border border-border bg-card p-6 transition-all hover:border-brand/30 hover:shadow-[0_8px_30px_rgba(46,90,39,0.08)]">
                  <h3 className="text-lg font-semibold tracking-tight group-hover:text-brand">{service.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.shortDescription}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <SectionHeader
          eyebrow="What We Supply"
          title="Every Type of Electrical Equipment"
          description="Breakers, switchgear, transformers, MCC, busway, generators, UPS, and more from top manufacturers."
          actionHref="/products"
          actionLabel="Browse All Products"
        />
        <div className="mt-10">
          <ProductCatalog variant="featured" />
        </div>
      </section>

      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <SectionHeader eyebrow="The Advantage" title="Why Customers Choose Us" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {site.whyChooseUs.map((item) => (
              <div key={item} className="flex items-start gap-3 border border-border/80 bg-card p-5">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />
                <span className="font-medium leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Industries" title="Industries We Serve" />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group border border-border bg-card px-4 py-4 text-sm font-semibold transition-all hover:border-brand/35 hover:text-brand"
                >
                  {industry.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="Manufacturers" title="Brands We Supply" actionHref="/brands" actionLabel="View All Brands" />
            <div className="mt-8 flex flex-wrap gap-2">
              {brands.map((brand) => (
                <SpecTag key={brand.slug} className="bg-white px-3 py-1.5 normal-case tracking-normal">
                  {brand.name}
                </SpecTag>
              ))}
            </div>
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
