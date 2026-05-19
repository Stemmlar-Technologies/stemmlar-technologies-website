import SocialIcon from '../components/SocialIcon'
import LinkButton from '../components/LinkButton'
import { socialLinks } from '../data/socialLinks'
import styles from './Links.module.css'

const linkButtons = [
  {
    href: 'https://store.steampowered.com/app/3490030/Forsaking_Valhalla?utm_source=stemmlar.com&utm_campaign=linkspage',
    icon: '/img/icons/icon_steam.png',
    iconAlt: 'Steam',
    label: 'Wishlist Forsaking Valhalla',
    colourClass: styles.steam,
  },
  {
    href: 'https://phillipstemmlar.itch.io/forsaking-valhalla',
    icon: '/img/icons/icon_itchio-white.png',
    iconAlt: 'Itch.io',
    label: 'Try Forsaking Valhalla BETA',
    colourClass: styles.itch,
  },
  {
    href: 'https://devlog.tv/forsaking-valhalla',
    icon: '/img/icons/devlogtv_white.png',
    iconAlt: 'Devlog.tv',
    label: 'Forsaking Valhalla | Devlog.tv',
    colourClass: styles.devlogtv,
  },
  {
    href: 'https://www.stemmlar.com',
    icon: '/img/icons/icon_stemmlar.png',
    iconAlt: 'Stemmlar.com',
    label: 'Stemmlar Website',
    colourClass: styles.stemmlar,
  },
]

export default function Links() {
  return (
    <div className={styles.page}>
      <div className={styles.bgImage} />
      <div className={styles.card}>
        {/* Profile */}
        <img
          src="/img/Stemmlar Technologies icon black.png"
          alt="Stemmlar Technologies"
          className={styles.avatar}
        />
        <h1 className={styles.name}>Stemmlar Technologies</h1>
        <p className={styles.tagline}>Crafting Immersive Gaming Experiences</p>

        {/* Social Icons */}
        <div className={styles.socialRow}>
          {socialLinks.map((link) => (
            <SocialIcon key={link.platform} link={link} />
          ))}
        </div>

        {/* Link Buttons */}
        <div className={styles.linkList}>
          {linkButtons.map((btn) => (
            <LinkButton key={btn.href} {...btn} />
          ))}
        </div>

        {/* Footer */}
        <p className={styles.footer}>&copy; 2025 Stemmlar Technologies</p>
      </div>
    </div>
  )
}
