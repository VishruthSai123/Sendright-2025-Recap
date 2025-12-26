
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

      <div className="max-w-md sm:max-w-2xl z-10 space-y-6 sm:space-y-10">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-2xl sm:text-4xl md:text-6xl font-black tracking-tight"
        >
          Under The <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Hood</span>
        </motion.h2>

        {/* Tech cards - 2x2 grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
              className="aspect-square bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center p-3 hover:border-green-500/50 transition-colors group"
            >
              <div className="mb-2">
                <tech.Icon size={32} color="#22c55e" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-white/70 uppercase tracking-wider">{tech.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8 }}
          className="text-xs sm:text-base md:text-lg text-white/40"
        >
          Built different. <span className="text-green-500">Engineered for speed.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default TechReveal;
