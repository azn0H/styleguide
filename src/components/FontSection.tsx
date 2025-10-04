import React from "react";

interface FontProps {
  font: {
    name: string;
    url: string;
  };
}

const FontSection: React.FC<FontProps> = ({ font }) => (
  <section className="mt-6">
    <h3 className="text-xl font-semibold mb-2">Font</h3>
<p style={{ fontFamily: font.name }} className="text-lg">
  {font.name}
</p>


<a
  href={font.url}
  target="_blank"
  rel="noreferrer"
  className="
    inline-block
    px-6 py-3
    rounded-lg
    font-semibold
    text-white
    bg-gradient-to-r
    from-[#4285F4]
    via-[#EA4335]
    to-[#4285F4]
    bg-[length:200%_200%]
    bg-left
    shadow-lg
    hover:bg-right
    transition-all
    duration-700
    ease-in-out
    focus:outline-none
    focus:ring-4
    focus:ring-[#4285F4]/60
  "
>
  Odkaz
</a>

  </section>
);

export default FontSection;
