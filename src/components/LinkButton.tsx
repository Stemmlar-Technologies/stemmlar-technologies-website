interface LinkButtonProps {
  href: string
  icon: string
  iconAlt: string
  label: string
  colourClass: string
}

export default function LinkButton({ href, icon, iconAlt, label, colourClass }: LinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`link-btn ${colourClass}`}
    >
      <img src={icon} alt={iconAlt} />
      <span>{label}</span>
    </a>
  )
}
