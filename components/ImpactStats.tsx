
import React, { useEffect, useState } from 'react';
import { motion, animate } from 'framer-motion';

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) return;
    const animation = animate(0, value, {
      duration: 2,
      onUpdate: (latest) => setCount(Math.round(latest)),
      ease: [0.16, 1, 0.3, 1]
    });
    return () => animation.stop();
  }, [value, hasAnimated]);

  return (
    <motion.span
      onViewportEnter={() => setHasAnimated(true)}
      viewport={{ once: true, amount: 0.5 }}
    >
      {count}{suffix}
    </motion.span>
  );
};

const ImpactStats: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden bg-[#050505]">
      {/* Subtle background motion */}
      <motion.div 
        animate={{ opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-green-500/5 pointer-events-none"
      />

      {/* Floating stats particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-500/20 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ 
              y: [0, -40, 0],
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 5 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}
      </div>

      <div className="max-w-4xl space-y-8 sm:space-y-12 md:space-y-20 z-10">
        {/* Stats that count up */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2 sm:space-y-4"
        >
          <p className="text-[22vw] sm:text-[18vw] md:text-[12vw] font-black leading-none bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            <Counter value={60} suffix="%" />
          </p>
          <p className="text-base sm:text-xl md:text-3xl text-white/50 font-light">
            faster replies*
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2 sm:space-y-4"
        >
          <p className="text-[18vw] sm:text-[14vw] md:text-[10vw] font-black leading-none text-white">
            <Counter value={2} suffix="h" />
          </p>
          <p className="text-base sm:text-xl md:text-3xl text-white/50 font-light">
            saved daily*
          </p>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          className="text-[10px] sm:text-xs md:text-sm text-white/30 pt-4 sm:pt-8"
        >
          *Based on industry AI productivity benchmarks
        </motion.p>
      </div>
    </section>
  );
};

export default ImpactStats;
