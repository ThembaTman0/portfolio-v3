"use client";
import { SKILLS } from "@/constants";

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        background: "var(--bg2)",
        padding: "8rem 3rem",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem", alignItems: "end", marginBottom: "4.5rem" }}>
          <div>
            <div className="reveal section-label" style={{ marginBottom: "1.6rem" }}>
              Skills
              <span style={{ color: "var(--muted2)", marginLeft: "0.6rem", fontSize: "0.65rem" }}>02</span>
            </div>
            <h2
              className="reveal"
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(2rem, 3vw, 3rem)",
                fontWeight: 300, lineHeight: 1.08,
                color: "var(--white)",
                letterSpacing: "-0.022em",
                transitionDelay: "0.1s",
              }}
            >
              The tools I<br /><em style={{ fontStyle: "italic", color: "var(--accent)" }}>work with</em>.
            </h2>
          </div>
          <p
            className="reveal"
            style={{
              color: "var(--muted)", fontSize: "0.93rem", lineHeight: 1.85,
              transitionDelay: "0.15s", maxWidth: "520px",
            }}
          >
            From enterprise Java systems to machine learning pipelines, I work across the full spectrum of modern software development.
          </p>
        </div>

        {/* Skills grid */}
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1px",
            background: "var(--line)",
            border: "1px solid var(--line)",
            transitionDelay: "0.2s",
          }}
        >
          {SKILLS.map((skill) => {
            const colorMap: Record<string, string> = {
              Expert:     "var(--accent)",
              Advanced:   "#8fb4c0",
              Proficient: "var(--muted)",
              Familiar:   "var(--muted2)",
            };
            const dotColor = colorMap[skill.proficiency] ?? "var(--muted)";

            return (
              <div
                key={skill.name}
                className="card-hover"
                style={{
                  background: "var(--bg2)",
                  padding: "1.6rem 1.8rem",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg3)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg2)")}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.55rem" }}>
                  <div style={{ fontSize: "0.9rem", fontWeight: 400, color: "var(--text)", letterSpacing: "0.01em" }}>
                    {skill.name}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.38rem" }}>
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: dotColor, display: "block", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.64rem", letterSpacing: "0.1em", textTransform: "uppercase", color: dotColor }}>
                      {skill.proficiency}
                    </span>
                  </div>
                </div>
                <div style={{ fontSize: "0.66rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted2)" }}>
                  {skill.category}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
