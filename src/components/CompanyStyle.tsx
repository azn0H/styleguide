import React from "react";
import type { Company } from "../types/Company";
import FontLoader from "../data/fontloader";
import LogoDisplay from "./LogoDisplay";
import ColorPalette from "./ColorPalette";
import FontSection from "./FontSection";
import TextSizes from "./TextSizes";

interface Props {
  company: Company;
}

const CompanyStyle: React.FC<Props> = ({ company }) => {
  return (
    <div className="p-6">
      {/* Dynamicky načteme font */}
      <FontLoader company={company} />

      <LogoDisplay logo={company.logo} name={company.name} />
      <ColorPalette colors={company.colors} />
      <FontSection font={company.font} />
      <TextSizes sizes={company.textSizes} />
    </div>
  );
};

export default CompanyStyle;
