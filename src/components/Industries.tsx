import { Factory, Heart, Hammer, Zap, Building2, Truck, Radio, Wheat, Trees as Tree, Plane, Mountain, Car } from 'lucide-react';
import { clsx } from 'clsx';

const industries = [
  { name: 'Manufacturing', icon: Factory },
  { name: 'Healthcare', icon: Heart },
  { name: 'Construction', icon: Hammer },
  { name: 'Energy', icon: Zap },
  { name: 'Industrials', icon: Building2 },
  { name: 'Transportation', icon: Truck },
  { name: 'Telecom', icon: Radio },
  { name: 'Agriculture', icon: Wheat },
  { name: 'Forestry', icon: Tree },
  { name: 'Aerospace', icon: Plane },
  { name: 'Mining', icon: Mountain },
  { name: 'Automotive', icon: Car },
];

export default function Industries() {
  return (
    <section className="py-24 bg-[#E8F4FE]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Industries We Serve
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Specialized expertise across diverse business sectors
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="flex flex-col items-center gap-4"
              >
                <div className={clsx(
                  'w-[130px] h-[130px]',
                  'flex items-center justify-center',
                  'rounded-full bg-white',
                  'border-2 border-[#B7D9F8]',
                  'transition-all duration-300'
                )}>
                  <industry.icon className="h-10 w-10 text-[#0C2E5B]" aria-hidden="true" />
                </div>
                <h3 className="text-base font-medium text-gray-900 text-center">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}