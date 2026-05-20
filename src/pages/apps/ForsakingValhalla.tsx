import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './ForsakingValhalla.module.css'

const STEAM_URL = 'https://store.steampowered.com/app/3490030/Forsaking_Valhalla'
const ITCH_URL = 'https://phillipstemmlar.itch.io/forsaking-valhalla'
const DEVLOGTV_URL = 'https://devlog.tv/forsaking-valhalla'

const FEATURES = [
  {
    icon: '🏰',
    title: 'Build your defences',
    desc: 'Construct walls, towers, and traps to fortify your village against the incoming Norse hordes.',
  },
  {
    icon: '⚔️',
    title: 'Train warriors',
    desc: 'Recruit and upgrade warriors with different abilities to hold the line when defences are breached.',
  },
  {
    icon: '🪵',
    title: 'Gather resources',
    desc: 'Manage wood, stone, and food to keep your village running and your army fighting.',
  },
  {
    icon: '🌊',
    title: 'Relentless waves',
    desc: 'Each wave grows stronger. Adapt your strategy or be overwhelmed by creatures from Norse mythology.',
  },
  {
    icon: '🏛️',
    title: 'Protect the Town Hall',
    desc: 'Your Town Hall is the heart of your village. If it falls, it\'s game over.',
  },
  {
    icon: '🐉',
    title: 'Norse mythology',
    desc: 'Face creatures drawn from Viking legend — from draugr to trolls to the beasts of Ragnarök.',
  },
]

const FACTS = [
  { label: 'Genre', value: 'Survival RTS' },
  { label: 'Platform', value: 'PC (Windows)' },
  { label: 'Store', value: 'Steam / Itch.io' },
  { label: 'Release', value: 'TBD' },
  { label: 'Developer', value: 'Stemmlar Technologies' },
  { label: 'Country', value: 'South Africa 🇿🇦' },
]

export default function ForsakingValhalla() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className={styles.page}>

      {/* ── Nav ── */}
      <nav className={styles.nav}>
        <Link to="/">
          <img src="/img/Stemmlar Technologies Logo.png" alt="Stemmlar Technologies" className={styles.navLogo} />
        </Link>
        <Link to="/" className={styles.navBack}>← All Apps</Link>
      </nav>

      {/* ── Hero ── */}
      <div className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.heroLabel}>PC Game · Survival RTS</p>
            <h1 className={styles.heroTitle}>Forsaking Valhalla</h1>
            <p className={styles.heroSubtitle}>
              Defend your village against relentless waves of Norse mythological creatures.
              Build defences, train warriors, and gather resources to survive as long as possible.
              If your Town Hall falls, it's game over. How long will you last?
            </p>
            <div className={styles.heroActions}>
              <a href={STEAM_URL} target="_blank" rel="noopener noreferrer" className={styles.btnSteam}>
                <img src="/img/icons/icon_steam.png" alt="" />
                Wishlist on Steam
              </a>
              <a href={ITCH_URL} target="_blank" rel="noopener noreferrer" className={styles.btnItch}>
                <img src="/img/icons/icon_itchio-white.png" alt="" />
                Try Beta on Itch.io
              </a>
              <a href={DEVLOGTV_URL} target="_blank" rel="noopener noreferrer" className={styles.btnGhost}>
                Devlog.tv
              </a>
            </div>
          </div>
          <div className={styles.heroCapsule}>
            <img
              src="/applications/forsaking-valhalla/store_capsule_small.png"
              alt="Forsaking Valhalla"
            />
          </div>
        </div>
      </div>

      {/* ── Trailer placeholder ── */}
      <div className={styles.trailerWrapper}>
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Trailer</p>
          <h2 className={styles.sectionTitle}>Watch the Trailer</h2>
          <div className={styles.trailerPlaceholder}>
            <span className={styles.trailerIcon}>▶</span>
            <span className={styles.trailerLabel}>Trailer coming soon</span>
          </div>
        </div>
      </div>

      {/* ── Features ── */}
      <div className={styles.section}>
        <p className={styles.sectionLabel}>Gameplay</p>
        <h2 className={styles.sectionTitle}>Game Features</h2>
        <p className={styles.sectionSubtitle}>
          Build, defend, survive. Every decision matters when the next wave is always stronger than the last.
        </p>
        <div className={styles.featuresGrid}>
          {FEATURES.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <span className={styles.featureIcon}>{f.icon}</span>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Fact sheet ── */}
      <div className={styles.factsDivider}>
        <div className={styles.section}>
          <p className={styles.sectionLabel}>At a glance</p>
          <h2 className={styles.sectionTitle}>Game Info</h2>
          <div className={styles.factsGrid}>
            {FACTS.map((f) => (
              <div key={f.label} className={styles.factItem}>
                <span className={styles.factLabel}>{f.label}</span>
                <span className={styles.factValue}>{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Screenshots ── */}
      <div className={styles.screenshotsDivider}>
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Screenshots</p>
          <h2 className={styles.sectionTitle}>In-game Screenshots</h2>
          <div className={styles.screenshots}>
            <div className={styles.screenshotPlaceholder}>Screenshots coming soon</div>
            <div className={styles.screenshotPlaceholder}>Screenshots coming soon</div>
            <div className={styles.screenshotPlaceholder}>Screenshots coming soon</div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className={styles.ctaWrapper}>
        <div className={styles.ctaInner}>
          <p className={styles.sectionLabel}>Join the fight</p>
          <h2 className={styles.ctaTitle}>How long will you last?</h2>
          <p className={styles.ctaSubtitle}>
            Wishlist on Steam to be notified on release, or try the beta on Itch.io right now.
          </p>
          <div className={styles.ctaActions}>
            <a href={STEAM_URL} target="_blank" rel="noopener noreferrer" className={styles.btnSteam}>
              <img src="/img/icons/icon_steam.png" alt="" />
              Wishlist on Steam
            </a>
            <a href={ITCH_URL} target="_blank" rel="noopener noreferrer" className={styles.btnItch}>
              <img src="/img/icons/icon_itchio-white.png" alt="" />
              Try Beta on Itch.io
            </a>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer>
        <div className={styles.footer}>
          <p className={styles.footerCopy}>© {new Date().getFullYear()} Stemmlar Technologies</p>
          <div className={styles.footerLinks}>
            <Link to="/press/forsaking-valhalla">Press Kit</Link>
            <Link to="/">Back to Home</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
