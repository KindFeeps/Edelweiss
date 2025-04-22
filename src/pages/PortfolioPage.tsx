import React from 'react';
import InteractivePortfolioGrid from '../components/ui/InteractivePortfolioGrid';
import { Helmet } from 'react-helmet';

const PortfolioPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Portfolio | Edelweiss</title>
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600">
            Discover the companies that are part of the Edelweiss family
          </p>
        </div>
        
        <InteractivePortfolioGrid />
      </div>
    </div>
  );
};

export default PortfolioPage;
