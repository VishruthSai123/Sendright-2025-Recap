
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Shift from './components/Shift';
import ProductShowcase from './components/ProductShowcase';
import ImpactStats from './components/ImpactStats';
import Snapshots from './components/Snapshots';
import UseCases from './components/UseCases';
import Philosophy from './components/Philosophy';
import FutureReady from './components/FutureReady';
import FinalCTA from './components/FinalCTA';
import Navbar from './components/Navbar';
import Snowfall from './components/Snowfall';
import BackgroundMusic from './components/BackgroundMusic';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative bg-[#050505] selection:bg-green-500 selection:text-black min-h-screen w-full overflow-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-green-500 origin-left z-50 shadow-[0_0_15px_rgba(34,197,94,0.5)]"
        style={{ scaleX }}
      />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Problem />
        <Shift />
        <Snapshots />
        <ProductShowcase />
        <ImpactStats />
        <UseCases />
        <Philosophy />
        <FutureReady />
        <FinalCTA />
      </main>

      {/* Audio Controller */}
      <BackgroundMusic />

      {/* Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Base ambience glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-900/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-green-900/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
        
        {/* Persistent Snowfall Effect */}
        <Snowfall />
      </div>
    </div>
  );
};

export default App;
