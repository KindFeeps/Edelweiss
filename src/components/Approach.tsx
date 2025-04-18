import { Building2, LineChart, Target } from 'lucide-react';

const features = [
  {
    name: 'Buy',
    description: 'We acquire majority stakes in established software companies with proven track records and strong market positions.',
    icon: Building2,
  },
  {
    name: 'Enhance',
    description: 'Through operational expertise and strategic guidance, we help companies optimize their operations and improve their market position.',
    icon: LineChart,
  },
  {
    name: 'Grow',
    description: 'We focus on sustainable, long-term growth through product innovation, market expansion, and strategic acquisitions.',
    icon: Target,
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Our Approach</h2>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Building Enduring Software Companies
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We take a methodical, long-term approach to growing software companies, focusing on sustainable growth and operational excellence.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}