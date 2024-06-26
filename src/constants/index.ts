import {
  Anchor,
  ArrowDownUp,
  FolderOpen,
  Forklift,
  Globe,
  Target,
  WalletCards,
} from "lucide-react";
import imgCarrousel1 from "@/assets/images/carrousel-1-5.webp";
import imgCarrousel2 from "@/assets/images/carrousel-2.webp";
import imgCarrousel3 from "@/assets/images/carrousel-3.webp";
import imgCarrousel4 from "@/assets/images/carrousel-4.webp";
import imgCarrousel5 from "@/assets/images/carrousel-5.webp";
import imgCarrousel6 from "@/assets/images/Carrousel-Avion.webp";
import imgCarrousel7 from "@/assets/images/Carrousel-Barco.webp";
import imgCarrousel8 from "@/assets/images/Carrousel-Mapa.webp";
import imgCarrousel9 from "@/assets/images/Carrousel-Bandera.webp";
import imgCarrousel10 from "@/assets/images/Carrousel-Verduras.webp";

export const navbarLinks = [
  { route: "/", label: "home" },
  { route: "/mission", label: "mission" },
  { route: "/vision", label: "vision" },
  { route: "/aboutUs", label: "aboutus" },
  { route: "/services", label: "services" },
];

export const services = [
  {
    service1: {
      icon: Globe,
      label: "International Marketing",
    },
    service2: {
      icon: Anchor,
      label: "International Commercial Linkage",
    },
    service3: {
      icon: ArrowDownUp,
      label: "International Logistic Services",
    },
    service4: {
      icon: WalletCards,
      label: "International Commerce Consultancy",
    },
    service5: {
      icon: FolderOpen,
      label: "Preventive audits",
    },
    service6: {
      icon: Target,
      label: "Training Workshops",
    },
    service7: {
      icon: Forklift,
      label: "Development of logistic profiles",
    },
  },
];

export const images = [
  {
    image: imgCarrousel1,
    alt: "image-carrousel",
  },
  {
    image: imgCarrousel2,
    alt: "image-carrousel2",
  },
  {
    image: imgCarrousel3,
    alt: "image-carrousel3",
  },
  {
    image: imgCarrousel4,
    alt: "image-carrousel4",
  },
  {
    image: imgCarrousel8,
    alt: "image-carrousel8",
  },
  {
    image: imgCarrousel5,
    alt: "image-carrousel5",
  },
  {
    image: imgCarrousel6,
    alt: "image-carrousel6",
  },
  {
    image: imgCarrousel7,
    alt: "image-carrousel7",
  },
  {
    image: imgCarrousel9,
    alt: "image-carrousel9",
  },
  {
    image: imgCarrousel10,
    alt: "image-carrousel10",
  },
];
