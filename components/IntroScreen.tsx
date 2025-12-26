import React from 'react';
import { motion } from 'framer-motion';

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  // Floating particles - reduced count for performance
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: (i % 4) + 2,
    x: (i * 7) % 100,
    y: (i * 13) % 100,
    duration: 15 + (i % 5) * 2,
    delay: (i % 5),
  }));

  return (
    <motion.section 
      className="h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden bg-[#050505] fixed inset-0 z-[100] transform-gpu"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            background: [
              "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.25) 0%, transparent 60%)",
              "radial-gradient(circle at 30% 70%, rgba(34,197,94,0.2) 0%, transparent 60%)",
              "radial-gradient(circle at 70% 30%, rgba(34,197,94,0.25) 0%, transparent 60%)",
              "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.25) 0%, transparent 60%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
        {/* Grid pattern */}
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
            className="absolute rounded-full bg-green-500 transform-gpu"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              opacity: 0.3,
              willChange: 'transform, opacity'
            }}
            animate={{
              y: [-20, -80, -20],
              opacity: [0.1, 0.4, 0.1],
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
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-green-500/20 rounded-full blur-[120px] pointer-events-none transform-gpu"
        style={{ willChange: 'transform, opacity' }}
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-1/3 w-48 h-48 sm:w-72 sm:h-72 bg-green-500/15 rounded-full blur-[100px] pointer-events-none transform-gpu"
        style={{ willChange: 'transform, opacity' }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 flex flex-col items-center justify-center gap-6 sm:gap-8"
      >
        {/* Snapshot 2025 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-500 bg-clip-text text-transparent">
              Snapshot 2025
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/50 font-light">
            A look at how the world typed.
          </p>
        </motion.div>

        {/* Animated line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-20 sm:w-32 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full"
        />

        {/* Let's Go Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="mt-4 sm:mt-8 px-12 py-4 sm:px-16 sm:py-5 md:px-20 md:py-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-lg sm:text-xl md:text-2xl font-bold rounded-full hover:shadow-[0_0_60px_rgba(34,197,94,0.5)] transition-all shadow-[0_0_40px_rgba(34,197,94,0.3)] cursor-pointer border border-green-400/30"
        >
          Let's Go
        </motion.button>

        {/* Hint text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-[10px] sm:text-xs text-white/30 mt-2"
        >
          Best experienced with sound 🔊
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default IntroScreen;
