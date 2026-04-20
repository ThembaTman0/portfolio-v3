"use client";
import { SKILLS } from "@/constants";
import { m } from "framer-motion";
import { reveal } from "./motion-utils";

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        background: "rgba(17,17,17,0.72)",
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
            <m.div
              className="section-label"
              style={{ marginBottom: "1.6rem" }}
              {...reveal(0)}
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
            </m.div>
            <m.h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(2rem, 3vw, 3rem)",
                fontWeight: 300,
                lineHeight: 1.08,
                color: "var(--white)",
                letterSpacing: "-0.022em",
              }}
              {...reveal(0.1)}
            >
              The tools I<br />
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                work with
              </em>
              .
            </m.h2>
          </div>
          <m.p
            style={{
              color: "var(--muted)",
              fontSize: "0.93rem",
              lineHeight: 1.85,
              maxWidth: "520px",
            }}
            {...reveal(0.15)}
          >
            Specialising in backend engineering and distributed systems, with
            practical experience across modern software platforms.
          </m.p>
        </div>

        {/* Skills grid */}
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
              <m.div
                key={skill.name}
                className="card-hover"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.04 * i,
                }}
                whileHover={{ background: "var(--bg3)" }}
                style={{
                  background: "var(--bg2)",
                  padding: "1.6rem 1.8rem",
                }}
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
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
