"use client";
import { useEffect, useRef } from "react";

/*
 * Custom cursor — dot + lagged ring + ambient glow.
 * All motion runs in a single rAF loop using transform only (GPU composited).
 * Automatically disabled on touch/coarse-pointer devices.
 */
const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // No-op on touch devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    const glow = glowRef.current!;

    // Show elements (hidden via CSS until mouse moves)
    let visible = false;

    // Target (mouse position) and current (lerped) positions
    let tx = 0, ty = 0;
    let rx = 0, ry = 0;
    let gx = 0, gy = 0;

    // Ring scale — lerped in rAF so scale transitions are smooth
    let ringScale = 1;
    let targetRingScale = 1;

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    let rafId: number;

    function tick() {
      rx = lerp(rx, tx, 0.13);
      ry = lerp(ry, ty, 0.13);
      gx = lerp(gx, tx, 0.075);
      gy = lerp(gy, ty, 0.075);
      ringScale = lerp(ringScale, targetRingScale, 0.14);

      // Dot: exact position (fast, no lag)
      dot.style.transform = `translate(${tx - 3}px, ${ty - 3}px)`;
      // Ring: lagged position + lerped scale
      ring.style.transform = `translate(${rx - 20}px, ${ry - 20}px) scale(${ringScale.toFixed(3)})`;
      // Glow: very lagged — creates depth
      glow.style.transform = `translate(${gx - 300}px, ${gy - 300}px)`;

      rafId = requestAnimationFrame(tick);
    }
    tick();

    const onMouseMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;

      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        glow.style.opacity = "1";
        // Snap ring and glow to position on first appearance
        rx = tx; ry = ty;
        gx = tx; gy = ty;
      }

      // Scale ring based on what's under the cursor
      const target = e.target as Element | null;
      const isInteractive = !!target?.closest("a, button, [role='button'], input, select, textarea");
      targetRingScale = isInteractive ? 1.5 : 1;
    };

    const onMouseLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      glow.style.opacity = "0";
    };

    // Click pulse: ring briefly shrinks then bounces back
    const onMouseDown = () => {
      targetRingScale = 0.65;
    };
    const onMouseUp = () => {
      targetRingScale = 1;
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown, { passive: true });
    document.addEventListener("mouseup", onMouseUp, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
      {/* ── Dot: pinpoint, exact position ── */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "var(--accent)",
          pointerEvents: "none",
          zIndex: 99999,
          opacity: 0,
          willChange: "transform",
          transition: "opacity 0.25s ease",
        }}
      />

      {/* ── Ring: lagged follow, scales on interactive elements ── */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "1px solid rgba(200,160,90,0.32)",
          pointerEvents: "none",
          zIndex: 99998,
          opacity: 0,
          willChange: "transform",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* ── Glow: ambient radial light, very slow follow ── */}
      <div
        ref={glowRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,160,90,0.055) 0%, rgba(200,160,90,0.018) 35%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 9997,
          opacity: 0,
          willChange: "transform",
          transition: "opacity 0.6s ease",
        }}
      />
    </>
  );
};

export default CustomCursor;
