
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Problem: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax offsets - adjusted to be more subtle and keep elements within bounds
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const y3 = useTransform(scrollYProgress, [0, 1], [40, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 4]);

  return (
    <section className="min-h-screen py-24 md:py-40 px-6 flex flex-col justify-center items-center bg-black relative overflow-hidden snap-start snap-always">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center z-10">
        
        {/* Left Column: Narrative + Fast Stats */}
        <motion.div 
          initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          <div className="inline-block px-4 py-1.5 bg-red-500/10 rounded-full text-red-500 text-[10px] font-black tracking-[0.3em] uppercase">
            GLOBAL FRICTION RECAP
          </div>
          
          <div className="space-y-6">
            <h2 className="text-5xl sm:text-6xl md:text-[100px] font-black leading-[1] tracking-tighter">
              Humanity is <br/>
              <span className="text-white/20">Stalling.</span>
            </h2>
            <p className="text-lg md:text-2xl text-white/40 font-light leading-relaxed max-w-xl">
              In 2025, we sent 100B+ messages daily. Industry data confirms that 80% of typing effort is wasted on anxiety, repetition, and correction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div 
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 p-5 bg-white/5 rounded-[2rem] border border-white/5 backdrop-blur-sm"
            >
              <div className="text-2xl text-red-500">⚠</div>
              <div className="space-y-1">
                <p className="text-lg font-black leading-none">40% Cognitive Drain</p>
                <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-black">Productivity Loss</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 p-5 bg-green-500/5 rounded-[2rem] border border-green-500/10 backdrop-blur-sm"
            >
              <div className="text-2xl text-green-500">⏱</div>
              <div className="space-y-1">
                <p className="text-lg font-black leading-none">8B+ Hours Lost</p>
                <p className="text-[9px] text-white/30 uppercase tracking-[0.2em] font-black">Global Annual Waste</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Visual Floating Stats */}
        <div className="relative h-[600px] sm:h-[700px] w-full flex items-center justify-center mt-8 lg:mt-0">
          
          {/* Card 1: Top Right (Large) */}
          <motion.div 
            style={{ y: y1, rotate: rotate }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[5%] right-0 md:right-[10%] p-8 md:p-12 bg-[#111] border border-white/10 rounded-[3rem] backdrop-blur-3xl z-10 shadow-2xl max-w-[280px] md:max-w-[350px]"
          >
            <p className="text-6xl md:text-8xl font-black text-green-500 leading-none">2.5T</p>
            <p className="text-white/30 uppercase tracking-[0.2em] text-[10px] font-black mt-4">
              Manual Messages / Mo
            </p>
          </motion.div>
          
          {/* Card 2: Center Left (White) */}
          <motion.div 
            style={{ y: y2, rotate: -rotate }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[40%] left-0 md:left-[5%] p-8 md:p-10 bg-white text-black rounded-[3rem] z-20 shadow-2xl max-w-[240px] md:max-w-[300px]"
          >
            <p className="text-5xl md:text-7xl font-black leading-none">60%</p>
            <p className="text-black/40 uppercase tracking-[0.2em] text-[10px] font-black mt-4">
              Drafting Redundancy
            </p>
          </motion.div>

          {/* Card 3: Bottom Right (Small Green) */}
          <motion.div 
            style={{ y: y3, rotate: rotate }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[10%] right-[5%] md:right-[15%] p-6 md:p-8 bg-green-500 text-black rounded-[2.5rem] z-30 shadow-2xl max-w-[200px]"
          >
            <p className="text-4xl md:text-5xl font-black leading-none">90%</p>
            <p className="text-black/60 uppercase tracking-[0.1em] text-[9px] font-black mt-2">Pattern Repetition</p>
          </motion.div>

          {/* Decorative Animated Circles Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
            <div className="w-[100%] aspect-square rounded-full border border-white/5 flex items-center justify-center opacity-40">
               <div className="w-[70%] aspect-square rounded-full border border-green-500/10 animate-[spin_40s_linear_infinite]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
