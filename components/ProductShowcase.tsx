
import React from 'react';
import { motion } from 'framer-motion';

const ProductShowcase: React.FC = () => {
  const keyboardRows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['SHIFT', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL'],
    ['123', 'SPACE', 'GO']
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2
      }
    }
  };

  const keyVariants = {
    hidden: { scale: 0, opacity: 0, y: 10 },
    show: { scale: 1, opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
  };

  return (
    <section className="min-h-screen py-24 md:py-32 px-6 flex flex-col justify-center items-center relative bg-black overflow-hidden snap-start snap-always">
      <div className="absolute inset-0 bg-green-500/5 radial-gradient(circle, green 0%, transparent 70%) opacity-30 pointer-events-none" />
      
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center z-10">
        
        {/* Phone Mockup Area */}
        <div className="order-2 lg:order-1 flex justify-center relative">
          <motion.div 
            initial={{ scale: 0.85, opacity: 0, rotateY: -15 }}
            whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[280px] h-[580px] md:w-[320px] md:h-[650px] bg-[#0a0a0a] rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-[8px] border-[#222] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Screen Content */}
            <div className="flex-1 p-4 pt-12 relative bg-[#0f0f0f]">
              <div className="space-y-4">
                {/* User Message */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="flex justify-end"
                >
                  <div className="bg-green-600 text-white px-3 py-2 md:px-4 md:py-2.5 rounded-2xl rounded-tr-sm text-xs md:text-sm max-w-[85%] shadow-lg leading-relaxed">
                    Client is asking for the update. How do I say it's delayed without sounding incompetent?
                  </div>
                </motion.div>

                {/* AI Processing Indicator */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="flex items-center gap-2 px-1"
                >
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </motion.div>

                {/* AI Response Preview */}
                <motion.div 
                  initial={{ opacity: 0, x: -20, height: 0 }}
                  whileInView={{ opacity: 1, x: 0, height: 'auto' }}
                  transition={{ delay: 2.5, duration: 0.8 }}
                  className="flex justify-start overflow-hidden"
                >
                  <div className="bg-[#1a1a1a] border border-white/10 text-white/90 px-3 py-2 md:px-4 md:py-2.5 rounded-2xl rounded-tl-sm text-xs md:text-sm max-w-[90%] shadow-lg">
                    <span className="text-green-500 font-bold text-[10px] uppercase tracking-wider block mb-1">Generated Draft</span>
                    "We're prioritizing quality on the final deliverables. We'll have the complete package to you by Tuesday."
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Keyboard Container */}
            <div className="bg-[#121212] pt-2 pb-6 px-1.5 border-t border-white/5 relative z-20">
              
              {/* Suggestion Strip */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8 }}
                className="flex gap-2 mb-3 overflow-x-auto px-1 no-scrollbar"
              >
                <div className="bg-green-500/20 text-green-400 text-[10px] font-bold py-1.5 px-3 rounded-lg whitespace-nowrap border border-green-500/30">
                   prioritizing quality...
                </div>
                <div className="bg-white/5 text-white/60 text-[10px] py-1.5 px-3 rounded-lg whitespace-nowrap border border-white/5">
                   needs more time...
                </div>
                <div className="bg-white/5 text-white/60 text-[10px] py-1.5 px-3 rounded-lg whitespace-nowrap border border-white/5">
                   unforeseen issues...
                </div>
              </motion.div>

              {/* Keys Grid */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.6 }}
                className="flex flex-col gap-2 select-none"
              >
                {keyboardRows.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex justify-center gap-1.5 w-full">
                    {row.map((key, keyIndex) => {
                      // Determine key width style
                      let widthClass = "w-8"; // Default
                      if (key === "SPACE") widthClass = "flex-grow max-w-[140px]"; 
                      else if (key === "SHIFT" || key === "DEL" || key === "123" || key === "GO") widthClass = "w-10 md:w-12 bg-[#2a2a2a]";
                      
                      const isAction = ["GO", "SPACE"].includes(key);
                      const bgClass = key === "GO" ? "bg-green-600 text-black font-black" : (["SHIFT", "DEL", "123"].includes(key) ? "bg-[#2a2a2a] text-white/50" : "bg-[#333] text-white");

                      return (
                        <motion.div
                          key={keyIndex}
                          variants={keyVariants}
                          whileTap={{ scale: 0.9, backgroundColor: "#22c55e", color: "#000" }}
                          className={`${widthClass} ${bgClass} h-10 md:h-11 rounded-md flex items-center justify-center text-[10px] md:text-xs font-semibold shadow-md cursor-pointer`}
                        >
                          {key === "SHIFT" ? "⇧" : key === "DEL" ? "⌫" : key}
                        </motion.div>
                      );
                    })}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          {/* Floating Callouts */}
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0, duration: 1.2 }}
            className="absolute top-[20%] -right-4 md:-right-12 bg-black/80 backdrop-blur-xl border border-green-500/30 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-green-500/10 shadow-lg hidden sm:block max-w-[150px]"
          >
            <p className="text-[10px] font-bold text-green-500 mb-0.5">CONTEXT AWARE</p>
            <p className="text-xs text-white/80 leading-tight">Reads the thread, not just the last text.</p>
          </motion.div>
          
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3, duration: 1.2 }}
            className="absolute bottom-[30%] -left-4 md:-left-12 bg-black/80 backdrop-blur-xl border border-white/10 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-lg hidden sm:block max-w-[150px]"
          >
            <p className="text-[10px] font-bold text-white/40 mb-0.5">NATIVE</p>
            <p className="text-xs text-white/80 leading-tight">Zero latency. Built into the OS layer.</p>
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="order-1 lg:order-2 space-y-10 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] md:leading-tight">
              It feels like <br/>
              <span className="text-green-500">Mind Reading.</span>
            </h2>
          </motion.div>
          
          <ul className="space-y-6">
            {[
              "Suggestions appear before you type.",
              "Adjusts tone instantly (Pro vs Casual).",
              "Works in Slack, WhatsApp, iMessage.",
              "Learns your slang and syntax."
            ].map((text, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.8 }}
                className="flex items-center gap-4 text-lg md:text-xl text-white/70"
              >
                <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center shrink-0">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
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
