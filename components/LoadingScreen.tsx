"use client";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isExiting, setIsExiting] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Only show on hard page load, not soft navigation
    if (sessionStorage.getItem("tn_loaded")) {
      setIsMounted(false);
      return;
    }

    // Progress bar fills → screen fades out
    const t1 = setTimeout(() => setIsExiting(true), 1800);
    const t2 = setTimeout(() => {
      setIsMounted(false);
      sessionStorage.setItem("tn_loaded", "1");
    }, 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--bg)",
        zIndex: 999999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.6rem",
        pointerEvents: "none",
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? "translateY(-12px)" : "translateY(0)",
        transition: isExiting
          ? "opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)"
          : "none",
      }}
    >
      {/* Film grain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.025,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      {/* T.N — staggered letter reveal */}
      <div
        style={{
          fontFamily: "'Fraunces', serif",
          fontSize: "clamp(2.8rem, 6vw, 4.2rem)",
          fontWeight: 400,
          letterSpacing: "0.01em",
          display: "flex",
          alignItems: "baseline",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          style={{
            display: "inline-block",
            color: "var(--white)",
            animation: "loadFadeUp 0.85s cubic-bezier(0.16,1,0.3,1) 0s both",
          }}
        >
          T
        </span>
        <span
          style={{
            display: "inline-block",
            color: "var(--accent)",
            fontStyle: "italic",
            animation: "loadFadeUp 0.85s cubic-bezier(0.16,1,0.3,1) 0.13s both",
          }}
        >
          .
        </span>
        <span
          style={{
            display: "inline-block",
            color: "var(--white)",
            animation: "loadFadeUp 0.85s cubic-bezier(0.16,1,0.3,1) 0.26s both",
          }}
        >
          N
        </span>
      </div>

      {/* Gold divider line */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%)",
          animation: "loadLine 0.65s cubic-bezier(0.16,1,0.3,1) 0.55s both",
          position: "relative",
          zIndex: 1,
        }}
      />

      {/* Progress track */}
      <div
        style={{
          position: "absolute",
          bottom: "2.8rem",
          left: "50%",
          transform: "translateX(-50%)",
          width: "72px",
          height: "1px",
          background: "rgba(255,255,255,0.06)",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <div
          style={{
            height: "100%",
            background:
              "linear-gradient(90deg, var(--accent), var(--accent2))",
            animation: "loadProgress 1.5s cubic-bezier(0.4,0,0.2,1) 0.3s both",
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
