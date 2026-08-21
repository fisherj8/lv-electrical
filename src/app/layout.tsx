import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { LocalBusinessJsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...createMetadata({
    title: site.name,
    description: `${site.description} Call ${site.contact.phone} for same-day quotes and emergency sourcing.`,
    path: "/",
    keywords: [
      "electrical equipment supplier",
      "surplus electrical equipment",
      "electrical decommissioning",
      "buy used switchgear",
      "LV Electrical Supply",
    ],
  }),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} ${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <LocalBusinessJsonLd />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
