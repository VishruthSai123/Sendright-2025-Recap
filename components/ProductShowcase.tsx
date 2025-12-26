
import React from 'react';
import { motion } from 'framer-motion';

const ProductShowcase: React.FC = () => {
  const features = [
    "AI replies inside the keyboard",
    "No app switching",
    "No copy-paste",
    "Works everywhere you type"
  ];

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      <div className="max-w-4xl space-y-10 md:space-y-16">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tight leading-tight"
        >
          SendRight brings AI<br />
          <span className="text-green-500">into the keyboard.</span>
        </motion.h2>

        {/* Phone Mockup Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-48 h-80 md:w-56 md:h-96 bg-gradient-to-b from-white/10 to-white/5 rounded-[2rem] border border-white/10 flex items-center justify-center"
        >
          <div className="text-center space-y-2">
            <div className="text-4xl">⌨️</div>
            <p className="text-xs text-white/40 uppercase tracking-wider">Keyboard Preview</p>
          </div>
        </motion.div>

        {/* Feature Bullets - fade in one by one */}
        <div className="flex flex-col items-center gap-4 md:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.5 + (i * 0.15),
                ease: [0.16, 1, 0.3, 1]
              }}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-lg sm:text-xl md:text-2xl text-white/70">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
