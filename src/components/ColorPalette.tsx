import React from "react";
import type { CompanyColor } from "../types/Company";

const ColorPalette: React.FC<{ colors: CompanyColor[] }> = ({ colors }) => (
  <section className="mt-8">
    <h3 className="text-2xl font-semibold mb-4">Barvy</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {colors.map((color) => (
        <div
          key={color.hex}
          className="rounded-lg border border-gray-800 p-4 flex flex-col items-center"
        >
          <div
            className="w-full h-24 rounded-lg mb-3"
            style={{ backgroundColor: color.hex }}
          />
          <p className="font-medium text-lg">{color.name}</p>
          <p className="text-sm text-gray-200">{color.hex}</p>
          <p className="text-xs text-gray-300  mt-1">{color.usage}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ColorPalette;
