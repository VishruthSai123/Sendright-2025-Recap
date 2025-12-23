
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.5 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40, filter: "blur(15px)" },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative perspective-1000 overflow-hidden py-32 md:py-24 snap-start snap-always">
      {/* Parallax Background 2025 */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] md:text-[40vw] font-black pointer-events-none select-none text-white/5 leading-none z-0"
      >
        2025
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl z-10 space-y-12 md:space-y-20 lg:space-y-24"
      >
        <motion.div variants={item} className="flex justify-center">
          <span className="px-5 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-500 font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs">
            Finalizing Launch Phase — 2026
          </span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl sm:text-7xl md:text-9xl lg:text-[140px] font-black leading-[1.1] md:leading-[1] tracking-tighter flex flex-col items-center"
        >
          <motion.span variants={item} className="inline-block">The world typed.</motion.span>
          <motion.span variants={item} className="text-white/20 inline-block">Billions of times.</motion.span>
        </motion.h1>
        
        <motion.div variants={item} className="max-w-3xl mx-auto space-y-6 md:space-y-8">
          <p className="text-xl sm:text-2xl md:text-4xl font-light text-white/50 leading-relaxed md:leading-tight px-4">
            Most messages were <span className="text-white italic font-medium">redundant.</span> <br className="hidden sm:block" />
            Most seconds were <span className="text-white italic font-medium">wasted.</span>
          </p>
        </motion.div>

        <motion.div 
          variants={item}
          whileHover={{ scale: 1.05 }}
          className="relative group cursor-pointer pt-4 md:pt-8"
        >
          <div className="absolute -inset-1 bg-green-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-white text-black px-10 py-5 md:px-14 md:py-6 rounded-full inline-block shadow-2xl">
            <span className="text-lg md:text-2xl font-black uppercase tracking-tight">
              Reserve Your Access
            </span>
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-8 md:bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 md:gap-6"
      >
        <div className="w-px h-16 md:h-24 bg-gradient-to-b from-green-500 to-transparent"></div>
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-black text-white/40 whitespace-nowrap">The Global Inefficiency Recap</span>
      </motion.div>
    </section>
  );
};

export default Hero;