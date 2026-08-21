import { cn } from "@/lib/utils";

type SpecTagProps = {
  children: React.ReactNode;
  className?: string;
};

export function SpecTag({ children, className }: SpecTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-brand/15 bg-brand/[0.04] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-brand-dark",
        className
      )}
    >
      {children}
    </span>
  );
}
