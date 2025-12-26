import React, { useEffect, useRef } from 'react';

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.3;

    // Aggressive autoplay attempt
    const tryPlay = async () => {
      if (hasStarted.current) return;
      try {
        await audio.play();
        hasStarted.current = true;
        // Remove all listeners once playing
        removeAllListeners();
      } catch {
        // Silently fail, will retry
      }
    };

    // All possible interaction events
    const events = ['click', 'touchstart', 'touchend', 'keydown', 'keyup', 'mousemove', 'mousedown', 'pointerdown', 'pointerup', 'wheel', 'scroll'];
    
    const addAllListeners = () => {
      events.forEach(e => document.addEventListener(e, tryPlay, { passive: true }));
      // Also listen on the main scrollable container
      const mainContainer = document.querySelector('main');
      if (mainContainer) {
        mainContainer.addEventListener('scroll', tryPlay, { passive: true });
      }
    };

    const removeAllListeners = () => {
      events.forEach(e => document.removeEventListener(e, tryPlay));
      const mainContainer = document.querySelector('main');
      if (mainContainer) {
        mainContainer.removeEventListener('scroll', tryPlay);
      }
    };

    // Try immediately
    tryPlay();

    // Add all listeners
    addAllListeners();

    // Also try periodically for 10 seconds (more persistent)
    const interval = setInterval(tryPlay, 300);
    setTimeout(() => clearInterval(interval), 10000);

    // Try on visibility change (when user switches back to tab)
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        tryPlay();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      removeAllListeners();
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music.mp3"
      loop
      preload="auto"
      autoPlay
      playsInline
      muted={false}
    />
  );
};

export default BackgroundMusic;
