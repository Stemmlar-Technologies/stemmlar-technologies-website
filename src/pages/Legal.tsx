import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Legal.module.css'

const SECTIONS = [
  {
    id: 'overview',
    title: 'Overview',
    content: `This page explains how Stemmlar Technologies ("we", "us", "our") collects and uses data when you visit stemmlar.com (the "Website"). We are committed to protecting your privacy and being transparent about our data practices.`,
  },
  {
    id: 'analytics',
    title: 'Analytics (Google Analytics)',
    content: `We use Google Analytics 4 to understand how visitors use our Website. This service collects anonymised data including pages visited, time spent on pages, general geographic location (country/region level), device type, and browser type. This data is used solely to improve the Website. Google Analytics uses cookies to track sessions. You can opt out of Google Analytics tracking by installing the Google Analytics Opt-out Browser Add-on (tools.google.com/dlpage/gaoptout) or by declining cookies when prompted.`,
  },
  {
    id: 'cookies',
    title: 'Cookies',
    content: `We use the following cookies on this Website:

• Analytics cookies (Google Analytics): Used to collect anonymised usage statistics. These are only set if you accept cookies.
• Preference cookies: Used to remember your cookie consent choice. This is a strictly necessary cookie and cannot be declined.

We do not use advertising cookies, tracking pixels, or any third-party marketing cookies. We do not sell your data to any third party.`,
  },
  {
    id: 'data-collected',
    title: 'Data We Collect',
    content: `Through the contact form on our Website, we collect your name, email address, and message content. This data is submitted to a Google Forms endpoint and is used solely to respond to your enquiry. We do not store this data on our own servers.

Through Google Analytics, we collect anonymised usage data as described above. This data does not identify you personally.

We do not collect payment information, create user accounts, or store any personal data on our own servers.`,
  },
  {
    id: 'third-parties',
    title: 'Third-Party Services',
    content: `Our Website uses the following third-party services:

• Google Analytics (analytics.google.com) — usage analytics
• Google Forms (forms.google.com) — contact form submissions
• Amazon CloudFront / S3 — website hosting and content delivery

Each of these services has its own privacy policy. We encourage you to review them if you have concerns about how they handle data.`,
  },
  {
    id: 'your-rights',
    title: 'Your Rights',
    content: `Depending on your location, you may have rights under applicable privacy laws including:

• GDPR (European Union / EEA): Right to access, rectify, erase, restrict processing, data portability, and object to processing.
• POPIA (South Africa): Right to access, correct, and delete personal information held about you.
• CCPA (California, USA): Right to know what personal information is collected, right to delete, and right to opt out of sale (we do not sell personal data).

To exercise any of these rights, please contact us using the form on our Website. We will respond within 30 days.`,
  },
  {
    id: 'retention',
    title: 'Data Retention',
    content: `Contact form submissions are retained in Google Forms for as long as necessary to respond to your enquiry, after which they are deleted. Analytics data is retained for 14 months in Google Analytics, after which it is automatically deleted. Cookie preference data is stored in your browser's localStorage and is deleted when you clear your browser data.`,
  },
  {
    id: 'children',
    title: "Children's Privacy",
    content: `Our Website is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.`,
  },
  {
    id: 'changes',
    title: 'Changes to This Policy',
    content: `We may update this policy from time to time. We will post the updated policy on this page with a revised effective date. We encourage you to review this page periodically.`,
  },
  {
    id: 'contact',
    title: 'Contact',
    content: `If you have any questions about this policy or wish to exercise your privacy rights, please use the contact form on our Website.`,
  },
]

export default function Legal() {
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
        <p className={styles.headerLabel}>Legal</p>
        <h1 className={styles.headerTitle}>Privacy, Cookies & Legal</h1>
        <p className={styles.headerSubtitle}>
          Effective date: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>
      </div>

      {/* ── TOC ── */}
      <div className={styles.toc}>
        <p className={styles.tocLabel}>Contents</p>
        <ul className={styles.tocList}>
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className={styles.tocLink}>{s.title}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Body ── */}
      <div className={styles.content}>
        {SECTIONS.map((s) => (
          <div key={s.id} id={s.id} className={styles.section}>
            <h2 className={styles.sectionTitle}>{s.title}</h2>
            <div className={styles.sectionBody}>
              {s.content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        ))}

        <div className={styles.contactRow}>
          <Link to="/#contact" className={styles.btnPrimary}>Contact Us</Link>
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
