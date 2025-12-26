import React from 'react';
import { motion } from 'framer-motion';

const LiveBackground: React.FC = () => {
  // Generate deterministic positions for floating particles to avoid hydration mismatches if we were SSR,
  // but for client-side React, random is fine. We'll stick to a fixed set for better control.
  const glyphs = [
    { id: 1, x: 15, y: 20, delay: 0, shape: '+' },
    { id: 2, x: 85, y: 15, delay: 2, shape: '○' },
    { id: 3, x: 50, y: 50, delay: 4, shape: '□' },
    { id: 4, x: 10, y: 80, delay: 1, shape: '⨯' },
    { id: 5, x: 90, y: 70, delay: 3, shape: '+' },
    { id: 6, x: 75, y: 40, delay: 5, shape: '•' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Breathing Gradient Blobs (Base Layer) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.15, 0.3, 0.15],
          x: [-20, 20, -20],
          y: [-20, 20, -20]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-green-900/30 blur-[120px] rounded-full mix-blend-screen transform-gpu"
        style={{ willChange: 'transform, opacity' }}
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1], 
          opacity: [0.1, 0.25, 0.1],
          x: [20, -20, 20],
          y: [20, -20, 20]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-emerald-900/20 blur-[150px] rounded-full mix-blend-screen transform-gpu"
        style={{ willChange: 'transform, opacity' }}
      />

      {/* 2. Rotating Wireframe Rings (Structural Layer) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] border border-white/[0.03] rounded-full transform-gpu"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        style={{ willChange: 'transform' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] md:w-[45vw] md:h-[45vw] border border-white/[0.03] rounded-full border-dashed transform-gpu"
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        style={{ willChange: 'transform' }}
      />
      
      {/* 3. Floating Tech Glyphs (Detail Layer) */}
      {glyphs.map((g) => (
        <FloatingGlyph key={g.id} x={g.x} y={g.y} delay={g.delay} shape={g.shape} />
      ))}

      {/* 4. Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />
    </div>
  );
};

interface FloatingGlyphProps {
  x: number;
  y: number;
  delay: number;
  shape: string;
}

const FloatingGlyph: React.FC<FloatingGlyphProps> = ({ x, y, delay, shape }) => {
    return (
        <motion.div
            className="absolute text-green-500/10 text-xl md:text-3xl font-thin select-none transform-gpu"
            style={{ left: `${x}%`, top: `${y}%`, willChange: 'transform, opacity' }}
            animate={{
                y: [0, -30, 0],
                rotate: [0, 45, 0],
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.2, 1]
            }}
            transition={{
                duration: 10 + delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }}
        >
            {shape}
        </motion.div>
    );
};

export default LiveBackground;