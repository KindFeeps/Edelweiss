import React from "react";

export interface CompanyHoverCardProps {
  logoSrc: string;
  logoAlt: string;
  tags: string[];
  onView?: () => void;
}

const CompanyHoverCard: React.FC<CompanyHoverCardProps> = ({ logoSrc, logoAlt, tags, onView }) => {
  return (
    <div className="group relative aspect-square bg-white border rounded-md p-6 flex items-center justify-center overflow-hidden shadow-sm">
      {/* Base logo (default state) */}
      <img
        src={logoSrc}
        alt={logoAlt}
        className="max-h-16 object-contain transition group-hover:opacity-0 duration-300"
        draggable={false}
      />
      {/* Hover state overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 bg-white transition-opacity duration-300 z-10">
        <img src={logoSrc} alt={logoAlt} className="max-h-10 object-contain mb-2" draggable={false} />
        <div className="flex gap-2 mb-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#001F4D] text-white text-xs px-3 py-1 rounded-md whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          className="border border-[#001F4D] px-4 py-1 rounded-md text-sm hover:bg-[#001F4D] hover:text-white transition"
          onClick={onView}
          type="button"
        >
          VIEW →
        </button>
      </div>
    </div>
  );
};

export default CompanyHoverCard;
