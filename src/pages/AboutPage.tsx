import { useEffect } from 'react';

const stats = [
  { id: 1, name: 'Countries', value: '14+' },
  { id: 2, name: 'Industries', value: '25+' },
  { id: 3, name: 'Companies', value: '90+' },
  { id: 4, name: 'Employees', value: '3000+' },
];

export default function AboutPage() {
  useEffect(() => {
    // Scroll to section if hash is present
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0C2E5B] to-[#3B586A] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-2">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <a href="/" className="text-gray-300 hover:text-white text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <span className="text-gray-300">/</span>
                </li>
                <li>
                  <span className="text-white text-sm">About</span>
                </li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              About Edelweiss
            </h1>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg">
              <p className="text-lg leading-8 text-gray-600">
                Edelweiss Software Group is a Montreal-based software investor dedicated to providing companies with a permanent home. We follow a simple, long-term buy-and-hold approach—offering autonomy, stability, and a supportive community to help leaders grow sustainably.
              </p>
              <p className="text-lg leading-8 text-gray-600 mt-6">
                As an operating group within Valsoft Corp., an international software provider founded in 2015, Edelweiss benefits from Valsoft's extensive experience across 25+ industries in over 50 countries. Valsoft's track record of growth delivers consistent value to both businesses and shareholders.
              </p>
              <p className="text-lg leading-8 text-gray-600 mt-6">
                Edelweiss began around Valsoft's earlier acquisition of a book publishing software company. Since then, we've grown into a diverse group of 11 companies across multiple industries in more than five countries, always committed to nurturing lasting partnerships and empowering leaders.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="bg-[#E8F4FE] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Edelweiss in the Numbers
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="w-[130px] h-[130px] flex flex-col items-center justify-center rounded-full bg-white border-2 border-[#B7D9F8] transition-all duration-300"
                >
                  <dd className="text-2xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                  <dt className="text-sm font-medium leading-6 text-gray-600">
                    {stat.name}
                  </dt>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}