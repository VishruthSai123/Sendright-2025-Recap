
import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed top-0 left-0 right-0 z-40 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center backdrop-blur-md bg-black/40 border-b border-white/5"
    >
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 md:w-8 md:h-8 bg-green-500 rounded-lg flex items-center justify-center font-black text-black text-lg md:text-xl">S</div>
        <span className="text-lg md:text-xl font-bold tracking-tighter uppercase">SendRight</span>
      </div>
      
      <div className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-widest font-black text-white/40">
        <a href="#vision" className="hover:text-green-500 transition-colors">The Vision</a>
        <a href="#impact" className="hover:text-green-500 transition-colors">Projected Impact</a>
        <a href="#future" className="hover:text-green-500 transition-colors">2026 Roadmap</a>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-white text-black px-4 py-1.5 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-black uppercase tracking-tighter hover:bg-green-500 hover:scale-105 transition-all duration-300 shadow-lg">
          Reserve Access
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
