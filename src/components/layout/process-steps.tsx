import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SectionHeader } from "@/components/layout/section-header";

type Step = {
  title: string;
  description: string;
};

type ProcessStepsProps = {
  eyebrow: string;
  title: string;
  description: string;
  steps: Step[];
  ctaHref?: string;
  ctaLabel?: string;
  className?: string;
};

export function ProcessSteps({
  eyebrow,
  title,
  description,
  steps,
  ctaHref,
  ctaLabel,
  className,
}: ProcessStepsProps) {
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
        <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          <div className="absolute left-[16.67%] right-[16.67%] top-7 hidden h-px bg-border md:block" />
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-surface-dark text-lg font-bold text-white shadow-lg">
                {index + 1}
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-foreground">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        {ctaHref && ctaLabel ? (
          <div className="mt-12 flex justify-center">
            <Link href={ctaHref} className={cn(buttonVariants({ size: "lg" }), "bg-surface-dark px-8 hover:bg-surface-dark/90")}>
              {ctaLabel}
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
