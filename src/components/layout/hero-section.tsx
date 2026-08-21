import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { heroImages } from "@/lib/hero-images";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type HeroSectionProps = {
  badge?: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  imageSrc?: string;
  className?: string;
};

export function HeroSection({
  badge,
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  imageSrc = heroImages.lineup,
  className,
}: HeroSectionProps) {
  return (
    <section className={cn("relative min-h-[620px] overflow-hidden text-white md:min-h-[720px]", className)}>
      <Image
        src={imageSrc}
        alt=""
        fill
        priority
        className="object-cover object-[center_40%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,11,20,0.94)_0%,rgba(7,11,20,0.78)_50%,rgba(7,11,20,0.55)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,11,20,0.95)_0%,transparent_45%)]" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 pb-20 hero-content md:pb-28">
        {badge ? (
          <p className="inline-flex w-fit items-center gap-2 border border-brand-light/40 bg-brand/25 px-3 py-1.5 text-xs font-semibold text-brand-light backdrop-blur-sm">
            <CheckCircle2 className="size-3.5" />
            {badge}
          </p>
        ) : null}
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-brand-light">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">{description}</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href={primaryHref}
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 bg-white px-8 text-base font-semibold text-surface-dark hover:bg-white/90"
            )}
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-12 border-white/40 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/10"
              )}
            >
              {secondaryLabel}
              <ArrowRight className="size-4" />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
