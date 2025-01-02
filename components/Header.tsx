'use client'

import { siteConfig } from '@/config'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navigation = [
  { name: 'Features', href: '/features' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' },
  { name: 'Support', href: '/support' },
] as const

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Main navigation">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5" aria-label="Go to homepage">
            <span className="sr-only">{siteConfig.name}</span>
            <Image
              className="h-12 w-auto"
              src="/icons/logo.svg"
              alt={siteConfig.name}
              width={48}
              height={48}
              priority
            />
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link 
            href="/schedule" 
            className="text-sm font-semibold leading-6 text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-md transition-colors"
          >
            Schedule Demo <span aria-hidden="true">→</span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/schedule"
              className="block rounded-md px-3 py-2 text-base font-medium text-white bg-primary-600 hover:bg-primary-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  )
} 