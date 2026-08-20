import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { productCategories } from "@/data/products";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-bold text-white">{site.name}</p>
          <p className="mt-2 text-sm leading-relaxed">{site.tagline}</p>
          <p className="mt-4 text-sm">{site.contact.address.full}</p>
          <p className="mt-2 text-sm">
            <a href={site.contact.phoneHref} className="text-amber-400 hover:text-amber-300">
              {site.contact.phone}
            </a>
          </p>
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
              <Link href="/sell-equipment" className="font-medium text-amber-400 hover:text-amber-300">
                Sell Your Equipment
              </Link>
            </li>
            <li>
              <Link href="/inventory" className="hover:text-white">
                Inventory Search
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
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>{site.contact.serviceArea} · {site.contact.emergencyHours}</p>
        </div>
      </div>
    </footer>
  );
}
