
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
      <div className="max-w-lg sm:max-w-2xl z-10 space-y-4 sm:space-y-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-base sm:text-xl md:text-2xl text-white/50 font-light"
        >
          Replace
        </motion.p>

        {/* Scrambling word */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="min-h-[60px] sm:min-h-[100px] md:min-h-[140px] flex items-center justify-center"
        >
          <span 
            className={`text-3xl sm:text-5xl md:text-7xl font-black tracking-tight transition-colors duration-300 ${
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
          className="text-base sm:text-xl md:text-2xl text-white/50 font-light"
        >
          with intelligence
        </motion.p>
      </div>
    </section>
  );
};

export default ScrambleText;
