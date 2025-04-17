export default function Partner() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet your forever capital partner
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Edelweiss Software partners with essential software businesses to preserve their legacy and increase the scale of their ambition.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#approach"
              className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Learn more
            </a>
            <a
              href="#contact"
              className="rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
      <div className="mt-16 flex justify-center opacity-10">
        <img
          src="/edelweiss-logo.png"
          alt="Edelweiss flower illustration"
          className="h-32 w-32"
        />
      </div>
    </div>
  );
}