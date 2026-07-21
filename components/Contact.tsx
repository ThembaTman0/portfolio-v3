"use client";
import { SOCIALS } from "@/constants";
import { m } from "framer-motion";
import { reveal, revealScale } from "./motion-utils";
import SplitReveal from "./SplitReveal";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-grid section-block"
      style={{
        minHeight: "60vh",
        alignItems: "start",
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

        <SplitReveal
          style={{
            fontFamily: "var(--font-fraunces), serif",
            fontSize: "clamp(2.4rem, 4vw, 4rem)",
            fontWeight: 300,
            lineHeight: 1.06,
            color: "var(--white)",
            letterSpacing: "-0.026em",
            marginBottom: "1.6rem",
          }}
        >
          Let&apos;s build something
          <br />
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
            great together
          </em>
          .
        </SplitReveal>

        <m.p
          style={{
            color: "var(--muted)",
            fontSize: "0.93rem",
            lineHeight: 1.85,
            marginBottom: "2.4rem",
          }}
          {...reveal(0.18)}
        >
          Whether you have a project in mind, want to discuss opportunities, or
          just want to say hello, my inbox is always open.
        </m.p>

        <m.div {...reveal(0.25)}>
          <ContactForm />
        </m.div>
      </div>

      {/* Right socials */}
      <m.div {...revealScale(0.2)}>
        <div style={{ border: "1px solid var(--line)" }}>
          {SOCIALS.map((social, i) => (
            <a
              key={social.name}
              href={social.url}
              target={social.url.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="social-row"
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
              <span
                className="social-name"
                style={{ fontWeight: 400, letterSpacing: "0.01em" }}
              >
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
            </a>
          ))}
        </div>
      </m.div>
    </section>
  );
};

export default Contact;
