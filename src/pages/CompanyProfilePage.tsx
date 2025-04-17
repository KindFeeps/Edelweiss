import { useParams, Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

interface Company {
  id: string;
  name: string;
  description: string;
  industry: string;
  country: string;
  logo: string;
  website: string;
  fullDescription?: string;
}

const companies: Record<string, Company> = {
  'equinox-information-systems': {
    id: '1',
    name: 'Equinox Information Systems',
    description: 'Equinox provides data mediation and analytics tools for fraud management, assurance, and network monitoring.',
    industry: 'Telecom',
    country: 'United States',
    logo: 'https://raw.githubusercontent.com/stackblitz/edelweiss/main/companies/equinox-logo.png',
    website: 'https://www.equinoxis.com/',
    fullDescription: `
      Equinox Information Systems provides data mediation and usage analytics tools for fraud management, business assurance, and network monitoring.
      
      Since 1986, more than 380 telecommunications companies have trusted Equinox Information Systems to be their partner.
      
      The team that develops and supports this platform is headquartered in Nashville, Tennessee.
    `,
  },
};

export default function CompanyProfilePage() {
  const { slug } = useParams<{ slug: string }>();
  const company = companies[slug || ''];

  if (!company) {
    return (
      <main className="pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <h1 className="text-2xl font-bold">Company not found</h1>
          <Link to="/portfolio" className="text-blue-600 hover:text-blue-500">
            Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0C2E5B] to-[#3B586A] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-2">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <span className="text-gray-300">/</span>
                </li>
                <li>
                  <Link to="/portfolio" className="text-gray-300 hover:text-white text-sm">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <span className="text-gray-300">/</span>
                </li>
                <li>
                  <span className="text-white text-sm">{company.name}</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Logo and Basic Info */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-8">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-full h-auto object-contain mb-8"
                />
                <div className="space-y-4">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{company.name}</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {company.industry}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {company.country}
                      </span>
                    </div>
                  </div>
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Visit Website
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Company Description */}
            <div className="space-y-8">
              <div className="prose prose-lg">
                {company.fullDescription?.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}