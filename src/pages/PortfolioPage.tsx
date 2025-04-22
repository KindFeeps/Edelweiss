import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { clsx } from 'clsx';
import Dropdown from '../components/Dropdown';
import CompanyModal from '../components/CompanyModal';

interface Company {
  id: string;
  name: string;
  description: string;
  industry: string;
  country: string;
  logo: string;
  website: string;
  founded?: string;
  acquired?: string;
  headquarters?: string;
  fullDescription?: string;
  subtitle?: string;
}

const companies: Company[] = [
  {
    id: '1',
    name: 'Equinox Information Systems',
    description: 'Equinox provides data mediation and analytics tools for fraud management, assurance, and network monitoring.',
    industry: 'Telecom',
    country: 'United States',
    logo: '/company-logos-svg/equinox.png',
    website: 'https://www.equinoxis.com/',
    founded: '1986',
    acquired: '2023',
    headquarters: 'Nashville, Tennessee',
    fullDescription: `
      Equinox Information Systems provides data mediation and usage analytics tools for fraud management, business assurance, and network monitoring.
      
      Since 1986, more than 380 telecommunications companies have trusted Equinox Information Systems to be their partner.
      
      The team that develops and supports this platform is headquartered in Nashville, Tennessee.
    `,
  },
  {
    id: '2',
    name: 'GbBIS',
    description: 'Geographic-based business intelligence tools for territory mapping, delivery routes, and analytics.',
    industry: 'Geospatial',
    country: 'United States',
    logo: '/company-logos-svg/gbbis.svg',
    website: 'https://www.gbbis.com/',
    headquarters: 'United States',
    subtitle: 'Geographic Information Systems',
    fullDescription: `
      GbBIS, a division of Intelligent Direct Inc., is a leading provider of geographic-based information solutions, providing companies with the tools they need to find success. Whether they need help defining sales territories, planning delivery routes, profiling customers, finding new customers, identifying new markets, GeoCoding locations, or with any number of business solutions, GbBIS has constantly met the needs of its clients on a regular basis.
    `,
  },
  {
    id: '3',
    name: 'WiSys',
    description: 'Warehouse management software providing visibility in controlling materials and finished goods.',
    industry: 'Warehouse Management',
    country: 'United States',
    logo: '/company-logos-svg/wisys.svg',
    website: 'https://www.wisys.com/',
    headquarters: 'United States',
    subtitle: 'Warehouse Management',
    fullDescription: `
      Warehouse management software providing visibility in controlling the movement, storage and accounting of materials and finished goods through the warehouse. Has features including inventory management, pallet management, order management, cycle counting and shipping.
    `,
  },
  {
    id: '4',
    name: 'Datatrac',
    description: 'Last-mile courier software delivering scalable solutions for all courier sizes.',
    industry: 'Logistics',
    country: 'United States',
    logo: '/company-logos-svg/datatrac.svg',
    website: 'https://www.datatrac.com/',
    headquarters: 'United States',
    subtitle: 'Efficient technology providing a best-in-class experience and superior performance for its customers',
    fullDescription: `
      Datatrac is the industry leader in last-mile courier software. Its product suite offers scalable solutions for courier companies of all sizes. For over 40 years, Datatrac has created intuitive products to streamline courier operations and help businesses thrive.
    `,
  },
  {
    id: '5',
    name: 'Edelweiss',
    description: 'Digital solutions trusted by over 250,000 book professionals.',
    industry: 'Book Industry Software',
    country: 'United States',
    logo: '/company-logos-svg/edelweiss.jpg',
    website: 'https://www.edelweissplus.com/',
    founded: '2002',
    headquarters: 'United States',
    subtitle: 'Book Industry Software',
    fullDescription: `
      Edelweiss provides digital solutions that make the lives of book professionals easier. Founded in 2002, more than 1,200 customers and over 250,000 users trust Edelweiss to be their partner and trusted resource. For more information about Edelweiss:
    `,
  },
  {
    id: '6',
    name: 'DP Solutions Inc.',
    description: 'Computerized maintenance and asset management software for manufacturers and facility managers.',
    industry: 'Asset Management',
    country: 'United States',
    logo: '/company-logos-svg/dpsi.png',
    website: 'https://dpsi.com/',
    founded: '1986',
    headquarters: 'United States',
    subtitle: 'Computerized Maintenance Management Software (CMMS) / Enterprise Asset Management (EAM)',
    fullDescription: `
      DPSI was founded in 1986, with the purpose of empowering manufacturers, distributors, and facility managers to improve maintenance operations and realize significant efficiencies. DPSI's flagship maintenance products, PMC and iMaint, provide clients many enhanced features and options for all size maintenance organizations, including data mining with dashboards and KPIs, and integration with other systems. Versions are available for both cloud-hosted and on-premises implementation at client sites.

      DPSI's customers have come to rely on these products to improve their day-to-day operations and increase their assets' throughput.
    `,
  },
  {
    id: '7',
    name: 'Aysling',
    description: 'CRM, advertising, and business process software for media publishers.',
    industry: 'Broadcast & Media Entertainment',
    country: 'United States',
    logo: '/company-logos-svg/aysling.svg',
    website: 'https://www.aysling.com/',
    headquarters: 'United States',
    subtitle: 'Broadcast & Media Entertainment',
    fullDescription: `
      Aysling offers software solutions to digital and print media publishers across the globe. Their platform automates the selling processes, manages advertising inventory, centralizes CRM data, fulfills the accounting processes, and provides their customers with relevant insight. The solution is adapted to the needs of digital and print publishers.
    `,
  },
  {
    id: '8',
    name: 'Apero Solutions Inc.',
    description: 'ERP and WMS software provider serving hard goods distributors for 30+ years.',
    industry: 'Enterprise Resource Planning',
    country: 'Canada',
    logo: '/company-logos-svg/apero-solutions.svg',
    website: 'https://aperosolutions.com/',
    headquarters: 'Alberta, Canada',
    subtitle: 'Leading North American Enterprise Resource Planning (ERP) and Warehouse Management System (WMS) software provider',
    fullDescription: `
      Apero Solutions, headquartered in Alberta, Canada, is a dynamic company specializing in ERP & WMS technology solutions for the hard goods distribution industry. Apero has been providing mission-critical software to its clients for more than 30 years. With a fully integrated ERP product, Latitude, together with its WMS, Pinpoint, Apero has been working with hard goods distributors in multiple verticals to help better manage and improve their businesses with the goal of opening new possibilities for business expansion, inventory optimization, and continuous improvement. Apero's software matches with the business identity and functionality.
    `,
  },
  {
    id: '9',
    name: 'IDGateway',
    description: 'Technology security solutions for high-security and regulated industries.',
    industry: 'Aviation',
    country: 'United Kingdom',
    logo: '/company-logos-svg/idg.png',
    website: 'https://www.idgateway.co.uk/',
    founded: '2012',
    headquarters: 'Farnborough, United Kingdom',
    subtitle: 'Aviation Security Solutions',
    fullDescription: `
      Founded in 2012, IDGateway is dedicated to creating innovative technology security software solutions, VettingGateway and AirportGateway. IDGateway's solutions are designed to uniquely enhance background checking and ID pass process for high-security or regulated businesses. Trusted by leading organizations such as Heathrow and Gatwick Airports, The Restaurant Group PLC and Wilson James, the team supports and develops its technology in Farnborough, UK.
    `,
  },
  {
    id: '10',
    name: 'Qmatic',
    description: 'Global leader in customer journey and queue management.',
    industry: 'Queue Management',
    country: 'Sweden',
    logo: '/company-logos-svg/qmatic.svg',
    website: 'https://www.qmatic.com/',
    headquarters: 'Sweden',
    subtitle: 'Customer Journey Management',
    fullDescription: `
      Qmatic is a global leader in customer journey management solutions, helping organizations connect people to services through streamlined and personalized experiences. Their platform empowers public institutions, healthcare providers, financial institutions, and retail brands to manage queues, appointments, and service delivery across both physical and digital channels. With a presence in over 120 countries, Qmatic's technology enhances operational efficiency while improving the customer and employee experience.
    `,
  },
  {
    id: '11',
    name: 'Pinpoint Global Communications',
    description: 'Enterprise LMS and compliance software for healthcare and wealth management.',
    industry: 'Training and Compliance',
    country: 'United States',
    logo: '/company-logos-svg/pinpoint.png',
    website: 'https://www.pinpointglobal.com/',
    founded: '2001',
    headquarters: 'Nashua, New Hampshire',
    subtitle: 'Training and Compliance Solutions',
    fullDescription: `
      Pinpoint Global Communications provides enterprise learning management system, compliance and Medicare solutions to wealth management firms and health insurance networks and providers. Since 2001, customers have trusted Pinpoint Global Communications to be their partner. The team that develops and supports this platform is headquartered in Nashua, New Hampshire.
    `,
  },
];

const countries = [
  'United States',
  'United Kingdom',
  'Canada',
  'Sweden',
  'Belgium',
];

export default function PortfolioPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const industries = useMemo(() => {
    return [...new Set(companies.map(company => company.industry))].sort();
  }, []);

  const filteredCompanies = useMemo(() => {
    return companies.filter((company) => {
      const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          company.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesIndustry = selectedIndustries.length === 0 || selectedIndustries.includes(company.industry);
      const matchesCountry = selectedCountries.length === 0 || selectedCountries.includes(company.country);
      return matchesSearch && matchesIndustry && matchesCountry;
    });
  }, [searchQuery, selectedIndustries, selectedCountries]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedIndustries([]);
    setSelectedCountries([]);
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0C2E5B] to-[#3B586A] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Explore Our Global Portfolio
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-3xl">
              We operate businesses in over 40 vertical markets across more than 50 countries. 
              Learn more about the 200+ companies that have joined Valsoft Group by clicking on the logos below.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filters */}
          <div className="mb-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                  Search
                </label>
                <div className="relative">
                  <input
                    id="search"
                    type="text"
                    placeholder="Search companies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <Dropdown
                options={industries}
                selected={selectedIndustries}
                onChange={setSelectedIndustries}
                placeholder="Select Industries"
                label="Vertical Market"
              />

              <Dropdown
                options={countries}
                selected={selectedCountries}
                onChange={setSelectedCountries}
                placeholder="Select Countries"
                label="Country"
              />
            </div>

            {/* Active Filters */}
            {(selectedIndustries.length > 0 || selectedCountries.length > 0 || searchQuery) && (
              <div className="flex items-center gap-4">
                <div className="flex flex-wrap gap-2">
                  {selectedIndustries.map((industry) => (
                    <span
                      key={industry}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                    >
                      {industry}
                      <button
                        onClick={() => setSelectedIndustries(prev => prev.filter(i => i !== industry))}
                        className="ml-2 hover:text-blue-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </span>
                  ))}
                  {selectedCountries.map((country) => (
                    <span
                      key={country}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800"
                    >
                      {country}
                      <button
                        onClick={() => setSelectedCountries(prev => prev.filter(c => c !== country))}
                        className="ml-2 hover:text-green-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </span>
                  ))}
                </div>
                <button
                  onClick={resetFilters}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

          {/* Companies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company) => (
              <div
                key={company.id}
                className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedCompany(company)}
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-100 p-8">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-contain transform transition-transform duration-300 group-hover:-translate-y-2"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {company.industry}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {company.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {company.description}
                  </p>
                  <button
                    onClick={() => setSelectedCompany(company)}
                    className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    View
                    <span className="ml-2" aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Modal */}
      <CompanyModal
        company={selectedCompany}
        isOpen={!!selectedCompany}
        onClose={() => setSelectedCompany(null)}
      />
    </main>
  );
}