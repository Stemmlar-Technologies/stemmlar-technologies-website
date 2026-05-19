import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './LaraJones.module.css'

const STORE_URL = 'https://phillipstemmlar.itch.io/lara-jones-and-the-caves-of-madness'

const FEATURES = [
  {
    icon: '🧩',
    title: 'Mind-bending puzzles',
    desc: 'Each chamber presents a unique challenge — from intricate mechanisms to logic puzzles that test your analytical skills.',
  },
  {
    icon: '🗺️',
    title: 'Labyrinthine exploration',
    desc: 'Navigate winding corridors, solve riddles left by past explorers, and unravel the mysteries of an ancient civilisation.',
  },
  {
    icon: '🏺',
    title: 'Artifact powers',
    desc: 'Discover artifacts that grant new abilities and unlock paths previously inaccessible.',
  },
  {
    icon: '💎',
    title: 'Hidden treasures',
    desc: 'Uncover clues that shed light on the temple\'s history and the true nature of the legendary treasure within.',
  },
]

export default function LaraJones() {
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
        <img
          src="/applications/lara-jones-and-the-caves-of-madness/img/banner.png"
          alt="Lara Jones and the Caves of Madness"
          className={styles.heroBanner}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroLabel}>Mobile Game · Itch.io</p>
          <h1 className={styles.heroTitle}>Lara Jones and the<br />Caves of Madness</h1>
          <div className={styles.heroActions}>
            <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              Play on Itch.io
            </a>
            <Link to="/applications/lara-jones-and-the-caves-of-madness/privacy" className={styles.btnSecondary}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* ── About ── */}
      <div className={styles.section}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <p className={styles.sectionLabel}>The adventure</p>
            <h2 className={styles.sectionTitle}>Enter the Caves of Madness</h2>
            <p>
              Embark on an epic journey with Lara Jones — a courageous young woman with a knack
              for adventure, drawn to a mysterious cave temple rumoured to hold untold treasures
              and ancient secrets.
            </p>
            <p>
              Venture deep into the heart of the jungle and prepare to confront a series of
              mind-bending puzzles and obstacles. Each chamber presents a unique challenge, from
              intricate mechanisms to logic puzzles that test your analytical skills.
            </p>
            <p>
              Immerse yourself in stunning visuals and atmospheric sound design that bring the
              cave temple to life — an experience that captivates and challenges you at every turn.
            </p>
            <p>
              <strong>Will you unravel the secrets of the Caves of Madness and claim the
              legendary treasure?</strong>
            </p>
          </div>
          <div className={styles.aboutVisual}>
            <img
              src="/applications/lara-jones-and-the-caves-of-madness/img/banner_small.png"
              alt="Lara Jones gameplay"
            />
          </div>
        </div>
      </div>

      {/* ── Features ---- */}
      <div className={styles.featuresDivider}>
        <div className={styles.section}>
          <p className={styles.sectionLabel}>What to expect</p>
          <h2 className={styles.sectionTitle}>Game Features</h2>
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
      </div>

      {/* ── CTA ── */}
      <div className={styles.ctaWrapper}>
        <div className={styles.ctaInner}>
          <p className={styles.sectionLabel}>Ready to explore?</p>
          <h2 className={styles.ctaTitle}>Join Lara on her daring quest</h2>
          <p className={styles.ctaSubtitle}>
            Available now on Itch.io. Free to play in your browser.
          </p>
          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            Play on Itch.io
          </a>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer>
        <div className={styles.footer}>
          <p className={styles.footerCopy}>© {new Date().getFullYear()} Stemmlar Technologies</p>
          <div className={styles.footerLinks}>
            <Link to="/applications/lara-jones-and-the-caves-of-madness/privacy">Privacy Policy</Link>
            <Link to="/">Back to Home</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
