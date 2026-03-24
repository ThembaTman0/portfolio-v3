"use client";
import { EXPERIENCE } from "@/constants";

const Experience = () => {
  return (
    <section
      id="experience"
      style={{
        background: "var(--bg2)",
        padding: "8rem 3rem",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        <div className="reveal section-label" style={{ marginBottom: "4.5rem" }}>
          Experience
          <span style={{ color: "var(--muted2)", marginLeft: "0.6rem", fontSize: "0.65rem" }}>04</span>
        </div>

        <div style={{ borderTop: "1px solid var(--line)" }}>
          {EXPERIENCE.map((exp, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "160px 1fr 1fr",
                gap: "2.5rem", alignItems: "start",
                padding: "2.8rem 0",
                borderBottom: "1px solid var(--line)",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div>
                <div style={{ fontSize: "0.78rem", letterSpacing: "0.06em", color: "var(--muted2)", paddingTop: "0.2rem", fontVariantNumeric: "tabular-nums" }}>
                  {exp.period}
                </div>
              </div>
              <div>
                <div style={{ fontSize: "1.05rem", fontWeight: 400, color: "var(--white)", marginBottom: "0.25rem", letterSpacing: "-0.01em" }}>
                  {exp.role}
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--accent)", marginBottom: "1rem", letterSpacing: "0.02em" }}>
                  {exp.company}
                </div>
                <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.8 }}>
                  {exp.description}
                </p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", justifyContent: "flex-end", paddingTop: "0.2rem" }}>
                {exp.tech.map((t) => (
                  <span key={t} style={{
                    fontSize: "0.64rem", letterSpacing: "0.09em", textTransform: "uppercase",
                    color: "var(--muted)", border: "1px solid rgba(255,255,255,0.06)",
                    padding: "0.22rem 0.55rem", borderRadius: "1px",
                    background: "rgba(255,255,255,0.02)",
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "160px 1fr 1fr",
            gap: "2.5rem", alignItems: "start",
            padding: "2.8rem 0",
            borderBottom: "1px solid var(--line)",
            transitionDelay: "0.1s",
          }}
        >
          <div style={{ fontSize: "0.78rem", letterSpacing: "0.06em", color: "var(--muted2)", paddingTop: "0.2rem", fontVariantNumeric: "tabular-nums" }}>
            2020 — 2023
          </div>
          <div>
            <div style={{ fontSize: "1.05rem", fontWeight: 400, color: "var(--white)", marginBottom: "0.25rem", letterSpacing: "-0.01em" }}>
              Bachelor of Science in Computer Science
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--accent)", marginBottom: "1rem", letterSpacing: "0.02em" }}>
              University of South Africa (UNISA)
            </div>
            <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.8 }}>
              Studied core CS principles, software engineering, data structures, and algorithms, with a focus on applied machine learning and systems design.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", justifyContent: "flex-end", paddingTop: "0.2rem" }}>
            {["Algorithms", "ML", "Software Engineering"].map((t) => (
              <span key={t} style={{
                fontSize: "0.64rem", letterSpacing: "0.09em", textTransform: "uppercase",
                color: "var(--muted)", border: "1px solid rgba(255,255,255,0.06)",
                padding: "0.22rem 0.55rem", borderRadius: "1px",
                background: "rgba(255,255,255,0.02)",
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
