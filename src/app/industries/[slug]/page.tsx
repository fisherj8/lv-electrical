import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { getIndustry, industries } from "@/data/industries";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBanner } from "@/components/layout/cta-banner";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};

  return createMetadata({
    title: industry.name,
    description: industry.description,
    path: `/industries/${industry.slug}`,
    keywords: industry.keywords,
  });
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <PageHero
        eyebrow="Industry"
        title={industry.name}
        description={industry.description}
      />
      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="flex flex-wrap gap-2">
          {industry.keywords.map((keyword) => (
            <span key={keyword} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
              {keyword}
            </span>
          ))}
        </div>
      </section>
      <CtaBanner
        title={`Solutions for ${industry.name}`}
        description="Contact our team for industry-specific sourcing and surplus programs."
        primaryHref="/contact"
        primaryLabel="Contact Us"
      />
    </>
  );
}
