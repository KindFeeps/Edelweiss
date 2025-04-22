import React from "react"
import { motion } from "framer-motion"

import { AnimatedGradient } from "@/components/ui/animated-gradient-with-svg"

interface BentoCardProps {
  title: string
  value: string | number
  subtitle?: string
  colors: string[]
  delay: number
}

const BentoCard: React.FC<BentoCardProps> = ({
  title,
  value,
  subtitle,
  colors,
  delay,
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay + 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="relative overflow-hidden h-full bg-background dark:bg-background/50 rounded-full flex items-center justify-center mx-auto shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <AnimatedGradient colors={colors} speed={0.05} blur="medium" />
      <motion.div
        className="relative z-10 p-3 sm:p-5 md:p-8 text-foreground backdrop-blur-sm flex flex-col items-center justify-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h3 
          className="text-sm sm:text-base md:text-lg text-foreground" 
          variants={item}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-2xl sm:text-4xl md:text-5xl font-medium mb-4 text-foreground"
          variants={item}
        >
          {value}
        </motion.p>
        {subtitle && (
          <motion.p 
            className="text-sm text-foreground/80" 
            variants={item}
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

const AnimatedGradientDemo: React.FC = () => {
  return (
    <div className="w-full bg-background h-full">
      <div className="grid grid-cols-1 md:grid-cols-3 grow h-full">
        <div className="md:col-span-2">
          <BentoCard
            title="Countries"
            value="14+"
            subtitle=""
            colors={["#3B82F6", "#60A5FA", "#93C5FD"]}
            delay={0.2}
          />
        </div>
        <BentoCard
          title="Industries"
          value="25+"
          subtitle=""
          colors={["#60A5FA", "#34D399", "#93C5FD"]}
          delay={0.4}
        />
        <BentoCard
          title="Companies"
          value="90+"
          subtitle=""
          colors={["#F59E0B", "#A78BFA", "#FCD34D"]}
          delay={0.6}
        />
        <div className="md:col-span-3">
          <BentoCard
            title="Employees"
            value="3000+"
            subtitle=""
            colors={["#EC4899", "#F472B6", "#3B82F6"]}
            delay={0.8}
          />
        </div>
      </div>
    </div>
  );
}

export { AnimatedGradientDemo }
