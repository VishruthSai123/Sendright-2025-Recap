
import React from 'react';
import { motion } from 'framer-motion';
import { HiGlobeAmericas, HiGlobeAsiaAustralia, HiGlobeEuropeAfrica } from 'react-icons/hi2';

const GlobalReach: React.FC = () => {
  const regions = [
    { Icon: HiGlobeAmericas, label: "Americas", delay: 0 },
    { Icon: HiGlobeEuropeAfrica, label: "Europe & Africa", delay: 0.1 },
    { Icon: HiGlobeAsiaAustralia, label: "Asia Pacific", delay: 0.2 }
  ];
  
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden bg-[#050505]">
      {/* Rotating circles background */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10"
      >
        <div className="w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full border border-white/20" />
        <div className="absolute w-[180px] sm:w-[300px] h-[180px] sm:h-[300px] rounded-full border border-green-500/20" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-500/30 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ 
              y: [0, -20, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 5 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="max-w-lg sm:max-w-2xl z-10 space-y-6 sm:space-y-8">
        {/* Headline - Spiral in from edges */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-2xl sm:text-4xl md:text-6xl font-black tracking-tight"
        >
          <motion.span
            initial={{ opacity: 0, x: -100, rotate: -20 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            className="inline-block"
          >
            Global by{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 2, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
          >
            Design.
          </motion.span>
        </motion.h2>

        {/* Globe Icons */}
        <div className="flex justify-center gap-4 sm:gap-8 py-4 sm:py-6">
          {regions.map((region, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + region.delay,
                type: "spring",
                bounce: 0.4
              }}
              className="flex flex-col items-center gap-2"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center"
              >
                <region.Icon size={24} color="#22c55e" />
              </motion.div>
              <span className="text-[8px] sm:text-[10px] text-white/40 uppercase tracking-wider">{region.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Stat */}
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sm sm:text-lg md:text-xl text-white/50 px-4"
        >
          <span className="text-green-500 font-bold">50+ languages</span> supported worldwide.
        </motion.p>
      </div>
    </section>
  );
};

export default GlobalReach;
