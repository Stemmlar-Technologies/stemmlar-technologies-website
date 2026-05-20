import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Press.module.css'

const STEAM_URL = 'https://store.steampowered.com/app/3490030/Forsaking_Valhalla'
const ITCH_URL = 'https://phillipstemmlar.itch.io/forsaking-valhalla'
const DEVLOGTV_URL = 'https://devlog.tv/forsaking-valhalla'

const FACTS = [
  { label: 'Title', value: 'Forsaking Valhalla' },
  { label: 'Genre', value: 'Survival RTS' },
  { label: 'Platform', value: 'PC (Windows)' },
  { label: 'Release Date', value: 'TBD' },
  { label: 'Price', value: 'TBD' },
  { label: 'Developer', value: 'Stemmlar Technologies' },
  { label: 'Publisher', value: 'Stemmlar Technologies' },
  { label: 'Country', value: 'South Africa 🇿🇦' },
]

const LOGOS = [
  { name: 'Store Capsule Header', src: '/applications/forsaking-valhalla/store_capsule_header.png', dark: false },
  { name: 'Store Capsule Small', src: '/applications/forsaking-valhalla/store_capsule_small.png', dark: false },
  { name: 'Library Header', src: '/applications/forsaking-valhalla/library_header.png', dark: false },
  { name: 'Game Icon', src: '/applications/forsaking-valhalla/forsaking-valhalla-icon-52.png', dark: false },
]

const LINKS = [
  { label: 'Steam (Wishlist)', url: STEAM_URL, icon: '/img/icons/icon_steam.png' },
  { label: 'Itch.io (Beta)', url: ITCH_URL, icon: '/img/icons/icon_itchio.png' },
  { label: 'Devlog.tv', url: DEVLOGTV_URL, icon: '/img/icons/devlogtv.png' },
]

export default function ForsakingValhallaPress() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className={styles.page}>

      {/* ── Nav ── */}
      <nav className={styles.nav}>
        <Link to="/">
          <img src="/img/Stemmlar Technologies Logo.png" alt="Stemmlar Technologies" className={styles.navLogo} />
        </Link>
        <Link to="/press" className={styles.navBack}>← Company Press Kit</Link>
      </nav>

      {/* ── Header ── */}
      <div className={styles.header}>
        <div className={styles.headerMeta}>
          <img src="/applications/forsaking-valhalla/forsaking-valhalla-icon-52.png" alt="Forsaking Valhalla" className={styles.headerIcon} />
          <span className={styles.headerBadge}>Press Kit</span>
        </div>
        <h1 className={styles.headerTitle}>Forsaking Valhalla</h1>
        <p className={styles.headerSubtitle}>
          A survival RTS where you defend your village against relentless waves of Norse
          mythological creatures. Build defences, train warriors, and gather resources to
          survive as long as possible. If your Town Hall falls, it's game over.
        </p>
      </div>

      <div className={styles.content}>

        {/* ── Fact sheet ── */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>At a glance</p>
          <h2 className={styles.sectionTitle}>Game Facts</h2>
          <div className={styles.factsGrid}>
            {FACTS.map((f) => (
              <div key={f.label} className={styles.factItem}>
                <span className={styles.factLabel}>{f.label}</span>
                <span className={styles.factValue}>{f.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Description ── */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>About the game</p>
          <h2 className={styles.sectionTitle}>Description</h2>
          <div className={styles.description}>
            <p>
              Forsaking Valhalla is a survival real-time strategy game set in a world of Norse
              mythology. Players must defend their village against increasingly powerful waves of
              mythological creatures — from draugr and trolls to the beasts of Ragnarök.
            </p>
            <p>
              The core loop revolves around three pillars: building defences, training warriors,
              and gathering resources. Each wave grows stronger, forcing players to constantly
              adapt their strategy. The Town Hall is the heart of the village — if it falls,
              the game is over.
            </p>
            <p>
              Forsaking Valhalla is currently in active development by Stemmlar Technologies,
              an independent studio based in South Africa. A beta is available on Itch.io,
              and the full game is planned for release on Steam.
            </p>
          </div>
        </div>

        {/* ── Assets ── */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Brand Assets</p>
          <h2 className={styles.sectionTitle}>Key Art & Logos</h2>
          <div className={styles.assetGrid}>
            {LOGOS.map((logo) => (
              <div key={logo.name} className={styles.assetCard}>
                <div className={styles.assetPreview}>
                  <img src={logo.src} alt={logo.name} />
                </div>
                <div className={styles.assetInfo}>
                  <span className={styles.assetName}>{logo.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Screenshots ── */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Media</p>
          <h2 className={styles.sectionTitle}>Screenshots</h2>
          <div className={styles.screenshots}>
            <div className={styles.screenshotPlaceholder}>Screenshots coming soon</div>
            <div className={styles.screenshotPlaceholder}>Screenshots coming soon</div>
            <div className={styles.screenshotPlaceholder}>Screenshots coming soon</div>
          </div>
        </div>

        {/* ── Trailer ── */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Video</p>
          <h2 className={styles.sectionTitle}>Trailer</h2>
          <div className={styles.screenshotPlaceholder} style={{ width: '100%', height: '240px', aspectRatio: 'unset' }}>
            Trailer coming soon
          </div>
        </div>

        {/* ── Links ── */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Store & Community</p>
          <h2 className={styles.sectionTitle}>Links</h2>
          <div className={styles.linkList}>
            {LINKS.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                <img src={l.icon} alt="" style={{ filter: 'invert(1)', opacity: 0.7 }} />
                <div className={styles.linkItemText}>
                  <div className={styles.linkItemLabel}>{l.label}</div>
                  <div className={styles.linkItemUrl}>{l.url.replace('https://', '')}</div>
                </div>
                <span className={styles.linkItemArrow}>↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* ── Contact ── */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Get in touch</p>
          <h2 className={styles.sectionTitle}>Press Contact</h2>
          <div className={styles.contactCard}>
            <span className={styles.contactLabel}>Developer</span>
            <span className={styles.contactValue}>Stemmlar Technologies</span>
            <p className={styles.contactNote}>
              For review keys, interviews, or additional assets, please use the contact form
              on our website. We aim to respond within 3 business days.
            </p>
            <Link to="/#contact" style={{ marginTop: '8px', color: 'var(--brand-orange)', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>
              Contact Us →
            </Link>
          </div>
        </div>

      </div>

      {/* ── Footer ── */}
      <footer>
        <div className={styles.footer}>
          <p className={styles.footerCopy}>© {new Date().getFullYear()} Stemmlar Technologies</p>
          <div className={styles.footerLinks}>
            <Link to="/press">Company Press Kit</Link>
            <Link to="/applications/forsaking-valhalla">Game Page</Link>
            <Link to="/">Home</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
