// Shared Framer Motion animation helpers

// Every element that is server-rendered in a hidden start state carries
// data-reveal, so the CSS safety net in globals.css can show it when
// JavaScript is unavailable or the app hydrates too late (see layout.tsx).
// Once that net has fired, GSAP entrances should not re-hide anything.
export const revealAllActive = () =>
  typeof document !== "undefined" &&
  document.documentElement.classList.contains("reveal-all");

export const reveal = (delay = 0) => ({
  "data-reveal": "",
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" } as const,
  transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as const, delay },
});

export const revealScale = (delay = 0) => ({
  "data-reveal": "",
  initial: { opacity: 0, scale: 0.975 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-70px" } as const,
  transition: { duration: 1.15, ease: [0.16, 1, 0.3, 1] as const, delay },
});

// Hero page-load variants (not scroll-triggered)
export const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.17, delayChildren: 0.3 } },
} as const;

export const heroItem = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.15, ease: [0.16, 1, 0.3, 1] as const },
  },
} as const;

export const heroPanel = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.1, ease: "easeOut" as const, delay: 0.35 },
  },
} as const;
