import { Code, Brain, BarChart as ChartBar, Target, Shield, Network, Globe, Lightbulb } from 'lucide-react';

const platformItems = [
  {
    title: 'Technical Excellence',
    description: 'Access our network of skilled engineers and architects to modernize your technology stack and accelerate development.',
    icon: Code,
  },
  {
    title: 'Innovation Lab',
    description: 'Transform your product with cutting-edge AI and machine learning solutions tailored to your industry needs.',
    icon: Brain,
  },
  {
    title: 'Growth Strategy',
    description: 'Implement proven strategies to expand market reach, optimize customer acquisition, and drive sustainable revenue growth.',
    icon: ChartBar,
  },
  {
    title: 'Operational Optimization',
    description: 'Streamline processes and enhance efficiency with our proven operational frameworks and best practices.',
    icon: Target,
  },
  {
    title: 'Risk Management',
    description: 'Strengthen your security posture and ensure compliance with industry standards and regulations.',
    icon: Shield,
  },
  {
    title: 'Global Network',
    description: 'Connect with our worldwide network of partners, mentors, and industry experts to unlock new opportunities.',
    icon: Network,
  },
  {
    title: 'Market Expansion',
    description: 'Access new markets and territories through our established global presence and local expertise.',
    icon: Globe,
  },
  {
    title: 'Strategic Advisory',
    description: 'Benefit from experienced guidance on product strategy, market positioning, and organizational growth.',
    icon: Lightbulb,
  },
];

export default function Platform() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column */}
          <div className="lg:w-1/4 lg:pr-8">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Our Platform
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We provide a comprehensive suite of services and expertise to help software companies scale, innovate, and achieve sustainable growth.
              </p>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-px bg-gray-200" />

          {/* Right Column */}
          <div className="lg:w-3/4 lg:pl-12">
            <div className="space-y-12">
              {platformItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 p-2 rounded-lg bg-[rgba(12,46,91,0.05)]">
                    <item.icon 
                      className="w-6 h-6 text-primary group-hover:text-primary/80 transition-colors duration-300" 
                      aria-hidden="true" 
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-7 text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
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