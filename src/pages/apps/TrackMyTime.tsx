import { Link } from 'react-router-dom'
import styles from './TrackMyTime.module.css'

const SCREENSHOTS = [
  '/applications/track-my-time/img/screenshots/phone-screenshot-1.png',
  '/applications/track-my-time/img/screenshots/phone-screenshot-2.png',
  '/applications/track-my-time/img/screenshots/phone-screenshot-3.png',
  '/applications/track-my-time/img/screenshots/phone-screenshot-4.png',
  '/applications/track-my-time/img/screenshots/phone-screenshot-5.png',
]

const FEATURES = [
  {
    icon: '⏱️',
    title: 'One-tap tracking',
    desc: 'Start, pause, and switch between tasks instantly. No friction, no fuss.',
  },
  {
    icon: '📋',
    title: 'Task management',
    desc: 'Create and organise tasks tailored to your workflow. Everything in one place.',
  },
  {
    icon: '📊',
    title: 'Reports',
    desc: 'Generate reports based on time spent per task. Understand where your hours actually go.',
  },
  {
    icon: '🔒',
    title: 'Fully offline',
    desc: 'All data stays on your device. Nothing is uploaded to any server — ever.',
  },
  {
    icon: '📅',
    title: 'History',
    desc: 'Review your tracked history over time and spot patterns in your productivity.',
  },
  {
    icon: '💾',
    title: 'Local reports',
    desc: 'Save reports directly on the app for quick reference without needing a connection.',
  },
]

const STORE_URL = 'https://play.google.com/store/apps/details?id=com.stemmlar.track_my_time'

export default function TrackMyTime() {
  return (
    <div className={styles.page}>

      {/* ── Nav ── */}
      <nav className={styles.nav}>
        <Link to="/">
          <img
            src="/img/Stemmlar Technologies Logo.png"
            alt="Stemmlar Technologies"
            className={styles.navLogo}
          />
        </Link>
        <Link to="/" className={styles.navBack}>
          ← All Apps
        </Link>
      </nav>

      {/* ── Hero ── */}
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.heroLabel}>Mobile App · Android</p>
          <h1 className={styles.heroTitle}>Track My Time</h1>
          <p className={styles.heroSubtitle}>
            Effortless time tracking for professionals and students. Start, pause, and switch
            between tasks with a single tap — then generate reports to understand where your
            time actually goes.
          </p>
          <div className={styles.heroActions}>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              Download on Google Play
            </a>
            <Link to="/applications/track-my-time/privacy" className={styles.btnSecondary}>
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <img
            src="/applications/track-my-time/img/feature-graphic.png"
            alt="Track My Time feature graphic"
            className={styles.featureGraphic}
          />
          <img
            src="/applications/track-my-time/img/app-icon.png"
            alt="Track My Time icon"
            className={styles.heroIconBadge}
          />
        </div>
      </div>

      {/* ── Screenshots ── */}
      <div className={styles.screenshotsDivider}>
        <div className={styles.section}>
          <p className={styles.sectionLabel}>In the app</p>
          <h2 className={styles.sectionTitle}>See it in action</h2>
          <div className={styles.screenshots}>
            {SCREENSHOTS.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Track My Time screenshot ${i + 1}`}
                className={styles.screenshot}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Features ── */}
      <div className={styles.section}>
        <p className={styles.sectionLabel}>What you get</p>
        <h2 className={styles.sectionTitle}>Key Features</h2>
        <p className={styles.sectionSubtitle}>
          Everything you need to take control of your time — nothing you don't.
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

      {/* ── About ── */}
      <div className={styles.aboutWrapper}>
        <div className={`${styles.section} ${styles.aboutGrid}`}>
          <div>
            <p className={styles.sectionLabel}>About the app</p>
            <h2 className={styles.sectionTitle}>Built for how you actually work</h2>
          </div>
          <div className={styles.aboutText}>
            <p>
              Track My Time was built out of a simple frustration: most time-tracking tools are
              either too complex or too rigid. This app strips it back to the essentials — create
              tasks, track time, see where it went.
            </p>
            <p>
              Whether you're a freelancer billing by the hour, a student managing assignments, or
              a professional juggling multiple projects, the app adapts to your workflow rather
              than forcing you into one.
            </p>
            <p>
              All data is stored locally on your device. No account required, no cloud sync,
              no privacy concerns.
            </p>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className={styles.ctaWrapper}>
        <div className={styles.ctaInner}>
          <p className={styles.sectionLabel}>Ready to start?</p>
          <h2 className={styles.ctaTitle}>Take control of your time</h2>
          <p className={styles.ctaSubtitle}>
            Free to download on the Google Play Store. No account, no subscription.
          </p>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            Download on Google Play
          </a>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer>
        <div className={styles.footer}>
          <p className={styles.footerCopy}>© {new Date().getFullYear()} Stemmlar Technologies</p>
          <div className={styles.footerLinks}>
            <Link to="/applications/track-my-time/privacy">Privacy Policy</Link>
            <Link to="/">Back to Home</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
