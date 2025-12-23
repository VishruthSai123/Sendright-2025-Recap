
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Problem: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax offsets for the floating cards
  const y1 = useTransform(scrollYProgress, [0.05, 0.4], [120, -80]);
  const y2 = useTransform(scrollYProgress, [0.05, 0.4], [160, 40]);
  const y3 = useTransform(scrollYProgress, [0.05, 0.4], [200, 100]);
  const rotate = useTransform(scrollYProgress, [0.05, 0.4], [-8, 8]);

  return (
    <section className="min-h-screen py-20 md:py-64 px-6 flex flex-col justify-center items-center bg-black relative overflow-hidden snap-start snap-always">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center z-10">
        
        {/* Left Column: Narrative + Fast Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 md:space-y-16"
        >
          <div className="inline-block px-4 py-1.5 bg-red-500/10 rounded-full text-red-500 text-[10px] font-black tracking-[0.3em] uppercase">
            GLOBAL FRICTION RECAP
          </div>
          
          <div className="space-y-6">
            <h2 className="text-5xl sm:text-6xl md:text-[110px] font-black leading-[1.1] md:leading-[0.95] tracking-tighter">
              Humanity is <br/>
              <span className="text-white/20">Stalling.</span>
            </h2>
            <p className="text-lg md:text-3xl text-white/40 font-light leading-relaxed max-w-2xl">
              In 2025, we sent 100B+ messages daily. Industry data confirms that 80% of typing effort is wasted on anxiety, repetition, and correction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 p-6 bg-white/5 rounded-[2rem] border border-white/5 backdrop-blur-sm"
            >
              <div className="text-2xl text-red-500">⚠</div>
              <div className="space-y-1">
                <p className="text-lg font-black leading-none">40% Cognitive Drain</p>
                <p className="text-[8px] text-white/30 uppercase tracking-[0.2em] font-black">Productivity Loss</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 p-6 bg-green-500/5 rounded-[2rem] border border-green-500/10 backdrop-blur-sm"
            >
              <div className="text-2xl text-green-500">⏱</div>
              <div className="space-y-1">
                <p className="text-lg font-black leading-none">8B+ Hours Lost</p>
                <p className="text-[8px] text-white/30 uppercase tracking-[0.2em] font-black">Global Annual Waste</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Visual Floating Stats */}
        <div className="relative h-[500px] sm:h-[600px] lg:h-[750px] w-full flex items-center justify-center mt-10 lg:mt-0">
          
          {/* Card 1: Manual Messages */}
          <motion.div 
            style={{ y: y1, rotate: rotate }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 right-2 lg:right-10 p-6 sm:p-8 lg:p-14 bg-[#111] border border-white/10 rounded-[2.5rem] lg:rounded-[4rem] backdrop-blur-3xl z-20 shadow-2xl scale-[0.85] sm:scale-90 lg:scale-100"
          >
            <p className="text-5xl sm:text-6xl lg:text-8xl font-black text-green-500">2.5T</p>
            <p className="text-white/30 uppercase tracking-[0.2em] text-[8px] lg:text-[10px] font-black mt-3 sm:mt-4 lg:mt-6 whitespace-nowrap">
              Manual Messages / Mo
            </p>
          </motion.div>
          
          {/* Card 2: Drafting Redundancy */}
          <motion.div 
            style={{ y: y2, rotate: -rotate }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-20 left-2 lg:left-0 p-6 sm:p-8 lg:p-14 bg-white text-black rounded-[2.5rem] lg:rounded-[4rem] z-30 shadow-2xl scale-[0.85] sm:scale-90 lg:scale-100"
          >
            <p className="text-5xl sm:text-6xl lg:text-8xl font-black">60%</p>
            <p className="text-black/40 uppercase tracking-[0.2em] text-[8px] lg:text-[10px] font-black mt-3 sm:mt-4 lg:mt-6 whitespace-nowrap">
              Drafting Redundancy
            </p>
          </motion.div>

          {/* New Card 3: Pattern Repetition */}
          <motion.div 
            style={{ y: y3, rotate: rotate }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[-20px] right-4 p-4 lg:p-8 bg-green-500 text-black rounded-[2rem] lg:rounded-[3rem] z-40 shadow-2xl scale-[0.7] lg:scale-90"
          >
            <p className="text-3xl lg:text-5xl font-black">90%</p>
            <p className="text-black/60 uppercase tracking-[0.1em] text-[7px] lg:text-[9px] font-black mt-2">Pattern Repetition</p>
          </motion.div>

          {/* Decorative Animated Circles */}
          <div className="w-[85%] lg:w-[120%] aspect-square rounded-full border-2 border-white/5 flex items-center justify-center opacity-50 sm:opacity-100">
             <div className="w-[75%] aspect-square rounded-full border border-green-500/10 animate-[spin_40s_linear_infinite]" />
             <div className="absolute w-[50%] aspect-square rounded-full border border-white/5 animate-[spin_30s_linear_infinite_reverse]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
