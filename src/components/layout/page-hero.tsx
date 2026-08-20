import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
  dark?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  dark = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "border-b",
        dark
          ? "border-brand/30 bg-brand-black text-white"
          : "border-brand/10 bg-brand/5 text-foreground",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        {eyebrow ? (
          <p className={cn("text-sm font-semibold uppercase tracking-wider text-brand-light", !dark && "text-brand")}>
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
        <p className={cn("mt-4 max-w-2xl text-lg leading-relaxed", dark ? "text-white/70" : "text-muted-foreground")}>
          {description}
        </p>
      </div>
    </section>
  );
}
