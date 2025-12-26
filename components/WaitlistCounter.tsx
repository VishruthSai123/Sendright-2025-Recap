
import React, { useState, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { useRef } from 'react';

const WaitlistCounter: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const animation = animate(0, 247892, {
        duration: 2.5,
        onUpdate: (latest) => setCount(Math.floor(latest)),
        ease: [0.16, 1, 0.3, 1]
      });
      return () => animation.stop();
    }
  }, [isInView]);

  const formattedCount = count.toLocaleString();

  return (
    <section ref={ref} className="h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden bg-[#050505]">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0, 0.5, 0], y: -400 }}
            transition={{ duration: 4 + Math.random() * 2, delay: Math.random() * 3, repeat: Infinity }}
            className="absolute bottom-0 w-1 h-1 bg-green-500 rounded-full"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className="max-w-lg sm:max-w-2xl z-10 space-y-4 sm:space-y-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm font-black tracking-[0.3em] sm:tracking-[0.5em] text-green-500"
        >
          WAITLIST
        </motion.p>

        {/* Big counter */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[14vw] sm:text-[12vw] md:text-[10vw] font-black leading-none tracking-tighter">
            {formattedCount}
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="text-base sm:text-xl md:text-2xl text-white/50"
        >
          ready for the revolution
        </motion.p>

        {/* Growing indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 3 }}
          className="flex items-center justify-center gap-2 text-green-500"
        >
          <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>↑</motion.span>
          <span className="text-[10px] sm:text-xs uppercase tracking-wider">Growing every second</span>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistCounter;
