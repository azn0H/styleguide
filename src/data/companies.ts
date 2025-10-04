import type { Company } from "../types/Company";
import { Car } from "lucide-react";

export const companies: Company[] = [
  {
    id: "aznoh",
    name: "aznoH",
    logo: "/src/logos/logo.png",
    icon: Car,
    colors: [
      { name: "Blue", hex: "#4285F4", usage: "Primary brand color" },
      { name: "Red", hex: "#EA4335", usage: "Primary brand color" },
    ],
    font: {
      name: "Red Hat Display",
      url: "https://fonts.google.com/specimen/Red+Hat+Display",
    },
    textSizes: [
      { label: "H1 48px", className: "font-red_hat_display text-4xl font-bold", example: "že uznání přirozené důstojnosti a rovných " },
      { label: "Body", className: "font-red_hat_display text-base", example: "že uznání přirozené důstojnosti a rovných" },
      { label: "Small", className: "font-red_hat_display text-sm", example: "Red Hat Display že uznání přirozené důstojnosti a rovných" },
    ],
  },
  {
    id: "rodify",
    name: "Rodify",
    logo: "/src/logos/rodify.svg",
    icon: Car,
    colors: [
      { name: "Light", hex: "#EAF9E7", usage: "Pozadí" },
      { name: "Base", hex: "#C0E6BA", usage: "Secondary elements" },
      { name: "Primary", hex: "#4CA771", usage: "Logo" },
      { name: "Secondary", hex: "#013237", usage: "Text" },
    ],
    font: {
      name: "Poppins",
      url: "https://fonts.google.com/specimen/Poppins",
    },
    textSizes: [
      { label: "H1 48px", className: "font-poppins text-4xl font-bold", example: "že uznání přirozené důstojnosti a rovných" },
      { label: "Body", className: "font-poppins text-base", example: "že uznání přirozené důstojnosti a rovných" },
      { label: "Small", className: "font-poppins text-sm", example: "že uznání přirozené důstojnosti a rovných", },
    ],
  },
];
