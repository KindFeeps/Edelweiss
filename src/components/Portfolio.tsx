const companies = [
  {
    name: 'TechFlow Solutions',
    description: 'Enterprise workflow automation platform',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
  },
  {
    name: 'DataSphere Analytics',
    description: 'AI-powered business intelligence suite',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80',
  },
  {
    name: 'CloudGuard Security',
    description: 'Cloud infrastructure security platform',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2934&q=80',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Our Portfolio</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We partner with exceptional software companies across various verticals, helping them reach their full potential.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {companies.map((company) => (
            <article key={company.name} className="flex flex-col items-start">
              <div className="relative w-full">
                <img
                  src={company.imageUrl}
                  alt={company.name}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    <span className="absolute inset-0" />
                    {company.name}
                  </h3>
                </div>
                <p className="mt-5 text-sm leading-6 text-gray-600">{company.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}