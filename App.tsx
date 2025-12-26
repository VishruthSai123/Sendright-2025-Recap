
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

// Detect in-app browsers
const isInstagramBrowser = /Instagram/.test(navigator.userAgent);
const isFacebookBrowser = /FBAN|FBAV/.test(navigator.userAgent);
const isInAppBrowser = isInstagramBrowser || isFacebookBrowser;
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
const isAndroid = /Android/.test(navigator.userAgent);

// In-App Browser Redirect Component
const InAppBrowserPrompt: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);
  const currentUrl = window.location.href;

  const openInExternalBrowser = () => {
    if (isAndroid) {
      // Android: Use intent to open in Chrome/default browser
      const intentUrl = `intent://${currentUrl.replace(/^https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end`;
      window.location.href = intentUrl;
      
      // Fallback: Try opening directly after a delay
      setTimeout(() => {
        window.open(currentUrl, '_system');
      }, 500);
    } else if (isIOS) {
      // iOS: Can't force external browser, but we can try x-safari scheme
      // This doesn't always work, so we show instructions
      window.location.href = `x-safari-${currentUrl}`;
    }
  };

  if (dismissed) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[1000] bg-[#050505] flex flex-col items-center justify-center p-6 text-center"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="max-w-sm w-full"
      >
        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-white mb-3">
          Open in Browser
        </h2>
        
        <p className="text-white/60 mb-6 text-sm leading-relaxed">
          {isIOS 
            ? "For the best experience with music and sharing features, please open this in Safari."
            : "For the best experience with music and sharing features, please open this in Chrome."
          }
        </p>

        {isIOS ? (
          // iOS Instructions
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-left">
              <p className="text-white/80 text-sm">
                <span className="text-green-400 font-bold">1.</span> Tap the <span className="text-white font-semibold">•••</span> menu at the bottom right
              </p>
              <p className="text-white/80 text-sm mt-2">
                <span className="text-green-400 font-bold">2.</span> Select <span className="text-white font-semibold">"Open in Safari"</span>
              </p>
            </div>
            <button
              onClick={() => setDismissed(true)}
              className="w-full py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors"
            >
              Continue Anyway
            </button>
          </div>
        ) : (
          // Android - Can auto-redirect
          <div className="space-y-3">
            <button
              onClick={openInExternalBrowser}
              className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all"
            >
              Open in Chrome
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="w-full py-3 bg-white/10 text-white/70 rounded-xl font-medium hover:bg-white/20 transition-colors"
            >
              Continue Anyway
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

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
        {/* In-App Browser Prompt */}
        {isInAppBrowser && <InAppBrowserPrompt />}

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
