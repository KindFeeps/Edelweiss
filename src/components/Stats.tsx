import { EdelweissNumbers } from "../components/ui/EdelweissNumbers";

export default function Stats() {
  return (
    <section className="bg-[#E8F4FE] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto mt-16 max-w-7xl">
          <EdelweissNumbers />
        </div>
      </div>
    </section>
  );
}