# Migration Plan: Static HTML → React + TypeScript

## Overview

Migrate the Stemmlar Technologies website from a plain HTML/CSS/JS static site to a React + TypeScript application. The goal is to preserve all existing content and functionality while gaining component reusability, type safety, and a proper development workflow.

---

## Recommended Stack

| Concern | Choice | Reason |
|---|---|---|
| Framework | React 18 | Industry standard, large ecosystem |
| Language | TypeScript | Type safety, better DX |
| Build tool | Vite | Fast dev server, simple config, no CRA overhead |
| Routing | React Router v6 | Client-side routing for multi-page structure |
| Styling | CSS Modules + existing `style.css` variables | Minimal disruption, scoped styles |
| Animation | react-p5 | Wraps p5.js cleanly in a React component |
| Linting | ESLint + typescript-eslint | Code quality |
| Formatting | Prettier (already configured) | Consistent formatting |
| Hosting | GitHub Pages (via `gh-pages` or GitHub Actions) | No change to deployment target |

---

## Phase 1 — Project Scaffolding

**Goal:** Set up the new project structure alongside the existing site without breaking anything.

### Steps

1. Initialise a Vite + React + TypeScript project in a new `app/` subdirectory (or a separate branch):
   ```bash
   npm create vite@latest . -- --template react-ts
   ```
2. Install dependencies:
   ```bash
   npm install react-router-dom
   npm install react-p5
   npm install --save-dev @types/react @types/react-dom
   ```
3. Configure `vite.config.ts` for GitHub Pages base path (e.g. `base: '/'`).
4. Set up `tsconfig.json` with strict mode enabled.
5. Add ESLint config (`eslint.config.js`) with `typescript-eslint` and `eslint-plugin-react`.
6. Migrate `styles/style.css` as-is into `src/styles/global.css` and import it in `main.tsx`.
7. Verify the dev server starts and renders a blank page at `/`.

**Deliverable:** Running Vite dev server with TypeScript, React Router, and global styles loaded.

---

## Phase 2 — Shared Components

**Goal:** Build the reusable building blocks before assembling pages.

### Components to create

| Component | File | Notes |
|---|---|---|
| `Button` | `src/components/Button.tsx` | Wraps `.btn` with colour variant prop (`orange`, `green`, `salmon`, `khaki-green`) |
| `NavLink` | `src/components/NavLink.tsx` | Wraps `.nav-link` with colour variant prop |
| `AppTile` | `src/components/AppTile.tsx` | Card used in the apps grid on the home page |
| `AppHeader` | `src/components/AppHeader.tsx` | Header block used on each app detail page |
| `SectionContainer` | `src/components/SectionContainer.tsx` | Wraps `.container` div |
| `BannerAnimation` | `src/components/BannerAnimation.tsx` | p5.js canvas via `react-p5`; ports `sketch.js` + `vehicle.js` |
| `ContactForm` | `src/components/ContactForm.tsx` | Controlled form; ports `contact_us_form.js` logic |
| `SocialIcon` | `src/components/SocialIcon.tsx` | Icon + link used on the links page |
| `LinkButton` | `src/components/LinkButton.tsx` | Styled link button used on the links page |

### Types to define

```
src/types/
  App.ts          // App metadata shape (name, slug, icon, description, storeUrl, colour)
  SocialLink.ts   // Social icon shape (platform, url, icon)
```

**Deliverable:** All components render correctly in isolation (can be verified with a simple test page).

---

## Phase 3 — Page Migration

**Goal:** Recreate each HTML page as a React route.

### Routes

| Route | Component | Source file |
|---|---|---|
| `/` | `src/pages/Home.tsx` | `index.html` |
| `/links` | `src/pages/Links.tsx` | `links.html` |
| `/applications/track-my-time` | `src/pages/apps/TrackMyTime.tsx` | `applications/track-my-time/index.html` |
| `/applications/track-my-time/privacy` | `src/pages/apps/TrackMyTimePrivacy.tsx` | `applications/track-my-time/privacy.html` |
| `/applications/lara-jones-and-the-caves-of-madness` | `src/pages/apps/LaraJones.tsx` | `applications/lara-jones-and-the-caves-of-madness/index.html` |
| `/applications/lara-jones-and-the-caves-of-madness/privacy` | `src/pages/apps/LaraJonesPrivacy.tsx` | `applications/lara-jones-and-the-caves-of-madness/privacy.html` |

### Migration notes per page

**Home (`/`)**
- Landing section: replace `#sketch-holder` div + inline scripts with `<BannerAnimation />`.
- Apps section: map over a typed `apps` data array to render `<AppTile />` components.
- About section: static text, no logic needed.
- Contact section: replace inline form + `contact_us_form.js` with `<ContactForm />`.

**Links (`/links`)**
- Replace Tailwind CDN with either: (a) keep Tailwind via `npm install tailwindcss` and configure it properly, or (b) rewrite the page styles in CSS Modules to remove the CDN dependency.
- Port inline `<style>` block to a CSS Module.
- Replace hardcoded link list with a typed data array.

**App pages**
- Both app pages share the same layout — extract a shared `AppPageLayout` component.
- Fix the copy-paste bugs (wrong title and content on the Lara Jones pages) during migration.

**Privacy pages**
- Both privacy pages are near-identical in structure. Create a single `PrivacyPolicy` component that accepts app-specific props (app name, effective date, store link, etc.).

**Deliverable:** All routes render with correct content matching the original HTML pages.

---

## Phase 4 — Asset Migration

**Goal:** Move all static assets into the Vite project correctly.

### Steps

1. Copy `img/`, `favicons/`, `decorations/banner/assets/` into `public/` (Vite serves `public/` at root, preserving existing absolute paths).
2. Copy `applications/*/img/` into `public/applications/*/img/` to preserve existing image URLs.
3. Remove `decorations/banner/p5.play.js`, `sketch.js`, and `vehicle.js` from `public/` — these are now handled by `react-p5` and the `BannerAnimation` component.
4. Update `site.webmanifest` — fill in `name: "Stemmlar Technologies"` and `short_name: "Stemmlar"`.
5. Verify all image references resolve correctly in the browser.

**Deliverable:** All images, icons, and favicons load without 404s.

---

## Phase 5 — Contact Form Fix

**Goal:** Fix the Google Forms CORS issue identified in the existing site.

### Options (choose one)

| Option | Effort | Notes |
|---|---|---|
| **A. Use `no-cors` mode** | Low | Fire-and-forget POST; assume success after send. Simple but no real error detection. |
| **B. Proxy via a serverless function** | Medium | Add a Netlify/Vercel function or GitHub Actions webhook to relay the form. Proper error handling. |
| **C. Replace with EmailJS** | Low–Medium | Client-side email service with a proper SDK; no backend needed. |
| **D. Replace with Formspree** | Low | Drop-in form backend; free tier available. |

Recommendation: **Option C or D** — both are low effort and give reliable delivery confirmation without a backend.

**Deliverable:** Contact form submits successfully and shows accurate success/error feedback.

---

## Phase 6 — SEO & Meta Tags

**Goal:** Restore and improve per-page metadata.

### Steps

1. Install `react-helmet-async` for per-page `<head>` management.
2. Set unique `<title>` and `<meta name="description">` per route:
   - Home: `"Stemmlar Technologies — Crafting Immersive Gaming Experiences"`
   - Track My Time: `"Track My Time — Stemmlar Technologies"`
   - Lara Jones: `"Lara Jones and the Caves of Madness — Stemmlar Technologies"`
   - Links: `"Stemmlar Technologies Links"`
3. Update `sitemap.xml` to include all routes.
4. Update `robots.txt` sitemap URL to point to the correct domain (`https://www.stemmlar.com`).

**Deliverable:** Each page has a unique title and description; sitemap is complete.

---

## Phase 7 — Build & Deployment

**Goal:** Deploy the React app to GitHub Pages with no downtime.

### Steps

1. Configure `vite.config.ts`:
   ```ts
   export default defineConfig({
     base: '/',
     build: { outDir: 'dist' }
   })
   ```
2. Add a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
   - Runs `npm ci`
   - Runs `npm run build`
   - Deploys `dist/` to the `gh-pages` branch
3. Test the production build locally with `npm run preview`.
4. Merge to main and verify the live site.
5. Remove the old static HTML files once the React build is confirmed working.

**Deliverable:** Live site served from the React build via GitHub Pages.

---

## Known Issues to Fix During Migration

These bugs exist in the current site and should be corrected as part of the migration:

| Bug | Fix |
|---|---|
| Lara Jones `index.html` has `<title>Track My Time` | Set correct title in the React page component |
| Lara Jones `privacy.html` contains Track My Time content | Create a proper Lara Jones privacy page (or a shared `PrivacyPolicy` component with correct props) |
| Contact form CORS error | Address in Phase 5 |
| `site.webmanifest` has empty name fields | Fix in Phase 4 |
| Sitemap only contains root URL | Fix in Phase 6 |
| p5.js canvas doesn't resize on window resize | Add a `windowResized()` handler in `BannerAnimation` |

---

## Estimated Effort

| Phase | Effort |
|---|---|
| 1 — Scaffolding | ~2 hours |
| 2 — Shared components | ~4 hours |
| 3 — Page migration | ~4 hours |
| 4 — Asset migration | ~1 hour |
| 5 — Contact form fix | ~1–2 hours |
| 6 — SEO & meta | ~1 hour |
| 7 — Build & deployment | ~1–2 hours |
| **Total** | **~14–16 hours** |

---

## File Structure (Target)

```
stemmlar-technologies-website/
├── public/
│   ├── favicons/
│   ├── img/
│   ├── applications/
│   │   ├── track-my-time/img/
│   │   └── lara-jones-and-the-caves-of-madness/img/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── AppHeader.tsx
│   │   ├── AppTile.tsx
│   │   ├── BannerAnimation.tsx
│   │   ├── Button.tsx
│   │   ├── ContactForm.tsx
│   │   ├── LinkButton.tsx
│   │   ├── NavLink.tsx
│   │   ├── SectionContainer.tsx
│   │   └── SocialIcon.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Links.tsx
│   │   └── apps/
│   │       ├── LaraJones.tsx
│   │       ├── LaraJonesPrivacy.tsx
│   │       ├── TrackMyTime.tsx
│   │       └── TrackMyTimePrivacy.tsx
│   ├── styles/
│   │   └── global.css
│   ├── types/
│   │   ├── App.ts
│   │   └── SocialLink.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html              (Vite entry point)
├── vite.config.ts
├── tsconfig.json
├── package.json
└── .github/
    └── workflows/
        └── deploy.yml
```
