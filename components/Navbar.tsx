"use client";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section via IntersectionObserver */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.key);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Gold hairline top rule */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 101,
          height: "1px",
          background: `linear-gradient(90deg, transparent 0%, rgba(200,160,90,0.5) 30%, rgba(200,160,90,0.85) 50%, rgba(200,160,90,0.5) 70%, transparent 100%)`,
          pointerEvents: "none",
        }}
      />

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.35rem 3rem",
          background: scrolled
            ? "rgba(10,10,10,0.78)"
            : "rgba(10,10,10,0.12)",
          backdropFilter: "blur(32px) saturate(1.8) brightness(1.02)",
          WebkitBackdropFilter: "blur(32px) saturate(1.8) brightness(1.02)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid rgba(255,255,255,0.03)",
          boxShadow: scrolled ? "0 1px 0 rgba(200,160,90,0.07)" : "none",
          transition:
            "background 0.7s cubic-bezier(0.16,1,0.3,1), border-color 0.7s ease, box-shadow 0.7s ease",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "1.15rem",
              fontWeight: 400,
              color: "var(--white)",
              letterSpacing: "0.01em",
              transition: "opacity 0.25s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.opacity = "0.75")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.opacity = "1")
            }
          >
            T
            <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
              .
            </span>
            N
          </span>
        </Link>

        {/* Desktop links */}
        <ul
          className="hidden lg:flex"
          style={{
            gap: "2.8rem",
            listStyle: "none",
            alignItems: "center",
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.key;
            return (
              <li key={link.key}>
                <a
                  href={link.href}
                  className={`hover-line${isActive ? " nav-active" : ""}`}
                  style={{
                    fontSize: "0.72rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: isActive ? "var(--white)" : "var(--muted)",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--text)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = isActive
                      ? "var(--white)"
                      : "var(--muted)")
                  }
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden lg:inline-flex"
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            border: "1px solid rgba(200,160,90,0.45)",
            color: "var(--accent)",
            padding: "0.45rem 1.1rem",
            borderRadius: "var(--radius)",
            textDecoration: "none",
            transition:
              "background 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--accent)";
            e.currentTarget.style.color = "#0a0a0a";
            e.currentTarget.style.borderColor = "var(--accent)";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--accent)";
            e.currentTarget.style.borderColor = "rgba(200,160,90,0.45)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Hire me
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text)",
            padding: "0.2rem",
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.65")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            style={{ transition: "transform 0.3s ease" }}
          >
            {menuOpen ? (
              <>
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </>
            ) : (
              <>
                <path d="M3 8h18" />
                <path d="M3 16h18" />
              </>
            )}
          </svg>
        </button>

        {/* Mobile menu — always mounted for animation */}
        <div
          className={`mobile-menu${menuOpen ? " open" : ""}`}
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            background: "rgba(8,8,8,0.96)",
            backdropFilter: "blur(40px) saturate(1.6)",
            WebkitBackdropFilter: "blur(40px) saturate(1.6)",
            padding: "2rem 3rem 2.5rem",
            borderBottom: "1px solid var(--line)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.75)",
            display: "flex",
            flexDirection: "column",
            gap: "1.8rem",
            pointerEvents: menuOpen ? "auto" : "none",
            zIndex: 99,
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.key;
            return (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontSize: "1.05rem",
                  color: isActive ? "var(--accent)" : "var(--text)",
                  textDecoration: "none",
                  fontFamily: "'Fraunces', serif",
                  fontWeight: 300,
                  letterSpacing: "-0.01em",
                  transition: "color 0.25s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = isActive
                    ? "var(--accent)"
                    : "var(--text)")
                }
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "inline-block",
              marginTop: "0.5rem",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              border: "1px solid rgba(200,160,90,0.4)",
              color: "var(--accent)",
              padding: "0.65rem 1.3rem",
              borderRadius: "var(--radius)",
              textDecoration: "none",
              alignSelf: "flex-start",
              transition: "background 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.color = "#0a0a0a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--accent)";
            }}
          >
            Hire me
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
