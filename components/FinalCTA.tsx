
import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden bg-[#050505]">
      {/* Confetti-like particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              y: -20,
            }}
            animate={{ 
              opacity: [0, 0.8, 0],
              y: ['0vh', '100vh']
            }}
            transition={{ 
              duration: 4 + Math.random() * 3,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
            style={{ 
              backgroundColor: i % 3 === 0 ? '#22c55e' : i % 3 === 1 ? '#ffffff' : '#22c55e50',
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Background glow */}
      <motion.div 
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[50%] sm:h-[60%] bg-green-500/15 blur-[120px] sm:blur-[150px] rounded-full pointer-events-none" 
      />

      {/* Top glow accent */}
      <motion.div
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full pointer-events-none"
      />

      <div className="max-w-4xl z-10 space-y-8 sm:space-y-10 md:space-y-16 px-2">
        {/* Main text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light text-white/60"
        >
          This was SendRight in 2025.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            type: "spring",
            bounce: 0.4
          }}
        >
          <button className="px-8 py-4 sm:px-12 sm:py-6 md:px-16 md:py-7 bg-gradient-to-r from-green-400 to-emerald-600 text-black text-base sm:text-xl md:text-2xl font-black rounded-full hover:scale-105 hover:shadow-[0_0_60px_rgba(34,197,94,0.5)] transition-all shadow-[0_0_40px_rgba(34,197,94,0.3)] active:scale-95">
            Explore SendRight
          </button>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/30 pt-4 sm:pt-8"
        >
          sendright.app
        </motion.p>
      </div>
    </section>
  );
};

export default FinalCTA;
