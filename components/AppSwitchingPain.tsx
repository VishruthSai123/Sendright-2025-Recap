
import React from 'react';
import { motion } from 'framer-motion';

const AppSwitchingPain: React.FC = () => {
  const steps = [
    { icon: "💬", label: "Chat", color: "bg-blue-500" },
    { icon: "📋", label: "Copy", color: "bg-yellow-500" },
    { icon: "🤖", label: "AI", color: "bg-purple-500" },
    { icon: "📋", label: "Paste", color: "bg-yellow-500" },
    { icon: "💬", label: "Back", color: "bg-blue-500" },
  ];

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden bg-[#050505]">
      {/* Animated red pulse background */}
      <motion.div
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-b from-red-500/10 via-transparent to-transparent pointer-events-none"
      />

      {/* Floating error particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-red-500/40 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ 
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="max-w-4xl z-10 space-y-6 sm:space-y-10">
        {/* Headline with shake animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-2 sm:space-y-4"
        >
          <motion.h2
            animate={{ x: [0, -3, 3, -3, 3, 0] }}
            transition={{ duration: 0.5, delay: 1, repeat: 2 }}
            className="text-2xl sm:text-4xl md:text-7xl font-black tracking-tight text-red-500"
          >
            The Old Way
          </motion.h2>
          <p className="text-sm sm:text-lg md:text-2xl text-white/40 px-4">Copy. Paste. Switch. Repeat. Exhausting.</p>
        </motion.div>

        {/* Animated workflow showing the pain */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 md:gap-4 py-4 sm:py-8 px-2">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.3 + (i * 0.2),
                  type: "spring",
                  bounce: 0.5
                }}
                className={`${step.color} w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center shadow-lg`}
              >
                <span className="text-lg sm:text-2xl md:text-3xl">{step.icon}</span>
                <span className="text-[6px] sm:text-[8px] md:text-[10px] font-bold mt-0.5 text-white/80">{step.label}</span>
              </motion.div>
              
              {i < steps.length - 1 && (
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 0.3, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.2) }}
                  className="text-lg sm:text-2xl md:text-3xl text-white/30"
                >
                  →
                </motion.span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Time wasted counter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="space-y-2"
        >
          <p className="text-3xl sm:text-4xl md:text-6xl font-black text-white/20">
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-red-500"
            >
              30+ min
            </motion.span>
            {" "}lost daily
          </p>
          <p className="text-xs sm:text-sm md:text-base text-white/30">just switching between apps</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AppSwitchingPain;
