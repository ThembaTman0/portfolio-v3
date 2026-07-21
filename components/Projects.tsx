"use client";
import { PROJECTS, type Project } from "@/constants";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { reveal } from "./motion-utils";
import SplitReveal from "./SplitReveal";
import ProjectVisual from "./ProjectVisual";

const ProjectRow = ({
  project,
  index,
  open,
  onToggle,
}: {
  project: Project;
  index: number;
  open: boolean;
  onToggle: () => void;
}) => {
  const panelId = `case-study-${project.id}`;

  return (
    <m.div
      className="project-row"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.08,
      }}
      style={{ borderBottom: "1px solid var(--line)" }}
    >
      <div className="project-grid" style={{ cursor: "default" }}>
        {/* Number */}
        <div
          className="project-num"
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "0.82rem",
            color: "var(--muted2)",
            paddingTop: "0.4rem",
            letterSpacing: "0.04em",
            transition: "color 0.3s ease",
          }}
        >
          {project.id}
        </div>

        {/* Main content */}
        <div>
          {project.featured && (
            <div style={{ marginBottom: "0.9rem" }}>
              <span className="featured-tag">★ Featured build</span>
            </div>
          )}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "1.2rem",
              marginBottom: "0.8rem",
              flexWrap: "wrap",
            }}
          >
            <h3
              className="project-title"
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontSize: "1.5rem",
                fontWeight: 300,
                color: "var(--white)",
                letterSpacing: "-0.012em",
                lineHeight: 1.1,
                transition: "color 0.3s ease",
              }}
            >
              {project.title}
            </h3>
            <span
              style={{
                fontSize: "0.73rem",
                color: "var(--muted2)",
                letterSpacing: "0.04em",
              }}
            >
              {project.subtitle}
            </span>
          </div>

          <p
            style={{
              fontSize: "0.87rem",
              color: "var(--muted)",
              lineHeight: 1.8,
              marginBottom: "1.4rem",
              maxWidth: "560px",
            }}
          >
            {project.description}
          </p>

          <div
            style={{
              display: "flex",
              gap: "0.4rem",
              flexWrap: "wrap",
              marginBottom: project.caseStudy ? "1.5rem" : 0,
            }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.09em",
                  textTransform: "uppercase",
                  color: "var(--muted2)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  padding: "0.18rem 0.55rem",
                  borderRadius: "1px",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Case study toggle */}
          {project.caseStudy && (
            <button
              onClick={onToggle}
              aria-expanded={open}
              aria-controls={panelId}
              className="case-toggle"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                fontSize: "0.68rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              <m.span
                animate={{ rotate: open ? 45 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "inline-flex",
                  width: "16px",
                  height: "16px",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid currentColor",
                  borderRadius: "1px",
                  fontSize: "0.8rem",
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                +
              </m.span>
              Case study
            </button>
          )}
        </div>

        {/* Links */}
        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-link-btn"
              aria-label={`View source code for ${project.title} on GitHub`}
            >
              <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-link-btn"
              aria-label={`${
                project.demoLabel ?? "Open live demo"
              } for ${project.title}`}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              {project.demoLabel ?? "Live"}
            </a>
          )}
        </div>
      </div>

      {/* Expandable case study panel */}
      <AnimatePresence initial={false}>
        {open && project.caseStudy && (
          <m.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              className="case-study-grid"
              style={{ padding: "0 1rem 3rem 80px" }}
            >
              <div style={{ gridColumn: "1 / -1", maxWidth: "560px" }}>
                <ProjectVisual project={project} />
              </div>
              {(
                [
                  ["Problem", project.caseStudy.problem],
                  ["Approach", project.caseStudy.approach],
                  ["Impact", project.caseStudy.impact],
                ] as const
              ).map(([label, text]) => (
                <div key={label}>
                  <div
                    className="section-label"
                    style={{ marginBottom: "1rem", fontSize: "0.64rem" }}
                  >
                    {label}
                  </div>
                  <p
                    style={{
                      fontSize: "0.84rem",
                      color: "var(--muted)",
                      lineHeight: 1.85,
                    }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
};

const Projects = () => {
  // Exclusive accordion: opening one case study closes the others
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="section-block"
      style={{
        borderBottom: "1px solid var(--line)",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div className="projects-header">
        <div>
          <m.div
            className="section-label"
            style={{ marginBottom: "1.6rem" }}
            {...reveal(0)}
          >
            Projects
            <span
              style={{
                color: "var(--muted2)",
                marginLeft: "0.6rem",
                fontSize: "0.65rem",
              }}
            >
              03
            </span>
          </m.div>
          <SplitReveal
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)",
              fontWeight: 300,
              lineHeight: 1.08,
              color: "var(--white)",
              letterSpacing: "-0.022em",
            }}
          >
            Selected{" "}
            <em style={{ fontStyle: "italic", color: "var(--white)" }}>
              work
            </em>
            .
          </SplitReveal>
        </div>
        <m.a
          href="https://github.com/ThembaTman0"
          target="_blank"
          rel="noreferrer"
          className="hover-line link-accent"
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.45rem",
          }}
          {...reveal(0.15)}
        >
          GitHub →
        </m.a>
      </div>

      {/* Project list */}
      <div style={{ borderTop: "1px solid var(--line)" }}>
        {PROJECTS.map((project, i) => (
          <ProjectRow
            key={project.id}
            project={project}
            index={i}
            open={openId === project.id}
            onToggle={() =>
              setOpenId((id) => (id === project.id ? null : project.id))
            }
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
