
import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-end md:justify-center text-center px-6 bg-[#050505] relative py-20 md:py-48 overflow-hidden snap-start snap-always">
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[50%] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full space-y-12 md:space-y-32 z-10 mb-12 md:mb-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.3, rotate: -90 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5, delay: 0.2, type: "spring", bounce: 0.4 }}
          className="w-20 h-20 md:w-36 md:h-36 bg-green-500 rounded-[1.8rem] md:rounded-[3.5rem] mx-auto flex items-center justify-center text-black text-4xl md:text-7xl font-black shadow-[0_0_60px_rgba(34,197,94,0.3)]"
        >
          S
        </motion.div>

        <div className="space-y-6 md:space-y-12">
          <motion.h2
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl md:text-[140px] font-black tracking-tighter leading-[1] md:leading-[0.9]"
          >
            The future is <br/>
            <span className="text-green-500">Waitlisting.</span>
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1.5 }}
            className="text-lg md:text-4xl text-white/30 font-light max-w-4xl mx-auto px-4"
          >
            2025 was the year we built the engine. <br className="hidden md:block" />
            2026 is the year we start the revolution.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center pt-4"
        >
          <button className="w-full md:w-auto px-10 py-5 md:px-20 md:py-7 bg-white text-black text-lg md:text-2xl font-black rounded-full hover:scale-105 transition-all shadow-2xl uppercase tracking-tighter active:scale-95">
            Join the Waitlist
          </button>
          <button className="w-full md:w-auto px-10 py-5 md:px-20 md:py-7 bg-transparent border-2 border-white/10 text-white text-lg md:text-2xl font-black rounded-full hover:border-green-500 hover:text-green-500 transition-all uppercase tracking-tighter backdrop-blur-sm active:scale-95">
            The Roadmap
          </button>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ delay: 2.2, duration: 2 }}
          className="text-[10px] uppercase font-black tracking-[0.5em] text-white pt-8 md:hidden"
        >
          SendRight 2026 / Leading the Evolution
        </motion.p>
      </div>
    </section>
  );
};

export default FinalCTA;
