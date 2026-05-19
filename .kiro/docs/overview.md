# Stemmlar Technologies Website — Project Overview

## What This Is

A static marketing and portfolio website for **Stemmlar Technologies**, a South African indie software and game development company. The site serves as the company's public-facing presence, showcasing their applications, providing app store links, and offering a contact channel.

The site is hosted on GitHub Pages at `https://phillipstemmlar.github.io/` (per `robots.txt` and `sitemap.xml`), with the primary domain being `https://www.stemmlar.com`.

---

## Pages

| File | URL Path | Purpose |
|---|---|---|
| `index.html` | `/` | Main landing page — hero, app list, about, contact |
| `links.html` | `/links` | Link-in-bio style page for social media profiles |
| `applications/track-my-time/index.html` | `/applications/track-my-time/` | App store page for Track My Time |
| `applications/track-my-time/privacy.html` | `/applications/track-my-time/privacy.html` | Privacy policy for Track My Time |
| `applications/lara-jones-and-the-caves-of-madness/index.html` | `/applications/lara-jones-and-the-caves-of-madness/` | App store page for Lara Jones |
| `applications/lara-jones-and-the-caves-of-madness/privacy.html` | `/applications/lara-jones-and-the-caves-of-madness/privacy.html` | Privacy policy for Lara Jones |

---

## Applications Featured

### Track My Time
- **Type:** Mobile app (Android)
- **Store:** [Google Play](https://play.google.com/store/apps/details?id=com.stemmlar.track_my_time)
- **Status:** Published
- **Description:** A time-tracking app for managing tasks, generating reports, and reviewing productivity history. All data is stored locally on-device.

### Lara Jones and the Caves of Madness
- **Type:** Mobile puzzle game
- **Store:** [Itch.io](https://phillipstemmlar.itch.io/lara-jones-and-the-caves-of-madness)
- **Status:** Available on Itch.io; Google Play release planned
- **Description:** A puzzle-adventure game where the player navigates cave temples, solves riddles, and uncovers ancient treasures.

### Forsaking Valhalla *(referenced in links.html)*
- **Type:** PC game
- **Stores:** [Steam](https://store.steampowered.com/app/3490030/Forsaking_Valhalla) (wishlist), [Itch.io](https://phillipstemmlar.itch.io/forsaking-valhalla) (beta), [Devlog.tv](https://devlog.tv/forsaking-valhalla)
- **Status:** In development / beta

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | Plain HTML5 |
| Styling | Custom CSS (`styles/style.css`) + Tailwind CSS CDN (links page only) |
| Scripting | Vanilla JavaScript |
| Animation | [p5.js](https://p5js.org/) v1.9.4 + p5.play (banner decoration) |
| Analytics | Google Analytics (GA4, tag `G-XF5EET1Y50`) |
| Contact form | Google Forms API (via `fetch` POST) |
| Hosting | GitHub Pages |
| Formatting | Prettier (`.prettierrc.json` present, currently empty config) |

---

## Social Media Presence

| Platform | Handle / URL |
|---|---|
| Instagram | [@stemmlar_tech](https://www.instagram.com/stemmlar_tech) |
| YouTube | [@stemmlar_tech](https://www.youtube.com/@stemmlar_tech) |
| TikTok | [@stemmlar_tech](https://tiktok.com/@stemmlar_tech) |
| X (Twitter) | [@stemmlar_tech](https://x.com/stemmlar_tech) |
| GitHub | [Stemmlar-Technologies](https://github.com/Stemmlar-Technologies) |
| LinkedIn | (icon present, link not set in links page) |
| Stack Overflow | (icon present, link not set in links page) |
