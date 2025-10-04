import { useEffect } from "react";
import type { Company } from "../types/Company";

interface FontLoaderProps {
  company: Company;
}

const FontLoader: React.FC<FontLoaderProps> = ({ company }) => {
  useEffect(() => {
    if (!company.font.url) return;

    const link = document.createElement("link");
    link.href = company.font.url;
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link); // při změně firmy odstraníme předchozí font
    };
  }, [company.font.url]);

  return null; // komponenta nic nevykresluje
};

export default FontLoader;
