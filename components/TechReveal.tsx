
import React from 'react';
import { motion } from 'framer-motion';
import { HiCpuChip, HiBolt, HiLockClosed, HiArrowPath } from 'react-icons/hi2';

const TechReveal: React.FC = () => {
  const techStack = [
    { name: "Neural", Icon: HiCpuChip },
    { name: "Edge AI", Icon: HiBolt },
    { name: "Private", Icon: HiLockClosed },
    { name: "Realtime", Icon: HiArrowPath }
  ];

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden bg-[#050505]">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(34,197,94,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-500/30 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ 
              y: [0, -25, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl z-10 space-y-8 sm:space-y-12">
        {/* Headline - Split from center */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight"
        >
          <motion.span
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block"
          >
            Under The{" "}
          </motion.span>
          <motion.span
            initial={{ x: 50, opacity: 0, scale: 1.5 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
          >
            Hood
          </motion.span>
        </motion.h2>

        {/* Tech cards - 2x2 grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
              className="aspect-square bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center p-4 sm:p-6 hover:border-green-500/50 transition-colors group"
            >
              <div className="mb-3">
                <tech.Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" color="#22c55e" />
              </div>
              <span className="text-xs sm:text-sm md:text-base font-bold text-white/70 uppercase tracking-wider">{tech.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8 }}
          className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white/40"
        >
          Built different. <span className="text-green-500">Engineered for speed.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default TechReveal;
