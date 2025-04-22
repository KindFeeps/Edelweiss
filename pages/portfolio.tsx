import React from "react";
import PortfolioGrid from "@/components/PortfolioGrid";

export default function PortfolioPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Explore Our Global Portfolio
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We operate businesses in over 40 vertical markets across more than 50 countries.
          Learn more about the 200+ companies that have joined Valsoft Group by clicking on the logos below.
        </p>
      </div>
      <PortfolioGrid />
    </div>
  );
}
