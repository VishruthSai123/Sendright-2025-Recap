
import React from 'react';
import { motion } from 'framer-motion';

const Philosophy: React.FC = () => {
  return (
    <section id="vision" className="min-h-screen py-32 px-6 flex flex-col justify-center items-center bg-black text-center relative overflow-hidden snap-start snap-always">
      <div className="absolute inset-0 bg-green-500/5 opacity-20 pointer-events-none" />
      
      <div className="max-w-5xl space-y-24 z-10">
        {[
          "SendRight is not a chatbot.",
          "It doesn't replace humans.",
          "It removes friction between thought and reply."
        ].map((text, i) => (
          <motion.div
            key={i}
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", opacity: 0, y: 40 }}
            whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.8, delay: 0.2 + (i * 0.6), ease: [0.16, 1, 0.3, 1] }}
            className={`text-5xl md:text-8xl font-black leading-tight tracking-tighter ${i === 2 ? 'text-green-500' : 'text-white'}`}
          >
            {text}
          </motion.div>
        ))}

        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.2, duration: 1.2, ease: "circOut" }}
          className="w-24 h-1 bg-green-500 mx-auto rounded-full mt-12"
        />
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.7, duration: 1 }}
          className="text-sm tracking-[0.5em] uppercase text-white/20 font-black"
        >
          Our Core Intent
        </motion.p>
      </div>
    </section>
  );
};

export default Philosophy;
