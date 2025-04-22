"use client";
import React, { useState } from "react";
import PortfolioModal from "./PortfolioModal";

export interface CompanyData {
  name: string;
  logo: string;
  industry: string;
  region: string;
  descriptionShort: string;
  descriptionFull: string;
  founded?: string;
  acquired?: string;
  headquarters?: string;
  website?: string;
}

interface PortfolioCardProps {
  company: CompanyData;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ company }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-white rounded-md p-6 h-full flex flex-col items-center justify-center relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Logo container */}
        <div 
          className={`flex items-center justify-center w-full transition-all duration-300 ease-in-out transform ${
            isHovered ? "translate-y-[-20px]" : ""
          }`}
        >
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            className="max-w-[80%] max-h-32 object-contain"
          />
        </div>

        {/* Pills and View button - appear on hover */}
        <div 
          className={`absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-4 transition-all duration-300 ease-in-out transform ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex gap-2 justify-center">
            <span className="px-3 py-1 text-xs font-medium text-white bg-[#0f172a] rounded-full">
              {company.industry}
            </span>
            <span className="px-3 py-1 text-xs font-medium text-white bg-[#0f172a] rounded-full">
              {company.region}
            </span>
          </div>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="border border-gray-300 rounded px-4 py-2 text-sm flex items-center justify-center gap-1 hover:bg-gray-50 transition-colors"
          >
            VIEW <span className="ml-1">→</span>
          </button>
        </div>
      </div>

      {/* Modal */}
      <PortfolioModal 
        company={company}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default PortfolioCard;
