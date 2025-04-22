import { useLocation, Link } from 'react-router-dom';
import { clsx } from 'clsx';

const operations = [
  { name: 'Steve Thomas', title: 'CTO', image: '/team/Steve.png', linkedin: '' },
  { name: 'Hrag Allahourian', title: 'VP Operations', image: '/team/Hrag.png', linkedin: '' },
  { name: 'Maksym Gryn', title: 'VP Operations', image: '/team/Maksym.png', linkedin: '' },
  { name: 'Michelle Lofgren', title: 'Senior HR Business Partner', image: '/team/Michelle.png', linkedin: '' },
  { name: 'Alizée Leizerovici', title: 'Talent Acquisition Business Partner', image: '/team/Alizee.png', linkedin: '' },
  { name: 'Maria Perez', title: 'Head of Marketing', image: '/team/Maria.png', linkedin: '' },
];

const tabs = [
  { id: 'leadership', name: 'Leadership Team', href: '/leadership-team' },
  { id: 'ma', name: 'M&A Team', href: '/mergers-acquisitions-team' },
  { id: 'operations', name: 'Operations Team', href: '/operations-team' },
];

function TeamMemberCard({ name, title, image, linkedin }: { name: string; title: string; image: string; linkedin: string }) {
  return (
    <div className="group relative flex flex-col items-center w-full h-full">
      <div className="flex justify-center items-center w-full" style={{ height: '200px' }}>
        <img
          src={image || '/team/placeholder.png'}
          alt={name}
          className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
          style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: 0, display: 'block', filter: 'grayscale(100%)', transition: 'filter 0.3s ease' }}
          onMouseOver={e => (e.currentTarget.style.filter = 'grayscale(0%)')}
          onMouseOut={e => (e.currentTarget.style.filter = 'grayscale(100%)')}
          loading="lazy"
        />
      </div>
      <h3 style={{ color: '#003087', fontWeight: 600, fontSize: '16px', textAlign: 'center', width: '100%', marginTop: '12px', marginBottom: '6px' }}>{name}</h3>
      <p style={{ fontWeight: 400, fontSize: '14px', textAlign: 'center', width: '100%', color: '#000', marginBottom: '10px' }}>{title}</p>
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`LinkedIn profile of ${name}`}
          className="inline-block transition-colors hover:text-blue-600"
          style={{ textAlign: 'center', marginBottom: '10px' }}
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#888', transition: 'color 0.3s' }}><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.57 1.98 3.57 4.56v4.77z"/></svg>
        </a>
      )}
    </div>
  );
}





export default function OperationsTeam() {
  const location = useLocation();
  return (
    <main className="pt-20">
      {/* Banner Section */}
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
                    location.pathname === tab.href
                      ? 'border-[#0C2E5B] text-[#0C2E5B]'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  )}
                  aria-current={location.pathname === tab.href ? 'page' : undefined}
                >
                  {tab.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Section Title */}
          <h2 className="text-3xl font-bold mb-10 text-center">Operations Team</h2>

          {/* Team Grid */}
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {operations.map((person) => (
              <TeamMemberCard key={person.name} name={person.name} title={person.title} image={person.image} linkedin={person.linkedin} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


