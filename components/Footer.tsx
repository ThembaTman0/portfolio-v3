"use client";
import { m } from "framer-motion";
import { reveal } from "./motion-utils";

const Footer = () => {
  return (
    <m.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        borderTop: "1px solid var(--line)",
        padding: "2rem 3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      <p
        style={{
          fontSize: "0.74rem",
          color: "var(--muted2)",
          letterSpacing: "0.04em",
        }}
      >
        © {new Date().getFullYear()} Themba Ngobeni. Crafted with care.
      </p>
      <m.a
        href="#home"
        whileHover={{ color: "var(--accent)" }}
        transition={{ duration: 0.25 }}
        style={{
          fontSize: "0.7rem",
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
