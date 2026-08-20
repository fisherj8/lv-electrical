import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { getService, services } from "@/data/services";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBanner } from "@/components/layout/cta-banner";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return createMetadata({
    title: service.name,
    description: service.description,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.name}
        description={service.shortDescription}
      />
      <section className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-lg leading-relaxed text-slate-700">{service.description}</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {service.keywords.map((keyword) => (
            <span key={keyword} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
              {keyword}
            </span>
          ))}
        </div>
      </section>
      <CtaBanner
        title={`Request ${service.name}`}
        description="Contact our team for pricing, availability, and technical support."
        primaryHref="/contact"
        primaryLabel="Contact Us"
      />
    </>
  );
}
