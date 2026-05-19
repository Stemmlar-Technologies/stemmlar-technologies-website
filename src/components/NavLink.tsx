import type { AnchorHTMLAttributes } from 'react'
import type { ButtonColour } from '../types/App'

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  colour?: ButtonColour
  href: string
}

export default function NavLink({ colour, href, children, className, ...rest }: NavLinkProps) {
  const colourClass = colour ? ` ${colour}` : ''
  return (
    <a href={href} className={`nav-link${colourClass}${className ? ` ${className}` : ''}`} {...rest}>
      {children}
    </a>
  )
}
