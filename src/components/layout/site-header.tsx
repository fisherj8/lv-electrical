"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { site } from "@/data/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/brands", label: "Brands" },
  { href: "/industries", label: "Industries" },
  { href: "/sell-equipment", label: "Sell Equipment" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const overlay = pathname === "/";

  return (
    <header
      className={cn(
        "z-50 w-full transition-colors",
        overlay
          ? "fixed inset-x-0 top-0 border-b border-white/10 bg-surface-dark/40 backdrop-blur-md"
          : "sticky top-0 border-b border-border bg-white/95 shadow-sm backdrop-blur-md"
      )}
    >
      <div
        className={cn(
          "border-b",
          overlay ? "border-white/10 bg-black/20" : "border-border/60 bg-muted/30"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-sm">
          <p className={cn("hidden sm:block", overlay ? "text-white/60" : "text-muted-foreground")}>
            {site.contact.hours}
          </p>
          <a
            href={site.contact.phoneHref}
            className={cn(
              "inline-flex items-center gap-2 font-semibold sm:ml-auto",
              overlay ? "text-brand-light hover:text-white" : "text-brand hover:text-brand-dark"
            )}
          >
            <Phone className="size-4" />
            {site.contact.phone}
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:py-4">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt={`${site.name} logo`}
            width={240}
            height={114}
            className={cn("h-12 w-auto sm:h-14 md:h-16", overlay && "brightness-0 invert")}
            priority
          />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                overlay
                  ? "text-white/80 hover:bg-white/10 hover:text-white"
                  : "text-foreground/70 hover:bg-muted hover:text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ size: "lg" }),
            "hidden sm:inline-flex",
            overlay
              ? "border border-white/30 bg-transparent text-white hover:bg-white/10"
              : "bg-surface-dark text-white hover:bg-surface-dark/90"
          )}
        >
          Get a Quote
        </Link>
      </div>
      <nav
        className={cn(
          "flex gap-1 overflow-x-auto border-t px-4 py-2 lg:hidden",
          overlay ? "border-white/10" : "border-border/60"
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "shrink-0 rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
              overlay
                ? "text-white/80 hover:bg-white/10 hover:text-white"
                : "text-foreground/70 hover:bg-muted hover:text-foreground"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
