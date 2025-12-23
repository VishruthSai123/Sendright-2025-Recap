
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
    <section className="min-h-screen py-32 px-6 flex flex-col justify-center items-center bg-black relative snap-start snap-always">
      <div className="max-w-4xl text-center">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {scenarios.map((text, i) => (
            <motion.span 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-4xl md:text-7xl font-black text-white/10 hover:text-green-500 transition-colors duration-300 cursor-default"
            >
              {text}
            </motion.span>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
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
    </section>
  );
};

export default UseCases;