import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "Themba Ngobeni - Java Developer",
  description:
    "Software developer at FNB, passionate about Java, AI/ML, and modern web development. Based in Johannesburg, South Africa.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,ital,wght@9..144,0,300;9..144,0,400;9..144,0,700;9..144,1,300;9..144,1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Loading screen — shown once per session */}
        <LoadingScreen />

        <div id="scroll-progress" />
        <Navbar />
        <main>{children}</main>
        <Footer />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
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
                  var distance = Math.abs(destY - window.scrollY);

                  /* Adaptive duration: fast for short hops, max ~1100ms */
                  var duration = Math.min(Math.max(distance * 0.55, 550), 1100);

                  smoothScrollTo(destY, duration);

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

                /* ── IntersectionObserver scroll reveal ──── */
                var observer = new IntersectionObserver(
                  function (entries) {
                    entries.forEach(function (entry) {
                      if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                      }
                    });
                  },
                  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
                );

                function initReveal() {
                  document.querySelectorAll('.reveal').forEach(function (el) {
                    observer.observe(el);
                  });
                }

                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', initReveal);
                } else {
                  initReveal();
                }

                new MutationObserver(function () {
                  document.querySelectorAll('.reveal:not(.visible)').forEach(function (el) {
                    observer.observe(el);
                  });
                }).observe(document.body, { childList: true, subtree: true });
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
