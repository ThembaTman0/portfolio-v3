"use client";
import { SOCIALS } from "@/constants";
import { m } from "framer-motion";
import { reveal, revealScale } from "./motion-utils";

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
        <m.div
          className="section-label"
          style={{ marginBottom: "3rem" }}
          {...reveal(0)}
        >
          Contact
          <span
            style={{
              color: "var(--muted2)",
              marginLeft: "0.6rem",
              fontSize: "0.65rem",
            }}
          >
            05
          </span>
        </m.div>

        <m.h2
          style={{
            fontFamily: "'Fraunces', serif",
            fontSize: "clamp(2.4rem, 4vw, 4rem)",
            fontWeight: 300,
            lineHeight: 1.06,
            color: "var(--white)",
            letterSpacing: "-0.026em",
            marginBottom: "1.6rem",
          }}
          {...reveal(0.1)}
        >
          Let&apos;s build something
          <br />
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
            great together
          </em>
          .
        </m.h2>

        <m.p
          style={{
            color: "var(--muted)",
            fontSize: "0.93rem",
            lineHeight: 1.85,
            marginBottom: "2.8rem",
          }}
          {...reveal(0.18)}
        >
          Whether you have a project in mind, want to discuss opportunities, or
          just want to say hello, my inbox is always open.
        </m.p>

        <m.a
          href="mailto:thembatman0@gmail.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.7rem",
            fontSize: "1rem",
            color: "var(--white)",
            textDecoration: "none",
            paddingBottom: "0.35rem",
            borderBottom: "1px solid rgba(200,160,90,0.35)",
            transition: "color 0.25s ease, border-color 0.25s ease",
          }}
          {...reveal(0.25)}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--accent)";
            e.currentTarget.style.borderColor = "var(--accent)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--white)";
            e.currentTarget.style.borderColor = "rgba(200,160,90,0.35)";
          }}
        >
          thembatman0@gmail.com
          <svg
            width="13"
            height="13"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </m.a>
      </div>

      {/* Right socials */}
      <m.div {...revealScale(0.2)}>
        <div style={{ border: "1px solid var(--line)" }}>
          {SOCIALS.map((social, i) => (
            <m.a
              key={social.name}
              href={social.url}
              target={social.url.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              whileHover={{ paddingLeft: "2.4rem", background: "rgba(255,255,255,0.02)" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.5rem 1.8rem",
                borderBottom:
                  i < SOCIALS.length - 1 ? "1px solid var(--line)" : "none",
                textDecoration: "none",
                color: "var(--text)",
                fontSize: "0.88rem",
              }}
            >
              <span style={{ fontWeight: 400, letterSpacing: "0.01em" }}>
                {social.name}
              </span>
              <span
                style={{
                  fontSize: "0.76rem",
                  color: "var(--muted)",
                  letterSpacing: "0.04em",
                }}
              >
                {social.handle}
              </span>
            </m.a>
          ))}
        </div>
      </m.div>
    </section>
  );
};

export default Contact;
