import Link from "next/link";
import {
  Clock,
  DollarSign,
  Headphones,
  Package,
  Shield,
  Truck,
  Zap,
} from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { brands } from "@/data/brands";
import { HeroSection } from "@/components/layout/hero-section";
import { ProcessSteps } from "@/components/layout/process-steps";
import { FeatureGrid } from "@/components/layout/feature-grid";
import { CtaBanner } from "@/components/layout/cta-banner";
import { SectionHeader } from "@/components/layout/section-header";
import { ProductCatalog } from "@/components/products/product-catalog";
import { SpecTag } from "@/components/products/spec-tag";

const trustItems = [
  { icon: Truck, title: "Nationwide Shipping", text: "Fast delivery across North America" },
  { icon: Shield, title: "One Year Warranty", text: "Quality equipment you can trust" },
  { icon: Zap, title: "Emergency Sourcing", text: "24hr emergency option available" },
];

const advantageFeatures = [
  {
    icon: Clock,
    title: "Same-Day Quotes",
    description: "Send us your requirements and get pricing fast—often the same business day.",
  },
  {
    icon: Package,
    title: "Large Inventory",
    description: "Breakers, switchgear, transformers, MCC, and more ready to ship nationwide.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "New and surplus equipment priced to help you win bids and protect margins.",
  },
  {
    icon: Truck,
    title: "Nationwide Shipping",
    description: "We coordinate freight and delivery so equipment arrives when you need it.",
  },
  {
    icon: Headphones,
    title: "Technical Expertise",
    description: "Talk to people who know electrical equipment—not a generic call center.",
  },
  {
    icon: Shield,
    title: "Asset Recovery",
    description: "We buy surplus and decommissioned equipment and help you recover value fast.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection
        badge={site.contact.emergencyHours}
        eyebrow="Electrical Equipment Supplier"
        title={site.tagline}
        description={site.description}
        primaryHref="/contact"
        primaryLabel="Request a Quote"
        secondaryHref="/sell-equipment"
        secondaryLabel="Sell Your Equipment"
      />

      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3">
          {trustItems.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <item.icon className="size-6" />
              </div>
              <div>
                <h3 className="font-bold tracking-tight">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ProcessSteps
        eyebrow="How We Work"
        title="From Request to Delivery"
        description="Whether you're sourcing equipment or selling surplus, our team keeps the process simple and fast."
        steps={[
          {
            title: "Tell Us What You Need",
            description:
              "Call, email, or submit a form with brand, model, voltage, and condition. Photos help us move faster.",
          },
          {
            title: "Get Pricing Fast",
            description:
              "We check inventory and source options, then come back with competitive pricing—often same day.",
          },
          {
            title: "Ship or Pick Up",
            description:
              "We coordinate nationwide shipping or pickup and stand behind the equipment we supply.",
          },
        ]}
        ctaHref="/contact"
        ctaLabel="Request a Quote"
      />

      <section className="border-y border-border bg-muted/30 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            eyebrow="Services"
            title="Complete Electrical Solutions"
            description="Procurement, sales, decommissioning, and asset recovery for contractors and facility owners."
            actionHref="/services"
            actionLabel="View All Services"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group block h-full">
                <article className="flex h-full flex-col rounded-xl border border-border bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-[0_12px_40px_rgba(46,90,39,0.08)]">
                  <h3 className="text-lg font-bold tracking-tight group-hover:text-brand">{service.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.shortDescription}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProductCatalog variant="featured" dark />

      <FeatureGrid
        eyebrow="The Advantage"
        title="Why Customers Choose Us"
        description="We combine inventory, expertise, and fast response to keep your projects moving."
        features={advantageFeatures}
      />

      <section className="border-y border-border bg-muted/20 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader eyebrow="Industries" title="Industries We Serve" />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {industries.map((industry) => (
                  <Link
                    key={industry.slug}
                    href={`/industries/${industry.slug}`}
                    className="rounded-lg border border-border bg-white px-4 py-4 text-sm font-semibold transition-all hover:border-brand/30 hover:text-brand"
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader
                eyebrow="Manufacturers"
                title="Brands We Supply"
                actionHref="/brands"
                actionLabel="View All Brands"
              />
              <div className="mt-8 flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <SpecTag key={brand.slug} className="bg-white px-3 py-1.5 normal-case tracking-normal">
                    {brand.name}
                  </SpecTag>
                ))}
              </div>
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
        highlights={["Same-day quotes", "Nationwide shipping", "Asset recovery"]}
      />
    </>
  );
}
