import type { SocialLink } from '../types/SocialLink'

interface SocialIconProps {
  link: SocialLink
}

export default function SocialIcon({ link }: SocialIconProps) {
  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer">
      <img
        src={link.icon}
        alt={link.platform}
        style={{ width: '24px', height: '24px' }}
        className="social-icon"
      />
    </a>
  )
}
