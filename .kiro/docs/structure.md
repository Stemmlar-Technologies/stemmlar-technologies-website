# Project Structure

```
stemmlar-technologies-website/
│
├── index.html                          # Main landing page
├── links.html                          # Link-in-bio page
├── robots.txt                          # Search engine crawl rules
├── sitemap.xml                         # XML sitemap (points to GitHub Pages URL)
├── README.md                           # Project readme
├── .prettierrc.json                    # Prettier config (empty)
│
├── applications/                       # Per-app sub-sites
│   ├── track-my-time/
│   │   ├── index.html                  # App store page
│   │   ├── privacy.html                # Privacy policy
│   │   └── img/
│   │       ├── app-icon.png
│   │       ├── favicon.ico / .png
│   │       ├── feature-graphic.png
│   │       └── screenshots/            # 5 phone screenshots
│   │
│   └── lara-jones-and-the-caves-of-madness/
│       ├── index.html                  # App store page
│       ├── privacy.html                # Privacy policy (copy of TMT policy — see notes)
│       └── img/
│           ├── app-icon.png
│           ├── banner.png
│           ├── banner_small.png
│           ├── favicon.ico / .png
│           └── feature-graphic.png
│
├── decorations/
│   └── banner/                         # Animated p5.js banner for the landing hero
│       ├── sketch.js                   # p5.js canvas setup and draw loop
│       ├── vehicle.js                  # Vehicle class (flocking/steering behaviour)
│       ├── p5.play.js                  # p5.play library (bundled locally)
│       └── assets/
│           └── ship.png                # Sprite used for each vehicle
│
├── favicons/                           # Site-wide favicon set
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   ├── site.webmanifest                # PWA manifest (name fields empty)
│   └── about.txt                       # Generator credit (favicon.io)
│
├── img/                                # Shared site images
│   ├── banner.jpg                      # Hero background image
│   ├── library_hero.png / .webp        # About section background
│   ├── library_hero_blur.png / .webp   # Blurred variant
│   ├── store_page_background.webp      # Links page background
│   ├── store_page_background_blur.webp # Blurred variant for links page
│   ├── Stemmlar Technologies Logo.png  # Full colour logo
│   ├── Stemmlar Technologies Logo black.png
│   ├── Stemmlar Technologies Logo black big.png
│   ├── Stemmlar Technologies Icon.png
│   ├── Stemmlar Technologies icon black.png
│   ├── icons/                          # Social / platform icon set (PNG)
│   │   ├── icon_github.png
│   │   ├── icon_instagram.png
│   │   ├── icon_linkedin.png
│   │   ├── icon_stackoverflow.png / .ico
│   │   ├── icon_steam.png
│   │   ├── icon_stemmlar.png
│   │   ├── icon_tiktok.png
│   │   ├── icon_x.png
│   │   ├── icon_youtube.png
│   │   ├── icon_itchio.png
│   │   ├── icon_itchio-white.png
│   │   ├── devlogtv.png
│   │   └── devlogtv_white.png
│   └── masks/                          # CSS mask images (WebP) for decorative effects
│       ├── Circle_Bubble.webp
│       ├── Circle_Bubble_thick.webp
│       ├── Circle_Bubble_thin.webp
│       ├── Rect_Mask.webp
│       ├── Rect_Mask_Disolve.webp
│       ├── Rect_Selection.webp
│       ├── Rect_Selection_thick.webp
│       ├── Rect_Selection_thin.webp
│       └── Rect_Selection_extra_thin.webp
│
├── scripts/
│   └── contact_us_form.js              # Contact form submission handler
│
└── styles/
    ├── style.css                       # Main stylesheet (source)
    └── style-min.css                   # Minified stylesheet
```

---

## Key Conventions

- **No build system.** All files are authored directly and served as-is. There is no bundler, transpiler, or package manager.
- **Shared stylesheet.** All pages reference `/styles/style.css` via an absolute root-relative path. The `links.html` page is the exception — it uses Tailwind CSS from CDN instead.
- **Absolute paths.** Assets are referenced with root-relative paths (e.g. `/styles/style.css`, `/img/...`) so they work correctly regardless of nesting depth.
- **Per-app favicons.** Each application sub-directory has its own `favicon.ico` and `favicon.png` rather than using the site-wide set.
- **Image formats.** The project uses `.png` for logos and icons, `.jpg` for the hero background, and `.webp` for larger background/mask images to reduce file size.
