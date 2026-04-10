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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "4rem",
            alignItems: "end",
            marginBottom: "4.5rem",
          }}
        >
          <div>
            <div
              className="reveal section-label"
              style={{ marginBottom: "1.6rem" }}
            >
              Skills
              <span
                style={{
                  color: "var(--muted2)",
                  marginLeft: "0.6rem",
                  fontSize: "0.65rem",
                }}
              >
                02
              </span>
            </div>
            <h2
              className="reveal"
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(2rem, 3vw, 3rem)",
                fontWeight: 300,
                lineHeight: 1.08,
                color: "var(--white)",
                letterSpacing: "-0.022em",
                transitionDelay: "0.1s",
              }}
            >
              The tools I<br />
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                work with
              </em>
              .
            </h2>
          </div>
          <p
            className="reveal"
            style={{
              color: "var(--muted)",
              fontSize: "0.93rem",
              lineHeight: 1.85,
              transitionDelay: "0.15s",
              maxWidth: "520px",
            }}
          >
            Specialising in backend engineering and distributed systems, with
            practical experience across modern software platforms.
          </p>
        </div>

        {/* Skills grid — each card reveals individually with stagger */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1px",
            background: "var(--line)",
            border: "1px solid var(--line)",
          }}
        >
          {SKILLS.map((skill, i) => {
            const colorMap: Record<string, string> = {
              "3+ years": "var(--accent)",
              "2+ years": "var(--muted2)",
              "Honours Research": "#8fb4c0",
              "1+ year": "var(--muted)",
              "1 year": "var(--muted)",
            };
            const dotColor = colorMap[skill.proficiency] ?? "var(--muted)";

            return (
              <div
                key={skill.name}
                className="reveal card-hover"
                style={{
                  background: "var(--bg2)",
                  padding: "1.6rem 1.8rem",
                  transitionDelay: `${0.05 * i}s`,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "var(--bg3)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "var(--bg2)")
                }
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.55rem",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 400,
                      color: "var(--text)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {skill.name}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.38rem",
                    }}
                  >
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: dotColor,
                        display: "block",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.64rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: dotColor,
                      }}
                    >
                      {skill.proficiency}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "0.66rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted2)",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
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
