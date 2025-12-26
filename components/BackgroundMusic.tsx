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
      } catch {
        // Silently fail, will retry
      }
    };

    // Try immediately
    tryPlay();

    // Try on multiple events
    const events = ['click', 'scroll', 'touchstart', 'keydown', 'mousemove', 'pointerdown'];
    events.forEach(e => document.addEventListener(e, tryPlay, { once: true, passive: true }));

    // Also try periodically for 5 seconds
    const interval = setInterval(tryPlay, 500);
    setTimeout(() => clearInterval(interval), 5000);

    return () => {
      events.forEach(e => document.removeEventListener(e, tryPlay));
      clearInterval(interval);
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
    />
  );
};

export default BackgroundMusic;
