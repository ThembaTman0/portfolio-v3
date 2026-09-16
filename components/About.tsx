"use client";
import { useRef } from "react";
import Image from "next/image";
import { m } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { reveal, revealAllActive, revealScale } from "./motion-utils";
import SplitReveal from "./SplitReveal";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Counts up from 0 once the stat scrolls into view. The server renders the
// final value, so the stat reads correctly without JavaScript; the count is
// skipped under reduced motion or once the content safety net has fired.
const StatCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      revealAllActive()
    ) {
      return;
    }

    const counter = { n: 0 };
    el.textContent = `0${suffix}`;
    gsap.to(counter, {
      n: value,
      duration: 1.4,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
      onUpdate: () => {
        el.textContent = `${Math.round(counter.n)}${suffix}`;
      },
    });
  }, [value, suffix]);

  return <span ref={ref}>{`${value}${suffix}`}</span>;
};

type Stat = { label: string } & (
  | { count: number; suffix: string }
  | { text: string }
);

const STATS: Stat[] = [
  { count: 3, suffix: "+", label: "Years at FNB" },
  { text: "ISO", label: "20022 migration" },
  { text: "IEEE", label: "Published research" },
];

const About = () => {
  const imgCardRef = useRef<HTMLDivElement>(null);
  const imgInnerRef = useRef<HTMLDivElement>(null);

  // Subtle scroll parallax on the profile image
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      imgInnerRef.current,
      { yPercent: -7, scale: 1.16 },
      {
        yPercent: 7,
        scale: 1.16,
        ease: "none",
        scrollTrigger: {
          trigger: imgCardRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });

  return (
    <section
      id="about"
      className="about-grid section-block"
      style={{
        borderBottom: "1px solid var(--line)",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      {/* Left */}
      <div>
        <m.div
          className="section-label"
          style={{ marginBottom: "3.5rem" }}
          {...reveal(0)}
        >
          About
        </m.div>

        <SplitReveal
          className="section-display"
          style={{ marginBottom: "2.8rem" }}
        >
          Careful with
          <br />
          <em style={{ fontStyle: "italic", color: "var(--white)" }}>
            other people&apos;s money
          </em>
          .
        </SplitReveal>

        <m.p
          style={{
            color: "var(--muted)",
            fontSize: "1.0rem",
            lineHeight: 1.9,
            marginBottom: "1.3rem",
          }}
          {...reveal(0.17)}
        >
          I&apos;m a Java developer in FNB&apos;s foreign-exchange division,
          working on{" "}
          <span style={{ color: "var(--text)" }}>cross-border payments</span>.
          That includes TCIB, a real-time payments platform for the SADC
          region; the move from SWIFT MT to ISO 20022; and the Spring Boot API
          that connects a fraud detection model into the live payments
          pipeline.
        </m.p>
        <m.p
          style={{
            color: "var(--muted)",
            fontSize: "1.0rem",
            lineHeight: 1.9,
            marginBottom: "1.3rem",
          }}
          {...reveal(0.22)}
        >
          Production support is part of the job. I&apos;m on the on-call
          rotation for that fraud API, and I use MySQL to investigate why
          applications fail and why payments don&apos;t go through.
        </m.p>
        <m.p
          style={{
            color: "var(--muted)",
            fontSize: "1.0rem",
            lineHeight: 1.9,
          }}
          {...reveal(0.26)}
        >
          I also build developer tooling:{" "}
          <span style={{ color: "var(--text)" }}>SynthForge</span>, my Spring
          Boot library on Maven Central, seeds related JPA entities with
          realistic fake data in the right order. Before that, my honours
          research at Wits became an IEEE-published paper on satellite image
          classification, co-authored with Ritesh Ajoodha.
        </m.p>

        {/* Stats: each reads as one phrase, value then label */}
        <m.div className="about-stats" {...reveal(0.35)}>
          {STATS.map((s) => (
            <m.div
              key={s.label}
              className="about-stat"
              whileHover={{ background: "var(--bg3)" }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="about-stat-value"
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontSize: "2.6rem",
                  fontWeight: 300,
                  color: "var(--stone)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {"count" in s ? (
                  <StatCounter value={s.count} suffix={s.suffix} />
                ) : (
                  s.text
                )}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}
              >
                {s.label}
              </div>
            </m.div>
          ))}
        </m.div>
      </div>

      {/* Right - profile image card */}
      <m.div {...revealScale(0.18)}>
        <div
          ref={imgCardRef}
          style={{
            aspectRatio: "4/5",
            background: "var(--bg2)",
            border: "1px solid var(--line)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Profile image - inner wrapper is parallax-animated by GSAP */}
          <div ref={imgInnerRef} style={{ position: "absolute", inset: 0 }}>
            <Image
              src="/Profile.png"
              alt="Themba Ngobeni"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1440px) 45vw, 620px"
              style={{
                objectFit: "cover",
                objectPosition: "center top",
                // Colour is kept deliberately. The sculptural mood comes from
                // the lighting layers below, not from desaturation.
                filter: "contrast(1.05)",
              }}
              priority
            />
          </div>

          {/* Raking light from the upper right, echoing the hero */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              pointerEvents: "none",
              mixBlendMode: "soft-light",
              background:
                "radial-gradient(85% 65% at 82% 6%," +
                " rgba(236,234,229,0.55) 0%," +
                " rgba(236,234,229,0.30) 24%," +
                " rgba(236,234,229,0.14) 44%," +
                " rgba(236,234,229,0.05) 64%," +
                " rgba(236,234,229,0) 82%)",
            }}
          />

          {/* Falloff into black: light on one side, shadow on the other */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              pointerEvents: "none",
              background:
                "radial-gradient(120% 95% at 78% 8%," +
                " rgba(10,10,10,0) 30%," +
                " rgba(10,10,10,0.18) 54%," +
                " rgba(10,10,10,0.42) 74%," +
                " rgba(10,10,10,0.62) 100%)",
            }}
          />

          {/* Bottom gradient fade */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "66%",
              background:
                "linear-gradient(to top," +
                " rgba(10,10,10,0.95) 0%," +
                " rgba(10,10,10,0.72) 26%," +
                " rgba(10,10,10,0.4) 52%," +
                " rgba(10,10,10,0.16) 76%," +
                " rgba(10,10,10,0) 100%)",
              zIndex: 2,
            }}
          />

          {/* Corner accents */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "1.2rem",
              left: "1.2rem",
              width: "28px",
              height: "28px",
              borderTop: "1px solid rgba(236,234,229,0.28)",
              borderLeft: "1px solid rgba(236,234,229,0.28)",
              zIndex: 3,
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "1.2rem",
              right: "1.2rem",
              width: "28px",
              height: "28px",
              borderTop: "1px solid rgba(236,234,229,0.28)",
              borderRight: "1px solid rgba(236,234,229,0.28)",
              zIndex: 3,
            }}
          />

          {/* Name + location overlay */}
          <div
            style={{
              position: "absolute",
              bottom: "1.4rem",
              left: "1.4rem",
              right: "1.4rem",
              zIndex: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontSize: "1.05rem",
                  fontWeight: 300,
                  color: "var(--white)",
                  marginBottom: "0.18rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Themba Ngobeni
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}
              >
                Java Developer · FNB
              </div>
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--muted)",
                opacity: 0.9,
              }}
            >
              Johannesburg, ZA
            </div>
          </div>
        </div>

        {/* Tech chips */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.45rem",
            marginTop: "1.3rem",
          }}
        >
          {[
            "Java",
            "Python",
            "React",
            "Spring Boot",
            "Next.js",
          ].map((s) => (
            <m.span
              key={s}
              whileHover={{
                borderColor: "rgba(236,234,229,0.4)",
                background: "rgba(236,234,229,0.06)",
              }}
              transition={{ duration: 0.25 }}
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.09em",
                textTransform: "uppercase",
                color: "var(--muted)",
                border: "1px solid rgba(236,234,229,0.16)",
                padding: "0.22rem 0.65rem",
                borderRadius: "1px",
                background: "rgba(236,234,229,0.02)",
                cursor: "default",
                display: "inline-block",
              }}
            >
              {s}
            </m.span>
          ))}
        </div>
      </m.div>
    </section>
  );
};

export default About;
