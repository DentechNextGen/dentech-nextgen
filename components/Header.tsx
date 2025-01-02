'use client'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { navigationConfig } from '@/src/config/navigation'
import { siteConfig } from '@/src/config'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <div className="bg-gray-950">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-end gap-x-6 px-6 lg:px-8">
          <a href="tel:8002334998" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
            (800)-233-4998
          </a>
          <Link href="/go-to-assist" className="text-sm font-semibold leading-6 text-white hover:text-gray-300">
            Go To Assist
          </Link>
          <a 
            href="https://customer.billergenie.com/ee929b7258f2" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm font-semibold leading-6 text-white hover:text-gray-300"
          >
            e-Payments
          </a>
        </div>
      </div>
      <nav className="bg-white sticky top-0 z-50 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/icons/logo.svg"
                alt={siteConfig.name}
                width={150}
                height={50}
                className="h-12 w-auto"
                style={{ width: "auto", height: "48px" }}
              />
            </Link>
            <div className="flex items-center space-x-8">
              {navigationConfig.mainNav.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-lime-600"
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href="/schedule"
                className="text-sm font-semibold leading-6 text-white bg-lime-600 px-3 py-2 rounded-md hover:bg-lime-500"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
} 