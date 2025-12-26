
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Using absolute path assuming the file is served from public root
  const AUDIO_URL = '/music.mp3';

  useEffect(() => {
    const startAudio = () => {
      // Only attempt to auto-start if the user hasn't manually paused it,
      // it's not currently playing, and we haven't encountered an error.
      if (audioRef.current && !isUserPaused && !isPlaying && !hasError) {
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              cleanupListeners();
            })
            .catch(err => {
              // Auto-play was prevented or playback failed.
              // We don't set error state here for auto-play blocks, only actual load errors.
              console.log("Audio autoplay blocked or failed:", err);
            });
        }
      }
    };

    const cleanupListeners = () => {
      window.removeEventListener('click', startAudio);
      window.removeEventListener('touchstart', startAudio);
      window.removeEventListener('keydown', startAudio);
      window.removeEventListener('scroll', startAudio);
    };

    window.addEventListener('click', startAudio);
    window.addEventListener('touchstart', startAudio);
    window.addEventListener('keydown', startAudio);
    window.addEventListener('scroll', startAudio);

    return cleanupListeners;
  }, [isPlaying, isUserPaused, hasError]);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setIsUserPaused(true);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setIsUserPaused(false);
          setHasError(false);
        })
        .catch(e => {
          console.error("Playback failed manually:", e);
        });
    }
  };

  const handleAudioError = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    console.error("Audio failed to load. Check if 'music.mp3' exists in the public directory.", e);
    setHasError(true);
    setIsPlaying(false);
  };

  if (hasError) return null;

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        className="hidden"
        onError={handleAudioError}
      >
        <source src={AUDIO_URL} type="audio/mpeg" />
        <source src="music.mp3" type="audio/mpeg" />
      </audio>
      
      {/* Floating Audio Control */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-50 bg-black/60 backdrop-blur-md border border-white/10 text-white/70 hover:text-green-500 hover:border-green-500/50 p-3 rounded-full transition-colors duration-300 shadow-lg group"
        title={isPlaying ? "Mute Music" : "Play Music"}
      >
        {isPlaying ? (
          /* Sound Wave Icon */
          <div className="flex items-end gap-[2px] h-4">
            <motion.div 
              animate={{ height: [4, 12, 6, 16, 8] }} 
              transition={{ duration: 0.8, repeat: Infinity }} 
              className="w-1 bg-current rounded-full" 
            />
            <motion.div 
              animate={{ height: [10, 5, 14, 8, 12] }} 
              transition={{ duration: 0.6, repeat: Infinity }} 
              className="w-1 bg-current rounded-full" 
            />
            <motion.div 
              animate={{ height: [8, 16, 6, 12, 4] }} 
              transition={{ duration: 0.7, repeat: Infinity }} 
              className="w-1 bg-current rounded-full" 
            />
          </div>
        ) : (
          /* Muted Icon */
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        )}
      </motion.button>
    </>
  );
};

export default BackgroundMusic;
