import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { site } from "@/data/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/brands", label: "Brands" },
  { href: "/industries", label: "Industries" },
  { href: "/inventory", label: "Inventory" },
  { href: "/sell-equipment", label: "Sell Equipment" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="border-b border-amber-500/20 bg-slate-950 text-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-sm">
          <p className="hidden sm:block text-slate-300">
            {site.contact.serviceArea} · {site.contact.hours}
          </p>
          <a
            href={site.contact.phoneHref}
            className="inline-flex items-center gap-2 font-semibold text-amber-400 hover:text-amber-300"
          >
            <Phone className="size-4" />
            {site.contact.phone}
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt={`${site.name} logo`}
            width={160}
            height={76}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className={cn(
            buttonVariants({ size: "lg" }),
            "hidden bg-amber-500 text-slate-950 hover:bg-amber-400 sm:inline-flex"
          )}
        >
          Get a Quote
        </Link>
      </div>
      <nav className="flex gap-1 overflow-x-auto border-t border-border/60 px-4 py-2 lg:hidden">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 rounded-md px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
