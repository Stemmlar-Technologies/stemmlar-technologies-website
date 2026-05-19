import { useState, useEffect, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import BannerAnimation from '../../components/BannerAnimation'
import styles from './DraftHome.module.css'

// ---- Data ----

const apps = [
  {
    slug: 'track-my-time',
    name: 'Track My Time',
    platform: 'Android · Google Play',
    description:
      'Effortless task tracking for professionals and students. Start, pause, and switch between tasks with a single tap — then generate reports to understand where your time actually goes.',
    icon: '/applications/track-my-time/img/app-icon.png',
    banner: null,
    badge: 'Live',
    badgeLive: true,
    href: '/applications/track-my-time',
    external: false,
  },
  {
    slug: 'forsaking-valhalla',
    name: 'Forsaking Valhalla',
    platform: 'PC · Steam / Itch.io',
    description:
      'A survival RTS game where you defend your village against relentless waves of Norse mythological creatures. Build defenses, train warriors, and gather resources to survive as long as possible. If your Town Hall falls, it\'s game over. How long will you last?',
    icon: '/applications/forsaking-valhalla/forsaking-valhalla-icon-52.png',
    banner: '/applications/forsaking-valhalla/store_capsule_header.png',
    badge: 'In Development',
    badgeLive: false,
    href: 'https://store.steampowered.com/app/3490030/Forsaking_Valhalla',
    external: true,
  },
  {
    slug: 'lara-jones-and-the-caves-of-madness',
    name: 'Lara Jones and the Caves of Madness',
    platform: 'Mobile · Itch.io',
    description:
      'A puzzle-adventure game set inside a mysterious cave temple. Solve ancient riddles, uncover hidden mechanisms, and claim the legendary treasure.',
    icon: '/applications/lara-jones-and-the-caves-of-madness/img/app-icon.png',
    banner: '/applications/lara-jones-and-the-caves-of-madness/img/banner.png',
    badge: 'Coming Soon',
    badgeLive: false,
    href: '/applications/lara-jones-and-the-caves-of-madness',
    external: false,
  },
]

const socialLinks = [
  { label: 'Instagram', icon: '/img/icons/icon_instagram.png', url: 'https://www.instagram.com/stemmlar_tech' },
  { label: 'YouTube', icon: '/img/icons/icon_youtube.png', url: 'https://www.youtube.com/@stemmlar_tech' },
  { label: 'TikTok', icon: '/img/icons/icon_tiktok.png', url: 'https://tiktok.com/@stemmlar_tech' },
  { label: 'X / Twitter', icon: '/img/icons/icon_x.png', url: 'https://x.com/stemmlar_tech' },
  { label: 'GitHub', icon: '/img/icons/icon_github.png', url: 'https://github.com/Stemmlar-Technologies' },
]

const FORM_ENDPOINT =
  'https://docs.google.com/forms/d/e/1FAIpQLScvpwieaOEQGIZ_emPH7hnI6fwW9D7AeIvu_zmmhJSt5nnhFA/formResponse'

// ---- Component ----

export default function DraftHome() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [navVisible, setNavVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show nav once user scrolls past 80% of the viewport height (past the hero)
      setNavVisible(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)
    const url =
      `${FORM_ENDPOINT}?usp=pp_url` +
      `&entry.1537159743=${encodeURIComponent(data.get('full_name') as string)}` +
      `&entry.1892208282=${encodeURIComponent(data.get('email_address') as string)}` +
      `&entry.1827350325=${encodeURIComponent(data.get('message') as string)}`
    try {
      await fetch(url, { method: 'POST', mode: 'no-cors' })
      setFormStatus('success')
      form.reset()
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <div className={styles.page}>

      {/* ── Nav ── */}
      <nav className={`${styles.nav} ${navVisible ? styles.navVisible : ''}`}>
        <img
          src="/img/Stemmlar Technologies Logo.png"
          alt="Stemmlar Technologies"
          className={styles.navLogo}
        />
        <ul className={styles.navLinks}>
          <li><a href="#apps">Games & Apps</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact" className={styles.navCta}>Contact</a></li>
        </ul>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />

        {/* p5 animation fills the hero — click to interact */}
        <BannerAnimation className={styles.heroCanvas} />

        <div className={styles.heroContent}>
          <img
            src="/img/Stemmlar Technologies Logo.png"
            alt="Stemmlar Technologies"
            className={styles.heroLogo}
          />
          <p className={styles.heroTagline}>Crafting Immersive Gaming Experiences</p>
          <div className={styles.heroActions}>
            <a href="#apps" className={styles.btnPrimary}>
              Our Games &amp; Apps
            </a>
            <a href="#about" className={styles.btnSecondary}>
              About Us
            </a>
          </div>
        </div>

        <div className={styles.heroHint}>Scroll</div>
      </section>

      {/* ── Apps ── */}
      <section id="apps">
        <div className={styles.section}>
          <p className={styles.sectionLabel}>What we build</p>
          <h2 className={styles.sectionTitle}>Games &amp; Applications</h2>
          <p className={styles.sectionSubtitle}>
            From mobile productivity tools to puzzle adventures — we build software that people
            actually enjoy using.
          </p>

          <div className={styles.appsGrid}>
            {apps.map((app) => {
              const cardContent = (
                <>
                  {app.banner ? (
                    <img
                      src={app.banner}
                      alt={`${app.name} banner`}
                      className={styles.appCardBanner}
                    />
                  ) : (
                    <div className={styles.appCardBannerPlaceholder}>
                      <img src={app.icon} alt="" />
                    </div>
                  )}

                  <div className={styles.appCardBody}>
                    <div className={styles.appCardHeader}>
                      <img src={app.icon} alt={`${app.name} icon`} className={styles.appCardIcon} />
                      <div className={styles.appCardMeta}>
                        <div className={styles.appCardName}>{app.name}</div>
                        <div className={styles.appCardPlatform}>{app.platform}</div>
                      </div>
                    </div>

                    <p className={styles.appCardDesc}>{app.description}</p>

                    <div className={styles.appCardFooter}>
                      <span
                        className={`${styles.appCardBadge} ${app.badgeLive ? styles.appCardBadgeLive : ''}`}
                      >
                        {app.badge}
                      </span>
                      <span className={styles.appCardArrow}>→</span>
                    </div>
                  </div>
                </>
              )

              return app.external ? (
                <a
                  key={app.slug}
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.appCard}
                >
                  {cardContent}
                </a>
              ) : (
                <Link key={app.slug} to={app.href} className={styles.appCard}>
                  {cardContent}
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className={styles.aboutWrapper}>
        <div className={styles.section}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage}>
              <img
                src="/img/library_hero.png"
                alt="Stemmlar Technologies studio"
              />
              <div className={styles.aboutImageOverlay} />
            </div>

            <div className={styles.aboutText}>
              <p className={styles.sectionLabel}>Who we are</p>
              <h2 className={styles.sectionTitle}>
                A South African studio building things worth playing
              </h2>

              <p>
                Stemmlar Technologies is an independent software and game development studio based
                in South Africa. We build across the full stack — mobile apps, PC games, and
                web platforms — with a focus on craft and user experience.
              </p>
              <p>
                We believe the best software feels effortless to use and hard to put down. Whether
                it's a time-tracking tool that actually fits your workflow or a puzzle game that
                keeps you thinking long after you've put it down, that's the bar we hold ourselves to.
              </p>

              <div className={styles.pillRow}>
                {['Game Development', 'Mobile Apps', 'Web Platforms', 'Cloud Solutions', 'South Africa 🇿🇦'].map(
                  (tag) => (
                    <span key={tag} className={styles.pill}>{tag}</span>
                  )
                )}
              </div>

              <a href="#contact" className={styles.btnPrimary}>
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social strip ── */}
      <div className={styles.socialStrip}>
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <img src={s.icon} alt={s.label} />
            {s.label}
          </a>
        ))}
      </div>

      {/* ── Contact ── */}
      <section id="contact" className={styles.contactWrapper}>
        <div className={`${styles.section} ${styles.contactGrid}`}>
          <div className={styles.contactInfo}>
            <p className={styles.sectionLabel}>Say hello</p>
            <h2 className={styles.sectionTitle}>Contact Us</h2>
            <p>
              Have a project in mind, a question about one of our apps, or just want to say hi?
              Drop us a message and we'll get back to you.
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formField}>
              <label htmlFor="full_name" className={styles.formLabel}>Full Name</label>
              <input
                id="full_name"
                name="full_name"
                type="text"
                className={styles.formInput}
                placeholder="Jane Smith"
                required
                disabled={formStatus === 'submitting'}
              />
            </div>
            <div className={styles.formField}>
              <label htmlFor="email_address" className={styles.formLabel}>Email Address</label>
              <input
                id="email_address"
                name="email_address"
                type="email"
                className={styles.formInput}
                placeholder="jane@example.com"
                required
                disabled={formStatus === 'submitting'}
              />
            </div>
            <div className={styles.formField}>
              <label htmlFor="message" className={styles.formLabel}>Message</label>
              <textarea
                id="message"
                name="message"
                className={styles.formTextarea}
                placeholder="Tell us what's on your mind…"
                required
                disabled={formStatus === 'submitting'}
              />
            </div>

            {formStatus === 'success' && (
              <p className={`${styles.formStatus} ${styles.formStatusSuccess}`}>
                Message sent — we'll be in touch soon.
              </p>
            )}
            {formStatus === 'error' && (
              <p className={`${styles.formStatus} ${styles.formStatusError}`}>
                Something went wrong. Please try again.
              </p>
            )}

            <button type="submit" className={styles.btnPrimary} disabled={formStatus === 'submitting'}>
              {formStatus === 'submitting' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer>
        <div className={styles.footer}>
          <img
            src="/img/Stemmlar Technologies Logo.png"
            alt="Stemmlar Technologies"
            className={styles.footerLogo}
          />
          <p className={styles.footerCopy}>© 2025 Stemmlar Technologies</p>
          <div className={styles.footerLinks}>
            <Link to="/applications/track-my-time/privacy">Privacy — Track My Time</Link>
            <Link to="/applications/lara-jones-and-the-caves-of-madness/privacy">Privacy — Lara Jones</Link>
          </div>
        </div>
      </footer>

    </div>
  )
}
