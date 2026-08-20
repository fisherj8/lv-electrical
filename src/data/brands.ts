export type Brand = {
  name: string;
  slug: string;
};

const brandNames = [
  "Schneider Electric",
  "Square D",
  "Eaton",
  "Siemens",
  "ABB",
  "GE",
  "Cutler-Hammer",
  "Westinghouse",
  "Federal Pacific",
  "ITE",
  "Bussmann",
  "Littelfuse",
  "Allen-Bradley",
  "Trane",
  "Mitsubishi",
  "Cat",
  "Cummins",
  "Detroit",
  "Generac",
  "Kohler",
] as const;

function slugifyBrand(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export const brands: Brand[] = brandNames.map((name) => ({
  name,
  slug: slugifyBrand(name),
}));

export function getBrand(slug: string): Brand | undefined {
  return brands.find((brand) => brand.slug === slug);
}
