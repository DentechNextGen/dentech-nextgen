'use client'

import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

type ButtonVariant = 'solid' | 'outline'
type ButtonColor = 'primary' | 'accent' | 'blue'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  color?: ButtonColor
  size?: ButtonSize
  className?: string
  href?: string
  isLoading?: boolean
  isDisabled?: boolean
  children: React.ReactNode
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-2.5 py-1.5 text-xs',
  md: 'px-3.5 py-2.5 text-sm',
  lg: 'px-4 py-3 text-base'
} as const

const variantStyles: Record<ButtonVariant, Record<ButtonColor, string>> = {
  solid: {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:outline-primary-600 disabled:bg-primary-300',
    accent: 'bg-accent-600 text-white hover:bg-accent-700 focus-visible:outline-accent-600 disabled:bg-accent-300',
    blue: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-blue-600 disabled:bg-blue-300'
  },
  outline: {
    primary: 'border border-primary-600 text-primary-600 hover:bg-primary-50 disabled:border-primary-300 disabled:text-primary-300',
    accent: 'border border-accent-600 text-accent-600 hover:bg-accent-50 disabled:border-accent-300 disabled:text-accent-300',
    blue: 'border border-blue-600 text-blue-600 hover:bg-blue-50 disabled:border-blue-300 disabled:text-blue-300'
  }
} as const

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'solid',
    color = 'primary',
    size = 'md',
    className,
    href,
    isLoading = false,
    isDisabled = false,
    children,
    ...props
  },
  ref
) {
  const baseStyles = clsx(
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed',
    sizeStyles[size],
    variantStyles[variant][color],
    {
      'opacity-50 cursor-wait pointer-events-none': isLoading,
    },
    className
  )

  if (href && !isDisabled) {
    return (
      <Link href={href} className={baseStyles} aria-disabled={isDisabled}>
        {isLoading && (
          <svg
            className="h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </Link>
    )
  }

  return (
    <button
      ref={ref}
      type="button"
      className={baseStyles}
      disabled={isDisabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="h-4 w-4 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  )
})

export { Button }
export type { ButtonProps, ButtonVariant, ButtonColor, ButtonSize } 