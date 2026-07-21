# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (also run by CI on push/PR to main)
npm run start    # Serve the production build
npm run lint     # next lint
```

There is no test suite or test script in this project.

If you hit a stale `ChunkLoadError` in dev, delete `.next` and restart (`Remove-Item -Recurse -Force .next` on PowerShell, `rm -rf .next` on POSIX shells).

## Architecture

This is a single-page Next.js 14 App Router portfolio site — one route (`/`) that composes a fixed sequence of full-page sections. There is no routing, no data fetching, and no backend; everything is a client-rendered, content-driven component tree.

**Content lives in one place.** [constants/index.ts](constants/index.ts) is the single source of truth for `NAV_LINKS`, `SKILLS`, `PROJECTS` (typed via the `Project` interface, including an optional `caseStudy` block), `EXPERIENCE`, and `SOCIALS`. Section components ([Hero.tsx](components/Hero.tsx), [About.tsx](components/About.tsx), [Skills.tsx](components/Skills.tsx), [Projects.tsx](components/Projects.tsx), [Experience.tsx](components/Experience.tsx), [Contact.tsx](components/Contact.tsx)) just render this data — update content there, not inline in JSX.

**Page composition** happens in [app/page.tsx](app/page.tsx), which stacks the section components in order. [app/layout.tsx](app/layout.tsx) owns everything global: font loading (Fraunces for display/serif, DM Sans for body — both exposed as CSS variables `--font-fraunces`/`--font-dm-sans`), all SEO metadata (`Metadata`/`Viewport` objects, OpenGraph/Twitter cards, and a `Person` JSON-LD script), the always-mounted decorative/chrome components (`AnimatedDotGrid`, `CustomCursor`, scroll-progress bar), and wraps children in `MotionProvider` + `Navbar`/`Footer`.

**Design tokens are CSS custom properties**, not Tailwind theme extensions — Tailwind config ([tailwind.config.ts](tailwind.config.ts)) is nearly untouched. All colors, spacing rhythm, easing curves, and responsive layout rules live in [app/globals.css](app/globals.css) as `:root` variables (`--bg`, `--accent`, `--text`, `--ease-silk`, etc.) plus hand-written utility classes (`.section-block`, `.hero-grid`, `.project-grid`, `.skills-showcase`, etc.) with their own `@media (max-width: 768px)` overrides at the bottom of the file. Components mix Tailwind utility classes (mostly for responsive show/hide, e.g. `hidden lg:flex`) with inline `style={{}}` objects that reference these CSS variables — this split is intentional and consistent across the codebase, follow it rather than converting inline styles to Tailwind or vice versa.

**Animation is layered across two libraries** with a clear division of labor:
- **Framer Motion** (via `m`/`AnimatePresence`, lazy-loaded through `MotionProvider`'s `LazyMotion`) drives scroll-triggered reveals and mount transitions. Shared variants live in [components/motion-utils.ts](components/motion-utils.ts) (`reveal`, `revealScale`, `heroContainer`/`heroItem`/`heroPanel`) — reuse these instead of inlining new transition objects.
- **GSAP** (`@gsap/react`'s `useGSAP`) is used narrowly for imperative, physics-like interactions, e.g. [components/Magnetic.tsx](components/Magnetic.tsx)'s cursor-following wrapper via `gsap.quickTo`, and the scroll-triggered count-up in [components/About.tsx](components/About.tsx)'s `StatCounter`.
- Bespoke rAF-driven canvas animation is used where neither library fits: [components/AnimatedDotGrid.tsx](components/AnimatedDotGrid.tsx) (bucketed-by-opacity canvas dot grid with radial "wave" ripples) hand-rolls a single `requestAnimationFrame` loop for performance. (A hand-rolled custom cursor previously lived here too; it was intentionally removed to feel less "portfolio-y" — don't reintroduce a cursor-replacement without a reason.)
- [components/SplitReveal.tsx](components/SplitReveal.tsx) is the shared scroll-triggered GSAP `SplitText` word-reveal used for every section `<h2>` (About/Skills/Projects/Contact) — the signature "headline" motion, distinct from the plain fade-up (`reveal()`) used for body copy and list items. [components/Hero.tsx](components/Hero.tsx)'s `<h1>` has its own page-load (not scroll-triggered) version of the same pattern. Both cap the `document.fonts.ready` wait with a 350ms `Promise.race` timeout so the (LCP-critical) text can never be stuck hidden on a slow font load.
- The italic-gold headline word is a deliberately *rationed* signature: reserved for the three "statement" moments — the Hero `<h1>`, [components/PullQuote.tsx](components/PullQuote.tsx), and Contact — while the working-section headings (About/Skills/Projects) use a quieter italic-white treatment. Keep that hierarchy rather than making every heading gold.
- [components/HeroTerminal.tsx](components/HeroTerminal.tsx) renders a *static* transcript (it once typed itself out on a perpetual timer; that was removed for a calmer hero — keep it static).

**Accessibility/motion-preference guards are mandatory for any new animation.** Every animated component checks `window.matchMedia("(prefers-reduced-motion: reduce)")` (and, for pointer-driven effects, `(pointer: fine)`) before running, and `globals.css` has a global reduced-motion override that collapses CSS transitions/animations. Match this pattern in new work rather than relying solely on the CSS fallback.

**Decorative-effect cost is gated by device tier.** [components/perf-tier.ts](components/perf-tier.ts)'s `getPerfTier()` returns `"lite"` for coarse-pointer/narrow-viewport/low-core-and-memory devices. `AnimatedDotGrid` layers a *second*, independent area-based tier on top of that (`big` at >1920×1080, `ultra` at >2560×1440 - i.e. true 4K+ gets its own, sparser bucket rather than sharing one with 1440p) driving dot spacing, wave count, DPR cap, and frame rate; it also pauses its rAF loop on `document.visibilitychange`. Whenever it drops out of full fidelity (`big` or `ultra`) it toggles a `reduce-fx` class on `<html>`, which `globals.css` uses to lighten every `backdrop-filter: blur()` on the page (`.nav-pad`, `.mobile-menu`, `.hero-terminal-card`, `.status-badge`) — this exists because backdrop-filter re-samples whatever's behind it on every change, and the canvas is always changing, so cost compounds badly at high pixel counts (this is what was causing 4K-monitor slowness). Mobile also gets the lighter blur values via a plain `@media (max-width: 768px)` override, since narrow-viewport is a cheaper, more reliable CSS-only signal than JS there. Extend these mechanisms rather than adding new always-on heavy effects.

**Text-color tokens must stay WCAG AA.** `--muted` (`#8f8a82`, ~5.8:1) and `--muted2` (`#7d786f`, ~4.5:1) in `globals.css` were deliberately tuned against `--bg` (`#0a0a0a`) — don't darken them back toward the original `#64605b`/`#4a4743` (which measured ~3.2:1/~2.1:1) without re-checking contrast.

**Canonical site URL** is `https://thembangobeni.vercel.app`, set independently in [app/layout.tsx](app/layout.tsx) (`SITE_URL`), [app/sitemap.ts](app/sitemap.ts), and [app/robots.ts](app/robots.ts) — update all three together if the deployment domain ever changes. (The unrelated `netlify.app` link in `constants/index.ts`'s `PROJECTS` array is a legitimate demo link for the *previous* portfolio version, not this site.)

**Project case studies** ([components/Projects.tsx](components/Projects.tsx)) render a browser-chrome preview via [components/ProjectVisual.tsx](components/ProjectVisual.tsx) inside the expandable case-study panel. `Project.image` (optional, in `constants/index.ts`) is undefined for every current project, so it falls back to a generated placeholder (title monogram + grid pattern); set `image` to a real screenshot path to replace it.

**Contact form** ([components/ContactForm.tsx](components/ContactForm.tsx)) posts to [Web3Forms](https://web3forms.com) (no backend) when `NEXT_PUBLIC_WEB3FORMS_KEY` is set (see [.env.example](.env.example)); with no key it degrades to a prefilled `mailto:` so it's never a dead end. Client-side validation runs on submit and re-validates a field live once it has errored; the first invalid field receives focus, and errors use `role="alert"`. Form inputs get their focus ring from the `.contact-field` rule in `globals.css` (the global `focus-visible` rule only covers links/buttons).

**Social share image** is generated at request time by [app/opengraph-image.tsx](app/opengraph-image.tsx) (1200×630, `next/og` `ImageResponse`), re-exported for Twitter by [app/twitter-image.tsx](app/twitter-image.tsx). Both **must** declare `export const runtime = "edge"` — on the Node runtime `@vercel/og` throws `Invalid URL` during `next build` on Windows. Satori's default font is used deliberately (no external font fetch) for build robustness, so don't add a `fontFamily` without also supplying font data.

**Path alias**: `@/*` maps to the project root (see [tsconfig.json](tsconfig.json)), used throughout for `@/components/...` and `@/constants` imports.

**CI** ([.github/workflows/ci.yml](.github/workflows/ci.yml)) only runs `npm ci && npm run build` on push/PR to `main` — no lint or test step is enforced.
