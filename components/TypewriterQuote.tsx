
import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const TypewriterQuote: React.FC = () => {
  const quote = "The best interface is no interface.";
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && !isTyping) {
      setIsTyping(true);
      let i = 0;
      const interval = setInterval(() => {
        if (i < quote.length) {
          setDisplayText(quote.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 60);
      return () => clearInterval(interval);
    }
  }, [isInView, isTyping]);

  return (
    <section ref={ref} className="h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-green-500/5 to-transparent">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-500/30 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="max-w-lg sm:max-w-2xl md:max-w-3xl z-10 px-2">
        {/* Quote mark */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute text-[120px] sm:text-[180px] font-serif text-green-500 -top-4 sm:top-0 left-4 sm:left-1/4 pointer-events-none select-none"
        >
          "
        </motion.span>

        {/* Typewriter text */}
        <p className="text-lg sm:text-2xl md:text-4xl font-light leading-relaxed text-white/90 relative z-10">
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-0.5 h-5 sm:h-7 md:h-10 bg-green-500 ml-1 align-middle"
          />
        </p>

        {/* Author */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-6 sm:mt-10 text-xs sm:text-sm text-white/30 uppercase tracking-[0.2em]"
        >
          — SendRight
        </motion.p>
      </div>
    </section>
  );
};

export default TypewriterQuote;
