
import React from 'react';
import { motion } from 'framer-motion';

const UseCases: React.FC = () => {
  const scenarios = [
    "Professional pitches.",
    "Personal connections.",
    "Difficult negotiations.",
    "Awkward apologies.",
    "Urgent updates.",
    "Heartfelt replies."
  ];

  return (
    <section className="h-[140vh] bg-black relative snap-start snap-always">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center py-32 px-6 overflow-hidden">
        <div className="max-w-4xl text-center">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {scenarios.map((text, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, y: 20, color: "rgba(255,255,255,0.1)" }}
                whileInView={{ opacity: 1, y: 0, color: "rgba(255,255,255,0.6)" }} 
                whileHover={{ color: "#22c55e", scale: 1.05, opacity: 1 }}
                whileTap={{ color: "#22c55e", scale: 0.95, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.2 + (i * 0.1) },
                  y: { duration: 0.6, delay: 0.2 + (i * 0.1) },
                  color: { duration: 0.3 },
                  scale: { duration: 0.2 }
                }}
                className="text-4xl md:text-7xl font-black cursor-pointer select-none"
              >
                {text}
              </motion.span>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-24 space-y-4"
          >
            <p className="text-3xl md:text-5xl font-light text-white/40 italic">
              Different situations.
            </p>
            <p className="text-4xl md:text-6xl font-black">
              One solution.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
