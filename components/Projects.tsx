"use client";
import { PROJECTS } from "@/constants";

const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        padding: "8rem 3rem",
        borderBottom: "1px solid var(--line)",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4.5rem" }}>
        <div>
          <div className="reveal section-label" style={{ marginBottom: "1.6rem" }}>
            Projects
            <span style={{ color: "var(--muted2)", marginLeft: "0.6rem", fontSize: "0.65rem" }}>03</span>
          </div>
          <h2
            className="reveal"
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)",
              fontWeight: 300, lineHeight: 1.08,
              color: "var(--white)", letterSpacing: "-0.022em",
              transitionDelay: "0.1s",
            }}
          >
            Selected <em style={{ fontStyle: "italic", color: "var(--accent)" }}>work</em>.
          </h2>
        </div>
        <a
          href="https://github.com/ThembaTman0"
          target="_blank"
          rel="noreferrer"
          className="reveal hover-line"
          style={{
            fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase",
            color: "var(--muted)", textDecoration: "none",
            display: "flex", alignItems: "center", gap: "0.45rem",
            transition: "color 0.25s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          GitHub →
        </a>
      </div>

      {/* Project list */}
      <div style={{ borderTop: "1px solid var(--line)" }}>
        {PROJECTS.map((project, i) => (
          <div
            key={project.id}
            className="reveal project-row"
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr auto",
              gap: "2.5rem",
              alignItems: "start",
              padding: "3rem 1rem 3rem 0",
              borderBottom: "1px solid var(--line)",
              transitionDelay: `${i * 0.08}s`,
              cursor: "default",
            }}
          >
            {/* Number */}
            <div
              className="project-num"
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "0.82rem", color: "var(--muted2)",
                paddingTop: "0.4rem", letterSpacing: "0.04em",
                transition: "color 0.3s ease",
              }}
            >
              {project.id}
            </div>

            {/* Main content */}
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "1.2rem", marginBottom: "0.8rem", flexWrap: "wrap" }}>
                <h3
                  className="project-title"
                  style={{
                    fontFamily: "'Fraunces', serif",
                    fontSize: "1.5rem", fontWeight: 300,
                    color: "var(--white)", letterSpacing: "-0.012em",
                    lineHeight: 1.1,
                    transition: "color 0.3s ease",
                  }}
                >
                  {project.title}
                </h3>
                <span style={{ fontSize: "0.73rem", color: "var(--muted2)", letterSpacing: "0.04em" }}>
                  {project.subtitle}
                </span>
              </div>

              <p style={{
                fontSize: "0.87rem", color: "var(--muted)",
                lineHeight: 1.8, marginBottom: "1.4rem",
                maxWidth: "560px",
              }}>
                {project.description}
              </p>

              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {project.tags.map((tag) => (
                  <span key={tag} style={{
                    fontSize: "0.62rem", letterSpacing: "0.09em", textTransform: "uppercase",
                    color: "var(--muted2)", border: "1px solid rgba(255,255,255,0.06)",
                    padding: "0.18rem 0.55rem", borderRadius: "1px",
                    background: "rgba(255,255,255,0.02)",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div style={{
              display: "flex", flexDirection: "column", gap: "0.8rem",
              alignItems: "flex-end", paddingTop: "0.4rem", minWidth: "80px",
            }}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "var(--muted)", textDecoration: "none",
                    display: "flex", alignItems: "center", gap: "0.35rem",
                    transition: "color 0.25s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  <svg width="11" height="11" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: "0.68rem", letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "var(--muted)", textDecoration: "none",
                    display: "flex", alignItems: "center", gap: "0.35rem",
                    transition: "color 0.25s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
