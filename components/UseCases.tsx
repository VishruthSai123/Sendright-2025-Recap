
import React from 'react';
import { motion } from 'framer-motion';

const UseCases: React.FC = () => {
  const scenarios = ["Work messages.", "Personal chats.", "Awkward replies.", "Urgent texts."];

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden bg-[#050505]">
      {/* Animated glow background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(34,197,94,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(34,197,94,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(34,197,94,0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="max-w-3xl space-y-3 sm:space-y-5 z-10">
        {/* Rapid-fire lines - Staggered slide with blur */}
        {scenarios.map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80, filter: "blur(10px)", skewX: i % 2 === 0 ? 10 : -10 }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)", skewX: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-3xl md:text-5xl font-light text-white/50"
          >
            {text}
          </motion.p>
        ))}
        
        {/* Final Line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-4 sm:pt-8"
        >
          <p className="text-2xl sm:text-4xl md:text-6xl font-black text-white">One keyboard.</p>
          <p className="text-2xl sm:text-4xl md:text-6xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">One solution.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;
