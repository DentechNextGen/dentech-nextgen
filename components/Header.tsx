'use client'

import { useState } from 'react'
import { navigationConfig } from '@/src/config/navigation'
import { siteConfig } from '@/src/config'
import Link from 'next/link'
import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-950">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-end px-4">
          <a href="tel:8002334998" className="text-sm text-white hover:text-gray-300">
            (800)-233-4998
          </a>
          <span className="mx-3 text-white">|</span>
          <Link href="/go-to-assist" className="text-sm text-white hover:text-gray-300">
            Go To Assist
          </Link>
          <span className="mx-3 text-white">|</span>
          <a 
            href="https://customer.billergenie.com/ee929b7258f2" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-white hover:text-gray-300"
          >
            e-Payments
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-24 items-center justify-between">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/icons/logo.svg"
                alt={siteConfig.name}
                width={200}
                height={67}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              <Link
                href="/search"
                className="text-gray-900 hover:text-lime-600"
                aria-label="Search"
              >
                <MagnifyingGlassIcon className="h-6 w-6" />
              </Link>
              <Link
                href="/"
                className="text-base font-semibold text-gray-900 hover:text-lime-600"
              >
                Home
              </Link>
              {navigationConfig.mainNav.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-base font-semibold text-gray-900 hover:text-lime-600"
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href="/schedule"
                className="text-base font-semibold text-white bg-lime-600 px-4 py-2.5 rounded hover:bg-lime-500"
              >
                Schedule Demo
              </Link>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              <div className="px-2 py-3">
                <Link
                  href="/search"
                  className="block px-3 py-2 text-base text-gray-900 hover:text-lime-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Search
                </Link>
                <Link
                  href="/"
                  className="block px-3 py-2 text-base text-gray-900 hover:text-lime-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                {navigationConfig.mainNav.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block px-3 py-2 text-base text-gray-900 hover:text-lime-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
                <Link
                  href="/schedule"
                  className="block mt-2 text-center text-white bg-lime-600 px-3 py-2 rounded hover:bg-lime-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
} 