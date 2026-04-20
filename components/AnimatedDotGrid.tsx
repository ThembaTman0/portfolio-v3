"use client";
import { useEffect, useRef } from "react";

interface Wave {
  x: number;
  y: number;         // document coordinate
  radius: number;
  maxRadius: number;
  speedPxSec: number;
  sigma2: number;
  peak: number;
}

const SPACING   = 25;
const DOT_R     = 0.8;
const BASE      = 0.1;
const LEVELS    = 12;
const MAX_WAVES = 7;

export default function AnimatedDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0, h = 0;

    let bktX: Float32Array[] = [];
    let bktY: Float32Array[] = [];
    const bktLen = new Int32Array(LEVELS);

    const allocBuckets = () => {
      const maxDots = (Math.ceil(w / SPACING) + 2) * (Math.ceil(h / SPACING) + 2);
      bktX = Array.from({ length: LEVELS }, () => new Float32Array(maxDots));
      bktY = Array.from({ length: LEVELS }, () => new Float32Array(maxDots));
    };

    const waves: Wave[] = [];
    let nextSpawnAt = 0;

    const spawnWave = (now: number) => {
      if (waves.length >= MAX_WAVES) return;
      const sigma = 55 + Math.random() * 35;
      const docH  = document.documentElement.scrollHeight;
      waves.push({
        x:          Math.random() * w,
        y:          Math.random() * docH,
        radius:     0,
        maxRadius:  Math.hypot(w, docH),
        speedPxSec: 55 + Math.random() * 400,
        sigma2:     2 * sigma * sigma,
        peak:       0.55 + Math.random() * 0.3,
      });
      nextSpawnAt = now + 2600 + Math.random() * 2200;
    };

    const resize = () => {
      w = canvas.width  = window.innerWidth;
      h = canvas.height = window.innerHeight;
      allocBuckets();
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const OPQ = Array.from({ length: LEVELS }, (_, i) =>
      `rgba(200,160,90,${(i / (LEVELS - 1)).toFixed(3)})`
    );

    let lastFrame = 0;

    const draw = (now: number) => {
      animId = requestAnimationFrame(draw);

      // Advance wave physics with real elapsed time - smooth at any frame rate
      const dt = now - lastFrame;
      lastFrame = now;

      if (now >= nextSpawnAt) spawnWave(now);

      for (let i = waves.length - 1; i >= 0; i--) {
        waves[i].radius += waves[i].speedPxSec * (dt / 1000);
        if (waves[i].radius > waves[i].maxRadius + Math.sqrt(waves[i].sigma2 / 2) * 5)
          waves.splice(i, 1);
      }

      ctx.clearRect(0, 0, w, h);
      bktLen.fill(0);

      // Read scroll offset every frame so dots track the page exactly
      const scrollY   = window.scrollY;
      const firstRow  = Math.floor(scrollY / SPACING);
      const lastRow   = Math.ceil((scrollY + h) / SPACING);
      const cols      = Math.ceil(w / SPACING) + 1;

      for (let row = firstRow; row <= lastRow; row++) {
        const docY    = row * SPACING;       // fixed position in the document
        const screenY = docY - scrollY;      // where it appears on screen

        for (let col = 0; col < cols; col++) {
          const x = col * SPACING;

          let glow = 0;
          for (const wv of waves) {
            const dx   = x - wv.x;
            const dy   = docY - wv.y;        // distance in document space
            const diff = Math.sqrt(dx * dx + dy * dy) - wv.radius;
            glow += wv.peak * Math.exp(-(diff * diff) / wv.sigma2);
          }

          const opacity = BASE + glow > 0.9 ? 0.9 : BASE + glow;
          const b   = Math.round(opacity * (LEVELS - 1));
          const idx = bktLen[b]++;
          bktX[b][idx] = x;
          bktY[b][idx] = screenY;
        }
      }

      for (let b = 1; b < LEVELS; b++) {
        const len = bktLen[b];
        if (len === 0) continue;
        ctx.fillStyle = OPQ[b];
        ctx.beginPath();
        for (let j = 0; j < len; j++) {
          ctx.moveTo(bktX[b][j] + DOT_R, bktY[b][j]);
          ctx.arc(bktX[b][j], bktY[b][j], DOT_R, 0, Math.PI * 2);
        }
        ctx.fill();
      }
    };

    spawnWave(performance.now());
    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -1,
      }}
    />
  );
}
