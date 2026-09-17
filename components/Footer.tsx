"use client";
import { useEffect, useState } from "react";
import { m } from "framer-motion";

const johannesburgTime = () =>
  new Intl.DateTimeFormat("en-ZA", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Africa/Johannesburg",
  }).format(new Date());

const Footer = () => {
  // Rendered client-side only to avoid a server/client hydration mismatch
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(johannesburgTime());
    const id = setInterval(() => setTime(johannesburgTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <m.footer
      data-reveal
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="section-pad"
      style={{
        borderTop: "1px solid var(--line)",
        padding: "2rem 3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "0.8rem",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      <p
        style={{
          fontSize: "0.75rem",
          color: "var(--muted2)",
          letterSpacing: "0.04em",
        }}
      >
        © {new Date().getFullYear()} Themba Ngobeni.
      </p>

      {time && (
        <span
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--muted2)",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          Johannesburg&nbsp;·&nbsp;{time}&nbsp;SAST
        </span>
      )}

      <m.a
        href="#home"
        className="footer-link"
        whileHover={{ color: "var(--stone)" }}
        transition={{ duration: 0.25 }}
        style={{
          fontSize: "0.75rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--muted2)",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "0.45rem",
        }}
      >
        Back to top ↑
      </m.a>
    </m.footer>
  );
};

export default Footer;
