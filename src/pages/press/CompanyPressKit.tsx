import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Press.module.css'

const FACTS = [
  { label: 'Studio Name', value: 'Stemmlar Technologies' },
  { label: 'Location', value: 'South Africa 🇿🇦' },
  { label: 'Founded', value: 'TBD' },
  { label: 'Team Size', value: 'TBD' },
  { label: 'Website', value: 'stemmlar.com' },
  { label: 'Specialisation', value: 'Games & Software' },
]

const LOGOS = [
  { name: 'Logo (colour)', src: '/img/Stemmlar Technologies Logo.png', dark: false },
  { name: 'Logo (black)', src: '/img/Stemmlar Technologies Logo black.png', dark: true },
  { name: 'Icon (colour)', src: '/img/Stemmlar Technologies Icon.png', dark: false },
  { name: 'Icon (black)', src: '/img/Stemmlar Technologies icon black.png', dark: true },
]

const LINKS = [
  { label: 'Website', url: 'https://www.stemmlar.com', icon: '/img/icons/icon_stemmlar.png' },
  { label: 'GitHub', url: 'https://github.com/Stemmlar-Technologies', icon: '/img/icons/icon_github.png' },
  { label: 'Instagram', url: 'https://www.instagram.com/stemmlar_tech', icon: '/img/icons/icon_instagram.png' },
  { label: 'YouTube', url: 'https://www.youtube.com/@stemmlar_tech', icon: '/img/icons/icon_youtube.png' },
  { label: 'X / Twitter', url: 'https://x.com/stemmlar_tech', icon: '/img/icons/icon_x.png' },
  { label: 'Steam Developer Page', url: 'https://store.steampowered.com/developer/stemmlartechnologies', icon: '/img/icons/icon_steam.png' },
]

export default function CompanyPressKit() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className={styles.page}>

      {/* ── Nav ── */}
      <nav className={styles.nav}>
        <Link to="/">
          <img src="/img/Stemmlar Technologies Logo.png" alt="Stemmlar Technologies" className={styles.navLogo} />
        </Link>
        <Link to="/" className={styles.navBack}>← Home</Link>
      </nav>

      {/* ── Header ── */}
      <div className={styles.header}>
        <div className={styles.headerMeta}>
          <img src="/img/Stemmlar Technologies Icon.png" alt="Stemmlar Technologies" className={styles.headerIcon} />
          <span className={styles.headerBadge}>Press Kit</span>
        </div>
        <h1 className={styles.headerTitle}>Stemmlar Technologies</h1>
        <p className={styles.headerSubtitle}>
          An independent software and game development studio based in South Africa, building
          games and tools that people actually enjoy using.
        </p>
      </div>

      <div className={styles.content}>

        {/* ── Fact sheet ── */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>At a glance</p>
          <h2 className={styles.sectionTitle}>Studio Facts</h2>
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
          <p className={styles.sectionLabel}>About</p>
          <h2 className={styles.sectionTitle}>About the Studio</h2>
          <div className={styles.description}>
            <p>
              Stemmlar Technologies is an independent software and game development studio based
              in South Africa. We build across the full stack — mobile apps, PC games, and web
              platforms — with a focus on craft and user experience.
            </p>
            <p>
              Our portfolio spans productivity tools like Track My Time, mobile puzzle games like
              Lara Jones and the Caves of Madness, and PC titles like the upcoming survival RTS
              Forsaking Valhalla.
            </p>
            <p>
              We believe the best software feels effortless to use and hard to put down. That's
              the bar we hold ourselves to across everything we build.
            </p>
          </div>
        </div>

        {/* ── Logos ── */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Brand Assets</p>
          <h2 className={styles.sectionTitle}>Logos & Icons</h2>
          <div className={styles.assetGrid}>
            {LOGOS.map((logo) => (
              <div key={logo.name} className={styles.assetCard}>
                <div className={`${styles.assetPreview} ${logo.dark ? styles.assetPreviewDark : ''}`}>
                  <img src={logo.src} alt={logo.name} />
                </div>
                <div className={styles.assetInfo}>
                  <span className={styles.assetName}>{logo.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Games ── */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Portfolio</p>
          <h2 className={styles.sectionTitle}>Games & Applications</h2>
          <div className={styles.linkList}>
            <Link to="/press/forsaking-valhalla" className={styles.linkItem}>
              <img src="/applications/forsaking-valhalla/forsaking-valhalla-icon-52.png" alt="" />
              <div className={styles.linkItemText}>
                <div className={styles.linkItemLabel}>Forsaking Valhalla — Press Kit</div>
                <div className={styles.linkItemUrl}>PC · Survival RTS · In Development</div>
              </div>
              <span className={styles.linkItemArrow}>→</span>
            </Link>
            <Link to="/applications/lara-jones-and-the-caves-of-madness" className={styles.linkItem}>
              <img src="/applications/lara-jones-and-the-caves-of-madness/img/app-icon.png" alt="" />
              <div className={styles.linkItemText}>
                <div className={styles.linkItemLabel}>Lara Jones and the Caves of Madness</div>
                <div className={styles.linkItemUrl}>Mobile · Puzzle Game · Itch.io</div>
              </div>
              <span className={styles.linkItemArrow}>→</span>
            </Link>
            <Link to="/applications/track-my-time" className={styles.linkItem}>
              <img src="/applications/track-my-time/img/app-icon.png" alt="" />
              <div className={styles.linkItemText}>
                <div className={styles.linkItemLabel}>Track My Time</div>
                <div className={styles.linkItemUrl}>Android · Productivity App · Google Play</div>
              </div>
              <span className={styles.linkItemArrow}>→</span>
            </Link>
          </div>
        </div>

        {/* ── Links ── */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Find us</p>
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
            <span className={styles.contactLabel}>For press enquiries</span>
            <span className={styles.contactValue}>Use the contact form on our website</span>
            <p className={styles.contactNote}>
              We're happy to provide additional assets, answer questions, or arrange interviews.
              Please allow up to 3 business days for a response.
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
            <Link to="/legal">Legal & Cookies</Link>
            <Link to="/">Home</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
