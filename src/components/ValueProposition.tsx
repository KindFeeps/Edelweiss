import { ArrowRight } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2488&q=80',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2501&q=80',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2500&q=80',
];

export default function ValueProposition() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Creating Lasting Value
            </h2>
            <p className="text-lg leading-8 text-gray-600 mb-8">
              We buy, hold forever and create value for our companies by partnering with existing management. Using a proven and creative strategy based on operational excellence, best practices and access to a global network, we are committed to your success.
            </p>
            <a
              href="#approach"
              className="inline-flex items-center rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300"
            >
              WHY CHOOSE US
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
          </div>

          {/* Right Column - Petal Shapes */}
          <div className="relative w-full h-[600px]">
            {/* Petal 1 */}
            <div 
              className="absolute w-[300px] h-[300px] top-0 right-[20%] transform -rotate-15"
              style={{
                clipPath: "path('M150 0C150 0 280 100 280 150C280 200 150 300 150 300C150 300 20 200 20 150C20 100 150 0 150 0Z')",
                backgroundImage: `url(${images[0]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))',
              }}
            />
            
            {/* Petal 2 */}
            <div 
              className="absolute w-[300px] h-[300px] top-[25%] left-[10%] transform rotate-45"
              style={{
                clipPath: "path('M150 0C150 0 280 100 280 150C280 200 150 300 150 300C150 300 20 200 20 150C20 100 150 0 150 0Z')",
                backgroundImage: `url(${images[1]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))',
              }}
            />
            
            {/* Petal 3 */}
            <div 
              className="absolute w-[300px] h-[300px] bottom-0 right-[30%] transform -rotate-30"
              style={{
                clipPath: "path('M150 0C150 0 280 100 280 150C280 200 150 300 150 300C150 300 20 200 20 150C20 100 150 0 150 0Z')",
                backgroundImage: `url(${images[2]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}