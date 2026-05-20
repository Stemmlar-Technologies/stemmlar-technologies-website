import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './CookieBanner.module.css'

const STORAGE_KEY = 'stemmlar_cookie_consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      // Small delay so it doesn't flash immediately on load
      const t = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(t)
    }
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
    // Disable GA if declined
    // @ts-expect-error - gtag global
    if (typeof window.gtag === 'function') {
      // @ts-expect-error - gtag global
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
      })
    }
  }

  if (!visible) return null

  return (
    <div className={styles.banner} role="dialog" aria-label="Cookie consent">
      <div className={styles.content}>
        <p className={styles.text}>
          We use cookies to understand how visitors use our site (Google Analytics).
          No advertising or tracking cookies.{' '}
          <Link to="/legal" className={styles.link}>Learn more</Link>
        </p>
        <div className={styles.actions}>
          <button onClick={decline} className={styles.btnDecline}>Decline</button>
          <button onClick={accept} className={styles.btnAccept}>Accept</button>
        </div>
      </div>
    </div>
  )
}
