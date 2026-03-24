"use client";

const Footer = () => {
  return (
    <footer style={{
      borderTop: "1px solid var(--line)",
      padding: "2rem 3rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "1440px",
      margin: "0 auto",
    }}>
      <p style={{ fontSize: "0.74rem", color: "var(--muted2)", letterSpacing: "0.04em" }}>
        © {new Date().getFullYear()} Themba Ngobeni. Crafted with care.
      </p>
      <a
        href="#home"
        style={{
          fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase",
          color: "var(--muted2)", textDecoration: "none",
          display: "flex", alignItems: "center", gap: "0.45rem",
          transition: "color 0.25s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted2)")}
      >
        Back to top ↑
      </a>
    </footer>
  );
};

export default Footer;
