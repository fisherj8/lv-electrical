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
        "z-50 w-full border-b border-brand/20 bg-brand-black text-white transition-colors",
        overlay ? "fixed inset-x-0 top-0" : "sticky top-0"
      )}
    >
      <div className="border-b border-brand/20 bg-brand-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-sm">
          <p className="hidden text-white/60 sm:block">{site.contact.hours}</p>
          <a
            href={site.contact.phoneHref}
            className="inline-flex items-center gap-2 font-semibold text-brand-light hover:text-white sm:ml-auto"
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
            className="h-12 w-auto sm:h-14 md:h-16"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-brand/20 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ size: "lg" }),
            "hidden border border-brand/40 bg-brand text-white hover:bg-brand-light sm:inline-flex"
          )}
        >
          Get a Quote
        </Link>
      </div>
      <nav className="flex gap-1 overflow-x-auto border-t border-brand/20 px-4 py-2 lg:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 rounded-md px-3 py-1.5 text-xs font-medium text-white/80 transition-colors hover:bg-brand/20 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
