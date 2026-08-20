import type { Metadata } from "next";
import { site } from "@/data/site";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
  keywords?: readonly string[];
};

export function createMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: PageMeta): Metadata {
  const fullTitle =
    title === site.name ? `${site.name} | ${site.tagline}` : `${title} | ${site.name}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? [...keywords] : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url: `${site.url}${path}`,
      siteName: site.name,
      locale: "en_US",
      type: "website",
    },
    alternates: {
      canonical: `${site.url}${path}`,
    },
  };
}
