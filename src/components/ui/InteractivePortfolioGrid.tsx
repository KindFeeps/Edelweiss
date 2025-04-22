"use client";
import React, { useState } from "react";
import RadixMultiSelectDropdown from '../RadixMultiSelectDropdown';
import PortfolioCard, { CompanyData } from "./PortfolioCard";
import companiesData from "../../data/companiesData";

const InteractivePortfolioGrid: React.FC = () => {
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(6);

  // Extract unique values for filters
  const getUnique = (key: keyof CompanyData) => 
    Array.from(new Set(companiesData.map(item => item[key])))
      .filter((v): v is string => typeof v === 'string')
      .sort();

  const industries = getUnique('industry');
  const regions = getUnique('region');
  
  // For years, we need to extract from the 'acquired' field
  const years = Array.from(new Set(
    companiesData
      .map(item => item.acquired)
      .filter((v): v is string => typeof v === 'string')
  )).sort();

  // Filter companies based on selected filters
  const filteredCompanies = companiesData.filter(company => 
    (selectedIndustries.length === 0 || selectedIndustries.includes(company.industry)) &&
    (selectedRegions.length === 0 || selectedRegions.includes(company.region)) &&
    (selectedYears.length === 0 || (company.acquired && selectedYears.includes(company.acquired)))
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

      <p className="text-gray-600 mb-8">
        We operate businesses in over 60 vertical markets across more than 30 countries. 
        Learn more about the 200+ companies that have joined Edelweiss by clicking on the logos below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCompanies.slice(0, visibleCount).map((company) => (
          <div key={company.name} className="bg-[#FAF9F6] border border-[#D9D9D6] rounded-lg shadow-sm h-64 overflow-hidden">
            <PortfolioCard company={company} />
          </div>
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
    </div>
  );
};

export default InteractivePortfolioGrid;
