"use client";
import { useRef } from "react";
import Image from "next/image";
import { m } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { reveal, revealScale } from "./motion-utils";
import SplitReveal from "./SplitReveal";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Counts up from 0 once the stat scrolls into view - static under reduced motion.
const StatCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = `${value}${suffix}`;
      return;
    }

    const counter = { n: 0 };
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

  return <span ref={ref}>0{suffix}</span>;
};

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
          <span
            style={{
              color: "var(--muted2)",
              marginLeft: "0.6rem",
              fontSize: "0.65rem",
            }}
          >
            01
          </span>
        </m.div>

        <SplitReveal
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)",
            fontWeight: 300,
            lineHeight: 1.08,
            color: "var(--white)",
            letterSpacing: "-0.022em",
            marginBottom: "2.4rem",
          }}
        >
          A developer who
          <br />
          <em style={{ fontStyle: "italic", color: "var(--white)" }}>
            loves
          </em>{" "}
          the craft.
        </SplitReveal>

        <m.p
          style={{
            color: "var(--muted)",
            fontSize: "0.94rem",
            lineHeight: 1.9,
            marginBottom: "1.3rem",
          }}
          {...reveal(0.17)}
        >
          I&apos;m a{" "}
          <span style={{ color: "var(--text)" }}>Java developer at FNB</span>{" "}
          focused on building scalable and reliable backend systems for
          enterprise banking. I enjoy designing clean architectures, improving
          system performance, and delivering software that solves real business
          problems.
        </m.p>
        <m.p
          style={{
            color: "var(--muted)",
            fontSize: "0.94rem",
            lineHeight: 1.9,
            marginBottom: "1.3rem",
          }}
          {...reveal(0.22)}
        >
          My experience spans{" "}
          <span style={{ color: "var(--text)" }}>
            Java microservices, REST APIs, and modern backend development
            practices
          </span>
          . During my honours studies in Mathematical Sciences, I explored
          applied machine learning, strengthening my analytical and
          problem-solving approach to software engineering.
        </m.p>
        <m.p
          style={{
            color: "var(--muted)",
            fontSize: "0.94rem",
            lineHeight: 1.9,
          }}
          {...reveal(0.26)}
        >
          Outside of work, I build side projects, refine my engineering skills,
          and explore new technologies that improve how software is designed and
          delivered.
        </m.p>

        {/* Stats */}
        <m.div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            border: "1px solid var(--line)",
            marginTop: "3.5rem",
          }}
          {...reveal(0.35)}
        >
          {[
            { value: 3, suffix: "+", label: "Years at FNB" },
            { value: 10, suffix: "+", label: "Technologies" },
            { value: 4, suffix: "", label: "Selected projects" },
          ].map((s, i) => (
            <m.div
              key={i}
              whileHover={{ background: "var(--bg3)" }}
              transition={{ duration: 0.3 }}
              style={{
                padding: "1.6rem 1.4rem",
                borderRight: i < 2 ? "1px solid var(--line)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontSize: "2.6rem",
                  fontWeight: 700,
                  color: "var(--accent)",
                  lineHeight: 1,
                  marginBottom: "0.45rem",
                  letterSpacing: "-0.02em",
                }}
              >
                <StatCounter value={s.value} suffix={s.suffix} />
              </div>
              <div
                style={{
                  fontSize: "0.68rem",
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
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </div>

          {/* Fine grid overlay */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px)," +
                "linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              zIndex: 1,
              pointerEvents: "none",
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
              height: "60%",
              background:
                "linear-gradient(to top, rgba(10,10,10,0.94) 0%, rgba(10,10,10,0.5) 40%, transparent 100%)",
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
              borderTop: "1px solid rgba(200,160,90,0.35)",
              borderLeft: "1px solid rgba(200,160,90,0.35)",
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
              borderTop: "1px solid rgba(200,160,90,0.35)",
              borderRight: "1px solid rgba(200,160,90,0.35)",
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
                  fontSize: "0.66rem",
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
                fontSize: "0.62rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent)",
                opacity: 0.85,
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
            "TensorFlow",
            "Next.js",
          ].map((s) => (
            <m.span
              key={s}
              whileHover={{
                borderColor: "rgba(200,160,90,0.5)",
                background: "rgba(200,160,90,0.1)",
              }}
              transition={{ duration: 0.25 }}
              style={{
                fontSize: "0.66rem",
                letterSpacing: "0.09em",
                textTransform: "uppercase",
                color: "var(--accent)",
                border: "1px solid rgba(200,160,90,0.2)",
                padding: "0.22rem 0.65rem",
                borderRadius: "1px",
                background: "rgba(200,160,90,0.04)",
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
