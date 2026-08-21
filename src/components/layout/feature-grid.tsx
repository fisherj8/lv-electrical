import { type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/layout/section-header";
import { cn } from "@/lib/utils";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type FeatureGridProps = {
  eyebrow: string;
  title: string;
  description?: string;
  features: Feature[];
  className?: string;
};

export function FeatureGrid({ eyebrow, title, description, features, className }: FeatureGridProps) {
  return (
    <section className={cn("bg-white py-20 md:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeader
          align="center"
          eyebrow={eyebrow}
          title={title}
          description={description}
          className="mx-auto max-w-3xl text-center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-xl border border-border/80 bg-card p-6 transition-shadow hover:shadow-[0_12px_40px_rgba(46,90,39,0.08)]"
            >
              <div className="flex size-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <feature.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold tracking-tight">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
