import { Building2, Cog, Handshake, Crown } from 'lucide-react';

const benefits = [
  {
    title: 'Engineering Excellence',
    description: 'Access our network of world-class engineering talent and accelerate your roadmap with our proven development methodologies.',
    icon: Building2,
  },
  {
    title: 'Applied AI & Innovation',
    description: 'Leverage cutting-edge AI functionality tailored to your unique vertical, guided by our in-house team of AI experts.',
    icon: Cog,
  },
  {
    title: 'Growth & Scale',
    description: 'Tap into our proven playbook for scaling software companies, from customer acquisition to global market expansion.',
    icon: Handshake,
  },
  {
    title: 'Operational Excellence',
    description: 'Benefit from our extensive experience in optimizing software operations, from infrastructure to customer success.',
    icon: Crown,
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Centered Header Section */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            Companies in the Edelweiss family access our platform of software modules, services, and talent to raise their ambitions and de-risk their next phase of growth.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group flex flex-col h-full p-6 rounded-xl bg-white border border-gray-200
                         transition-all duration-300 hover:bg-[#87CEEB]
                         hover:border-[#87CEEB]
                         hover:shadow-[0_0_20px_rgba(135,206,235,0.3)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-[rgba(12,46,91,0.05)] group-hover:bg-white/20 transition-colors duration-300">
                    <benefit.icon 
                      className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" 
                      aria-hidden="true" 
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-7 text-gray-900 group-hover:text-white transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-gray-600 group-hover:text-white transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}