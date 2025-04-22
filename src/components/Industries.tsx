export default function Industries() {
  return (
    <section className="bg-white py-10 overflow-hidden">
      <h2 className="text-center text-sm font-semibold tracking-widest uppercase text-[#3B586A] mb-6">
        OUR BRANDS
      </h2>
      <div className="relative max-w-[1200px] mx-auto overflow-hidden">
        {/* Fade gradients left/right */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to right, white 60%, transparent)'}} />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10" style={{background: 'linear-gradient(to left, white 60%, transparent)'}} />
        <div
          className="flex items-center whitespace-nowrap w-max animate-marquee"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {/* ORIGINAL LOGOS */}
          <img src="/company-logos-svg/apero-solutions.svg" alt="Apero Solutions" className="mx-8 h-[60px] md:h-[80px] w-auto object-contain" />
          <img src="/company-logos-svg/aysling.svg" alt="Aysling" className="mx-8 h-[60px] md:h-[80px] w-auto object-contain" />
          <img src="/company-logos-svg/datatrac.svg" alt="Datatrac" className="mx-8 h-[60px] md:h-[80px] w-auto object-contain" />
          <img src="/company-logos-svg/dpsi.png" alt="DPSI" className="mx-8 h-[60px] md:h-[80px] w-auto object-contain" />
          <img src="/company-logos-svg/edelweiss.jpg" alt="Edelweiss" className="mx-8 h-[60px] md:h-[80px] w-auto object-contain" />
          <img src="/company-logos-svg/equinox.png" alt="Equinox" className="mx-8 h-[60px] md:h-[80px] w-auto object-contain" />
          <img src="/company-logos-svg/gbbis.svg" alt="GBBIS Logo" className="mx-8 h-[60px] md:h-[80px] w-auto object-contain" />
          <img src="/company-logos-svg/idg.png" alt="ID Gateway" className="mx-8 h-[60px] md:h-[80px] w-auto object-contain" />
          <img src="/company-logos-svg/pinpoint.png" alt="Pinpoint" className="mx-8 h-[60px] md:h-[80px] w-auto object-contain" />
          <img src="/company-logos-svg/qmatic.svg" alt="Qmantic" className="mx-8 h-[60px] md:h-[80px] w-auto object-contain" />
          <img src="/company-logos-svg/wisys.svg" alt="WiSys" className="mx-8 h-[60px] md:h-[80px] w-auto object-contain" />
          {/* DUPLICATE FOR LOOPING */}
          <img src="/company-logos-svg/apero-solutions.svg" alt="Apero Solutions" className="mx-8 h-[60px] md:h-[80px] w-auto object-contain" />
          <img src="/company-logos-svg/aysling.svg" alt="Aysling" className="mx-8 h-[60px] md:h-[80px] w-auto object-contain" />
          <img src="/company-logos-svg/datatrac.svg" alt="Datatrac" className="mx-8 h-[60px] md:h-[80px] w-auto object-contain" />
          <img src="/company-logos-svg/dpsi.png" alt="DPSI" className="mx-8 h-[60px] md:h-[80px] w-auto object-contain" />
          <img src="/company-logos-svg/edelweiss.jpg" alt="Edelweiss" className="mx-8 h-[60px] md:h-[80px] w-auto object-contain" />
          <img src="/company-logos-svg/equinox.png" alt="Equinox" className="mx-8 h-[60px] md:h-[80px] w-auto object-contain" />
          <img src="/company-logos-svg/gbbis.svg" alt="GBBIS Logo" className="mx-8 h-[60px] md:h-[80px] w-auto object-contain" />
          <img src="/company-logos-svg/idg.png" alt="ID Gateway" className="mx-8 h-[60px] md:h-[80px] w-auto object-contain" />
          <img src="/company-logos-svg/pinpoint.png" alt="Pinpoint" className="mx-8 h-[60px] md:h-[80px] w-auto object-contain" />
          <img src="/company-logos-svg/qmatic.svg" alt="Qmantic" className="mx-8 h-[60px] md:h-[80px] w-auto object-contain" />
          <img src="/company-logos-svg/wisys.svg" alt="WiSys" className="mx-8 h-[60px] md:h-[80px] w-auto object-contain" />
        </div>
        {/* Hide scrollbars for all browsers */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .overflow-hidden::-webkit-scrollbar { display: none; }
          .overflow-hidden { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>
    </section>
  );
}