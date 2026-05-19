# Styling Guide

## Stylesheet

The primary stylesheet is `styles/style.css`. A minified copy is kept at `styles/style-min.css` — when making changes, update `style.css` and regenerate the minified version.

The `links.html` page uses **Tailwind CSS v2.2.19** loaded from CDN instead of the shared stylesheet. Inline `<style>` blocks in that file handle any custom overrides.

---

## CSS Custom Properties (Variables)

Defined on the `*` selector so they are globally available:

| Variable | Value | Usage |
|---|---|---|
| `--orange` | `rgb(246, 101, 5)` | Primary CTA buttons, default nav links |
| `--orange-dark` | `rgb(169, 69, 3)` | Hover state for orange elements |
| `--green` | `rgb(98, 183, 102)` | Track My Time app buttons/links |
| `--green-dark` | `rgb(70, 131, 73)` | Hover state for green elements |
| `--salmon` | `rgb(240, 97, 95)` | Lara Jones Itch.io button |
| `--salmon-dark` | `rgb(189, 76, 74)` | Hover state for salmon elements |
| `--khaki-green` | `rgb(104, 116, 65)` | Lara Jones back/nav buttons |
| `--khaki-green-dark` | `rgb(58, 65, 36)` | Hover state for khaki-green elements |
| `--black` | `rgb(13, 13, 15)` | Landing section background, scrollbar track |
| `--grey` | `rgb(51, 51, 51)` | General dark grey |

The scrollbar is styled globally: `scrollbar-color: var(--orange) var(--black)`.

---

## Button Classes

Buttons use the `.btn` base class with optional colour modifier classes:

```html
<a class="btn">Default (orange)</a>
<a class="btn orange">Orange</a>
<a class="btn green">Green</a>
<a class="btn salmon">Salmon</a>
<a class="btn khaki-green">Khaki Green</a>
```

Each colour has a corresponding `.nav-link` variant for inline text links:

```html
<a class="nav-link green">Privacy Policy</a>
```

---

## Layout

- **Container:** `.container` — max-width `1200px`, horizontally centred, `20px` horizontal padding.
- **Sections:** Full-width `<section>` elements stacked vertically. Each section manages its own padding (`50px 0` typically).
- **App tiles:** `.app-list` uses `flexbox` with `flex-wrap: wrap`. Each `.app` tile is `calc(33.33% - 20px)` wide on desktop, stacking to a single column below `800px`.
- **App pages:** `.app-header` uses flexbox — `.details` takes remaining space, `.logo` has a fixed `flex-basis: 300px`.

---

## Responsive Breakpoints

One breakpoint is used throughout: **`max-width: 800px`**.

Changes at this breakpoint:
- Landing decoration margins tighten (left/right go from `300px` to `10px`).
- App tile list switches from row wrap to a single column.
- App page header logo shrinks to `100px` and `.hide-mobile` logos are hidden.
- App header title font size drops from `xx-large` to `x-large`.

---

## Section Backgrounds

| Section | Background |
|---|---|
| Landing (`.landing`) | `img/banner.jpg` — full cover, `100vh` |
| About (`.about`) | `img/library_hero_blur.webp` — full cover, white text |
| Links page body | `img/store_page_background_blur.webp` with CSS mask |

### CSS Mask Effect (links page)

The links page uses `mask-image` with WebP mask files to create a decorative cutout effect on the background:

```css
.bg-img1 {
  mask-image: url("/img/masks/Rect_Selection.webp");
  mask-composite: exclude;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: cover;
}

/* Portrait orientation uses a thinner mask */
@media (orientation: portrait) {
  .bg-img1 {
    mask-image: url("/img/masks/Rect_Selection_thin.webp");
  }
}
```

---

## App-Specific Colour Theming

Each application page uses a consistent colour for its buttons and links:

| App | Colour class |
|---|---|
| Track My Time | `green` |
| Lara Jones | `khaki-green` (back button), `salmon` (Itch.io button) |
