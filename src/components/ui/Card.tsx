"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

// Example Icon component (replace with lucide-react if desired)
const Icon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

type CardProps = {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode; // For CanvasRevealEffect or other content
};

export function Card({ title, icon, children }: CardProps) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="
        group
        relative
        border border-gray-200 dark:border-white/[0.2]
        max-w-sm w-full mx-auto p-4 h-[30rem] overflow-hidden
        transition-colors duration-300
      "
    >
      {/* Corner Icons */}
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-black dark:text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-black dark:text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-black dark:text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-black dark:text-white" />

      {/* Background CanvasRevealEffect appears on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            <CanvasRevealEffect
              animationSpeed={0.4}
              containerClassName="bg-transparent"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content: icon, title, and any children remain visible; only text color changes */}
      <div
        className="
          relative z-10
          flex flex-col items-center justify-center w-full h-full
          bg-white dark:bg-black
          text-gray-900 dark:text-white
          transition-colors duration-300
          group-hover:text-white
        "
      >
        <div className="mb-4 flex items-center justify-center">{icon}</div>
        <h2 className="text-xl font-bold">{title}</h2>
        {children}
      </div>
    </div>
  );
}
