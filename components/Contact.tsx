"use client";
import { SOCIALS } from "@/constants";

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "6rem",
        alignItems: "center",
        padding: "8rem 3rem",
        minHeight: "60vh",
        borderBottom: "1px solid var(--line)",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      {/* Left */}
      <div>
        <div className="reveal section-label" style={{ marginBottom: "3rem" }}>
          Contact
          <span style={{ color: "var(--muted2)", marginLeft: "0.6rem", fontSize: "0.65rem" }}>05</span>
        </div>

        <h2
          className="reveal"
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(2.4rem, 4vw, 4rem)",
            fontWeight: 300, lineHeight: 1.06,
            color: "var(--white)", letterSpacing: "-0.026em",
            marginBottom: "1.6rem", transitionDelay: "0.1s",
          }}
        >
          Let&apos;s build something<br /><em style={{ fontStyle: "italic", color: "var(--accent)" }}>great together</em>.
        </h2>

        <p
          className="reveal"
          style={{ color: "var(--muted)", fontSize: "0.93rem", lineHeight: 1.85, marginBottom: "2.8rem", transitionDelay: "0.15s" }}
        >
          Whether you have a project in mind, want to discuss opportunities, or just want to say hello, my inbox is always open.
        </p>

        <a
          className="reveal"
          href="mailto:thembangobeni@email.com"
          style={{
            display: "inline-flex", alignItems: "center", gap: "0.7rem",
            fontSize: "1rem", color: "var(--white)",
            textDecoration: "none",
            paddingBottom: "0.35rem",
            borderBottom: "1px solid rgba(200,160,90,0.35)",
            transition: "color 0.25s ease, border-color 0.25s ease",
            transitionDelay: "0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--accent)";
            e.currentTarget.style.borderColor = "var(--accent)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--white)";
            e.currentTarget.style.borderColor = "rgba(200,160,90,0.35)";
          }}
        >
          thembangobeni@email.com
          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      {/* Right — socials */}
      <div className="reveal" style={{ transitionDelay: "0.2s" }}>
        <div style={{ border: "1px solid var(--line)" }}>
          {SOCIALS.map((social, i) => (
            <a
              key={social.name}
              href={social.url}
              target={social.url.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "1.5rem 1.8rem",
                borderBottom: i < SOCIALS.length - 1 ? "1px solid var(--line)" : "none",
                textDecoration: "none", color: "var(--text)",
                transition: "background 0.25s ease, padding-left 0.3s cubic-bezier(0.16,1,0.3,1)",
                fontSize: "0.88rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                e.currentTarget.style.paddingLeft = "2.4rem";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.paddingLeft = "1.8rem";
              }}
            >
              <span style={{ fontWeight: 400, letterSpacing: "0.01em" }}>{social.name}</span>
              <span style={{ fontSize: "0.76rem", color: "var(--muted)", letterSpacing: "0.04em" }}>{social.handle}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
