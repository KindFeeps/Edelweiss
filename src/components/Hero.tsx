import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] mt-20 flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/videos/background-video.mp4"
          className="h-full w-full object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C2E5B]/30 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xl font-semibold leading-8 text-white drop-shadow-lg">
            Building a Better Future
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
            We Are Entrepreneurs Who Buy, Enhance and Grow Software Businesses That Provide Mission Critical Services
          </h1>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#about"
              className="rounded-md bg-white px-8 py-4 text-base font-semibold text-[#0C2E5B] shadow hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300"
            >
              Learn more
            </a>
            <a
              href="#contact"
              className="rounded-md bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}