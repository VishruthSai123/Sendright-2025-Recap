
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

      <div className="max-w-4xl space-y-8 sm:space-y-10 md:space-y-16 z-10 px-2">
        {/* Line 1 - slides from left */}
        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter"
        >
          AI changed how
        </motion.h2>
        
        {/* Line 2 - slides from right */}
        <motion.h2
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
        >
          we create.
        </motion.h2>
        
        {/* Follow-up line */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl md:text-3xl font-light text-white/40 mt-4 sm:mt-6"
        >
          But typing stayed the same.
        </motion.p>
      </div>
    </section>
  );
};

export default Shift;
