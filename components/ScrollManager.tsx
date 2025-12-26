
import React from 'react';

// The previous version included a "scroll lock" mechanism that forced a 500ms pause 
// at each section. This caused the "lag" reported by the user. 
// We are removing that logic entirely to allow smooth, native scrolling 
// while preserving the scroll-snap CSS behavior defined in index.html.

const ScrollManager: React.FC = () => {
  // This component is now intentionally empty of logic to ensure 
  // maximum scrolling performance, relying on CSS `scroll-snap-type` 
  // in the global styles.
  return null;
};

export default ScrollManager;
