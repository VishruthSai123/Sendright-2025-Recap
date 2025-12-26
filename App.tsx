
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Shift from './components/Shift';
import AppSwitchingPain from './components/AppSwitchingPain';
import BeforeAfter from './components/BeforeAfter';
import ContextVsBasic from './components/ContextVsBasic';
import ToneIntelligence from './components/ToneIntelligence';
import TechReveal from './components/TechReveal';
import ImpactStats from './components/ImpactStats';
import GlobalReach from './components/GlobalReach';
import UseCases from './components/UseCases';
import PrivacyFirst from './components/PrivacyFirst';
import Philosophy from './components/Philosophy';
import MilestoneTimeline from './components/MilestoneTimeline';
import WaitlistCounter from './components/WaitlistCounter';
import GradientText from './components/GradientText';
import ScrambleText from './components/ScrambleText';
import FutureReady from './components/FutureReady';
import FinalCTA from './components/FinalCTA';
import IntroScreen from './components/IntroScreen';

// Create a context for music control
export const MusicContext = React.createContext<{
  fadeOutAndStop: () => void;
}>({ fadeOutAndStop: () => {} });

const App: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [musicStopped, setMusicStopped] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const finalCtaRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  // Fade out and stop music
  const fadeOutAndStop = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || musicStopped) return;
    
    setMusicStopped(true);
    
    // Fade out over 1.5 seconds
    const fadeInterval = setInterval(() => {
      if (audio.volume > 0.02) {
        audio.volume = Math.max(0, audio.volume - 0.02);
      } else {
        audio.volume = 0;
        audio.pause();
        clearInterval(fadeInterval);
      }
    }, 50);
  }, [musicStopped]);

  // Detect when user scrolls to FinalCTA section
  useEffect(() => {
    if (!hasStarted || musicStopped) return;

    const mainElement = mainRef.current;
    if (!mainElement) return;

    const handleScroll = () => {
      const finalCta = finalCtaRef.current;
      if (!finalCta) return;

      const rect = finalCta.getBoundingClientRect();
      // If FinalCTA is more than 50% visible, start fading out
      if (rect.top < window.innerHeight * 0.5) {
        fadeOutAndStop();
      }
    };

    mainElement.addEventListener('scroll', handleScroll, { passive: true });
    return () => mainElement.removeEventListener('scroll', handleScroll);
  }, [hasStarted, musicStopped, fadeOutAndStop]);

  const handleStart = () => {
    // Start the music
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
    }
    // Show the main content
    setHasStarted(true);
  };

  return (
    <MusicContext.Provider value={{ fadeOutAndStop }}>
      <div className="relative bg-[#050505] selection:bg-green-500 selection:text-black">
        {/* Audio element - no loop */}
        <audio
          ref={audioRef}
          src="/music.mp3"
          preload="auto"
          playsInline
        />

        {/* Intro Screen */}
        <AnimatePresence>
          {!hasStarted && <IntroScreen onStart={handleStart} />}
        </AnimatePresence>

        {/* Main Content - Only visible after start */}
        {hasStarted && (
          <>
            {/* Scroll Progress Bar */}
            <motion.div
              className="fixed top-0 left-0 right-0 h-1 bg-green-500 origin-left z-50 transform-gpu"
              style={{ scaleX, willChange: 'transform' }}
            />

            {/* Main Content - Scroll Snap Container */}
            <main ref={mainRef} className="snap-y snap-mandatory h-screen overflow-y-auto overflow-x-hidden">
              <div className="snap-start"><Hero /></div>
              <div className="snap-start"><Problem /></div>
              <div className="snap-start"><Shift /></div>
              <div className="snap-start"><AppSwitchingPain /></div>
              <div className="snap-start"><BeforeAfter /></div>
              <div className="snap-start"><ContextVsBasic /></div>
              <div className="snap-start"><ToneIntelligence /></div>
              <div className="snap-start"><TechReveal /></div>
              <div className="snap-start"><ImpactStats /></div>
              <div className="snap-start"><PrivacyFirst /></div>
              <div className="snap-start"><GlobalReach /></div>
              <div className="snap-start"><UseCases /></div>
              <div className="snap-start"><Philosophy /></div>
              <div className="snap-start"><GradientText /></div>
              <div className="snap-start"><ScrambleText /></div>
              <div className="snap-start"><MilestoneTimeline /></div>
              <div className="snap-start"><WaitlistCounter /></div>
              <div className="snap-start"><FutureReady /></div>
              <div ref={finalCtaRef} className="snap-start"><FinalCTA /></div>
            </main>
          </>
        )}
      </div>
    </MusicContext.Provider>
  );
};

export default App;
