"use client";
import React from "react";

interface PortfolioItemProps {
  logo: string;
  alt: string;
  vertical: string;
  region: string;
  year: string;
  description?: string;
  onView?: () => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ logo, alt, vertical, region, year, description, onView }) => (
  <div className="bg-[#FAF9F6] border border-[#D9D9D6] rounded-lg shadow-sm flex flex-col items-stretch p-6 h-full transition hover:shadow-md">
    <div className="flex justify-center items-center mb-4 h-24">
      <img
        src={logo}
        alt={alt}
        className="max-h-20 w-auto object-contain mx-auto"
        loading="lazy"
        draggable={false}
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/vercel.svg";
        }}
      />
    </div>
    <div className="flex flex-col flex-1">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg font-semibold text-gray-900">{alt}</span>
        <span className="ml-auto px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-xs font-medium uppercase tracking-wide">{vertical}</span>
      </div>
      {description && (
        <div className="text-sm text-gray-600 mb-2 line-clamp-3">{description}</div>
      )}
      <div className="flex gap-2 text-xs text-gray-500 mb-4">
        <span className="bg-gray-100 rounded px-2 py-0.5">{region}</span>
        <span className="bg-gray-100 rounded px-2 py-0.5">{year}</span>
      </div>
      <a
        href="#"
        className="mt-auto text-blue-600 hover:underline text-sm font-medium flex items-center gap-1"
        onClick={e => {
          e.preventDefault();
          if (onView) onView();
        }}
      >
        View <span aria-hidden="true">→</span>
      </a>
    </div>
  </div>
);

export default PortfolioItem;
