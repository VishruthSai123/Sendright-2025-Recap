
import React from 'react';
import { motion } from 'framer-motion';
import { HiLockClosed, HiDevicePhoneMobile, HiNoSymbol, HiBolt } from 'react-icons/hi2';

const PrivacyFirst: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden bg-[#050505]">
      {/* Animated shield background */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.03 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <svg className="w-[70vw] max-w-[500px] h-auto text-green-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      </motion.div>

      {/* Floating security particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-500/30 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="max-w-lg sm:max-w-2xl z-10 flex flex-col items-center justify-center gap-4 sm:gap-6 px-2">
        {/* Lock icon with pulse */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
          className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-green-500 rounded-full"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30">
            <HiLockClosed className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" color="white" />
          </div>
        </motion.div>

        {/* Headlines - Curtain reveal from center */}
        <div className="space-y-2 sm:space-y-3 overflow-hidden">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight"
            >
              Your Words.
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
            >
              Your Device.
            </motion.h2>
          </div>
        </div>

        {/* Privacy features - stacked on mobile */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 w-full">
          {[
            { Icon: HiDevicePhoneMobile, text: "On-device AI" },
            { Icon: HiNoSymbol, text: "No server uploads" },
            { Icon: HiBolt, text: "Instant processing" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 + (i * 0.1) }}
              className="flex items-center justify-center gap-3 px-4 py-3 sm:px-5 sm:py-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl backdrop-blur-sm"
            >
              <item.Icon className="w-5 h-5 sm:w-6 sm:h-6" color="#22c55e" />
              <span className="text-sm sm:text-base md:text-lg font-medium text-white/70">{item.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-xs sm:text-sm md:text-base lg:text-lg text-white/30 pt-2"
        >
          What you type stays with you. <span className="text-green-500">Always.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default PrivacyFirst;
