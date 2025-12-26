
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ScrambleText: React.FC = () => {
  const words = ["anxiety", "delay", "friction"];
  const finalWord = "SendRight";
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isScrambling, setIsScrambling] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const chars = "!@#$%^&*()_+-=[]{}|;':\",./<>?";

  const scramble = (target: string, callback?: () => void) => {
    setIsScrambling(true);
    let iterations = 0;
    const maxIterations = 10;
    
    const interval = setInterval(() => {
      setCurrentWord(prev => 
        target.split("").map((char, i) => {
          if (i < iterations) return target[i];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      
      iterations += 1/3;
      
      if (iterations >= target.length) {
        clearInterval(interval);
        setCurrentWord(target);
        setIsScrambling(false);
        callback?.();
      }
    }, 50);
  };

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const cycleWords = () => {
        const nextIndex = wordIndex + 1;
        if (nextIndex < words.length) {
          scramble(words[nextIndex], () => {
            setWordIndex(nextIndex);
          });
        } else {
          // Final scramble to SendRight
          setTimeout(() => scramble(finalWord), 500);
        }
      };
      
      if (wordIndex < words.length) {
        setTimeout(cycleWords, 1500);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [isInView, wordIndex]);

  return (
    <section ref={ref} className="h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden bg-[#050505]">
      {/* Animated glow background */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 40%, rgba(34,197,94,0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 60% 60%, rgba(34,197,94,0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, rgba(34,197,94,0.15) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
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
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.4, 1]
            }}
            transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="max-w-lg sm:max-w-2xl md:max-w-3xl z-10 space-y-6 sm:space-y-8">
        <motion.p
          initial={{ opacity: 0, x: -50, skewX: 15, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, skewX: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white/50 font-light"
        >
          Replace
        </motion.p>

        {/* Scrambling word - Shake entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
          className="min-h-[80px] sm:min-h-[120px] md:min-h-[160px] lg:min-h-[180px] flex items-center justify-center"
        >
          <span 
            className={`text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight transition-colors duration-300 ${
              currentWord === finalWord ? 'text-green-500' : 'text-white/70'
            }`}
            style={{ fontFamily: 'monospace' }}
          >
            {currentWord}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white/50 font-light"
        >
          with <span className="text-green-500">intelligence</span>
        </motion.p>
      </div>
    </section>
  );
};

export default ScrambleText;
