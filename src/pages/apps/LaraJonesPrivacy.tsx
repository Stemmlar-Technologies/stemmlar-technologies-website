import { Link } from 'react-router-dom'
import styles from './AppPage.module.css'

const SECTIONS = [
  {
    title: 'Overview',
    content:
      'Stemmlar Technologies ("us", "we", or "our") operates the Lara Jones and the Caves of Madness mobile application (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service.',
  },
  {
    title: 'Data Collection and Use',
    content:
      'Lara Jones and the Caves of Madness does not collect any personal data from users. We do not collect names, email addresses, device identifiers, or any other personally identifiable information. We do not share any data with third parties.',
  },
  {
    title: 'Storage of Collected Data',
    content:
      "Any game progress or settings data is stored locally on the user's device and is never uploaded to any external service or server.",
  },
  {
    title: 'Data Security',
    content:
      "While Stemmlar Technologies takes reasonable measures to secure data stored on the user's device, any data stored on the device can be accessed by anyone who has physical access to the device. Users are advised to take necessary precautions to safeguard their device.",
  },
  {
    title: 'Data Deletion',
    content:
      'If the application is deleted from the device, all locally stored game data will be deleted as well.',
  },
  {
    title: 'Changes to This Privacy Policy',
    content:
      'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We advise you to review this page periodically for any changes.',
  },
  {
    title: 'Contact Us',
    content:
      'If you have any questions or suggestions about our Privacy Policy, please use the contact form on our website.',
  },
]

export default function LaraJonesPrivacy() {
  return (
    <div className={styles.page}>

      {/* ── Nav ── */}
      <nav className={styles.nav}>
        <Link to="/">
          <img src="/img/Stemmlar Technologies Logo.png" alt="Stemmlar Technologies" className={styles.navLogo} />
        </Link>
        <Link to="/applications/lara-jones-and-the-caves-of-madness" className={styles.navBack}>
          ← Lara Jones
        </Link>
      </nav>

      {/* ── Content ── */}
      <div className={styles.content}>
        <div className={styles.privacyHeader}>
          <img
            src="/applications/lara-jones-and-the-caves-of-madness/img/app-icon.png"
            alt="Lara Jones"
            className={styles.privacyIcon}
          />
          <div className={styles.privacyHeaderText}>
            <span className={styles.privacyAppName}>Lara Jones and the Caves of Madness</span>
            <h1 className={styles.privacyTitle}>Privacy Policy</h1>
            <span className={styles.privacyDate}>Effective date: 14 March 2023</span>
          </div>
        </div>

        <div className={styles.privacyBody}>
          {SECTIONS.map((s) => (
            <div key={s.title} className={styles.privacySection}>
              <h2>{s.title}</h2>
              <p>{s.content}</p>
            </div>
          ))}

          <div className={styles.privacyActions}>
            <Link to="/applications/lara-jones-and-the-caves-of-madness" className={styles.btnPrimary}>
              ← Back to App
            </Link>
            <Link to="/#contact" className={styles.btnGhost}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer>
        <div className={styles.footer}>
          <p className={styles.footerCopy}>© {new Date().getFullYear()} Stemmlar Technologies</p>
          <div className={styles.footerLinks}>
            <Link to="/">Home</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
