"use client";
import { EXPERIENCE } from "@/constants";
import { m } from "framer-motion";
import { reveal } from "./motion-utils";

const Experience = () => {
  return (
    <section
      id="experience"
      style={{
        background: "rgba(17,17,17,0.72)",
        padding: "8rem 3rem",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <m.div
          className="section-label"
          style={{ marginBottom: "4.5rem" }}
          {...reveal(0)}
        >
          Experience
          <span
            style={{
              color: "var(--muted2)",
              marginLeft: "0.6rem",
              fontSize: "0.65rem",
            }}
          >
            04
          </span>
        </m.div>

        <div style={{ borderTop: "1px solid var(--line)" }}>
          {EXPERIENCE.map((exp, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.1,
              }}
              style={{
                display: "grid",
                gridTemplateColumns: "160px 1fr 1fr",
                gap: "2.5rem",
                alignItems: "start",
                padding: "2.8rem 0",
                borderBottom: "1px solid var(--line)",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.78rem",
                    letterSpacing: "0.06em",
                    color: "var(--muted2)",
                    paddingTop: "0.2rem",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {exp.period}
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 400,
                    color: "var(--white)",
                    marginBottom: "0.25rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {exp.role}
                </div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--accent)",
                    marginBottom: "1rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {exp.company}
                </div>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--muted)",
                    lineHeight: 1.8,
                  }}
                >
                  {exp.description}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  justifyContent: "flex-end",
                  paddingTop: "0.2rem",
                }}
              >
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.64rem",
                      letterSpacing: "0.09em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      padding: "0.22rem 0.55rem",
                      borderRadius: "1px",
                      background: "rgba(255,255,255,0.02)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </m.div>
          ))}
        </div>

        {/* Education */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: EXPERIENCE.length * 0.1,
          }}
          style={{
            display: "grid",
            gridTemplateColumns: "160px 1fr 1fr",
            gap: "2.5rem",
            alignItems: "start",
            padding: "2.8rem 0",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <div
            style={{
              fontSize: "0.78rem",
              letterSpacing: "0.06em",
              color: "var(--muted2)",
              paddingTop: "0.2rem",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            2021 - 2022
          </div>
          <div>
            <div
              style={{
                fontSize: "1.05rem",
                fontWeight: 400,
                color: "var(--white)",
                marginBottom: "0.25rem",
                letterSpacing: "-0.01em",
              }}
            >
              BSc Honours in Mathematical Sciences
            </div>
            <div
              style={{
                fontSize: "0.82rem",
                color: "var(--accent)",
                marginBottom: "1rem",
                letterSpacing: "0.02em",
              }}
            >
              University of the Witwatersrand
            </div>
            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--muted)",
                lineHeight: 1.8,
              }}
            >
              Built a strong foundation in pure and applied mathematics
              alongside computer science fundamentals covering data structures,
              algorithms, and software engineering, with a specialisation in
              applied machine learning and systems design.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
              justifyContent: "flex-end",
              paddingTop: "0.2rem",
            }}
          >
            {["Algorithms", "ML", "Software Engineering"].map((t) => (
              <span
                key={t}
                style={{
                  fontSize: "0.64rem",
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "0.22rem 0.55rem",
                  borderRadius: "1px",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default Experience;
