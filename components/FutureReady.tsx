
import React from 'react';
import { motion } from 'framer-motion';

const FutureReady: React.FC = () => {
  return (
    <section id="future" className="min-h-screen py-32 px-6 flex flex-col justify-center items-center bg-black relative snap-start snap-always">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-5xl w-full text-center z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-8xl font-black mb-24"
        >
          2026 & <span className="text-green-500">Beyond</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { title: "Smarter Replies", desc: "True multi-turn context understanding." },
            { title: "Personal Voices", desc: "Cloning your unique typing style perfectly." },
            { title: "Faster Thinking", desc: "Sub-100ms generation for real-time flow." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-left border-l-2 border-green-500/30 pl-8 group hover:border-green-500 transition-colors duration-500"
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-green-500 transition-colors">{item.title}</h3>
              <p className="text-white/50 text-lg group-hover:text-white/80 transition-colors">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-5xl font-bold italic"
        >
          "The keyboard is evolving. <br/>
          <span className="text-green-500">SendRight is leading it.</span>"
        </motion.p>
      </div>
    </section>
  );
};

export default FutureReady;