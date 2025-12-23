
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, animate } from 'framer-motion';

const STATS_DATA = [
  { label: "Potential Speed Boost", value: 60, suffix: "%", desc: "Average time wasted in drafting replies today." },
  { label: "Daily Time Saved", value: 2, suffix: "h", desc: "Projected daily reclamation for the average professional." },
  { label: "Neural Accuracy", value: 98, suffix: "%", desc: "Projected success rate in intent recognition." }
];

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animation = animate(0, value, {
      duration: 3.5,
      onUpdate: (latest) => setCount(Math.round(latest)),
      ease: [0.16, 1, 0.3, 1]
    });
    return () => animation.stop();
  }, [value]);

  return <span>{count}{suffix}</span>;
};

const ImpactStats: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const skew = useTransform(scrollYProgress, [0.4, 0.6], [5, 0]);

  return (
    <section id="impact" className="min-h-screen py-40 px-6 flex flex-col justify-center items-center bg-[#050505] relative overflow-hidden snap-start snap-always">
      <div className="max-w-7xl w-full text-center space-y-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter">
            The <span className="text-green-500">Efficiency</span> Gap
          </h2>
          <p className="text-xl md:text-2xl font-light text-white/40 max-w-3xl mx-auto uppercase tracking-[0.2em]">
            Global industry averages — Why SendRight must exist.
          </p>
        </motion.div>

        <motion.div 
          style={{ skewY: skew }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {STATS_DATA.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-16 bg-white/5 border border-white/5 rounded-[4rem] flex flex-col items-center text-center group hover:bg-green-500/5 transition-colors duration-500"
            >
              <div className="text-7xl md:text-[110px] font-black text-white mb-4 group-hover:text-green-500 transition-colors">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-2xl font-black text-white mb-6 uppercase tracking-tight">{stat.label}</div>
              <p className="text-white/30 text-base leading-relaxed max-w-[200px]">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-xs text-white/20 font-bold uppercase tracking-[0.4em]"
        >
          Benchmarks based on 2025 global productivity data
        </motion.p>
      </div>
    </section>
  );
};

export default ImpactStats;