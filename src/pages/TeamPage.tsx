import { useState, useEffect } from 'react';
import { Linkedin, UserCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

interface TeamPageProps {
  initialTab?: 'leadership' | 'ma';
}

const tabs = [
  { id: 'leadership', name: 'Leadership Team', href: '/leadership-team' },
  { id: 'ma', name: 'M&A Team', href: '/mergers-acquisitions-team' },
];

const team = {
  leadership: [
    {
      name: 'Sam Youssef',
      role: 'Founder and CEO',
      imageUrl: '/team/Sam-Youssef-300x200.jpg',
      linkedinUrl: '#',
    },
    {
      name: 'Anthony Caruso',
      role: 'Investment Partner',
      imageUrl: '/team/Anthony.png',
      linkedinUrl: 'https://www.linkedin.com/in/anthonycarusomtl/',
    },
  ],
  ma: [
    {
      name: 'Michael Halevy',
      role: 'Director of M&A',
      imageUrl: '/team/Michael.png',
      linkedinUrl: 'https://www.linkedin.com/in/michael-halevy/',
    },
    {
      name: 'Evan Chow',
      role: 'Director of M&A',
      imageUrl: '/team/Evan.png',
      linkedinUrl: 'https://www.linkedin.com/in/evan-chow-81043a80/',
    },
    {
      name: 'Laurent Calkoen',
      role: 'Director of M&A',
      imageUrl: '/team/Laurent.png',
      linkedinUrl: 'https://www.linkedin.com/in/laurent-j-calkoen-mba-a1b15a17/',
    },
    {
      name: 'Firas Zakhour',
      role: 'M&A Analyst',
      imageUrl: '/team/Firas.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/firas-zakhour-msc-638995166/?originalSubdomain=ca',
    },
    {
      name: 'Gabriel Dupuis',
      role: 'Senior M&A Analyst',
      imageUrl: '/team/Gabriel.png',
      linkedinUrl: 'https://www.linkedin.com/in/gabriel-dupuis-b0a611167/',
    },
    {
      name: 'Benjamin Dwight',
      role: 'Senior M&A Analyst',
      imageUrl: '/team/Ben.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/benjamindwight/',
    },
  ],
};

export default function TeamPage({ initialTab }: TeamPageProps) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'leadership' | 'ma'>(
    initialTab || (location.pathname === '/mergers-acquisitions-team' ? 'ma' : 'leadership')
  );
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (personName: string) => {
    setImageErrors(prev => ({ ...prev, [personName]: true }));
  };

  useEffect(() => {
    if (location.pathname === '/mergers-acquisitions-team') {
      setActiveTab('ma');
    } else if (location.pathname === '/leadership-team') {
      setActiveTab('leadership');
    }
  }, [location.pathname]);

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
                  <span className="text-white text-sm">Our Team</span>
                </li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Our Team
            </h1>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <Link
                  key={tab.id}
                  to={tab.href}
                  className={clsx(
                    'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium transition-colors duration-200',
                    activeTab === tab.id
                      ? 'border-[#0C2E5B] text-[#0C2E5B]'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  )}
                  aria-current={activeTab === tab.id ? 'page' : undefined}
                >
                  {tab.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Team Grid */}
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {team[activeTab].map((person) => (
              <div key={person.name} className="group relative">
                <div className="flex flex-col items-center w-full h-full">
  <div className="flex justify-center items-center w-full" style={{height: '200px'}}>
    <img
      src={person.imageUrl}
      alt={person.name}
      onError={() => handleImageError(person.name)}
      className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
      style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: 0, display: 'block', filter: 'grayscale(100%)', transition: 'filter 0.3s ease' }}
      onMouseOver={e => (e.currentTarget.style.filter = 'grayscale(0%)')}
      onMouseOut={e => (e.currentTarget.style.filter = 'grayscale(100%)')}
      loading="lazy"
    />
  </div>
  <h3 style={{ color: '#003087', fontWeight: 600, fontSize: '16px', textAlign: 'center', width: '100%', marginTop: '12px', marginBottom: '6px' }}>
    {person.name}
  </h3>
  <p style={{ fontWeight: 400, fontSize: '14px', textAlign: 'center', width: '100%', color: '#000', marginBottom: '10px' }}>
    {person.role}
  </p>
  <a
    href={person.linkedinUrl}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`LinkedIn profile of ${person.name}`}
    className="inline-block transition-colors hover:text-blue-600"
    style={{ textAlign: 'center', marginBottom: '10px' }}
  >
    <Linkedin className="h-5 w-5" style={{ color: '#888', transition: 'color 0.3s' }} />
  </a>
</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}