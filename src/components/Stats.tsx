import { clsx } from 'clsx';

const stats = [
  { id: 1, name: 'Countries', value: '14+' },
  { id: 2, name: 'Industries', value: '25+' },
  { id: 3, name: 'Companies', value: '90+' },
  { id: 4, name: 'Employees', value: '3000+' },
];

export default function Stats() {
  return (
    <section className="bg-[#E8F4FE] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Edelweiss in the Numbers
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 place-items-center">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className={clsx(
                  'w-[130px] h-[130px]',
                  'flex flex-col items-center justify-center',
                  'rounded-full bg-white',
                  'border-2 border-[#B7D9F8]',
                  'transition-all duration-300'
                )}
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
  );
}