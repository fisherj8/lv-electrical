import { slugify } from "@/lib/slug";

export type Industry = {
  slug: string;
  name: string;
  description: string;
  keywords: readonly string[];
};

const industryData = [
  {
    name: "Electrical Contractors",
    description:
      "We support electrical contractors with fast quotes, hard-to-find parts, and surplus buyback programs that keep projects moving and budgets in check.",
    keywords: ["electrical contractor supply", "contractor electrical equipment"],
  },
  {
    name: "Industrial Plants",
    description:
      "From MCC buckets and VFDs to switchgear and busway, we help industrial plants source, replace, and recover value from critical electrical assets.",
    keywords: ["industrial electrical equipment", "plant electrical supply"],
  },
  {
    name: "Manufacturing",
    description:
      "Manufacturing facilities rely on us for emergency sourcing, refurbishment, and surplus equipment sales to minimize downtime on the production floor.",
    keywords: ["manufacturing electrical parts", "factory electrical equipment"],
  },
  {
    name: "Oil & Gas",
    description:
      "We supply and recover electrical equipment for oil and gas operations—including harsh-environment switchgear, motor controls, and temporary power.",
    keywords: ["oil and gas electrical equipment", "upstream electrical supply"],
  },
  {
    name: "Data Centers",
    description:
      "Complete decommissioning, UPS and switchgear sourcing, and asset recovery tailored to data center electrical infrastructure.",
    keywords: ["data center electrical equipment", "data center surplus gear"],
  },
  {
    name: "Hospitals",
    description:
      "Healthcare facilities trust us for emergency electrical sourcing and reliable equipment to support critical power systems.",
    keywords: ["hospital electrical equipment", "healthcare power systems"],
  },
  {
    name: "Municipalities",
    description:
      "Municipal utilities and public works departments use our procurement and surplus programs to stretch budgets without sacrificing reliability.",
    keywords: ["municipal electrical supply", "public works electrical equipment"],
  },
  {
    name: "Utilities",
    description:
      "We source medium-voltage switchgear, transformers, and distribution equipment for utility maintenance and upgrade projects.",
    keywords: ["utility electrical equipment", "medium voltage supply"],
  },
  {
    name: "Commercial Buildings",
    description:
      "Office, retail, and mixed-use properties depend on us for panelboards, switchgear, and power equipment upgrades and replacements.",
    keywords: ["commercial electrical equipment", "building electrical supply"],
  },
] as const;

export const industries: Industry[] = industryData.map((industry) => ({
  ...industry,
  slug: slugify(industry.name),
}));

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
