
import React from 'react';
import { motion } from 'framer-motion';

const snapshots = [
  {
    tag: "THE VISION",
    title: "Project Zero-Delay",
    desc: "We identified that 70% of typing is mental overhead. We built the engine to eliminate it.",
    size: "col-span-1 lg:col-span-2"
  },
  {
    tag: "Q3 2025",
    title: "Contextual Core",
    desc: "Developed a native iOS/Android bridge that understands intent without surveillance.",
    size: "col-span-1"
  },
  {
    tag: "Q4 2025",
    title: "Neural Refinement",
    desc: "Finalized the 'Your Voice' engine—cloning your unique syntax in real-time.",
    size: "col-span-1"
  },
  {
    tag: "NEXT UP",
    title: "Global Launch 1.0",
    desc: "Opening the floodgates to the first 500,000 waitlisted visionaries.",
    size: "col-span-1 lg:col-span-2"
  }
];

const Snapshots: React.FC = () => {
  return (
    <section className="min-h-screen py-24 md:py-32 px-6 bg-black relative flex flex-col justify-center snap-start snap-always">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16 text-center space-y-6 md:space-y-8"
        >
          <h2 className="text-4xl md:text-[100px] font-black uppercase tracking-tighter leading-none">The Build Up</h2>
          <p className="text-lg md:text-2xl font-light max-w-4xl mx-auto italic leading-relaxed text-white/40 px-4">
            "2025 wasn't about growth. It was about solving a global problem before anyone else could."
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {snapshots.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.3 + (i * 0.2), duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className={`group p-6 md:p-10 bg-[#0a0a0a] border border-white/5 rounded-[2rem] md:rounded-[3rem] flex flex-col justify-between hover:border-green-500/40 transition-all duration-700 shadow-xl ${item.size}`}
            >
              <div className="space-y-4 md:space-y-6">
                <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-green-500 font-black text-[9px] md:text-[10px] tracking-[0.3em] uppercase">{item.tag}</span>
                <h3 className="text-2xl md:text-3xl font-black leading-tight group-hover:text-white transition-colors">{item.title}</h3>
              </div>
              <p className="text-white/30 text-sm md:text-base leading-relaxed group-hover:text-white/60 transition-colors mt-6 md:mt-8">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Snapshots;
