import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section
      className="section-block"
      style={{
        minHeight: "72vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        maxWidth: "1440px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-fraunces), serif",
          fontSize: "clamp(5rem, 18vw, 11rem)",
          fontWeight: 700,
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px rgba(200,160,90,0.35)",
          letterSpacing: "-0.04em",
          userSelect: "none",
        }}
      >
        404
      </div>

      <h1
        style={{
          fontFamily: "var(--font-fraunces), serif",
          fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          fontWeight: 300,
          color: "var(--white)",
          letterSpacing: "-0.02em",
          margin: "1.6rem 0 1rem",
        }}
      >
        This page wandered{" "}
        <em style={{ fontStyle: "italic", color: "var(--accent)" }}>off</em>.
      </h1>

      <p
        style={{
          color: "var(--muted)",
          fontSize: "0.95rem",
          lineHeight: 1.8,
          maxWidth: "420px",
          marginBottom: "2.6rem",
        }}
      >
        The link may be broken, or the page may have moved. Let&apos;s get you
        back to something that exists.
      </p>

      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.55rem",
          background: "var(--accent)",
          color: "#0a0a0a",
          fontSize: "0.75rem",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "0.9rem 1.7rem",
          borderRadius: "var(--radius)",
          textDecoration: "none",
        }}
      >
        <svg
          width="11"
          height="11"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back home
      </Link>
    </section>
  );
}
