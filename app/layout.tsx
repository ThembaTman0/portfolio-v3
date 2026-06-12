import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import AnimatedDotGrid from "@/components/AnimatedDotGrid";
import MotionProvider from "@/components/MotionProvider";
import CustomCursor from "@/components/CustomCursor";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const SITE_URL = "https://thembangobeni.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Themba Ngobeni — Java Developer",
    template: "%s — Themba Ngobeni",
  },
  description:
    "Java developer at FNB building scalable banking microservices. Backend architecture, Spring Boot, and applied machine learning. Johannesburg, South Africa.",
  keywords: [
    "Java Developer",
    "Spring Boot",
    "Backend Engineer",
    "Microservices",
    "Software Engineer",
    "Johannesburg",
    "South Africa",
  ],
  authors: [{ name: "Themba Ngobeni", url: SITE_URL }],
  creator: "Themba Ngobeni",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Themba Ngobeni — Java Developer",
    description:
      "Java developer at FNB building scalable banking microservices. Backend architecture, Spring Boot, and applied machine learning.",
    siteName: "Themba Ngobeni",
    locale: "en_ZA",
    images: [{ url: "/Profile.png", width: 800, height: 1000, alt: "Themba Ngobeni" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Themba Ngobeni — Java Developer",
    description:
      "Java developer at FNB building scalable banking microservices.",
    images: ["/Profile.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Themba Ngobeni",
  url: SITE_URL,
  jobTitle: "Java Developer",
  worksFor: { "@type": "Organization", name: "First National Bank (FNB)" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of the Witwatersrand",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Johannesburg",
    addressCountry: "ZA",
  },
  email: "mailto:thembatman0@gmail.com",
  sameAs: [
    "https://github.com/ThembaTman0",
    "https://www.linkedin.com/in/themba-ngobeni-6a163b164/",
  ],
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Microservices",
    "REST APIs",
    "Machine Learning",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />

        {/* Loading screen - shown once per session */}
        <LoadingScreen />

        <AnimatedDotGrid />
        <CustomCursor />
        <div id="scroll-progress" />
        <MotionProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </MotionProvider>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

                /* ── Smooth scroll for anchor links ──────── */
                function easeInOutQuint(t) {
                  return t < 0.5
                    ? 16 * t * t * t * t * t
                    : 1 - Math.pow(-2 * t + 2, 5) / 2;
                }

                function smoothScrollTo(y, duration) {
                  var startY = window.scrollY;
                  var diff   = y - startY;
                  var start  = null;

                  function step(now) {
                    if (!start) start = now;
                    var elapsed  = now - start;
                    var progress = Math.min(elapsed / duration, 1);
                    window.scrollTo(0, startY + diff * easeInOutQuint(progress));
                    if (progress < 1) requestAnimationFrame(step);
                  }
                  requestAnimationFrame(step);
                }

                document.addEventListener('click', function (e) {
                  /* Walk up the DOM to find the anchor */
                  var el = e.target;
                  while (el && el.tagName !== 'A') el = el.parentElement;
                  if (!el) return;

                  var href = el.getAttribute('href');
                  if (!href || href.charAt(0) !== '#' || href.length < 2) return;

                  var dest = document.querySelector(href);
                  if (!dest) return;

                  e.preventDefault();

                  /* Offset so the section clears the fixed navbar (~72px) */
                  var navH   = 72;
                  var destY  = dest.getBoundingClientRect().top + window.scrollY - navH;

                  if (reduceMotion) {
                    window.scrollTo(0, destY);
                  } else {
                    var distance = Math.abs(destY - window.scrollY);
                    /* Adaptive duration: fast for short hops, max ~1100ms */
                    var duration = Math.min(Math.max(distance * 0.55, 550), 1100);
                    smoothScrollTo(destY, duration);
                  }

                  /* Update hash without the instant jump */
                  history.pushState(null, '', href);
                });

                /* ── Scroll progress bar ─────────────────── */
                var bar = document.getElementById('scroll-progress');

                function updateProgress() {
                  var total = document.documentElement.scrollHeight - window.innerHeight;
                  var pct   = total > 0 ? Math.min(window.scrollY / total, 1) : 0;
                  if (bar) bar.style.transform = 'scaleX(' + pct + ')';
                }
                window.addEventListener('scroll', updateProgress, { passive: true });

              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
