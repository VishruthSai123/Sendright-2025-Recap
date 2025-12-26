
import React from 'react';
import { motion } from 'framer-motion';
import { HiLightBulb, HiWrenchScrewdriver, HiRocketLaunch, HiFlag, HiSparkles } from 'react-icons/hi2';

const MilestoneTimeline: React.FC = () => {
  const milestones = [
    { date: "JAN", event: "Concept", Icon: HiLightBulb },
    { date: "MAR", event: "Prototype", Icon: HiWrenchScrewdriver },
    { date: "JUN", event: "Beta", Icon: HiRocketLaunch },
    { date: "SEP", event: "100K", Icon: HiFlag },
    { date: "DEC", event: "2026 Ready", Icon: HiSparkles }
  ];

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden bg-[#050505]">
      {/* Animated glow background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, rgba(34,197,94,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 50%, rgba(34,197,94,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 50%, rgba(34,197,94,0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-500/20 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="max-w-lg sm:max-w-3xl w-full z-10">
        {/* Headline - Split words fly in */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-6 sm:mb-10"
        >
          <motion.span 
            initial={{ x: -100, opacity: 0, rotate: -15 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
            className="text-2xl sm:text-4xl md:text-6xl font-black inline-block"
          >
            Our 2025{" "}
          </motion.span>
          <motion.span 
            initial={{ x: 100, opacity: 0, scale: 0.5 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 80 }}
            className="text-2xl sm:text-4xl md:text-6xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent inline-block"
          >
            Journey
          </motion.span>
        </motion.div>

        {/* Timeline - Compact grid on mobile */}
        <div className="grid grid-cols-5 gap-1 sm:gap-3">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
              className="flex flex-col items-center"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-1 sm:mb-2"
              >
                <m.Icon size={16} color="#22c55e" />
              </motion.div>
              <span className="text-[8px] sm:text-xs font-black text-green-500 tracking-wider">{m.date}</span>
              <span className="text-[8px] sm:text-xs text-white/60 font-medium">{m.event}</span>
            </motion.div>
          ))}
        </div>

        {/* Progress line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent mt-4 sm:mt-6 origin-left"
        />
      </div>
    </section>
  );
};

export default MilestoneTimeline;
