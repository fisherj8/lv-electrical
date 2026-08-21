import {
  Battery,
  Box,
  Cable,
  Cpu,
  Fuel,
  Grid3x3,
  LayoutGrid,
  PanelTop,
  Snowflake,
  ToggleLeft,
  Zap,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  breakers: Zap,
  transformers: Box,
  mcc: LayoutGrid,
  controls: Cpu,
  busway: Cable,
  "disconnects-safety-switch": ToggleLeft,
  switchgear: Grid3x3,
  panels: PanelTop,
  generators: Fuel,
  ups: Battery,
  chillers: Snowflake,
};

export function getProductIcon(slug: string): LucideIcon {
  return iconMap[slug] ?? Zap;
}
