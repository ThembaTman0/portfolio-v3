"use client";
import { m } from "framer-motion";
import { reveal } from "./motion-utils";

/*
 * Full-bleed philosophy statement - the site's one deliberate rhythm break.
 * Every other section is a max-width, hairline-bordered block; this one is
 * centered, borderless, and oversized, so the eye gets a pause between the
 * dense working sections. The italic-gold word is reserved for the three
 * "statement" moments (hero, this, contact) rather than every heading.
 */
const PullQuote = () => {
  return (
    <section
      aria-label="Engineering philosophy"
      style={{
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid var(--line)",
        padding: "clamp(6rem, 14vh, 11rem) 1.5rem",
        textAlign: "center",
      }}
    >
      {/* Oversized ghost quotation mark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "clamp(1.5rem, 6vh, 4rem)",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-fraunces), serif",
          fontSize: "clamp(9rem, 22vw, 20rem)",
          fontWeight: 700,
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px rgba(200,160,90,0.06)",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        &ldquo;
      </div>

      <m.div
        className="section-label"
        style={{ justifyContent: "center", marginBottom: "2.4rem" }}
        {...reveal(0)}
      >
        Philosophy
      </m.div>

      <m.blockquote
        {...reveal(0.1)}
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "22ch",
          margin: "0 auto",
          fontFamily: "var(--font-fraunces), serif",
          fontWeight: 300,
          fontSize: "clamp(1.9rem, 4.2vw, 3.4rem)",
          lineHeight: 1.18,
          letterSpacing: "-0.02em",
          color: "var(--white)",
        }}
      >
        Great software lives at the intersection of{" "}
        <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
          rigour, simplicity, and maintainability
        </em>
        .
      </m.blockquote>

      <m.div
        {...reveal(0.2)}
        style={{
          marginTop: "2.6rem",
          fontSize: "0.72rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--muted)",
        }}
      >
        — a standard I build toward, every day
      </m.div>
    </section>
  );
};

export default PullQuote;
