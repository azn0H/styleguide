import React from "react";
import type { TextSize } from "../types/Company";

const TextSizes: React.FC<{ sizes: TextSize[] }> = ({ sizes }) => (
  <section className="mt-6">
    <h3 className="text-2xl font-semibold mb-2">Velikosti textu:</h3>
    <div className="space-y-3">
      {sizes.map((s) => (
        <div key={s.label}>
          <p className="text-gray-500 text-sm">{s.label}</p>
          <p className={s.className}>{s.example}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TextSizes;
