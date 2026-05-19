import { Link } from 'react-router-dom'
import styles from './AppPage.module.css'

const SECTIONS = [
  {
    title: 'Overview',
    content:
      'Stemmlar Technologies ("us", "we", or "our") operates the Track My Time mobile application (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service.',
  },
  {
    title: 'Data Collection and Use',
    content:
      'The only data that Track My Time collects is related to the tasks created and time tracked by the user within the application. This includes the list of tasks created by the user and the time tracked per task per day. We do not collect any user-specific personal data, and we do not share any data with third parties.',
  },
  {
    title: 'Storage of Collected Data',
    content:
      "All data collected by Track My Time is stored locally on the user's device and is never uploaded to any external service or server. The collected data resides solely on the user's device for the purpose of providing task tracking functionality within the application.",
  },
  {
    title: 'Data Security',
    content:
      "While Stemmlar Technologies takes reasonable measures to secure the data stored on the user's device, any data stored on the device can be accessed by anyone who has physical access to the device. Users are advised to take necessary precautions to safeguard their device and data.",
  },
  {
    title: 'Data Deletion',
    content:
      'If the Track My Time application is deleted from the device, all traces of the collected data will be deleted as well. This includes the list of tasks created and the time tracked per task per day.',
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

export default function TrackMyTimePrivacy() {
  return (
    <div className={styles.page}>

      {/* ── Nav ── */}
      <nav className={styles.nav}>
        <Link to="/">
          <img src="/img/Stemmlar Technologies Logo.png" alt="Stemmlar Technologies" className={styles.navLogo} />
        </Link>
        <Link to="/applications/track-my-time" className={styles.navBack}>
          ← Track My Time
        </Link>
      </nav>

      {/* ── Content ── */}
      <div className={styles.content}>
        <div className={styles.privacyHeader}>
          <img
            src="/applications/track-my-time/img/app-icon.png"
            alt="Track My Time"
            className={styles.privacyIcon}
          />
          <div className={styles.privacyHeaderText}>
            <span className={styles.privacyAppName}>Track My Time</span>
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
            <Link to="/applications/track-my-time" className={styles.btnPrimary}>
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
