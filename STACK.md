---

project: Philip Abakah Portfolio
type: Static · Content-first · High-performance
priority: Performance · Clarity · Minimalism
--------------------------------------------

# Tech Stack Specification

## 01 — Core Framework

### Astro 5

Reason:

* Ships **zero JavaScript by default**
* Uses “islands architecture” (only loads JS when needed)
* Optimized for content-first sites like portfolios

Astro is significantly faster for static sites, delivering:

* ~40% faster load times
* ~90% less JavaScript than React-based frameworks ([比邻][1])

This aligns with the goal:

> Minimal, fast, distraction-free experience

---

## 02 — Styling System

### Tailwind CSS v4

Reason:

* Utility-first → precise control
* No runtime CSS → lightweight
* Works natively with Astro via Vite

Use Tailwind ONLY for:

* layout
* spacing
* typography

Avoid:

* over-styling
* excessive classes

---

## 03 — Typography

### Fonts

* System UI (primary) → Apple-like feel
* Inter (fallback)
* JetBrains Mono (for data / code sections)

Reason:

* Native performance (no heavy font loading)
* Clean, modern readability

---

## 04 — Deployment

### Vercel

Reason:

* Instant deploys from GitHub
* Global CDN
* Zero config for Astro

Alternative:

* Netlify (acceptable)
* Cloudflare Pages (more advanced)

---

## 05 — Content System

### Markdown (MD + MDX optional)

Reason:

* Content-first workflow
* Easy to maintain
* Perfect for:

  * projects
  * research notes
  * blog (future)

Astro Content Collections:

* type-safe
* structured data

---

## 06 — Interactivity (Minimal)

### Alpine.js OR Astro Islands (preferred)

Use ONLY when necessary:

* theme toggle
* small interactions

Avoid:

* React (overkill)
* heavy state management

Reason:
Astro is designed to avoid unnecessary JS:

> interactive components load only when needed ([Born Digital][2])

---

## 07 — Animations

### CSS-only animations

Use:

* opacity
* translate
* scale

Avoid:

* GSAP (too heavy)
* Framer Motion (not needed)

Principle:

> motion should communicate, not decorate

---

## 08 — Images

### Optimized Static Images

* Use Astro Image (if needed)
* Keep images < 500KB
* Prefer WebP

Reason:

* Faster load times
* better Lighthouse score

---

## 09 — Performance Targets

You must hit:

* Lighthouse: 95–100
* Time to Interactive: < 1s
* JS bundle: near 0KB

Astro makes this achievable by default due to:

* static HTML output
* minimal JS payload ([pkgpulse][3])

---

## 10 — SEO & Metadata

### Built-in Astro Head

* Open Graph tags
* Twitter cards
* semantic HTML

Reason:

* better sharing previews
* search visibility

---

## 11 — File Structure

```bash
my-portfolio/
├── public/
│   ├── images/
│   ├── favicon.svg
│
├── src/
│   ├── layouts/
│   ├── pages/
│   ├── components/
│   ├── content/
│   │   ├── projects/
│   │   └── writing/
│   ├── styles/
│
├── astro.config.mjs
├── package.json
```

---

## 12 — What NOT to Use

Avoid:

* Next.js → unnecessary JS overhead for static sites
* React (unless absolutely needed)
* heavy UI libraries
* complex state management

Reason:
Next.js ships additional JS even for static pages, increasing load cost ([Born Digital][2])

---

## 13 — Design Implementation Rules

* No unnecessary components
* No visual clutter
* Typography drives hierarchy
* White space is structural

---

## 14 — Future Scalability

This stack supports:

* Blog (MDX)
* Research publishing
* Case studies
* Project documentation

Without changing architecture

---

# Final Decision

This portfolio will be built as:

> A static, content-first system
> using Astro + Tailwind
> optimized for performance and clarity

---

# Summary

Stack:

* Astro 5
* Tailwind CSS v4
* Markdown content system
* Vercel deployment

Philosophy:

* Ship less
* Load faster
* Show only what matters

---

This is not just a website.

It is a system.

[1]: https://eastondev.com/blog/en/posts/dev/20251202-astro-vs-nextjs-static-site/?utm_source=chatgpt.com "Astro vs Next.js: Which Should You Choose for Static Sites? Complete Guide on Performance, Cost & Use Cases · BetterLink Blog"
[2]: https://born.mt/insights/nextjs-vs-astro-static-sites/?utm_source=chatgpt.com "Next.js vs Astro for Static Sites | Born Digital"
[3]: https://www.pkgpulse.com/blog/astro-vs-nextjs-2026?utm_source=chatgpt.com "Astro vs Next.js: When to Use Which — PkgPulse Blog"
