"use client";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.key);
    // Track the full visible set rather than latching onto the last entry that
    // reported intersecting. Without this, scrolling back up to the hero (which
    // has no nav entry) leaves the previous section highlighted forever.
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        // Highest section in document order wins, so the highlight never jumps
        // backwards when two sections are in view at once.
        setActiveSection(ids.find((id) => visible.has(id)) ?? "");
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
      <m.div
        aria-hidden="true"
        data-reveal
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 101,
          height: "1px",
          background: `linear-gradient(90deg, transparent 0%, rgba(200,160,90,0.5) 30%, rgba(200,160,90,0.85) 50%, rgba(200,160,90,0.5) 70%, transparent 100%)`,
          pointerEvents: "none",
          transformOrigin: "left center",
        }}
      />

      <m.nav
        className="nav-pad"
        data-reveal
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
        <Link href="/" className="nav-logo" style={{ textDecoration: "none" }}>
          <m.span
            whileHover={{ opacity: 0.72 }}
            transition={{ duration: 0.2 }}
            style={{
              fontFamily: "var(--font-fraunces), serif",
              fontSize: "1.15rem",
              fontWeight: 400,
              color: "var(--white)",
              letterSpacing: "0.01em",
              display: "inline-block",
            }}
          >
            T
            <span style={{ color: "var(--accent)", fontStyle: "italic" }}>
              .
            </span>
            N
          </m.span>
        </Link>

        {/* Desktop links */}
        <ul
          className="hidden lg:flex"
          style={{ gap: "2.8rem", listStyle: "none", alignItems: "center" }}
        >
          {NAV_LINKS.map((link, i) => {
            const isActive = activeSection === link.key;
            return (
              <m.li
                key={link.key}
                data-reveal
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.12 + i * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <a
                  href={link.href}
                  className={`hover-line nav-link${
                    isActive ? " nav-active" : ""
                  }`}
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              </m.li>
            );
          })}
        </ul>

        {/* CTA */}
        <m.a
          href="#contact"
          className="hidden lg:inline-flex btn-outline"
          data-reveal
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -1 }}
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "0.85rem 1.3rem",
          }}
        >
          Hire me
        </m.a>

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
            minWidth: "44px",
            minHeight: "44px",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
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

        {/* Mobile menu with AnimatePresence */}
        <AnimatePresence>
          {menuOpen && (
            <m.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "fixed",
                top: "64px",
                left: 0,
                right: 0,
                background: "rgba(8,8,8,0.96)",
                backdropFilter: "blur(40px) saturate(1.6)",
                WebkitBackdropFilter: "blur(40px) saturate(1.6)",
                padding: "2rem 1.5rem 2.5rem",
                borderBottom: "1px solid var(--line)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.75)",
                display: "flex",
                flexDirection: "column",
                gap: "1.8rem",
                zIndex: 99,
              }}
            >
              {NAV_LINKS.map((link, i) => {
                const isActive = activeSection === link.key;
                return (
                  <m.a
                    key={link.key}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`menu-link${
                      isActive ? " menu-link-active" : ""
                    }`}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.055,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      fontSize: "1.05rem",
                      textDecoration: "none",
                      fontFamily: "var(--font-fraunces), serif",
                      fontWeight: 300,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {link.label}
                  </m.a>
                );
              })}
              <m.a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-outline"
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: NAV_LINKS.length * 0.055,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  display: "inline-block",
                  marginTop: "0.5rem",
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "0.9rem 1.4rem",
                  alignSelf: "flex-start",
                }}
              >
                Hire me
              </m.a>
            </m.div>
          )}
        </AnimatePresence>
      </m.nav>
    </>
  );
};

export default Navbar;
