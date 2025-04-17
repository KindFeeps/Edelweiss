import React from 'react';
import { Link } from 'react-router-dom';

interface PortfolioItem {
  name: string;
  logo: string;
  industry: string;
  region: string;
  link: string;
}

const portfolio: PortfolioItem[] = [
  {
    name: 'Equinox Information Systems',
    logo: '/company-logos/equinox.png',
    industry: 'Telecom',
    region: 'United States',
    link: '/portfolio/equinox-information-systems',
  },
  {
    name: 'GbBIS',
    logo: '/company-logos/gbbis.png',
    industry: 'Geospatial',
    region: 'United States',
    link: '/portfolio/gbbis',
  },
  {
    name: 'WiSys',
    logo: '/company-logos/wisys-logo.png',
    industry: 'Warehouse Management',
    region: 'United States',
    link: '/portfolio/wisys',
  },
  {
    name: 'Datatrac',
    logo: '/company-logos/datatrac-logo.png',
    industry: 'Logistics',
    region: 'United States',
    link: '/portfolio/datatrac',
  },
  {
    name: 'Edelweiss',
    logo: '/company-logos/edelweiss-logo.png',
    industry: 'Book Industry Software',
    region: 'United States',
    link: '/portfolio/edelweiss',
  },
  {
    name: 'DP Solutions Inc.',
    logo: '/company-logos/dpsi-logo.png',
    industry: 'Asset Management',
    region: 'United States',
    link: '/portfolio/dp-solutions-inc',
  },
  {
    name: 'Aysling',
    logo: '/company-logos/aysling-logo.png',
    industry: 'Broadcast & Media Entertainment',
    region: 'United States',
    link: '/portfolio/aysling',
  },
  {
    name: 'Apero Solutions Inc.',
    logo: '/company-logos/apero-logo.png',
    industry: 'Enterprise Resource Planning',
    region: 'Canada',
    link: '/portfolio/apero-solutions-inc',
  },
  {
    name: 'IDGateway',
    logo: '/company-logos/idgateway-logo.png',
    industry: 'Aviation',
    region: 'United Kingdom',
    link: '/portfolio/idgateway',
  },
  {
    name: 'Qmatic',
    logo: '/company-logos/qmatic-logo.png',
    industry: 'Queue Management',
    region: 'Sweden',
    link: '/portfolio/qmatic',
  },
  {
    name: 'Pinpoint Global Communications',
    logo: '/company-logos/pinpoint-logo.png',
    industry: 'Training and Compliance',
    region: 'United States',
    link: '/portfolio/pinpoint-global-communications',
  },
];

const PortfolioGrid: React.FC = () => {
  return (
    <div className="portfolio-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolio.map(item => (
        <div
          key={item.name}
          className="relative group w-[250px] h-[250px] flex items-center justify-center border border-gray-200 bg-white overflow-hidden"
        >
          <img
            src={item.logo}
            alt={item.name}
            className="grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:-translate-y-3 w-32 h-auto z-10"
          />
          {/* Pills fade in and are centered below the logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2 mt-20 z-0">
              <div className="flex gap-2 justify-center">
                <span className="px-3 py-1 text-xs rounded-full bg-[#001F4D] text-white">
                  {item.industry}
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-[#001F4D] text-white">
                  {item.region}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;
