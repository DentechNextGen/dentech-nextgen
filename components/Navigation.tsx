'use client'

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { navigationConfig } from '@/src/config/navigation'
import { siteConfig } from '@/src/config'
import Link from 'next/link'
import Image from 'next/image'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-gray-950">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-end gap-x-3 px-4 sm:gap-x-6 sm:px-6 lg:px-8">
          <a href="tel:8002334998" className="text-xs sm:text-sm font-semibold leading-6 text-white hover:text-gray-300">
            (800)-233-4998
          </a>
          <Link href="/go-to-assist" className="text-xs sm:text-sm font-semibold leading-6 text-white hover:text-gray-300">
            Go To Assist
          </Link>
          <a 
            href="https://customer.billergenie.com/ee929b7258f2" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs sm:text-sm font-semibold leading-6 text-white hover:text-gray-300"
          >
            e-Payments
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white sticky top-0 z-50 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <Image
                  src="/icons/logo.svg"
                  alt={siteConfig.name}
                  width={150}
                  height={50}
                  className="h-8 w-auto sm:h-10 lg:h-12"
                  priority
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex lg:gap-x-8">
              {navigationConfig.mainNav.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-lime-600"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link
                href="/schedule"
                className="text-sm font-semibold leading-6 text-white bg-lime-600 px-3 py-2 rounded-md hover:bg-lime-500"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/icons/logo.svg"
                  alt={siteConfig.name}
                  width={150}
                  height={50}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigationConfig.mainNav.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/schedule"
                    className="block text-center text-sm font-semibold leading-6 text-white bg-lime-600 px-3 py-2 rounded-md hover:bg-lime-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </nav>
    </header>
  )
} 