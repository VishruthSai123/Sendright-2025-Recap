
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    show: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  // Floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden bg-[#050505]">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            background: [
              "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.2) 0%, transparent 60%)",
              "radial-gradient(circle at 30% 70%, rgba(34,197,94,0.15) 0%, transparent 60%)",
              "radial-gradient(circle at 70% 30%, rgba(34,197,94,0.2) 0%, transparent 60%)",
              "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.2) 0%, transparent 60%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(34,197,94,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} 
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-green-500"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              opacity: 0.3
            }}
            animate={{
              y: [-20, -100, -20],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-green-500/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-green-500/15 rounded-full blur-[80px] pointer-events-none"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10 flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8"
      >
        {/* Year Badge */}
        <motion.div
          variants={item}
          className="px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-sm"
        >
          <span className="text-green-500 text-xs sm:text-sm font-semibold tracking-wider uppercase">Year in Review</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          variants={item}
          className="text-[15vw] sm:text-[12vw] md:text-[10vw] font-black leading-[0.9] tracking-tighter bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent"
        >
          SendRight
        </motion.h1>
        
        <motion.h2 
          variants={item}
          className="text-[9vw] sm:text-[7vw] md:text-[5vw] font-black leading-[1] tracking-tight"
        >
          <span className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 bg-clip-text text-transparent">Snapshot 2025</span>
        </motion.h2>
        
        {/* Subtext */}
        <motion.p 
          variants={item}
          className="text-base sm:text-lg md:text-2xl font-light text-white/50 mt-2 sm:mt-4 px-4 max-w-md sm:max-w-xl"
        >
          A look at how the world typed.
        </motion.p>

        {/* Animated line */}
        <motion.div
          variants={item}
          className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full mt-4"
        />
      </motion.div>
      
      {/* Scroll Indicator - Centered at bottom */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 md:bottom-12 inset-x-0 flex flex-col items-center justify-center gap-2 sm:gap-3"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center pt-1.5 sm:pt-2"
        >
          <motion.div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full" />
        </motion.div>
        <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/40 font-medium">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;