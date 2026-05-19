import type { ReactNode } from 'react'
import type { ButtonColour } from '../types/App'
import Button from './Button'
import NavLink from './NavLink'

interface AppHeaderProps {
  title?: string
  subtitle?: string
  banner?: string
  icon: string
  iconAlt: string
  storeUrl: string
  storeLabel: string
  colour: ButtonColour
  privacyUrl?: string
  hideIconOnMobile?: boolean
}

export default function AppHeader({
  title,
  subtitle,
  banner,
  icon,
  iconAlt,
  storeUrl,
  storeLabel,
  colour,
  privacyUrl,
  hideIconOnMobile = false,
}: AppHeaderProps) {
  return (
    <div className="app-header">
      <div className="details">
        <div className="app-title">
          {banner ? (
            <img src={banner} alt="banner image" className="app-banner" />
          ) : (
            <>
              <h1>{title}</h1>
              {subtitle && <p>{subtitle}</p>}
            </>
          )}
        </div>
        <div className="download-buttons">
          <Button href={storeUrl} colour={colour} target="_blank" rel="noopener noreferrer">
            {storeLabel}
          </Button>
        </div>
        {privacyUrl && (
          <div className="links">
            <NavLink href={privacyUrl} colour={colour}>
              Privacy Policy
            </NavLink>
          </div>
        )}
      </div>
      <div className={`logo${hideIconOnMobile ? ' hide-mobile' : ''}`}>
        <img src={icon} alt={iconAlt} />
      </div>
    </div>
  )
}

// Reusable sub-components for app page sections
interface AppSectionProps {
  children: ReactNode
}

export function AppDescription({ children }: AppSectionProps) {
  return <div className="app-description">{children}</div>
}

export function AppFeatures({ items }: { items: string[] }) {
  return (
    <div className="app-features">
      <h3>Key Features</h3>
      <br />
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export function AppFooter({ children }: AppSectionProps) {
  return <div className="app-footer">{children}</div>
}
