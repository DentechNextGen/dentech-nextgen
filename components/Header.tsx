'use client'

import { siteConfig } from '@/config'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      {/* Top utility nav */}
      <div className="bg-primary-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-10 items-center justify-end gap-x-4">
            <a href="tel:8002334998" className="text-sm font-medium text-primary-base hover:text-primary-800">
              (800) 233-4998
            </a>
            <div className="h-1 w-1 rounded-full bg-primary-base"></div>
            <a href="/go-to-assist" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary-base hover:text-primary-800">
              Go To Assist
            </a>
            <div className="h-1 w-1 rounded-full bg-primary-base"></div>
            <a href="https://customer.billergenie.com/ee929b7258f2
" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary-base hover:text-primary-800">
              e-Payments
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
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
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/features" className="text-sm font-semibold leading-6 text-gray-900">
            Features
          </Link>
          <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
            About
          </Link>
          <Link href="/blog" className="text-sm font-semibold leading-6 text-gray-900">
            Blog
          </Link>
          <Link href="/resources" className="text-sm font-semibold leading-6 text-gray-900">
            Resources
          </Link>
          <Link href="/support" className="text-sm font-semibold leading-6 text-gray-900">
            Support
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/schedule" className="text-sm font-semibold leading-6 text-gray-900">
            Schedule Demo <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{siteConfig.name}</span>
              <Image
                className="h-8 w-auto"
                src="/logo.svg"
                alt=""
                width={32}
                height={32}
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
                <Link
                  href="/features"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </Link>
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </Link>
                <Link
                  href="/resources"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Resources
                </Link>
                <Link
                  href="/support"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Support
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/schedule"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Schedule Demo
                </Link>
              </div>
              <div className="py-6 space-y-2">
                <a
                  href="tel:8002334998"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary-base hover:bg-gray-50"
                >
                  (800) 233-4998
                </a>
                <a
                  href="/go-to-assist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary-base hover:bg-gray-50"
                >
                  Go To Assist
                </a>
                <a
                  href="https://customer.billergenie.com/ee929b7258f2
"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary-base hover:bg-gray-50"
                >
                  e-Payments
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
} 