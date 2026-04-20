"use client";
import Image from "next/image";
import { m } from "framer-motion";
import { reveal, revealScale } from "./motion-utils";

const About = () => {
  return (
    <section
      id="about"
      className="about-grid"
      style={{
        padding: "8rem 3rem",
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

        <m.h2
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)",
            fontWeight: 300,
            lineHeight: 1.08,
            color: "var(--white)",
            letterSpacing: "-0.022em",
            marginBottom: "2.4rem",
          }}
          {...reveal(0.1)}
        >
          A developer who
          <br />
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
            loves
          </em>{" "}
          the craft.
        </m.h2>

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
            marginBottom: "1.3rem",
          }}
          {...reveal(0.26)}
        >
          Outside of work, I build side projects, refine my engineering skills,
          and explore new technologies that improve how software is designed and
          delivered.
        </m.p>
        <m.p
          style={{
            color: "var(--muted)",
            fontSize: "0.94rem",
            lineHeight: 1.9,
          }}
          {...reveal(0.3)}
        >
          I believe great software lives at the intersection of{" "}
          <span style={{ color: "var(--text)" }}>
            technical rigour, simplicity, and maintainability
          </span>{" "}
          - a standard I continuously work toward.
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
            { num: "3+", label: "Years exp." },
            { num: "15+", label: "Projects" },
            { num: "∞", label: "Curiosity" },
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
                  fontFamily: "'Fraunces', serif",
                  fontSize: "2.6rem",
                  fontWeight: 700,
                  color: "var(--accent)",
                  lineHeight: 1,
                  marginBottom: "0.45rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {s.num}
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
          style={{
            aspectRatio: "4/5",
            background: "var(--bg2)",
            border: "1px solid var(--line)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Profile image */}
          <Image
            src="/Profile.png"
            alt="Themba Ngobeni"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
          />

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
                  fontFamily: "'Fraunces', serif",
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
