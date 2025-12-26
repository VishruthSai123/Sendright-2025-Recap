
import React from 'react';
import { motion } from 'framer-motion';
import { HiChatBubbleLeftRight, HiClipboardDocument, HiCpuChip, HiArrowUturnLeft } from 'react-icons/hi2';

const AppSwitchingPain: React.FC = () => {
  const steps = [
    { Icon: HiChatBubbleLeftRight, label: "Chat", color: "bg-blue-500", shadowColor: "shadow-blue-500/30" },
    { Icon: HiClipboardDocument, label: "Copy", color: "bg-yellow-500", shadowColor: "shadow-yellow-500/30" },
    { Icon: HiCpuChip, label: "AI", color: "bg-purple-500", shadowColor: "shadow-purple-500/30" },
    { Icon: HiClipboardDocument, label: "Paste", color: "bg-yellow-500", shadowColor: "shadow-yellow-500/30" },
    { Icon: HiArrowUturnLeft, label: "Back", color: "bg-blue-500", shadowColor: "shadow-blue-500/30" },
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
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500/40 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="max-w-lg sm:max-w-4xl z-10 flex flex-col items-center gap-4 sm:gap-6">
        {/* Headline - Glitch effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-1 sm:space-y-2"
        >
          <motion.h2
            initial={{ skewX: -20, x: -100, opacity: 0 }}
            whileInView={{ skewX: 0, x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-4xl md:text-6xl font-black tracking-tight text-red-500 relative"
          >
            <motion.span
              animate={{ x: [0, -3, 3, -2, 2, 0], opacity: [1, 0.8, 1, 0.9, 1] }}
              transition={{ duration: 0.3, delay: 0.8, repeat: 2 }}
              className="inline-block"
            >
              The Old Way
            </motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xs sm:text-base md:text-xl text-white/40"
          >
            Copy. Paste. Switch. Repeat. Exhausting.
          </motion.p>
        </motion.div>

        {/* MOBILE: Vertical circular flow */}
        <div className="sm:hidden relative py-4">
          <div className="flex flex-col items-center gap-1">
            {steps.map((step, i) => (
              <React.Fragment key={i}>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.3, delay: 0.2 + (i * 0.12), type: "spring", bounce: 0.4 }}
                  className={`${step.color} ${step.shadowColor} w-14 h-14 rounded-xl flex flex-col items-center justify-center shadow-lg z-10`}
                >
                  <step.Icon size={22} color="white" />
                  <span className="text-[8px] font-bold text-white/80 mt-0.5">{step.label}</span>
                </motion.div>
                
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileInView={{ scaleY: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (i * 0.12), duration: 0.2 }}
                    className="w-0.5 h-4 bg-gradient-to-b from-white/20 to-white/10 origin-top"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
          
          {/* Curved return arrow on mobile */}
          <motion.div
            initial={{ opacity: 0, pathLength: 0 }}
            whileInView={{ opacity: 0.2 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute -right-2 top-1/2 -translate-y-1/2 text-white/20"
          >
            <svg width="24" height="80" viewBox="0 0 24 80" fill="none" className="rotate-180">
              <path d="M12 0 C 24 20, 24 60, 12 80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none"/>
              <path d="M8 76 L12 80 L16 76" stroke="currentColor" strokeWidth="1" fill="none"/>
            </svg>
          </motion.div>
        </div>

        {/* DESKTOP: Horizontal flow with connecting line */}
        <div className="hidden sm:block relative py-8">
          {/* Background connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 origin-left"
          />
          
          <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <React.Fragment key={i}>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.4, delay: 0.3 + (i * 0.15), type: "spring", bounce: 0.5 }}
                  className={`${step.color} ${step.shadowColor} w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-xl md:rounded-2xl flex flex-col items-center justify-center shadow-lg relative z-10`}
                >
                  <step.Icon size={28} className="md:w-8 md:h-8 lg:w-10 lg:h-10" color="white" />
                  <span className="text-[8px] md:text-[10px] lg:text-xs font-bold mt-1 text-white/80">{step.label}</span>
                </motion.div>
                
                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 0.4, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.15), duration: 0.3 }}
                    className="text-xl md:text-2xl text-white/30 z-10"
                  >
                    →
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Time wasted counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="space-y-2 pt-4"
        >
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white/20">
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
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
