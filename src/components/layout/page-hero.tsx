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
          ? "bg-slate-950 text-white border-slate-800"
          : "bg-slate-50 text-slate-950 border-border",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        {eyebrow ? (
          <p className={cn("text-sm font-semibold uppercase tracking-wider", dark ? "text-amber-400" : "text-amber-600")}>
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>
        <p className={cn("mt-4 max-w-2xl text-lg leading-relaxed", dark ? "text-slate-300" : "text-slate-600")}>
          {description}
        </p>
      </div>
    </section>
  );
}
