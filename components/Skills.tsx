"use client";
import { SKILLS } from "@/constants";
import { useRef, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { reveal } from "./motion-utils";
import SplitReveal from "./SplitReveal";

const CATEGORIES = Array.from(new Set(SKILLS.map((s) => s.category)));
const PANEL_ID = "skills-panel";
const tabId = (cat: string) =>
  `skills-tab-${cat.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

const Skills = () => {
  const [active, setActive] = useState(CATEGORIES[0]);
  const activeSkills = SKILLS.filter((s) => s.category === active);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // Tabs are expected to move with the arrow keys, with only the selected tab
  // in the tab sequence. The rail is a column on desktop and a row on mobile,
  // so both axes move the selection.
  const onTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const i = CATEGORIES.indexOf(active);
    const last = CATEGORIES.length - 1;
    let next = i;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = i === last ? 0 : i + 1;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = i === 0 ? last : i - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    else return;
    e.preventDefault();
    setActive(CATEGORIES[next]);
    tabRefs.current[CATEGORIES[next]]?.focus();
  };

  return (
    <section
      id="skills"
      className="section-block"
      style={{
        background: "rgba(255,255,255,0.013)",
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
            </m.div>
            <SplitReveal className="section-display">
              The tools I<br />
              <em style={{ fontStyle: "italic", color: "var(--white)" }}>
                work with
              </em>
              .
            </SplitReveal>
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
            Most of this is my day-to-day stack at FNB; the frontend tools are
            for my own projects, including this site.
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
                  id={tabId(cat)}
                  ref={(el) => {
                    tabRefs.current[cat] = el;
                  }}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={PANEL_ID}
                  tabIndex={isActive ? 0 : -1}
                  onKeyDown={onTabKeyDown}
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
                    padding: "1.05rem 0 1.05rem 1.2rem",
                    minHeight: "44px",
                    fontSize: "0.75rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: isActive ? "var(--white)" : "var(--muted)",
                    transition: "color 0.3s ease, border-color 0.3s ease",
                  }}
                >
                  {cat}
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: isActive ? "var(--stone)" : "var(--muted2)",
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
          <div
            id={PANEL_ID}
            role="tabpanel"
            aria-labelledby={tabId(active)}
            // Nothing inside is focusable, so the panel itself takes focus for
            // keyboard and screen reader users.
            tabIndex={0}
            className="skills-panel"
            style={{ minHeight: "300px" }}
          >
            <AnimatePresence mode="wait">
              <m.div
                key={active}
                data-reveal
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
                    data-reveal
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
                      padding: "1.9rem 0.4rem",
                      borderBottom: "1px solid var(--line)",
                      cursor: "default",
                    }}
                  >
                    <span
                      className="skill-name"
                      style={{
                        fontFamily: "var(--font-fraunces), serif",
                        fontSize: "clamp(1.4rem, 2.2vw, 2rem)",
                        fontWeight: 300,
                        letterSpacing: "-0.022em",
                        lineHeight: 1.08,
                      }}
                    >
                      {skill.name}
                    </span>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--muted)",
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
