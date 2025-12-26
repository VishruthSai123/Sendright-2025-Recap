
import React from 'react';
import { motion } from 'framer-motion';

const Philosophy: React.FC = () => {
  const statements = [
    "Not a chatbot.",
    "Doesn't replace humans.",
    "Removes friction."
  ];

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden bg-[#050505]">
      {/* Animated glow background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 50% 40%, rgba(34,197,94,0.12) 0%, transparent 55%)",
            "radial-gradient(circle at 50% 60%, rgba(34,197,94,0.12) 0%, transparent 55%)",
            "radial-gradient(circle at 50% 40%, rgba(34,197,94,0.12) 0%, transparent 55%)"
          ]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="max-w-lg sm:max-w-3xl space-y-4 sm:space-y-8 z-10">
        {statements.map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, scale: 0.5, y: 40, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ 
              duration: 0.8, 
              delay: i * 0.3,
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className={`text-xl sm:text-3xl md:text-5xl font-black tracking-tight leading-tight ${
              i === 2 ? 'bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent' : 'text-white'
            }`}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default Philosophy;
