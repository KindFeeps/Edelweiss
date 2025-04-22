import React, { useState } from "react";
import RadixMultiSelectDropdown from '../RadixMultiSelectDropdown';
import PortfolioItem from "./PortfolioItem";
import companiesRaw from "../../data/companies";
import CompanyModal from "../CompanyModal";

// Company type as used in companiesRaw
 type CompanyRaw = {
  name: string;
  alt: string;
  logo: string;
  description: string;
  vertical: string;
  region: string;
  year: string;
  founded?: string;
  headquarters?: string;
  pressRelease?: string;
};

// Company type as expected by CompanyModal
 type CompanyModalType = {
  id: string;
  name: string;
  description: string;
  industry: string;
  country: string;
  logo: string;
  website: string;
  founded?: string;
  acquired?: string;
  headquarters?: string;
  fullDescription?: string;
  subtitle?: string;
};

const companies: CompanyRaw[] = companiesRaw;


const getUnique = (arr: CompanyRaw[], key: keyof CompanyRaw) =>
  Array.from(new Set(arr.map((item) => item[key]))).filter((v): v is string => typeof v === 'string').sort();

// DROPDOWN_ARROW no longer needed, handled by RadixDropdown

const PortfolioGrid: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<CompanyModalType | null>(null);

  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);

  const industries = getUnique(companies, "vertical");
  const regions = getUnique(companies, "region");
  const years = getUnique(companies, "year");

  const filteredCompanies = companies.filter(c =>
    (selectedIndustries.length === 0 || selectedIndustries.includes(c.vertical)) &&
    (selectedRegions.length === 0 || selectedRegions.includes(c.region)) &&
    (selectedYears.length === 0 || selectedYears.includes(c.year))
  );

  const resetFilters = () => {
    setSelectedIndustries([]);
    setSelectedRegions([]);
    setSelectedYears([]);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-8 mb-10">
        <div className="flex-1 min-w-[180px]">
          <RadixMultiSelectDropdown
            label="Industry"
            options={industries}
            selected={selectedIndustries}
            onChange={setSelectedIndustries}
            placeholder="All Industries"
          />
        </div>
        <div className="flex-1 min-w-[180px]">
          <RadixMultiSelectDropdown
            label="Region"
            options={regions}
            selected={selectedRegions}
            onChange={setSelectedRegions}
            placeholder="All Regions"
          />
        </div>
        <div className="flex-1 min-w-[180px]">
          <RadixMultiSelectDropdown
            label="Acquisition Year"
            options={years}
            selected={selectedYears}
            onChange={setSelectedYears}
            placeholder="All Years"
          />
        </div>
        <div className="flex items-end">
          <button
            className="ml-2 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={resetFilters}
            type="button"
          >
            Reset Filters
          </button>
        </div>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredCompanies.slice(0, visibleCount).map((company) => (
          <PortfolioItem
            key={company.logo}
            logo={company.logo}
            alt={company.alt}
            vertical={company.vertical}
            region={company.region}
            year={company.year}
            // description={company.description} // Uncomment if you add descriptions
            onView={() => {
              // Map company data to CompanyModalType
              setSelectedCompany({
                id: company.name,
                name: company.name,
                description: company.description,
                industry: company.vertical,
                country: company.region,
                logo: company.logo,
                website: company.pressRelease || "#",
                founded: company.founded,
                headquarters: company.headquarters,
                // acquired, fullDescription, subtitle can be added if present in data
              });
              setModalOpen(true);
            }}
          />
        ))}
      </div>
      {filteredCompanies.length > visibleCount && (
        <div className="flex justify-center mt-10">
          <button
            className="text-[#222] text-sm uppercase tracking-wide border-b border-[#D9D9D6] pb-1 hover:text-[#575760] font-medium bg-transparent"
            onClick={() => setVisibleCount((c) => c + 6)}
          >
            View More &rarr;
          </button>
        </div>
      )}
      {/* Modal for company details */}
      <CompanyModal company={selectedCompany} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default PortfolioGrid;
