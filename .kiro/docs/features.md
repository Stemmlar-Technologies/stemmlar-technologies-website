# Features & Functionality

## Landing Page Hero Animation

**Files:** `decorations/banner/sketch.js`, `decorations/banner/vehicle.js`, `decorations/banner/p5.play.js`

The landing section contains an interactive p5.js canvas rendered inside `#sketch-holder`. It simulates a small fleet of 10 ship sprites using autonomous steering behaviours inspired by Craig Reynolds' boid algorithms (via Daniel Shiffman's *The Nature of Code*).

### Behaviour
- Each `Vehicle` starts at the canvas centre and moves with a random initial velocity.
- **Separation:** Vehicles steer away from neighbours within a `desiredseparation` radius to avoid crowding.
- **Seek:** When a target is set, vehicles steer toward it. The target clears once a vehicle arrives.
- **Boundary avoidance:** Vehicles steer back inward when they approach the canvas edges (within `d = 25px`).
- **Trail:** Each vehicle renders a fading orange trail of up to 15 points behind it.

### Interaction
Clicking anywhere on the canvas calls `mousePressed()`, which sets all vehicles' target to the mouse position. They converge on the click point then resume free movement.

### Canvas sizing
The canvas matches the dimensions of `#sketch-holder` at setup time. It does not currently resize on window resize.

### Dependencies
- **p5.js v1.9.4** — loaded from cdnjs CDN
- **p5.play** — bundled locally at `decorations/banner/p5.play.js` (used for sprite rendering)

---

## Contact Form

**File:** `scripts/contact_us_form.js`

The contact form on `index.html` submits to a **Google Forms** endpoint via a `fetch` POST request. Form fields map to Google Form entry IDs:

| Field | Element ID | Google Form Entry |
|---|---|---|
| Full Name | `full_name` | `entry.1537159743` |
| Email Address | `email_address` | `entry.1892208282` |
| Message | `message` | `entry.1827350325` |

The form endpoint is:
```
https://docs.google.com/forms/d/e/1FAIpQLScvpwieaOEQGIZ_emPH7hnI6fwW9D7AeIvu_zmmhJSt5nnhFA/formResponse
```

On success, an `alert` confirms submission and the form resets. On failure, an `alert` reports the error.

> **Note:** Google Forms CORS policy means the `fetch` response will typically be a network error (opaque response), even on successful submission. The current error handler will fire in most browsers despite the form data being received. Consider replacing with a proper form backend or using `no-cors` mode with a success assumption.

---

## Links Page

**File:** `links.html`

A standalone link-in-bio style page, separate from the main site stylesheet. It uses **Tailwind CSS v2.2.19** from CDN for layout and typography.

### Content
- Company logo and tagline
- Social media icon row (Instagram, YouTube, TikTok, X)
- Styled link buttons for:
  - Steam wishlist — Forsaking Valhalla
  - Itch.io beta — Forsaking Valhalla
  - Devlog.tv page — Forsaking Valhalla
  - Main Stemmlar website

### Background effect
A full-viewport background image (`store_page_background_blur.webp`) is masked using a CSS `mask-image` with a WebP mask file. The mask switches to a thinner variant in portrait orientation via a media query.

---

## Analytics

All pages include the **Google Analytics 4** tag (`G-XF5EET1Y50`) via the standard `gtag.js` snippet in the `<head>`. This tracks page views across the entire site.

---

## SEO & Crawling

- `robots.txt` allows all crawlers on all paths.
- `sitemap.xml` contains a single entry pointing to the GitHub Pages root URL. It was generated with xml-sitemaps.com and has not been updated to include application sub-pages.
- Each page sets a `<meta name="description">` tag. Currently all pages use the same description: *"Crafting Immersive Gaming Experiences"*.

---

## Favicons & PWA Manifest

Favicons were generated with [favicon.io](https://favicon.io/favicon-converter/) and cover:
- `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png` — browser tab icons
- `apple-touch-icon.png` — iOS home screen
- `android-chrome-192x192.png`, `android-chrome-512x512.png` — Android / PWA

The `site.webmanifest` is present but the `name` and `short_name` fields are empty strings. This should be filled in if PWA installation is desired.

---

## Known Issues & Notes

| Issue | Location | Detail |
|---|---|---|
| Wrong page title | `applications/lara-jones-and-the-caves-of-madness/index.html` | `<title>` reads "Track My Time" instead of "Lara Jones" |
| Wrong privacy policy content | `applications/lara-jones-and-the-caves-of-madness/privacy.html` | The page header and content reference "Track My Time" — appears to be a copy-paste from the TMT privacy page |
| Contact form CORS | `scripts/contact_us_form.js` | Google Forms rejects cross-origin requests; the `catch` block fires even on successful submissions |
| Sitemap outdated | `sitemap.xml` | Only contains the root URL; app sub-pages are not listed |
| PWA manifest incomplete | `favicons/site.webmanifest` | `name` and `short_name` are empty strings |
| Canvas not responsive | `decorations/banner/sketch.js` | Canvas size is set once at `setup()` and does not update on window resize |
| Social links incomplete | `links.html` | GitHub ([Stemmlar-Technologies](https://github.com/Stemmlar-Technologies)), LinkedIn, and Stack Overflow icons exist in `img/icons/` but are not linked anywhere on the site |
