"use client";

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid var(--line)",
      }}
    >
      {/* Subtle radial vignette at base of hero */}
      <div aria-hidden="true" style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        height: "35%",
        background: "linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 100%)",
        pointerEvents: "none", zIndex: 1,
      }} />

      {/* Left content */}
      <div style={{
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "9rem 4rem 6rem 3rem",
        position: "relative", zIndex: 2,
      }}>
        <div
          className="reveal section-label"
          style={{ marginBottom: "1.6rem", color: "var(--accent)" }}
        >
          Java Developer&nbsp;·&nbsp;FNB&nbsp;·&nbsp;South Africa
        </div>

        <h1
          className="reveal"
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(3rem, 5.5vw, 5.6rem)",
            fontWeight: 300, lineHeight: 1.04,
            color: "var(--white)", letterSpacing: "-0.028em",
            marginBottom: "2rem", transitionDelay: "0.08s",
          }}
        >
          Hi, I&apos;m <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Themba</em>.<br />
          I build software<br />that <em style={{ fontStyle: "italic", color: "var(--accent)" }}>matters</em>.
        </h1>

        <p
          className="reveal"
          style={{
            fontSize: "0.94rem", color: "var(--muted)", maxWidth: "380px",
            lineHeight: 1.85, marginBottom: "3rem", transitionDelay: "0.16s",
          }}
        >
          Shaping the future of banking at FNB, building scalable Java microservices,
          exploring AI &amp; ML, and shipping modern web experiences.
        </p>

        <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "2rem", transitionDelay: "0.24s" }}>
          <a
            href="#projects"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.55rem",
              background: "var(--accent)", color: "#0a0a0a",
              fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.1em",
              textTransform: "uppercase", padding: "0.85rem 1.7rem",
              borderRadius: "var(--radius)", textDecoration: "none",
              transition: "background 0.25s ease, transform 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent2)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            View my work
            <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a
            href="#contact"
            className="hover-line"
            style={{
              fontSize: "0.8rem", color: "var(--muted)", textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "color 0.25s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            Get in touch →
          </a>
        </div>
      </div>

      {/* Right — decorative panel */}
      <div style={{
        position: "relative", overflow: "hidden",
        borderLeft: "1px solid var(--line)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 1,
      }}>
        {/* Fine cross-hatch grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />

        {/* Accent corner — top-right bracket */}
        <div style={{
          position: "absolute", top: "9rem", right: "2.5rem",
          width: "40px", height: "40px",
          borderTop: "1px solid rgba(200,160,90,0.25)",
          borderRight: "1px solid rgba(200,160,90,0.25)",
        }} />
        <div style={{
          position: "absolute", bottom: "5rem", left: "2.5rem",
          width: "40px", height: "40px",
          borderBottom: "1px solid rgba(200,160,90,0.2)",
          borderLeft: "1px solid rgba(200,160,90,0.2)",
        }} />

        {/* Ghost monogram */}
        <div style={{
          fontFamily: "'Fraunces', serif",
          fontSize: "clamp(10rem, 16vw, 18rem)", fontWeight: 700,
          color: "transparent", WebkitTextStroke: "1px rgba(200,160,90,0.07)",
          lineHeight: 1, userSelect: "none", letterSpacing: "-0.04em",
          position: "absolute", right: "-1rem", bottom: "2rem",
        }}>
          TN
        </div>

        {/* Status badge */}
        <div style={{
          position: "absolute", top: "9rem", left: "2.5rem",
          border: "1px solid rgba(255,255,255,0.07)",
          background: "rgba(17,17,17,0.7)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          padding: "0.65rem 1rem",
          display: "flex", alignItems: "center", gap: "0.6rem",
        }}>
          <span style={{
            width: "6px", height: "6px", borderRadius: "50%",
            background: "#4ade80", display: "block",
            animation: "pulse 3s ease-in-out infinite",
          }} />
          <span style={{ fontSize: "0.72rem", color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Available for work
          </span>
        </div>
      </div>

      {/* Scroll indicator — centred */}
      <div style={{
        position: "absolute", bottom: "2.8rem", left: "50%",
        transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
        color: "var(--muted2)", fontSize: "0.62rem", letterSpacing: "0.16em",
        textTransform: "uppercase",
        animation: "scrollBounce 2.8s ease-in-out infinite",
        zIndex: 3,
      }}>
        <div style={{ width: "1px", height: "28px", background: "rgba(200,160,90,0.2)" }} />
        scroll
      </div>
    </section>
  );
};

export default Hero;
