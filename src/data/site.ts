export const site = {
  name: "LV Electrical Supply",
  tagline: "Built on Service. Powered by Experience.",
  description:
    "At LV Electrical Supply, we do more than supply electrical equipment—we provide solutions. From sourcing the right equipment for your project to managing complete electrical decommissioning and asset recovery, our team helps contractors and facility owners save time, reduce costs, and recover value from surplus electrical assets.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lvelectrical.com",
  contact: {
    phone: "682-393-1443",
    phoneHref: "tel:+16823931443",
    email: "Charlie@lvelec.com",
    formEmail: "charlie@c3-pro.com",
    address: {
      street: "1724 N Main St Suite H",
      city: "Weatherford",
      state: "TX",
      zip: "76086",
      full: "1724 N Main St, Weatherford, TX 76086 Suite H",
    },
    serviceArea: "North America",
    hours: "8:00 AM – 5:00 PM Mon – Fri",
    emergencyHours: "24hr emergency option available",
  },
  whyChooseUs: [
    "Same-day quotes",
    "Nationwide shipping",
    "Large inventory",
    "Technical expertise",
    "Emergency sourcing",
    "New & surplus equipment",
    "Competitive pricing",
    "Fast turnaround",
    "Hard-to-find equipment",
    "Asset recovery",
    "One Year Warranty",
  ],
  goals: [
    "Comprehensive Google keyword coverage for electrical equipment sourcing",
    "Inventory display with pricing",
    "Clear surplus equipment buying program",
    "Room for inventory database and customer portal",
  ],
} as const;

export type SiteConfig = typeof site;
