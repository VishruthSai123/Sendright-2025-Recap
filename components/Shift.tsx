
import React from 'react';
import { motion } from 'framer-motion';

const Shift: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden bg-[#050505]">
      {/* Animated gradient bg */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 pointer-events-none"
        style={{
          background: 'conic-gradient(from 0deg, transparent, rgba(34,197,94,0.05), transparent, rgba(34,197,94,0.03), transparent)'
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-500/30 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ 
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="max-w-6xl space-y-6 sm:space-y-8 md:space-y-12 z-10 px-2">
        {/* Line 1 - Slide from left */}
        <motion.h2
          initial={{ x: -100, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none text-white"
        >
          AI changed how
        </motion.h2>
        
        {/* Line 2 - Slide from right */}
        <motion.h2
          initial={{ x: 100, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
        >
          we create.
        </motion.h2>
        
        {/* Follow-up line */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl sm:text-2xl md:text-4xl font-light text-white/40 mt-6 sm:mt-8"
        >
          But typing stayed the same.
        </motion.p>
      </div>
    </section>
  );
};

export default Shift;
