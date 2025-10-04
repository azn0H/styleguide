import React, { useState } from "react";
import type { Company } from "../types/Company";
import { Menu, X } from "lucide-react";

interface SidebarProps {
  companies: Company[];
  selectedCompanyId: string;
  onSelect: (id: string) => void;
}

interface LayoutProps {
  companies: Company[];
  selectedCompanyId: string;
  onSelect: (id: string) => void;
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ companies, selectedCompanyId, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Toggle button - only on mobile */}
      <button
        onClick={toggleSidebar}
        className="
          md:hidden fixed top-4 left-4 z-50
          bg-blue-600 text-white
          p-3 rounded-full
          shadow-lg
          hover:bg-blue-700
          active:scale-95
          transition
          duration-200
          focus:outline-none
          focus:ring-2
          focus:ring-blue-400
        "
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-72 bg-gray-100 dark:bg-gray-800 p-6 z-40
          transform transition-transform duration-300 ease-in-out shadow-xl
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:flex md:flex-col md:justify-between md:h-screen md:shadow-none
        `}
      >
        <div>
          <div className="flex items-center mb-8 space-x-3">
            <img src="../logo.png" alt="Metafra Logo" className="w-12 h-12 object-contain" />
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
              Metafra Styleguide
            </h2>
          </div>

          <ul className="space-y-3">
            {companies.map((company) => (
              <li key={company.id}>
                <button
                  onClick={() => {
                    onSelect(company.id);
                    closeSidebar();
                  }}
                  className={`
                    flex items-center w-full text-left px-5 py-3 rounded-lg
                    text-lg font-medium
                    transition-all duration-200
                    ${
                      selectedCompanyId === company.id
                        ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg transform scale-105"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }
                  `}
                >
                  {company.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400 select-none">
          Web by:{" "}
          <a
            href="https://aznoh.cz"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
          >
            aznoh.cz
          </a>{" "}
          | Version: 1.0
        </div>
      </aside>

      {/* Overlay on mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={closeSidebar}
        />
      )}
    </>
  );
};

// Layout wrapper - sidebar + content
const Layout: React.FC<LayoutProps> = ({ companies, selectedCompanyId, onSelect, children }) => {
  return (
    <div className="min-h-screen md:flex bg-gray-50 dark:bg-gray-900">
      <div className="w-72 flex-shrink-0">
        <Sidebar companies={companies} selectedCompanyId={selectedCompanyId} onSelect={onSelect} />
      </div>

      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
