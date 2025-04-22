import InteractivePortfolioGrid from "../components/ui/InteractivePortfolioGrid";

export default function PortfolioPage() {
  return (
    <main className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Explore Our Global Portfolio</h1>
        <p className="mb-8 text-gray-600">
          We operate businesses in over 60 vertical markets across more than 30 countries. Learn more about the 200+ companies that have joined Edelweiss by clicking on the logos below.
        </p>
        <InteractivePortfolioGrid />
      </div>
    </main>
  );
}
