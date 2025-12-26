
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

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(18)].map((_, i) => (
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

      <div className="max-w-lg sm:max-w-2xl space-y-4 sm:space-y-6 z-10">
        {/* Rising text lines - Cascade blur reveal */}
        {features.map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 60, filter: "blur(20px)", scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-3xl md:text-5xl font-black text-white/70"
          >
            {text}
          </motion.p>
        ))}
        
        {/* Final statement - Flip in from bottom */}
        <motion.div
          initial={{ opacity: 0, rotateX: 90, y: 50 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="pt-4 sm:pt-8"
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          <p className="text-2xl sm:text-4xl md:text-6xl font-black">The keyboard is</p>
          <p className="text-2xl sm:text-4xl md:text-6xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">evolving.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureReady;
