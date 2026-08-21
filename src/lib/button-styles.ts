import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function darkPrimaryButton(className?: string) {
  return cn(
    buttonVariants({ size: "lg" }),
    "bg-white text-surface-dark hover:bg-white/90",
    className
  );
}

export function darkOutlineButton(className?: string) {
  return cn(
    buttonVariants({ size: "lg", variant: "outline" }),
    "border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white",
    className
  );
}

export function darkOutlineButtonSm(className?: string) {
  return cn(
    buttonVariants({ variant: "outline" }),
    "border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white",
    className
  );
}
