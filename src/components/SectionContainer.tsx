import type { HTMLAttributes } from 'react'

interface SectionContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export default function SectionContainer({ children, className, ...rest }: SectionContainerProps) {
  return (
    <div className={`container${className ? ` ${className}` : ''}`} {...rest}>
      {children}
    </div>
  )
}
