import React from "react";
import CompanyHoverCard from "./CompanyHoverCard";

const CompanyHoverCardExample = () => {
  return (
    <div className="max-w-xs mx-auto mt-12">
      <CompanyHoverCard
        logoSrc="/logos/gold-vision.svg"
        logoAlt="Gold Vision Logo"
        tags={["Marketing Management", "Europe"]}
        onView={() => alert("View Gold Vision!")}
      />
    </div>
  );
};

export default CompanyHoverCardExample;
