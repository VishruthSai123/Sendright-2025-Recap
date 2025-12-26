
import React from 'react';
import { motion } from 'framer-motion';

const BeforeAfter: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden bg-[#050505]">
      {/* Gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-red-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-green-500/5 to-transparent" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-green-500/30' : 'bg-white/20'}`}
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="max-w-5xl w-full space-y-8 sm:space-y-12 md:space-y-16 z-10 px-2">
        {/* Before - Shrink and fade with distortion */}
        <motion.div
          initial={{ opacity: 0, scale: 1.3, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <p className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-light text-white/30 px-2">
            5 minutes to write a reply
          </p>
          {/* Animated strike-through line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-1/2 left-0 right-0 h-0.5 sm:h-1 bg-red-500 origin-left"
          />
        </motion.div>

        {/* VS Divider */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.8, type: "spring", bounce: 0.6 }}
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/30"
        >
          <span className="text-black font-black text-base sm:text-lg md:text-xl">VS</span>
        </motion.div>

        {/* After - Glowing appearance */}
        <motion.div
          initial={{ opacity: 0, x: 50, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="px-2"
        >
          <p className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-black text-white">
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">5 seconds</span> with SendRight
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
