"use client";
import { SKILLS } from "@/constants";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { reveal } from "./motion-utils";

const CATEGORIES = Array.from(new Set(SKILLS.map((s) => s.category)));

const Skills = () => {
  const [active, setActive] = useState(CATEGORIES[0]);
  const activeSkills = SKILLS.filter((s) => s.category === active);

  return (
    <section
      id="skills"
      className="section-block"
      style={{
        background: "rgba(17,17,17,0.72)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
        {/* Header */}
        <div className="skills-header" style={{ marginBottom: "4.5rem" }}>
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
                fontFamily: "var(--font-fraunces), serif",
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

        {/* Category rail + skill list */}
        <m.div className="skills-showcase" {...reveal(0.2)}>
          {/* Rail */}
          <div
            className="skills-rail"
            role="tablist"
            aria-label="Skill categories"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = cat === active;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(cat)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    background: "none",
                    border: "none",
                    borderLeft: isActive
                      ? "1px solid var(--accent)"
                      : "1px solid var(--line)",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: "0.85rem 0 0.85rem 1.2rem",
                    fontSize: "0.74rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: isActive ? "var(--white)" : "var(--muted)",
                    transition: "color 0.3s ease, border-color 0.3s ease",
                  }}
                >
                  {cat}
                  <span
                    style={{
                      fontSize: "0.62rem",
                      color: isActive ? "var(--accent)" : "var(--muted2)",
                      letterSpacing: "0.08em",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {SKILLS.filter((s) => s.category === cat).length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Skill list for the active category */}
          <div style={{ minHeight: "300px" }}>
            <AnimatePresence mode="wait">
              <m.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ borderTop: "1px solid var(--line)" }}
              >
                {activeSkills.map((skill, i) => (
                  <m.div
                    key={skill.name}
                    className="skill-row"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      padding: "1.5rem 0.4rem",
                      borderBottom: "1px solid var(--line)",
                      cursor: "default",
                    }}
                  >
                    <span
                      className="skill-name"
                      style={{
                        fontFamily: "var(--font-fraunces), serif",
                        fontSize: "clamp(1.3rem, 2.2vw, 1.9rem)",
                        fontWeight: 300,
                        letterSpacing: "-0.015em",
                        lineHeight: 1.1,
                      }}
                    >
                      {skill.name}
                    </span>
                    <span
                      style={{
                        fontSize: "0.66rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--accent)",
                        flexShrink: 0,
                        marginLeft: "1.5rem",
                      }}
                    >
                      {skill.proficiency}
                    </span>
                  </m.div>
                ))}
              </m.div>
            </AnimatePresence>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default Skills;
