
import React from 'react';
import { motion } from 'framer-motion';

const Shift: React.FC = () => {
  return (
    <section className="min-h-screen py-24 md:py-32 px-6 flex flex-col justify-center items-center bg-[#080808] relative overflow-hidden snap-start snap-always">
      <div className="max-w-6xl w-full text-center space-y-16 md:space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 1.05 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl md:text-9xl font-black mb-4 md:mb-6 tracking-tighter">
            The Shift.
          </h2>
          <p className="text-lg md:text-2xl text-white/40 font-light px-4">From static tools to living intelligence.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left perspective-2000">
          {[
            { phase: "2023", title: "Isolated AI", desc: "You had to go find it. It lived in a box." },
            { phase: "2024", title: "Contextual AI", desc: "It watched your browser. It was almost there." },
            { phase: "2025", title: "Native AI", desc: "It is your voice. It is the keyboard.", highlight: true },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3 + (i * 0.25), duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ rotateX: 5, rotateY: -5, scale: 1.05, transition: { duration: 0.4 } }}
              className={`p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border min-h-[280px] md:h-[350px] flex flex-col justify-center relative overflow-hidden ${item.highlight ? 'border-green-500 bg-green-500/5' : 'border-white/10 bg-white/5'}`}
            >
              {item.highlight && (
                <div className="absolute top-0 right-0 p-6">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                </div>
              )}
              <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">{item.phase}</span>
              <h3 className="text-2xl md:text-3xl font-black mt-3 md:mt-4 mb-4 md:mb-6 leading-tight">{item.title}</h3>
              <p className="text-white/50 text-base md:text-xl font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 1.2 }}
          className="pt-8 md:pt-12"
        >
          <p className="text-xl md:text-2xl font-black text-white uppercase tracking-[0.3em]">
            SendRight <span className="text-green-500">Is</span> Native.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Shift;
