import { cn } from "@/lib/utils";

type SpecTagProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
};

export function SpecTag({ children, className, variant = "light" }: SpecTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em]",
        variant === "dark"
          ? "border border-white/15 bg-white/[0.04] text-white/75"
          : "border border-brand/15 bg-brand/[0.04] text-brand-dark",
        className
      )}
    >
      {children}
    </span>
  );
}
