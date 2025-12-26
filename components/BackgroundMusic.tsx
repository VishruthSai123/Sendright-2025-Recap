
import React, { useEffect, useRef, useState } from 'react';

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Updated to use a local file. 
  // Please place your 'music.mp3' file in the public/root directory of your project.
  const AUDIO_URL = './music.mp3';

  useEffect(() => {
    const startAudio = () => {
      if (!hasInteracted && audioRef.current) {
        // Attempt to play
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setHasInteracted(true);
              // Once playing, we can stop listening for the initial interaction
              cleanup();
            })
            .catch(err => {
              // Autoplay was prevented. This is normal until the user interacts.
              // We just wait for the next interaction event.
            });
        }
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
