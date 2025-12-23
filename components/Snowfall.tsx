
import React, { useEffect, useRef } from 'react';

const Snowfall: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 150; // Medium intensity

    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speed: number = 0;
      opacity: number = 0;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.reset(canvasWidth, canvasHeight, true);
      }

      reset(canvasWidth: number, canvasHeight: number, initial: boolean = false) {
        this.x = Math.random() * canvasWidth;
        this.y = initial ? Math.random() * canvasHeight : -10;
        this.size = Math.random() * 2 + 1;
        // Medium fast speed: range 2 to 5 pixels per frame
        this.speed = Math.random() * 3 + 2;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.y += this.speed;
        // Subtle side sway
        this.x += Math.sin(this.y / 50) * 0.5;

        if (this.y > canvasHeight) {
          this.reset(canvasWidth, canvasHeight);
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: particleCount }, () => new Particle(canvas.width, canvas.height));
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resize);
    resize();
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] opacity-60"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default Snowfall;
