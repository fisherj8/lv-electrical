import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { heroImages } from "@/lib/hero-images";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type CtaBannerProps = {
  title: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  highlights?: string[];
  imageSrc?: string;
};

export function CtaBanner({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  highlights,
  imageSrc = heroImages.breakers,
}: CtaBannerProps) {
  return (
    <section className="relative min-h-[420px] overflow-hidden">
      <Image src={imageSrc} alt="" fill className="object-cover object-[center_35%]" sizes="100vw" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(31,61,26,0.94)_0%,rgba(46,90,39,0.88)_45%,rgba(7,11,20,0.92)_100%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">{description}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={primaryHref}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 bg-white px-8 text-base font-semibold text-surface-dark hover:bg-white/90"
              )}
            >
              {primaryLabel}
              <ArrowRight className="size-4" />
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link
                href={secondaryHref}
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-12 border-white/40 bg-white/5 px-8 text-base text-white hover:bg-white/10"
                )}
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
          {highlights && highlights.length > 0 ? (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-white/80">
              {highlights.map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-brand-light" />
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
