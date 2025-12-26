
import React from 'react';
import { motion } from 'framer-motion';

const GradientText: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden bg-[#050505]">
      {/* Animated gradient background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(34,197,94,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(34,197,94,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(34,197,94,0.15) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      />

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
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="max-w-lg sm:max-w-3xl z-10 space-y-4 sm:space-y-6">
        <motion.h2
          initial={{ opacity: 0, scaleX: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scaleX: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-4xl md:text-6xl font-black leading-tight origin-left"
        >
          <motion.span
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="inline-block bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #22c55e, #ffffff, #22c55e)", backgroundSize: "200% auto" }}
          >
            Your thoughts.
          </motion.span>
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: -80, rotateX: 45, filter: "blur(15px)" }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 80, damping: 12 }}
          className="text-2xl sm:text-4xl md:text-6xl font-black leading-tight"
          style={{ perspective: "1000px" }}
        >
          <motion.span
            animate={{ backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="inline-block bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #ffffff, #22c55e, #ffffff)", backgroundSize: "200% auto" }}
          >
            Their words.
          </motion.span>
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, scale: 2.5, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-4xl md:text-6xl font-black leading-tight text-white"
        >
          <motion.span animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}>
            Seamless.
          </motion.span>
        </motion.h2>
      </div>
    </section>
  );
};

export default GradientText;
