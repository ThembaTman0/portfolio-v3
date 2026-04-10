"use client";
import Image from "next/image";

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
        <div
          className="reveal section-label"
          style={{ marginBottom: "3.5rem" }}
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
        </div>

        <h2
          className="reveal"
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)",
            fontWeight: 300,
            lineHeight: 1.08,
            color: "var(--white)",
            letterSpacing: "-0.022em",
            marginBottom: "2.4rem",
            transitionDelay: "0.1s",
          }}
        >
          A developer who
          <br />
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
            loves
          </em>{" "}
          the craft.
        </h2>

        <p
          className="reveal"
          style={{
            color: "var(--muted)",
            fontSize: "0.94rem",
            lineHeight: 1.9,
            marginBottom: "1.3rem",
            transitionDelay: "0.15s",
          }}
        >
          I&apos;m a{" "}
          <span style={{ color: "var(--text)" }}>Java developer at FNB</span>{" "}
          focused on building scalable and reliable backend systems for
          enterprise banking. I enjoy designing clean architectures, improving
          system performance, and delivering software that solves real business
          problems.
        </p>
        <p
          className="reveal"
          style={{
            color: "var(--muted)",
            fontSize: "0.94rem",
            lineHeight: 1.9,
            marginBottom: "1.3rem",
            transitionDelay: "0.2s",
          }}
        >
          My experience spans{" "}
          <span style={{ color: "var(--text)" }}>
            Java microservices, REST APIs, and modern backend development
            practices
          </span>
          . During my honours studies in Mathematical Sciences, I explored
          applied machine learning, strengthening my analytical and
          problem-solving approach to software engineering.
        </p>
        <p
          className="reveal"
          style={{
            color: "var(--muted)",
            fontSize: "0.94rem",
            lineHeight: 1.9,
            marginBottom: "1.3rem",
            transitionDelay: "0.22s",
          }}
        >
          Outside of work, I build side projects, refine my engineering skills,
          and explore new technologies that improve how software is designed and
          delivered.
        </p>
        <p
          className="reveal"
          style={{
            color: "var(--muted)",
            fontSize: "0.94rem",
            lineHeight: 1.9,
            transitionDelay: "0.25s",
          }}
        >
          I believe great software lives at the intersection of{" "}
          <span style={{ color: "var(--text)" }}>
            technical rigour, simplicity, and maintainability
          </span>{" "}
          — a standard I continuously work toward.
        </p>

        {/* Stats */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            border: "1px solid var(--line)",
            marginTop: "3.5rem",
            transitionDelay: "0.3s",
          }}
        >
          {[
            { num: "3+", label: "Years exp." },
            { num: "15+", label: "Projects" },
            { num: "∞", label: "Curiosity" },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                padding: "1.6rem 1.4rem",
                borderRight: i < 2 ? "1px solid var(--line)" : "none",
                transition: "background 0.4s var(--ease-silk)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--bg3)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
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
            </div>
          ))}
        </div>
      </div>

      {/* Right - profile image card */}
      <div className="reveal" style={{ transitionDelay: "0.2s" }}>
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
            <span
              key={s}
              style={{
                fontSize: "0.66rem",
                letterSpacing: "0.09em",
                textTransform: "uppercase",
                color: "var(--accent)",
                border: "1px solid rgba(200,160,90,0.2)",
                padding: "0.22rem 0.65rem",
                borderRadius: "1px",
                background: "rgba(200,160,90,0.04)",
                transition:
                  "border-color 0.3s ease, background 0.3s ease, color 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(200,160,90,0.5)";
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(200,160,90,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(200,160,90,0.2)";
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(200,160,90,0.04)";
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
