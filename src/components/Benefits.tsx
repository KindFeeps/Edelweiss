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

// GlowCard component for reuse
export const StaticBenefitCard = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
}) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex items-start gap-4 px-6 py-5 w-full max-w-[420px] mx-auto">
      <div className="flex-shrink-0">
        <span className="inline-flex items-center justify-center rounded-full bg-gray-100 w-10 h-10">
          <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
        </span>
      </div>
      <div className="flex-1">
        <h3 className="text-base font-bold text-gray-900 mb-1 text-left">{title}</h3>
        <p className="text-sm text-gray-600 text-left leading-normal">{description}</p>
      </div>
    </div>
  );
};

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
              <StaticBenefitCard
                key={benefit.title}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}