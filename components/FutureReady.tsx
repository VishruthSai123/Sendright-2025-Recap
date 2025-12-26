
import React from 'react';
import { motion } from 'framer-motion';

const FutureReady: React.FC = () => {
  const features = ["Smarter replies.", "More context.", "Faster thinking."];

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden bg-[#050505]">
      {/* Subtle glow background */}
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-green-500/10 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-lg sm:max-w-2xl space-y-4 sm:space-y-6 z-10">
        {/* Rising text lines */}
        {features.map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="text-xl sm:text-3xl md:text-5xl font-black text-white/70"
          >
            {text}
          </motion.p>
        ))}
        
        {/* Final statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-4 sm:pt-8"
        >
          <p className="text-2xl sm:text-4xl md:text-6xl font-black">The keyboard is</p>
          <p className="text-2xl sm:text-4xl md:text-6xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">evolving.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureReady;
