import Image from "next/image";
import { heroImages } from "@/lib/hero-images";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
  imageSrc?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  imageSrc = heroImages.panel,
}: PageHeroProps) {
  return (
    <section className={cn("relative min-h-[320px] overflow-hidden border-b border-white/10 text-white md:min-h-[380px]", className)}>
      <Image
        src={imageSrc}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,11,20,0.92)_0%,rgba(7,11,20,0.78)_100%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        {eyebrow ? (
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-light">{eyebrow}</p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">{description}</p>
      </div>
    </section>
  );
}
