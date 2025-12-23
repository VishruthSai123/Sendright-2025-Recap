
import React, { useEffect, useRef, useState } from 'react';

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Using a clean, ambient background track
  const AUDIO_URL = 'https://assets.mixkit.co/music/preview/mixkit-dreamy-surroundings-467.mp3';

  useEffect(() => {
    const startAudio = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setHasInteracted(true);
            // Once playing, we can stop listening for the initial interaction
            cleanup();
          })
          .catch(err => {
            console.log("Autoplay still restricted by browser. Waiting for next interaction...", err);
          });
      }
    };

    const cleanup = () => {
      window.removeEventListener('click', startAudio);
      window.removeEventListener('touchstart', startAudio);
      window.removeEventListener('scroll', startAudio);
      window.removeEventListener('keydown', startAudio);
    };

    // Listen for any form of interaction to bypass browser autoplay restrictions
    window.addEventListener('click', startAudio);
    window.addEventListener('touchstart', startAudio);
    window.addEventListener('scroll', startAudio);
    window.addEventListener('keydown', startAudio);

    return cleanup;
  }, [hasInteracted]);

  return (
    <audio
      ref={audioRef}
      src={AUDIO_URL}
      loop
      preload="auto"
      className="hidden"
      aria-hidden="true"
    />
  );
};

export default BackgroundMusic;
