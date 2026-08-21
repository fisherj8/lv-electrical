import { createMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import { heroImages } from "@/lib/hero-images";
import { PageHero } from "@/components/layout/page-hero";
import { SellEquipmentForm } from "@/components/forms/sell-equipment-form";
import { CheckCircle2 } from "lucide-react";

export const metadata = createMetadata({
  title: "Sell Your Electrical Equipment",
  description:
    "We buy surplus electrical equipment nationwide. Submit photos and equipment details for a fast quote on breakers, switchgear, transformers, and more.",
  path: "/sell-equipment",
  keywords: [
    "sell surplus electrical equipment",
    "we buy electrical equipment",
    "sell used switchgear",
    "surplus electrical buyers Texas",
  ],
});

export default function SellEquipmentPage() {
  return (
    <>
      <PageHero
        eyebrow="We Buy Surplus"
        title="Sell Us Your Electrical Equipment"
        description="Turn surplus and decommissioned electrical assets into cash. Upload photos, get a fast evaluation, and let us handle logistics."
        imageSrc={heroImages.grid}
      />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="rounded-2xl border-2 border-brand bg-brand/5 p-8">
              <h2 className="text-2xl font-bold">We Buy:</h2>
              <ul className="mt-6 space-y-3">
                {[
                  "Circuit breakers & switchgear",
                  "Transformers & padmounts",
                  "MCC buckets & lineups",
                  "Busway & bus plugs",
                  "Generators & UPS systems",
                  "Complete plant decommissioning lots",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-medium">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-slate-600">
                Submissions are sent to our buying team at {site.contact.email}. For urgent inquiries, call{" "}
                <a href={site.contact.phoneHref} className="font-semibold text-brand hover:text-brand-light">
                  {site.contact.phone}
                </a>
                .
              </p>
            </div>
          </div>
          <div className="lg:col-span-3">
            <SellEquipmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
