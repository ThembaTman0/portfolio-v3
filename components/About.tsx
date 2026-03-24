"use client";

const About = () => {
  return (
    <section
      id="about"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "5rem",
        alignItems: "start",
        padding: "8rem 3rem",
        borderBottom: "1px solid var(--line)",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      {/* Left */}
      <div>
        <div className="reveal section-label" style={{ marginBottom: "3.5rem" }}>
          About
          <span style={{ color: "var(--muted2)", marginLeft: "0.6rem", fontSize: "0.65rem" }}>01</span>
        </div>

        <h2
          className="reveal"
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)",
            fontWeight: 300, lineHeight: 1.08,
            color: "var(--white)",
            letterSpacing: "-0.022em",
            marginBottom: "2.4rem",
            transitionDelay: "0.1s",
          }}
        >
          A developer who<br /><em style={{ fontStyle: "italic", color: "var(--accent)" }}>loves</em> the craft.
        </h2>

        <p className="reveal" style={{ color: "var(--muted)", fontSize: "0.94rem", lineHeight: 1.9, marginBottom: "1.3rem", transitionDelay: "0.15s" }}>
          I&apos;m a <span style={{ color: "var(--text)" }}>tech enthusiast and software developer</span> at FNB, passionate about AI, ML, and web development. I craft innovative solutions and embrace the exciting frontiers of technology.
        </p>
        <p className="reveal" style={{ color: "var(--muted)", fontSize: "0.94rem", lineHeight: 1.9, marginBottom: "1.3rem", transitionDelay: "0.2s" }}>
          When I&apos;m not building banking infrastructure in Java, you&apos;ll find me <span style={{ color: "var(--text)" }}>training ML models</span>, pushing commits to side projects, or exploring the latest in web development.
        </p>
        <p className="reveal" style={{ color: "var(--muted)", fontSize: "0.94rem", lineHeight: 1.9, transitionDelay: "0.25s" }}>
          I believe great software lives at the intersection of <span style={{ color: "var(--text)" }}>technical rigour and clean design</span>. That is the standard I hold myself to.
        </p>

        {/* Stats */}
        <div
          className="reveal"
          style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            border: "1px solid var(--line)",
            marginTop: "3.5rem", transitionDelay: "0.3s",
          }}
        >
          {[
            { num: "3+", label: "Years exp." },
            { num: "15+", label: "Projects" },
            { num: "∞", label: "Curiosity" },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                padding: "1.6rem 1.4rem",
                borderRight: i < 2 ? "1px solid var(--line)" : "none",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg3)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <div style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "2.6rem", fontWeight: 700,
                color: "var(--accent)", lineHeight: 1, marginBottom: "0.45rem",
                letterSpacing: "-0.02em",
              }}>{s.num}</div>
              <div style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — image card */}
      <div className="reveal" style={{ transitionDelay: "0.2s" }}>
        <div style={{
          aspectRatio: "4/5",
          background: "var(--bg2)",
          border: "1px solid var(--line)",
          position: "relative", overflow: "hidden",
        }}>
          {/* Fine grid */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }} />
          {/* Corner accents */}
          <div style={{ position: "absolute", top: "1.2rem", left: "1.2rem", width: "28px", height: "28px", borderTop: "1px solid rgba(200,160,90,0.3)", borderLeft: "1px solid rgba(200,160,90,0.3)" }} />
          <div style={{ position: "absolute", bottom: "1.2rem", right: "1.2rem", width: "28px", height: "28px", borderBottom: "1px solid rgba(200,160,90,0.3)", borderRight: "1px solid rgba(200,160,90,0.3)" }} />

          {/* Center content */}
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: "1.1rem",
          }}>
            <div style={{
              width: "88px", height: "88px", borderRadius: "50%",
              background: "var(--bg3)", border: "1px solid var(--line)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "'Fraunces', serif", fontSize: "1.65rem",
              fontWeight: 400, color: "var(--accent)",
              letterSpacing: "0.02em",
            }}>TN</div>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" }}>
              Themba Ngobeni
            </p>
            <p style={{ fontSize: "0.68rem", color: "var(--muted2)" }}>
              Replace with your photo
            </p>
          </div>
          {/* Corner label */}
          <div style={{
            position: "absolute", bottom: "1.4rem", right: "1.4rem",
            fontSize: "0.66rem", letterSpacing: "0.12em",
            textTransform: "uppercase", color: "var(--muted2)",
          }}>
            Johannesburg, ZA
          </div>
        </div>

        {/* Tech chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginTop: "1.3rem" }}>
          {["Java", "Python", "React", "Spring Boot", "TensorFlow", "Next.js"].map((s) => (
            <span key={s} style={{
              fontSize: "0.66rem", letterSpacing: "0.09em", textTransform: "uppercase",
              color: "var(--accent)", border: "1px solid rgba(200,160,90,0.2)",
              padding: "0.22rem 0.65rem", borderRadius: "1px",
              background: "rgba(200,160,90,0.04)",
              transition: "border-color 0.2s ease, background 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,160,90,0.45)";
              (e.currentTarget as HTMLElement).style.background = "rgba(200,160,90,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,160,90,0.2)";
              (e.currentTarget as HTMLElement).style.background = "rgba(200,160,90,0.04)";
            }}
            >{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
