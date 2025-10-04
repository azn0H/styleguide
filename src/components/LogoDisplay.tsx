import React from "react";

interface LogoDisplayProps {
  logo: string;
  name: string;
}

const LogoDisplay: React.FC<LogoDisplayProps> = ({ logo, name }) => (
  <div className="flex items-center space-x-4 mb-6">
    <img src={logo} alt={`${name} logo`} className="w-20 h-20 object-contain" />
    <h1 className="text-3xl font-bold">{name}</h1>
  </div>
);

export default LogoDisplay;
