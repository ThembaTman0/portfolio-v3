"use client";
import { useEffect } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

declare global {
  interface Window {
    __motionReady?: boolean;
  }
}

export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Parent effects run after every child has mounted, so this marks the
  // point where all entrance animations are set up. layout.tsx's head script
  // reads it to decide whether the content safety net is needed.
  useEffect(() => {
    window.__motionReady = true;
  }, []);

  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
