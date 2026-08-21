import { cn } from "@/lib/utils";

type DarkSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function DarkSection({ children, className, id }: DarkSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden bg-surface-dark py-20 text-white md:py-24",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="relative">{children}</div>
    </section>
  );
}
