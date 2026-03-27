import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Scroll reveal script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function reveal() {
                  document.querySelectorAll('.reveal').forEach(function(el) {
                    var rect = el.getBoundingClientRect();
                    if (rect.top < window.innerHeight * 0.88) {
                      el.classList.add('visible');
                    }
                  });
                }
                window.addEventListener('scroll', reveal, { passive: true });
                reveal();
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
