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
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  actionHref,
  actionLabel,
  className,
  dark = false,
  align = "left",
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        !centered && "md:flex-row md:items-end md:justify-between",
        centered && "items-center text-center",
        className
      )}
    >
      <div className={cn("max-w-2xl", centered && "mx-auto")}>
        <p
          className={cn(
            "text-xs font-bold uppercase tracking-[0.22em]",
            dark ? "text-brand-light" : "text-brand"
          )}
        >
          {eyebrow}
        </p>
        <h2 className={cn("mt-2 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl", dark && "text-white")}>
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "mt-3 text-base leading-relaxed md:text-lg",
              dark ? "text-white/65" : "text-muted-foreground"
            )}
          >
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
            dark && "border-white/20 text-white hover:bg-white/10",
            centered && "mt-2"
          )}
        >
          {actionLabel}
        </Link>
      ) : null}
    </div>
  );
}
