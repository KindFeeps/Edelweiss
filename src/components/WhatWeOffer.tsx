import { Crown, Flag, Globe, Lightbulb, MessageSquare, Users } from 'lucide-react';

const features = [
  {
    name: 'Marketing Team',
    description: 'Expert marketing professionals to help grow your brand and reach.',
    icon: MessageSquare,
  },
  {
    name: 'Leadership Development',
    description: 'Programs to develop and strengthen your leadership team.',
    icon: Flag,
  },
  {
    name: 'Customer Satisfaction',
    description: 'Focus on delivering exceptional customer experiences.',
    icon: Crown,
  },
  {
    name: 'Global Network of Entrepreneurs',
    description: 'Access to a vast network of experienced entrepreneurs.',
    icon: Globe,
  },
  {
    name: 'Talent Development',
    description: 'Resources to attract and develop top talent.',
    icon: Users,
  },
  {
    name: 'Dedicated Advisory Board',
    description: 'Strategic guidance from experienced industry leaders.',
    icon: Lightbulb,
  },
];

export default function WhatWeOffer() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-10">
          {/* Left Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                What's In It For You
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Join the Edelweiss family and access a comprehensive suite of resources, expertise, and support to accelerate your company's growth and success.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="group relative p-6 rounded-xl bg-white border border-gray-200
                           transition-all duration-300 hover:bg-[rgba(12,46,91,0.02)]
                           hover:border-[rgba(12,46,91,0.2)]
                           hover:shadow-[0_0_20px_rgba(12,46,91,0.1)]"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 p-2 rounded-lg bg-[rgba(12,46,91,0.05)]">
                        <feature.icon 
                          className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors duration-300" 
                          aria-hidden="true" 
                        />
                      </div>
                      <h3 className="text-lg font-semibold leading-7 text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {feature.name}
                      </h3>
                    </div>
                    <p className="text-base leading-7 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}