import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.bg} />
      <div className={styles.content}>
        <img
          src="/img/Stemmlar Technologies Logo.png"
          alt="Stemmlar Technologies"
          className={styles.logo}
        />
        <div className={styles.divider} />
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.subtitle}>
          Looks like this page wandered into the Caves of Madness and didn't come back.
        </p>
        <Link to="/" className={styles.btn}>← Back to Home</Link>
      </div>
    </div>
  )
}
