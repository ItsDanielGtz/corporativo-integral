import {
  Anchor,
  ArrowDownUp,
  FolderOpen,
  Forklift,
  Globe,
  Target,
  WalletCards,
} from "lucide-react";

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
    image: "./src/assets/images/carrousel-1-5.webp",
    alt: "image-carrousel",
  },
  {
    image: "./src/assets/images/carrousel-2.webp",
    alt: "image-carrousel2",
  },
  {
    image: "./src/assets/images/carrousel-3.webp",
    alt: "image-carrousel3",
  },
  {
    image: "./src/assets/images/carrousel-4.webp",
    alt: "image-carrousel4",
  },
  {
    image: "./src/assets/images/carrousel-5.webp",
    alt: "image-carrousel5",
  },
];
