
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

      <div className="max-w-lg sm:max-w-3xl z-10 space-y-4 sm:space-y-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-4xl md:text-6xl font-black leading-tight"
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
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl sm:text-4xl md:text-6xl font-black leading-tight"
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
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
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
