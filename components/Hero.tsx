"use client";
import { useRef } from "react";
import { m } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { heroContainer, heroItem, revealAllActive } from "./motion-utils";
import Magnetic from "./Magnetic";

gsap.registerPlugin(useGSAP, SplitText);

/*
 * Hero: a single typographic statement sitting in a pool of light.
 * The mood (dark, sculptural, high-contrast) is carried entirely by scale,
 * negative space and the light/vignette layers - no decorative imagery.
 * Gold is deliberately reduced to two hairline accents.
 */
const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  // Guard against React 18 strict-mode double-mount splitting twice
  const didSplit = useRef(false);

  useGSAP(() => {
    const el = headlineRef.current;
    if (!el) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      didSplit.current ||
      revealAllActive()
    ) {
      gsap.set(el, { autoAlpha: 1 });
      return;
    }
    didSplit.current = true;

    // Split once fonts load so line/word metrics are correct - but on a slow
    // connection we never want the LCP headline hidden indefinitely, so cap
    // the wait and reveal on schedule regardless of font load state. No extra
    // delay after that: this headline is the page's largest paint.
    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
    const timeout = new Promise((resolve) => setTimeout(resolve, 350));

    Promise.race([fontsReady, timeout]).then(() => {
      const split = SplitText.create(el, { type: "words" });
      gsap.set(el, { autoAlpha: 1 });
      gsap.from(split.words, {
        yPercent: 75,
        autoAlpha: 0,
        duration: 1.45,
        ease: "power4.out",
        stagger: 0.07,
      });
    });
  });

  return (
    <section id="home" className="hero-statement">
      {/* Light emerging from black, then pulled back down at the edges */}
      <div className="hero-light" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />

      <m.div
        className="hero-inner"
        variants={heroContainer}
        initial="hidden"
        animate="show"
      >
        <m.div className="hero-eyebrow" variants={heroItem} data-reveal>
          <span className="hero-rule" aria-hidden="true" />
          Themba Ngobeni&nbsp;·&nbsp;Java Developer&nbsp;·&nbsp;Johannesburg
        </m.div>

        {/* Headline animated by GSAP SplitText (hidden until split) */}
        <h1
          ref={headlineRef}
          className="hero-display"
          data-reveal
          style={{ visibility: "hidden" }}
        >
          I build the backend behind{" "}
          <br />
          <em style={{ fontStyle: "italic" }}>cross-border payments</em>.
        </h1>

        <m.p className="hero-lede" variants={heroItem} data-reveal>
          Java and Spring Boot for FNB&apos;s foreign-exchange division, the
          engine behind currency conversions and international transfers. I
          also built SynthForge, a Spring Boot library published on Maven
          Central.
        </m.p>

        <m.div className="hero-actions" variants={heroItem} data-reveal>
          <Magnetic>
            <a href="#projects" className="btn-ghost">
              View selected work
              <svg
                width="11"
                height="11"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
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
            Get in touch
          </a>
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
          gap: "0.55rem",
          color: "var(--muted2)",
          fontSize: "0.75rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          animation: "scrollBounce 2.8s ease-in-out infinite",
          zIndex: 3,
        }}
      >
        <div
          style={{
            width: "1px",
            height: "30px",
            background:
              "linear-gradient(to bottom, transparent, rgba(236,234,229,0.32))",
          }}
        />
        scroll
      </div>
    </section>
  );
};

export default Hero;
