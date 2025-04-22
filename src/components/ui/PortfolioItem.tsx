"use client";
import React from "react";

interface PortfolioItemProps {
  logo: string;
  alt: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ logo, alt }) => (
  <div
    className="aspect-square bg-[#FAF9F6] border border-[#D9D9D6] flex items-center justify-center p-8"
  >
    <img
      src={logo}
      alt={alt}
      className="max-h-24 w-auto object-contain mx-auto"
      loading="lazy"
      draggable={false}
      onError={(e) => {
        (e.target as HTMLImageElement).src = "/vercel.svg";
      }}
    />
  </div>
);

export default PortfolioItem;
