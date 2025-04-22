import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import companiesRaw from "../../data/companies";

type Company = {
  logo: string;
  alt: string;
  vertical: string;
  region: string;
  year: string;
};

const companies: Company[] = companiesRaw;

const FILTERS = [
  { key: "vertical", label: "Vertical Market" },
  { key: "region", label: "Region" },
  { key: "year", label: "Acquisition Year" },
];

const getUnique = (arr: Company[], key: keyof Company) =>
  Array.from(new Set(arr.map((item) => item[key]))).sort();

const DROPDOWN_ARROW = (
  <svg
    className="inline ml-2 w-4 h-4 text-[#B2B2BE]"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

interface Filters {
  [key: string]: string;
}

const PortfolioGrid: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    vertical: "",
    region: "",
    year: "",
  });
  const [showDropdown, setShowDropdown] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const verticals = getUnique(companies, "vertical");
  const regions = getUnique(companies, "region");
  const years = getUnique(companies, "year");

  const filtered = companies.filter((c) =>
    (!filters["vertical"] || c.vertical === filters["vertical"]) &&
    (!filters["region"] || c.region === filters["region"]) &&
    (!filters["year"] || c.year === filters["year"])
  );

  const filterOptions: { [key: string]: string[] } = {
    vertical: verticals,
    region: regions,
    year: years,
  };

  const handleFilter = (key: string, value: string) => {
    setFilters((f) => ({ ...f, [key]: value }));
    setShowDropdown(null);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-8 mb-10">
        {FILTERS.map(({ key, label }) => (
          <div key={key} className="relative flex-1 min-w-[180px]">
            <button
              type="button"
              className={
                "w-full text-left border-b border-[#D9D9D6] pb-1 text-[13px] text-[#B2B2BE] uppercase tracking-wide font-medium bg-transparent focus:outline-none flex items-center justify-between"
              }
              onClick={() =>
                setShowDropdown(showDropdown === key ? null : key)
              }
            >
              <span>
                {label}
                {DROPDOWN_ARROW}
              </span>
            </button>
            {showDropdown === key && (
              <div className="absolute left-0 right-0 bg-white border border-[#D9D9D6] shadow z-10 mt-2 rounded text-sm">
                <button
                  className="w-full px-4 py-2 text-left hover:bg-[#FAF9F6]"
                  onClick={() => handleFilter(key, "")}
                >
                  All
                </button>
                {filterOptions[key].map((option: string) => (
                  <button
                    key={option}
                    className={`w-full px-4 py-2 text-left hover:bg-[#FAF9F6] ${
                      filters[key] === option
                        ? "text-[#222] font-semibold"
                        : "text-[#464646]"
                    }`}
                    onClick={() => handleFilter(key, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filtered.slice(0, visibleCount).map((company) => (
          <PortfolioItem
            key={company.logo}
            logo={company.logo}
            alt={company.alt}
          />
        ))}
      </div>
      {filtered.length > visibleCount && (
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

export default PortfolioGrid;
