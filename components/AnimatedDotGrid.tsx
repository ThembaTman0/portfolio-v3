"use client";
import { useEffect, useRef } from "react";

interface Wave {
  x: number;
  y: number;         // document coordinate
  radius: number;
  maxRadius: number;
  speedPxSec: number;
  sigma2: number;
  band: number;      // distance from the ring beyond which glow is negligible
  peak: number;
}

const DOT_R     = 0.8;
const BASE      = 0.1;
const LEVELS    = 12;
const MAX_WAVES = 7;
const BASE_BUCKET = Math.round(BASE * (LEVELS - 1));

export default function AnimatedDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Decorative only - skip entirely for users who prefer reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = 0, h = 0;
    let spacing = 25;
    let frameMs = 0; // min ms between rendered frames (0 = every rAF tick)

    let bktX: Float32Array[] = [];
    let bktY: Float32Array[] = [];
    const bktLen = new Int32Array(LEVELS);

    const allocBuckets = () => {
      const maxDots =
        (Math.ceil(w / spacing) + 2) * (Math.ceil(h / spacing) + 2);
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
        band:       4 * sigma, // beyond 4σ the gaussian is ~0
        peak:       0.55 + Math.random() * 0.3,
      });
      nextSpawnAt = now + 2600 + Math.random() * 2200;
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      // High-res screens: the grid is ambient decoration, so trade fidelity
      // for a fraction of the fill cost - 1x pixels, wider spacing, 30fps.
      const bigScreen = w * h > 2560 * 1440;
      const dpr = Math.min(window.devicePixelRatio || 1, bigScreen ? 1 : 2);
      spacing = w >= 2560 ? 34 : 25;
      frameMs = bigScreen ? 31 : 0;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      allocBuckets();
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const OPQ = Array.from({ length: LEVELS }, (_, i) =>
      `rgba(200,160,90,${(i / (LEVELS - 1)).toFixed(3)})`
    );

    let lastFrame = performance.now();

    // Per-row scratch lists of waves whose ring can actually reach the row
    const rowWaves: Wave[] = [];
    const rowDy: number[] = [];

    const draw = (now: number) => {
      animId = requestAnimationFrame(draw);
      if (now - lastFrame < frameMs) return;

      // Advance wave physics with real elapsed time - smooth at any frame
      // rate (capped so a backgrounded tab doesn't teleport the rings)
      const dt = Math.min(now - lastFrame, 100);
      lastFrame = now;

      if (now >= nextSpawnAt) spawnWave(now);

      for (let i = waves.length - 1; i >= 0; i--) {
        waves[i].radius += waves[i].speedPxSec * (dt / 1000);
        if (waves[i].radius > waves[i].maxRadius + waves[i].band)
          waves.splice(i, 1);
      }

      ctx.clearRect(0, 0, w, h);
      bktLen.fill(0);

      // Read scroll offset every frame so dots track the page exactly
      const scrollY   = window.scrollY;
      const firstRow  = Math.floor(scrollY / spacing);
      const lastRow   = Math.ceil((scrollY + h) / spacing);
      const cols      = Math.ceil(w / spacing) + 1;

      for (let row = firstRow; row <= lastRow; row++) {
        const docY    = row * spacing;       // fixed position in the document
        const screenY = docY - scrollY;      // where it appears on screen

        // Cull waves whose ring band cannot intersect this row: cheap
        // per-row test replaces thousands of per-dot gaussians.
        rowWaves.length = 0;
        rowDy.length = 0;
        for (const wv of waves) {
          const dy  = docY - wv.y;
          const ady = Math.abs(dy);
          const maxDx = Math.max(wv.x, w - wv.x);
          const maxDist = Math.sqrt(maxDx * maxDx + dy * dy);
          if (wv.radius + wv.band < ady || wv.radius - wv.band > maxDist)
            continue;
          rowWaves.push(wv);
          rowDy.push(dy);
        }

        if (rowWaves.length === 0) {
          // No wave touches this row - every dot sits at base opacity
          for (let col = 0; col < cols; col++) {
            const idx = bktLen[BASE_BUCKET]++;
            bktX[BASE_BUCKET][idx] = col * spacing;
            bktY[BASE_BUCKET][idx] = screenY;
          }
          continue;
        }

        for (let col = 0; col < cols; col++) {
          const x = col * spacing;

          let glow = 0;
          for (let k = 0; k < rowWaves.length; k++) {
            const wv = rowWaves[k];
            const dx = x - wv.x;
            const dy = rowDy[k];
            const diff = Math.sqrt(dx * dx + dy * dy) - wv.radius;
            if (diff > wv.band || diff < -wv.band) continue;
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
