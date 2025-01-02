'use client'

import { siteConfig } from '@/config'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Features', href: '/features' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' },
  { name: 'Support', href: '/support' },
] as const

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isCurrentPage = (href: string) => pathname === href

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
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => {
            const current = isCurrentPage(item.href)
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold leading-6 ${
                  current 
                    ? 'text-primary-600' 
                    : 'text-gray-900 hover:text-gray-600'
                }`}
                aria-current={current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            )
          })}
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

      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                  <div className="flex items-center justify-between">
                    <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                      <span className="sr-only">{siteConfig.name}</span>
                      <Image
                        className="h-8 w-auto"
                        src="/icons/logo.svg"
                        alt={siteConfig.name}
                        width={32}
                        height={32}
                        priority
                      />
                    </Link>
                    <button
                      type="button"
                      className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                      <div className="space-y-2 py-6">
                        {navigation.map((item) => {
                          const current = isCurrentPage(item.href)
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                                current
                                  ? 'bg-gray-50 text-primary-600'
                                  : 'text-gray-900 hover:bg-gray-50'
                              }`}
                              aria-current={current ? 'page' : undefined}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          )
                        })}
                      </div>
                      <div className="py-6">
                        <Link
                          href="/schedule"
                          className="block rounded-lg bg-primary-600 px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-primary-700"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Schedule Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  )
} 