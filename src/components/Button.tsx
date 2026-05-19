import type { AnchorHTMLAttributes } from 'react'
import type { ButtonColour } from '../types/App'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  colour?: ButtonColour
  href: string
}

export default function Button({ colour, href, children, className, ...rest }: ButtonProps) {
  const colourClass = colour ? ` ${colour}` : ''
  return (
    <a href={href} className={`btn${colourClass}${className ? ` ${className}` : ''}`} {...rest}>
      {children}
    </a>
  )
}
