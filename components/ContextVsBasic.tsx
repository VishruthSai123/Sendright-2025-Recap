
import React from 'react';
import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi2';

const ContextVsBasic: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden bg-[#050505]">
      {/* Animated glow background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 30% 40%, rgba(34,197,94,0.12) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 60%, rgba(34,197,94,0.12) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 40%, rgba(34,197,94,0.12) 0%, transparent 50%)"
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
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="max-w-lg sm:max-w-xl w-full z-10 space-y-4 sm:space-y-6" style={{ perspective: "1000px" }}>
        {/* Headline - 3D flip in */}
        <motion.h2
          initial={{ opacity: 0, rotateX: -90, y: -30 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl sm:text-3xl md:text-5xl font-black tracking-tight px-2"
          style={{ transformOrigin: "center top" }}
        >
          Beyond <span className="text-white/30">Next Word</span>
        </motion.h2>

        {/* Comparison Cards - Stacked on mobile */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 mt-4">
          {/* Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-white/40 uppercase tracking-wider">Basic Keyboard</p>
              <span className="px-2 py-0.5 bg-red-500/20 rounded-full text-[10px] font-bold text-red-400">OLD</span>
            </div>
            <div className="bg-black/30 rounded-xl p-3 mb-2">
              <p className="text-white/80 text-sm">"I'll be there at..."</p>
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {["the", "10", "noon"].map((word, i) => (
                <span key={i} className="px-2 py-1 bg-white/10 rounded text-xs text-white/50">{word}</span>
              ))}
            </div>
          </motion.div>

          {/* SendRight Way */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-green-500/10 border border-green-500/30 rounded-2xl p-4 text-left"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs text-green-500/60 uppercase tracking-wider">SendRight</p>
              <span className="px-2 py-0.5 bg-green-500/20 rounded-full text-[10px] font-bold text-green-400">SMART</span>
            </div>
            <div className="bg-black/30 rounded-xl p-3 mb-2">
              <p className="text-white/50 text-xs mb-1">Context: "Meeting at 3pm?"</p>
            </div>
            <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-3">
              <p className="text-green-400 text-xs mb-1 flex items-center gap-1">
                <HiSparkles size={12} color="#4ade80" /> Smart reply:
              </p>
              <p className="text-white text-sm">"Sure, 3pm works! See you then."</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-xs sm:text-sm md:text-base text-white/40 pt-2"
        >
          <span className="text-green-500">Intent</span>, not just words
        </motion.p>
      </div>
    </section>
  );
};

export default ContextVsBasic;
