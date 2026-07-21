"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

/*
 * Word-level scroll reveal for section headlines - a lighter, scroll-triggered
 * sibling to Hero's page-load SplitText treatment. Gives every major heading
 * the same signature motion instead of the plain fade-up used everywhere else,
 * so the site has one deliberate "voice" for headlines and a quieter one for
 * body copy, rather than the same animation repeated for both.
 */
const SplitReveal = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const didSplit = useRef(false);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || didSplit.current) {
      gsap.set(el, { autoAlpha: 1 });
      return;
    }
    didSplit.current = true;

    // Headings below the fold aren't LCP-critical, but cap the font wait
    // anyway so the reveal can never be stuck hidden.
    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
    const timeout = new Promise((resolve) => setTimeout(resolve, 350));

    Promise.race([fontsReady, timeout]).then(() => {
      const split = SplitText.create(el, { type: "words" });
      gsap.set(el, { autoAlpha: 1 });
      gsap.from(split.words, {
        yPercent: 100,
        autoAlpha: 0,
        duration: 0.85,
        ease: "power3.out",
        stagger: 0.04,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      });
    });
  }, []);

  return (
    <h2 ref={ref} className={className} style={{ ...style, visibility: "hidden" }}>
      {children}
    </h2>
  );
};

export default SplitReveal;
