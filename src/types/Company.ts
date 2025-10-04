import type { LucideIcon } from 'lucide-react';
export interface CompanyColor {
  name: string;
  hex: string;
  usage: string;
}

export interface TextSize {
  label: string;
  className: string;
  example: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  icon: LucideIcon;
  colors: CompanyColor[];
  font: {
    name: string;
    url: string;
  };
  textSizes: TextSize[];

}
