import { slugify } from "@/lib/slug";

export type ProductCategory = {
  slug: string;
  name: string;
  description: string;
  subcategories: readonly string[];
  keywords: readonly string[];
};

const productData = [
  {
    name: "Breakers",
    description:
      "Molded case, insulated case, vacuum, and air circuit breakers from leading manufacturers—in stock and ready to ship.",
    subcategories: [
      "Molded Case Breakers",
      "Insulated Case Breakers",
      "Vacu Breakers",
      "Air Breakers",
    ],
    keywords: ["circuit breakers", "used circuit breakers", "MCCB", "ICB"],
  },
  {
    name: "Transformers",
    description:
      "Dry type, padmount, pole mount, and substation transformers for commercial, industrial, and utility applications.",
    subcategories: ["Dry Type", "Padmount", "Pole Mount", "Substation"],
    keywords: ["electrical transformers", "padmount transformer", "dry type transformer"],
  },
  {
    name: "MCC",
    description:
      "Motor control center buckets, lineups, and components for industrial motor control applications.",
    subcategories: ["Buckets", "Lineups", "Controls"],
    keywords: ["motor control center", "MCC buckets", "MCC lineup"],
  },
  {
    name: "Controls",
    description:
      "PLCs, VFDs, drives, starters, contactors, and relays for automation and motor control.",
    subcategories: ["PLC", "VFD & Drives", "Starters", "Contactors", "Relays"],
    keywords: ["VFD drives", "PLC equipment", "motor starters", "electrical controls"],
  },
  {
    name: "Busway",
    description:
      "Bus plugs, plug-in duct, feeder duct, and vertical duct systems for power distribution.",
    subcategories: ["Bus Plugs", "Plug in Duct", "Feeder Duct", "Vertical Duct"],
    keywords: ["busway systems", "bus plugs", "bus duct"],
  },
  {
    name: "Disconnects / Safety Switch",
    description:
      "Fused, non-fused, and breaker-style safety switches for isolation and protection.",
    subcategories: ["Fused", "Non-Fused", "Breaker Style"],
    keywords: ["safety switches", "electrical disconnects", "fused disconnect"],
  },
  {
    name: "Switchgear",
    description:
      "Low and medium voltage switchgear including main breaker, distribution, main-tie-main, and feeder configurations.",
    subcategories: [
      "Main Breaker",
      "Distribution",
      "Main tie Main",
      "Feeder",
      "Low Voltage & Medium Voltage",
    ],
    keywords: ["switchgear", "medium voltage switchgear", "LV switchgear"],
  },
  {
    name: "Panels",
    description:
      "Panelboards and distribution panels in main breaker, main lug, and feed-through configurations.",
    subcategories: ["Main Breaker", "Main lug", "Feed Thru"],
    keywords: ["electrical panels", "panelboards", "distribution panels"],
  },
  {
    name: "Generators",
    description:
      "Natural gas, diesel, and turbine generators for standby and prime power applications.",
    subcategories: ["Natural Gas", "Deisel", "Turbine"],
    keywords: ["industrial generators", "diesel generators", "natural gas generators"],
  },
  {
    name: "UPS",
    description:
      "UPS cabinets, battery cabinets, bypass switches, and complete uninterruptible power systems.",
    subcategories: ["UPS Cabinets", "Battery Cabinets", "Bypass Switches"],
    keywords: ["UPS systems", "uninterruptible power supply", "UPS batteries"],
  },
  {
    name: "Chillers",
    description:
      "Air-cooled and water-cooled chillers for data center and industrial cooling applications.",
    subcategories: ["Air Cooled", "Water Cooled"],
    keywords: ["industrial chillers", "data center chillers", "HVAC chillers"],
  },
] as const;

export const productCategories: ProductCategory[] = productData.map((category) => ({
  ...category,
  slug: slugify(category.name),
}));

export function getProductCategory(slug: string): ProductCategory | undefined {
  return productCategories.find((category) => category.slug === slug);
}

export type InventoryItem = {
  id: string;
  name: string;
  category: string;
  manufacturer: string;
  condition: "New" | "Used" | "Refurbished";
  price: number;
  sku: string;
};

export const sampleInventory: InventoryItem[] = [
  {
    id: "1",
    name: "Square D PowerPact HGL36030",
    category: "Breakers",
    manufacturer: "Square D",
    condition: "Used",
    price: 285,
    sku: "LV-BRK-001",
  },
  {
    id: "2",
    name: "Eaton Magnum DS Switchgear Section",
    category: "Switchgear",
    manufacturer: "Eaton",
    condition: "Refurbished",
    price: 12500,
    sku: "LV-SWG-014",
  },
  {
    id: "3",
    name: "750 kVA Padmount Transformer",
    category: "Transformers",
    manufacturer: "ABB",
    condition: "Used",
    price: 8900,
    sku: "LV-XFM-008",
  },
  {
    id: "4",
    name: "Allen-Bradley PowerFlex 755 VFD",
    category: "Controls",
    manufacturer: "Allen-Bradley",
    condition: "Refurbished",
    price: 4200,
    sku: "LV-VFD-022",
  },
  {
    id: "5",
    name: "Siemens 400A Bus Plug",
    category: "Busway",
    manufacturer: "Siemens",
    condition: "New",
    price: 650,
    sku: "LV-BUS-003",
  },
  {
    id: "6",
    name: "GE AKD-8 Switchgear Lineup",
    category: "Switchgear",
    manufacturer: "GE",
    condition: "Used",
    price: 18500,
    sku: "LV-SWG-021",
  },
];
