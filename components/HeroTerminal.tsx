"use client";
import { useEffect, useRef, useState } from "react";
import { m } from "framer-motion";

/*
 * Typed terminal card for the hero's right panel.
 * Cycles through short command/output pairs with a blinking caret.
 * Renders the full transcript statically for reduced-motion users.
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

const TYPE_MS = 42; // per character while typing a prompt line
const OUTPUT_DELAY_MS = 350; // pause before an output line appears
const LINE_PAUSE_MS = 650; // pause after a line completes
const RESTART_PAUSE_MS = 6000; // hold the finished transcript, then loop

const HeroTerminal = () => {
  const [reduced, setReduced] = useState(false);
  // (lineIdx, charCount) drives the typewriter; output lines appear whole
  const [lineIdx, setLineIdx] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }

    const line = LINES[lineIdx];

    if (!line) {
      // Transcript finished - hold, then restart
      timerRef.current = setTimeout(() => {
        setLineIdx(0);
        setCharCount(0);
      }, RESTART_PAUSE_MS);
      return () => clearTimeout(timerRef.current);
    }

    if (line.prompt) {
      if (charCount < line.text.length) {
        timerRef.current = setTimeout(
          () => setCharCount((c) => c + 1),
          TYPE_MS
        );
      } else {
        timerRef.current = setTimeout(() => {
          setLineIdx((i) => i + 1);
          setCharCount(0);
        }, LINE_PAUSE_MS);
      }
    } else {
      // Output lines pop in whole after a short "processing" pause
      timerRef.current = setTimeout(() => {
        setLineIdx((i) => i + 1);
        setCharCount(0);
      }, OUTPUT_DELAY_MS + LINE_PAUSE_MS);
    }

    return () => clearTimeout(timerRef.current);
  }, [lineIdx, charCount]);

  const visibleLines = reduced
    ? LINES
    : LINES.slice(0, lineIdx + 1).map((l, i) =>
        i === lineIdx && l.prompt
          ? { ...l, text: l.text.slice(0, charCount) }
          : l
      );

  return (
    <m.div
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
        {visibleLines.map((line, i) => {
          const isTyping = !reduced && i === lineIdx;
          return (
            <div key={i} style={{ whiteSpace: "pre-wrap" }}>
              {line.prompt && (
                <span style={{ color: "var(--accent)" }}>$ </span>
              )}
              <span
                style={{
                  color: line.prompt ? "var(--text)" : "var(--muted)",
                }}
              >
                {line.text}
              </span>
              {isTyping && (
                <span
                  style={{
                    display: "inline-block",
                    width: "7px",
                    height: "1em",
                    verticalAlign: "-0.18em",
                    marginLeft: "2px",
                    background: "var(--accent)",
                    animation: "pulse 1.1s ease-in-out infinite",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </m.div>
  );
};

export default HeroTerminal;
