"use client";
import React from "react";
import PortfolioItem from "@/components/ui/PortfolioItem";
import CompanyHoverCard from "./CompanyHoverCard";

import { useState } from "react";

export default function PortfolioGrid() {
  const items = [
    {
      logo: "/company-logos-svg/aysling.svg",
      alt: "Aysling Logo",
      vertical: "Broadcast & Media Entertainment",
      region: "United States",
      year: "2021",
    },
    {
      logo: "/company-logos-svg/datatrac.svg",
      alt: "Datatrac Logo",
      vertical: "Logistics",
      region: "United States",
      year: "2022",
    },
    {
      logo: "/company-logos-svg/dpsi.png",
      alt: "DP Solutions Inc. Logo",
      vertical: "Asset Management",
      region: "United States",
      year: "2023",
    },
    {
      logo: "/company-logos-svg/edelweiss.jpg",
      alt: "Edelweiss Logo",
      vertical: "Book Industry Software",
      region: "United States",
      year: "2022",
    },
    {
      logo: "/company-logos-svg/equinox.png",
      alt: "Equinox Information Systems Logo",
      vertical: "Telecom",
      region: "United States",
      year: "2020",
    },
    {
      logo: "/company-logos-svg/gbbis.svg",
      alt: "GbBIS Logo",
      vertical: "Geospatial",
      region: "United States",
      year: "2023",
    },
    {
      logo: "/company-logos-svg/idg.png",
      alt: "IDGateway Logo",
      vertical: "Aviation",
      region: "United Kingdom",
      year: "2021",
    },
    {
      logo: "/company-logos-svg/pinpoint.png",
      alt: "Pinpoint Global Communications Logo",
      vertical: "Training and Compliance",
      region: "United States",
      year: "2022",
    },
    {
      logo: "/company-logos-svg/qmatic.svg",
      alt: "Qmatic Logo",
      vertical: "Queue Management",
      region: "Sweden",
      year: "2020",
    },
  ];

  // Extract unique filter values
  const verticals = ["All", ...Array.from(new Set(items.map(i => i.vertical)))];
  const regions = ["All", ...Array.from(new Set(items.map(i => i.region)))];
  const years = ["All", ...Array.from(new Set(items.map(i => i.year)))];

  // Filter state
  const [vertical, setVertical] = useState("All");
  const [region, setRegion] = useState("All");
  const [year, setYear] = useState("All");

  // Filtering logic
  const filtered = items.filter(item =>
    (vertical === "All" || item.vertical === vertical) &&
    (region === "All" || item.region === region) &&
    (year === "All" || item.year === year)
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <div>
          <label className="block text-xs font-semibold mb-1">Vertical Market</label>
          <select
            className="border rounded px-3 py-2 min-w-[180px]"
            value={vertical}
            onChange={e => setVertical(e.target.value)}
          >
            {verticals.map(v => <option key={v}>{v}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1">Region</label>
          <select
            className="border rounded px-3 py-2 min-w-[150px]"
            value={region}
            onChange={e => setRegion(e.target.value)}
          >
            {regions.map(r => <option key={r}>{r}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1">Acquisition Year</label>
          <select
            className="border rounded px-3 py-2 min-w-[130px]"
            value={year}
            onChange={e => setYear(e.target.value)}
          >
            {years.map(y => <option key={y}>{y}</option>)}
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-8">
        {filtered.map((item, idx) => (
          item.alt === "Equinox Information Systems Logo" ? (
            <div key={idx} className="h-full flex items-center justify-center">
              <CompanyHoverCard
                logoSrc={item.logo}
                logoAlt={item.alt}
                tags={[item.vertical, item.region]}
              />
            </div>
          ) : (
            <PortfolioItem key={idx} logo={item.logo} alt={item.alt} />
          )
        ))}
      </div>
    </div>
  );
}
