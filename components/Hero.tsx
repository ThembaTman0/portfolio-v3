"use client";
import { useRef } from "react";
import { m } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { heroContainer, heroItem, heroPanel } from "./motion-utils";
import HeroTerminal from "./HeroTerminal";
import Magnetic from "./Magnetic";

gsap.registerPlugin(useGSAP, SplitText);

const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  // Guard against React 18 strict-mode double-mount splitting twice
  const didSplit = useRef(false);

  useGSAP(() => {
    const el = headlineRef.current;
    if (!el) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      didSplit.current
    ) {
      gsap.set(el, { autoAlpha: 1 });
      return;
    }
    didSplit.current = true;

    // Split only after fonts load so line/word metrics are correct
    document.fonts.ready.then(() => {
      const split = SplitText.create(el, { type: "words" });
      gsap.set(el, { autoAlpha: 1 });
      gsap.from(split.words, {
        yPercent: 65,
        autoAlpha: 0,
        duration: 1.0,
        ease: "power4.out",
        stagger: 0.05,
        delay: 0.45,
      });
    });
  });

  return (
    <section
      id="home"
      className="hero-grid"
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid var(--line)",
      }}
    >
      {/* Radial vignette */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          background:
            "linear-gradient(to top, rgba(10,10,10,0.65) 0%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Ambient accent glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "55vw",
          height: "55vw",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,160,90,0.045) 0%, transparent 65%)",
          pointerEvents: "none",
          zIndex: 0,
          animation: "accentPulse 6s ease-in-out infinite",
        }}
      />

      {/* Left content - staggered page-load animation */}
      <m.div
        className="hero-left"
        variants={heroContainer}
        initial="hidden"
        animate="show"
      >
        <m.div
          variants={heroItem}
          className="section-label"
          style={{ marginBottom: "1.6rem", color: "var(--accent)" }}
        >
          Java Developer&nbsp;·&nbsp;FNB&nbsp;·&nbsp;South Africa
        </m.div>

        {/* Headline animated by GSAP SplitText (hidden until split) */}
        <h1
          ref={headlineRef}
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "clamp(3rem, 5.5vw, 5.6rem)",
            fontWeight: 300,
            lineHeight: 1.04,
            color: "var(--white)",
            letterSpacing: "-0.028em",
            marginBottom: "2rem",
            visibility: "hidden",
          }}
        >
          Hi, I&apos;m{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
            Themba
          </em>
          .<br />
          I build software
          <br />
          that{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
            matters
          </em>
          .
        </h1>

        <m.p
          variants={heroItem}
          style={{
            fontSize: "0.94rem",
            color: "var(--muted)",
            maxWidth: "380px",
            lineHeight: 1.85,
            marginBottom: "3rem",
          }}
        >
          Building scalable Java microservices at FNB, designing resilient
          backend architectures, and shipping production software for the
          foreign-exchange systems behind international money transfers.
        </m.p>

        <m.div
          variants={heroItem}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.4rem 2rem",
            flexWrap: "wrap",
          }}
        >
          <Magnetic>
          <m.a
            href="#projects"
            whileHover={{
              boxShadow: "0 12px 32px rgba(200,160,90,0.28)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.55rem",
              background: "var(--accent)",
              color: "#0a0a0a",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.85rem 1.7rem",
              borderRadius: "var(--radius)",
              textDecoration: "none",
            }}
          >
            View my work
            <svg
              width="11"
              height="11"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </m.a>
          </Magnetic>
          <a
            href="#contact"
            className="hover-line link-quiet"
            style={{
              fontSize: "0.8rem",
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            Get in touch →
          </a>
        </m.div>
      </m.div>

      {/* Right decorative panel */}
      <m.div
        className="hero-right"
        variants={heroPanel}
        initial="hidden"
        animate="show"
        style={{
          position: "relative",
          overflow: "hidden",
          borderLeft: "1px solid var(--line)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        {/* Fine cross-hatch grid */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Accent corner - top right */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "9rem",
            right: "2.5rem",
            width: "40px",
            height: "40px",
            borderTop: "1px solid rgba(200,160,90,0.28)",
            borderRight: "1px solid rgba(200,160,90,0.28)",
          }}
        />
        {/* Accent corner - bottom left */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "5rem",
            left: "2.5rem",
            width: "40px",
            height: "40px",
            borderBottom: "1px solid rgba(200,160,90,0.22)",
            borderLeft: "1px solid rgba(200,160,90,0.22)",
          }}
        />

        {/* Ghost monogram - floating */}
        <div
          aria-hidden="true"
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "clamp(10rem, 16vw, 18rem)",
            fontWeight: 700,
            color: "transparent",
            WebkitTextStroke: "1px rgba(200,160,90,0.07)",
            lineHeight: 1,
            userSelect: "none",
            letterSpacing: "-0.04em",
            position: "absolute",
            right: "-1rem",
            bottom: "2rem",
            animation: "float 7s ease-in-out infinite",
          }}
        >
          TN
        </div>

        {/* Interactive terminal card */}
        <HeroTerminal />

        {/* Status badge */}
        <m.div
          className="status-badge"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "absolute",
            top: "9rem",
            left: "2.5rem",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            padding: "0.65rem 1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#4ade80",
              display: "block",
              animation: "pulse 3s ease-in-out infinite",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: "0.72rem",
              color: "var(--muted)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Available for work
          </span>
        </m.div>
      </m.div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="hero-scroll"
        style={{
          position: "absolute",
          bottom: "2.8rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          color: "var(--muted2)",
          fontSize: "0.62rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          animation: "scrollBounce 2.8s ease-in-out infinite",
          zIndex: 3,
        }}
      >
        <div
          style={{
            width: "1px",
            height: "28px",
            background:
              "linear-gradient(to bottom, transparent, rgba(200,160,90,0.35))",
          }}
        />
        scroll
      </div>
    </section>
  );
};

export default Hero;
