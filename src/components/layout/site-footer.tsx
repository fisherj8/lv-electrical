import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { productCategories } from "@/data/products";

export function SiteFooter() {
  return (
    <footer className="border-t border-brand/30 bg-brand-black text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt={`${site.name} logo`}
              width={200}
              height={95}
              className="h-12 w-auto"
            />
          </Link>
          <p className="mt-4 text-sm leading-relaxed">{site.tagline}</p>
          <div className="mt-4 space-y-1 text-sm">
            <p>{site.contact.address.full}</p>
            <p>
              <a href={site.contact.phoneHref} className="text-brand-light hover:text-white">
                {site.contact.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.contact.email}`} className="text-brand-light hover:text-white">
                {site.contact.email}
              </a>
            </p>
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Services</p>
          <ul className="mt-3 space-y-2 text-sm">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-white">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Products</p>
          <ul className="mt-3 space-y-2 text-sm">
            {productCategories.slice(0, 6).map((category) => (
              <li key={category.slug}>
                <Link href={`/products/${category.slug}`} className="hover:text-white">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/sell-equipment" className="font-medium text-brand-light hover:text-white">
                Sell Your Equipment
              </Link>
            </li>
            <li>
              <Link href="/request-call" className="hover:text-white">
                Request a Call
              </Link>
            </li>
            <li>
              <Link href="/credit-application" className="hover:text-white">
                Credit Application
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand/20 bg-brand-dark/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>{site.contact.hours} · {site.contact.emergencyHours}</p>
        </div>
      </div>
    </footer>
  );
}
