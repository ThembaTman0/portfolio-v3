"use client";
import { EDUCATION, EXPERIENCE } from "@/constants";
import { m } from "framer-motion";
import { reveal } from "./motion-utils";

const Experience = () => {
  return (
    <section
      id="experience"
      className="section-block"
      style={{
        background: "rgba(255,255,255,0.013)",
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
        </m.div>

        <div style={{ borderTop: "1px solid var(--line)" }}>
          {EXPERIENCE.map((exp, i) => (
            <m.div
              key={i}
              className="exp-row"
              data-reveal
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.1,
              }}
              style={{
                padding: "3.4rem 0",
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
                    fontSize: "clamp(1.15rem, 1.6vw, 1.45rem)",
                    fontWeight: 300,
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
                    color: "var(--stone)",
                    marginBottom: "1rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {exp.company}
                </div>
                <p
                  style={{
                    fontSize: "1.0rem",
                    color: "var(--muted)",
                    lineHeight: 1.8,
                  }}
                >
                  {exp.description}
                </p>
              </div>
              <div className="exp-tech">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.75rem",
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
        {EDUCATION.map((edu, i) => (
          <m.div
            key={i}
            className="exp-row"
            data-reveal
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
              delay: (EXPERIENCE.length + i) * 0.1,
            }}
            style={{
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
              {edu.period}
            </div>
            <div>
              <div
                style={{
                  fontSize: "clamp(1.15rem, 1.6vw, 1.45rem)",
                  fontWeight: 300,
                  color: "var(--white)",
                  marginBottom: "0.25rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {edu.degree}
              </div>
              <div
                style={{
                  fontSize: "0.82rem",
                  color: "var(--stone)",
                  marginBottom: "1rem",
                  letterSpacing: "0.02em",
                }}
              >
                {edu.institution}
              </div>
              <p
                style={{
                  fontSize: "1.0rem",
                  color: "var(--muted)",
                  lineHeight: 1.8,
                }}
              >
                {edu.description}
              </p>
            </div>
            <div className="exp-tech">
              {edu.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "0.75rem",
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
    </section>
  );
};

export default Experience;
