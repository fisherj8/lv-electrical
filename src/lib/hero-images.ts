export const heroImages = {
  /** Close-up of circuit breakers in a panel */
  breakers: "/images/hero-breakers.jpg",
  /** Open gray electrical switchgear / circuit panel */
  panel: "/images/hero-panel.jpg",
  /** Long row of industrial switchgear / electrical lineup */
  lineup: "/images/hero-lineup.jpg",
  /** Switchgear room with electrical equipment */
  switchgear: "/images/hero-switchgear.jpg",
  /** Electrical transformer station */
  transformer: "/images/hero-transformer.jpg",
  /** Substation with transformers and power lines */
  transformerSubstation: "/images/hero-transformer-substation.jpg",
} as const;

const categoryHeroImages: Partial<Record<string, (typeof heroImages)[keyof typeof heroImages]>> = {
  transformers: heroImages.transformerSubstation,
};

export function getCategoryHeroImage(slug: string): string {
  return categoryHeroImages[slug] ?? heroImages.panel;
}
