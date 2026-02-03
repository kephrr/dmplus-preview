import { Megaphone } from "lucide-react";

export interface SubsidiaySlide {
  id: string;
  bigTitle: string;
  title: string;
  description: string;
  longDescription: string;
  services: string[];
  icon: React.ComponentType<{ className?: string }>;
  bgImage?: string;
  logo?: string
  slogan?: string[]
  colorClass?: string
  bgClass?: string
}

export interface Subsidiary {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  description: string;
  longDescription: string;
  services: string[];
  icon: typeof Megaphone;
  bgImage?: string;
  theme: string;
  colorClass: string;
  gradientClass: string;
  slogan: string;
}