import { slugify } from "@/lib/slug";

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  keywords: readonly string[];
};

const serviceData = [
  {
    name: "Electrical Equipment Procurement",
    shortDescription:
      "Source new and used electrical gear for commercial, industrial, and utility projects.",
    description:
      "LV Electrical Supply simplifies electrical equipment procurement with same-day quotes, technical guidance, and access to new and surplus inventory. We help contractors and facility managers find the right breakers, switchgear, transformers, and controls—fast.",
    keywords: [
      "electrical equipment procurement",
      "buy electrical equipment",
      "industrial electrical sourcing",
    ],
  },
  {
    name: "Surplus Equipment Purchasing",
    shortDescription:
      "We buy surplus and decommissioned electrical equipment across North America.",
    description:
      "Turn idle electrical assets into cash. We purchase surplus breakers, switchgear, transformers, MCC buckets, busway, and more. Fast evaluations, competitive offers, and complete logistics support.",
    keywords: [
      "sell surplus electrical equipment",
      "buy used electrical equipment",
      "surplus electrical buyers",
    ],
  },
  {
    name: "New & Used Equipment Sales",
    shortDescription:
      "Quality new and refurbished electrical equipment with competitive pricing.",
    description:
      "Browse a broad inventory of new and used electrical equipment from leading manufacturers. Every unit is backed by technical expertise and a one-year warranty on qualifying equipment.",
    keywords: [
      "used electrical equipment for sale",
      "refurbished switchgear",
      "electrical equipment sales",
    ],
  },
  {
    name: "Emergency Sourcing",
    shortDescription:
      "24-hour emergency sourcing for critical electrical components.",
    description:
      "When downtime costs money, we respond. Our emergency sourcing team locates hard-to-find breakers, switchgear, and power equipment with nationwide shipping and fast turnaround.",
    keywords: [
      "emergency electrical parts",
      "rush electrical sourcing",
      "24 hour electrical supply",
    ],
  },
  {
    name: "Data Center Decommissioning",
    shortDescription:
      "Complete decommissioning and asset recovery for data center electrical systems.",
    description:
      "From UPS systems and switchgear to busway and PDUs, we manage data center electrical decommissioning with rigging, removal, logistics, and asset recovery—minimizing downtime and maximizing value.",
    keywords: [
      "data center decommissioning",
      "data center electrical removal",
      "UPS decommissioning",
    ],
  },
  {
    name: "Equipment Removal – Mechanical & Electrical",
    shortDescription:
      "Professional removal of electrical and mechanical equipment on-site.",
    description:
      "Our crews handle safe removal of switchgear, transformers, generators, chillers, and related equipment. We coordinate rigging, disconnection, and transport so your project stays on schedule.",
    keywords: [
      "electrical equipment removal",
      "switchgear removal",
      "transformer removal services",
    ],
  },
  {
    name: "Rigging & Logistics",
    shortDescription:
      "Heavy equipment rigging and nationwide logistics coordination.",
    description:
      "We manage crating, rigging, freight, and delivery for oversized electrical equipment. From padmount transformers to switchgear lineups, our logistics team handles the details.",
    keywords: [
      "electrical equipment rigging",
      "switchgear shipping",
      "transformer logistics",
    ],
  },
  {
    name: "Temporary Power Equipment",
    shortDescription:
      "Temporary power solutions for outages, upgrades, and construction.",
    description:
      "Keep operations running with temporary generators, switchgear, and distribution equipment. We source and deliver temporary power solutions for planned outages and emergency situations.",
    keywords: [
      "temporary power equipment",
      "temporary generator rental sales",
      "emergency power equipment",
    ],
  },
  {
    name: "Equipment Refurbishment",
    shortDescription:
      "Refurbished electrical equipment tested and ready for service.",
    description:
      "Extend equipment life with professional refurbishment. We supply tested, refurbished breakers, switchgear, and controls that meet project specs at a fraction of new equipment cost.",
    keywords: [
      "refurbished electrical equipment",
      "reconditioned switchgear",
      "refurbished circuit breakers",
    ],
  },
  {
    name: "Asset Recovery",
    shortDescription:
      "Maximize value from decommissioned and surplus electrical assets.",
    description:
      "Our asset recovery program helps facility owners and contractors recover value from surplus inventory, plant closures, and upgrade projects—with transparent evaluations and fast payment.",
    keywords: [
      "electrical asset recovery",
      "surplus asset liquidation",
      "decommissioned equipment value",
    ],
  },
] as const;

export const services: Service[] = serviceData.map((service) => ({
  ...service,
  slug: slugify(service.name),
}));

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
