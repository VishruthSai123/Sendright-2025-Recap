
import React from 'react';
import { motion } from 'framer-motion';
import { HiBriefcase, HiFaceSmile, HiRocketLaunch } from 'react-icons/hi2';

const ToneIntelligence: React.FC = () => {
  const tones = [
    { type: "Professional", Icon: HiBriefcase, example: "Happy to schedule at your convenience.", color: "border-blue-500/30 bg-blue-500/10", iconColor: "#60a5fa" },
    { type: "Casual", Icon: HiFaceSmile, example: "Sure! Let's catch up soon", color: "border-yellow-500/30 bg-yellow-500/10", iconColor: "#facc15" },
    { type: "Persuasive", Icon: HiRocketLaunch, example: "Let's secure your spot today.", color: "border-purple-500/30 bg-purple-500/10", iconColor: "#c084fc" }
  ];

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden bg-[#050505]">
      {/* Animated glow background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 50% 30%, rgba(34,197,94,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 70%, rgba(34,197,94,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 30%, rgba(34,197,94,0.1) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      />

      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-500/30 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="max-w-lg w-full z-10 space-y-5 sm:space-y-6">
        {/* Headline - Bouncing wave effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-1"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight flex justify-center flex-wrap">
            {"One Message.".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03, type: "spring", stiffness: 300, damping: 20 }}
                style={{ display: char === " " ? "inline" : "inline-block", width: char === " " ? "0.25em" : "auto" }}
              >
                {char}
              </motion.span>
            ))}
          </h2>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent flex justify-center flex-wrap">
            {"Any Tone.".split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.04, type: "spring", stiffness: 200 }}
                style={{ display: char === " " ? "inline" : "inline-block", width: char === " " ? "0.25em" : "auto" }}
              >
                {char}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        {/* Input message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-xl p-3 mx-auto"
        >
          <p className="text-[10px] text-white/40 mb-1 uppercase tracking-wider">Your intent:</p>
          <p className="text-sm sm:text-base text-white/80">"Want to meet next week"</p>
        </motion.div>

        {/* Tone variations */}
        <div className="space-y-2 sm:space-y-3">
          {tones.map((tone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 + (i * 0.15) }}
              className={`${tone.color} border rounded-xl p-3 text-left`}
            >
              <div className="flex items-center gap-2 mb-1">
                <tone.Icon size={16} color={tone.iconColor} />
                <span className="text-[10px] sm:text-xs font-bold text-white/60 uppercase tracking-wider">{tone.type}</span>
              </div>
              <p className="text-white/90 text-xs sm:text-sm">"{tone.example}"</p>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="text-[10px] sm:text-xs text-white/40 pt-1"
        >
          Context-aware. <span className="text-green-500">Zero editing.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default ToneIntelligence;
