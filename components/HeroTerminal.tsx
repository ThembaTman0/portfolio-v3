"use client";
import { m } from "framer-motion";

/*
 * Static terminal card for the hero's right panel. Renders a short, fixed
 * command/output transcript. (Previously typed itself out on a loop; that
 * perpetual timer was trimmed in favour of a calmer, quieter hero.)
 */

interface TermLine {
  prompt?: boolean; // render with a "$" prefix and accent color
  text: string;
}

const LINES: TermLine[] = [
  { prompt: true, text: "whoami" },
  { text: "themba — java developer @ fnb" },
  { prompt: true, text: "cat stack.txt" },
  { text: "java · spring boot · postgres · docker" },
  { prompt: true, text: "./deploy --env prod" },
  { text: "✓ build passed — shipping to production" },
];

const HeroTerminal = () => {
  return (
    <m.div
      className="hero-terminal-card"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden="true"
      style={{
        position: "relative",
        zIndex: 2,
        width: "min(380px, 80%)",
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(13,13,13,0.82)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderRadius: "4px",
        overflow: "hidden",
        boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
      }}
    >
      {/* Title bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.45rem",
          padding: "0.7rem 1rem",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        {["#3a3a3a", "#3a3a3a", "rgba(200,160,90,0.55)"].map((c, i) => (
          <span
            key={i}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: c,
              display: "block",
            }}
          />
        ))}
        <span
          style={{
            marginLeft: "0.5rem",
            fontSize: "0.62rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--muted2)",
          }}
        >
          themba@fnb — zsh
        </span>
      </div>

      {/* Transcript */}
      <div
        style={{
          padding: "1.1rem 1.2rem 1.3rem",
          fontFamily:
            "ui-monospace, 'Cascadia Code', 'JetBrains Mono', Consolas, monospace",
          fontSize: "0.74rem",
          lineHeight: 2.05,
          minHeight: "13.2em",
        }}
      >
        {LINES.map((line, i) => (
          <div key={i} style={{ whiteSpace: "pre-wrap" }}>
            {line.prompt && <span style={{ color: "var(--accent)" }}>$ </span>}
            <span
              style={{ color: line.prompt ? "var(--text)" : "var(--muted)" }}
            >
              {line.text}
            </span>
          </div>
        ))}
      </div>
    </m.div>
  );
};

export default HeroTerminal;
