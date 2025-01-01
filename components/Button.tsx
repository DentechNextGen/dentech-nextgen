'use client'

import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps = {
  variant?: 'solid' | 'outline'
  color?: 'primary' | 'accent' | 'blue'
  className?: string
  href?: string
  children: React.ReactNode
  onClick?: () => void
}

export function Button({
  variant = 'solid',
  color = 'primary',
  className,
  href,
  children,
  onClick,
}: ButtonProps) {
  const baseStyles = clsx(
    'inline-flex items-center justify-center rounded-lg px-3.5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    {
      // Solid variants
      'bg-primary-base text-white hover:bg-primary-800 focus-visible:outline-primary-base':
        variant === 'solid' && color === 'primary',
      'bg-accent-base text-white hover:bg-accent-500 focus-visible:outline-accent-base':
        variant === 'solid' && color === 'accent',
      'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-blue-600':
        variant === 'solid' && color === 'blue',
      
      // Outline variants
      'border border-primary-base text-primary-base hover:bg-primary-100':
        variant === 'outline' && color === 'primary',
      'border border-accent-base text-accent-base hover:bg-accent-100':
        variant === 'outline' && color === 'accent',
      'border border-blue-600 text-blue-600 hover:bg-blue-50':
        variant === 'outline' && color === 'blue',
    },
    className
  )

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={baseStyles} onClick={onClick}>
      {children}
    </button>
  )
} 