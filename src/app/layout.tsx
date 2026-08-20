import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { LocalBusinessJsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/seo";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
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
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
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
