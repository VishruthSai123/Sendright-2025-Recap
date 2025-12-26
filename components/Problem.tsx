
import React from 'react';
import { motion } from 'framer-motion';

const Problem: React.FC = () => {
  const words = ["Typing", "is", "still", "slow.", "Repetitive.", "Manual."];

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden bg-[#050505]">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-500/30 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2, 
              repeat: Infinity,
              delay: Math.random() * 2 
            }}
          />
        ))}
      </div>

      {/* Big Number */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-6 sm:mb-8 md:mb-12"
      >
        <h2 className="text-[20vw] sm:text-[16vw] md:text-[12vw] font-black leading-none tracking-tighter">
          <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">100B+</span>
        </h2>
        <p className="text-sm sm:text-lg md:text-2xl text-white/40 font-light mt-2 md:mt-4 px-4">
          messages sent daily worldwide
        </p>
      </motion.div>

      {/* Word-by-word animation */}
      <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-3 gap-y-1 md:gap-x-5 px-4 max-w-3xl">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8 + (i * 0.15),
              ease: [0.16, 1, 0.3, 1]
            }}
            className="text-xl sm:text-2xl md:text-5xl font-light text-white/60"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default Problem;
