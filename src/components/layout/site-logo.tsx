import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  link?: boolean;
};

export function SiteLogo({
  className,
  imageClassName,
  priority = false,
  link = true,
}: SiteLogoProps) {
  const logo = (
    <Image
      src="/logo.png"
      alt="LV Electrical Supply logo"
      width={240}
      height={114}
      priority={priority}
      className={cn("logo-glow h-12 w-auto sm:h-14 md:h-16", imageClassName)}
    />
  );

  if (!link) {
    return <span className={cn("inline-flex shrink-0 items-center", className)}>{logo}</span>;
  }

  return (
    <Link href="/" className={cn("inline-flex shrink-0 items-center", className)}>
      {logo}
    </Link>
  );
}
