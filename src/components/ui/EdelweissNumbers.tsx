"use client";

import React from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  end: number;
  label: string;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, label, suffix = "+" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (inView) {
      animate(motionValue, end, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest: number) => setValue(Math.floor(latest)),
      });
    }
  }, [inView, end, motionValue]);

  return (
    <div
      ref={ref}
      className="w-28 h-28 md:w-36 md:h-36 rounded-full border border-blue-500 bg-white text-[#08335B] flex flex-col items-center justify-center shadow-md transition-all duration-300 select-none"
      style={{ boxShadow: '0 2px 12px 0 rgba(0,32,91,0.09)' }}
    >
      <div className="text-3xl md:text-4xl font-extrabold flex items-end leading-none">
        {value.toLocaleString()}
        <span className="text-lg md:text-2xl font-extrabold ml-0.5">{suffix}</span>
      </div>
      <div className="text-xs md:text-sm font-semibold mt-2 tracking-tight text-[#08335B]">{label}</div>
    </div>
  );
};

export const EdelweissNumbers: React.FC = () => {
  return (
    <section className="w-full py-16 flex flex-col items-center justify-center">
      {/* Blue underline bar above title */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-gray-900 text-3xl md:text-4xl font-bold text-center mb-12 tracking-tight">Edelweiss in the Numbers</h2>
        <div className="w-full flex flex-wrap justify-center gap-y-8 gap-x-8 md:gap-x-12">
          <Counter end={14} label="Countries" />
          <Counter end={25} label="Industries" />
          <Counter end={90} label="Companies" />
          <Counter end={3000} label="Employees" />
        </div>
      </div>
    </section>
  );
}

