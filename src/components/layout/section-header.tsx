import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
  className?: string;
  dark?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  actionHref,
  actionLabel,
  className,
  dark = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-4 md:flex-row md:items-end md:justify-between", className)}>
      <div className="max-w-2xl">
        <p
          className={cn(
            "text-xs font-bold uppercase tracking-[0.2em]",
            dark ? "text-brand-light" : "text-brand"
          )}
        >
          {eyebrow}
        </p>
        <h2 className={cn("mt-2 text-3xl font-bold tracking-tight md:text-4xl", dark && "text-white")}>
          {title}
        </h2>
        {description ? (
          <p className={cn("mt-3 text-base leading-relaxed", dark ? "text-white/70" : "text-muted-foreground")}>
            {description}
          </p>
        ) : null}
      </div>
      {actionHref && actionLabel ? (
        <Link
          href={actionHref}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "shrink-0 border-brand/25 hover:bg-brand/5",
            dark && "border-white/20 text-white hover:bg-white/10"
          )}
        >
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}
