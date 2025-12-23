
import React from 'react';
import { motion } from 'framer-motion';

const ProductShowcase: React.FC = () => {
  return (
    <section className="min-h-screen py-24 md:py-32 px-6 flex flex-col justify-center items-center relative bg-black overflow-hidden snap-start snap-always">
      <div className="absolute inset-0 bg-green-500/5 radial-gradient(circle, green 0%, transparent 70%) opacity-30 pointer-events-none" />
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center z-10">
        <div className="order-2 lg:order-1 flex justify-center relative">
          <motion.div 
            initial={{ scale: 0.85, opacity: 0, rotateY: -15 }}
            whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[260px] h-[520px] md:w-[300px] md:h-[600px] bg-[#1a1a1a] rounded-[2.5rem] md:rounded-[3rem] border-4 md:border-8 border-[#333] shadow-2xl overflow-hidden"
          >
            {/* Mockup Content */}
            <div className="p-4 pt-12">
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="flex justify-end"
                >
                  <div className="bg-green-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-2xl rounded-tr-none text-xs md:text-sm max-w-[85%] shadow-lg">
                    Can you help me reply to this client about the delay?
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8, duration: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/10 text-white/80 px-3 py-1.5 md:px-4 md:py-2 rounded-2xl rounded-tl-none text-xs md:text-sm max-w-[85%] animate-pulse">
                    SendRight is generating...
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Keyboard Area */}
            <div className="absolute bottom-0 left-0 right-0 h-[200px] md:h-[250px] bg-[#111] p-2">
              <div className="w-full h-8 bg-green-500/20 rounded-lg flex items-center px-4 mb-2 gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                <span className="text-[8px] md:text-[10px] text-green-400 font-bold uppercase tracking-wider">AI Mode Active</span>
              </div>
              <div className="grid grid-cols-10 gap-1 opacity-40">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div key={i} className="aspect-square bg-white/10 rounded-sm md:rounded-md" />
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="absolute top-1/4 -right-4 md:right-0 bg-black/80 backdrop-blur-xl border border-green-500/30 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-green-500/10 shadow-lg hidden sm:block"
          >
            <p className="text-[10px] font-bold text-green-500 mb-0.5">REAL-TIME</p>
            <p className="text-xs md:text-sm text-white/90">Contextual suggestions</p>
          </motion.div>
          
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 1.2 }}
            className="absolute bottom-1/4 -left-4 md:left-0 bg-black/80 backdrop-blur-xl border border-white/10 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg hidden sm:block"
          >
            <p className="text-[10px] font-bold text-white/40 mb-0.5">UNIVERSAL</p>
            <p className="text-xs md:text-sm text-white/90 whitespace-nowrap">Works in iMessage, Slack...</p>
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 space-y-10 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2 }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] md:leading-tight">
              One keyboard. <br/>
              Every app. <br/>
              <span className="text-green-500">Instant intelligence.</span>
            </h2>
          </motion.div>
          
          <ul className="space-y-5 md:space-y-6">
            {[
              "AI replies inside the keyboard",
              "No app switching required",
              "No copy-paste friction",
              "Works everywhere you type"
            ].map((text, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }}
                className="flex items-center gap-4 text-lg md:text-2xl text-white/70"
              >
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                  <svg width="10" height="10" md:width="12" md:height="12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <span className="leading-snug">{text}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;