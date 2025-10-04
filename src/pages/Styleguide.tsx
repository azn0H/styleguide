import React, { useState } from "react";
import Sidebar from "../components/Sidebar"; // ← použij tu novou s togglem
import CompanyStyle from "../components/CompanyStyle";
import { companies } from "../data/companies";

const Styleguide: React.FC = () => {
  const [selected, setSelected] = useState(companies[0].id);
  const company = companies.find((c) => c.id === selected)!;

  return (
    <div className="flex">
      <Sidebar companies={companies} selectedCompanyId={selected} onSelect={setSelected} children={undefined} />
      <main className="flex-1 overflow-y-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6">
        <CompanyStyle company={company} />
      </main>
    </div>
  );
};

export default Styleguide;
