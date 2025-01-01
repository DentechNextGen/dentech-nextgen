'use client'

import { siteConfig } from '@/config'
import { classNames } from '@/lib/utils/utils'
import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  content?: string
  cta?: string
  ctaLink?: string
  bgColor?: string
}

export const Hero = ({
  content = 'Transform Your Dental Practice with Dentech',
  cta = 'Schedule Demo',
  ctaLink = siteConfig.links.calendly,
  bgColor = 'bg-white',
}: HeroProps) => {
  return (
    <div className={classNames(bgColor, 'relative isolate overflow-hidden')}>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <Link href={ctaLink} className="inline-flex space-x-6">
              <span className="rounded-full bg-primary-base/10 px-3 py-1 text-sm font-semibold leading-6 text-primary-base ring-1 ring-inset ring-primary-base/10">
                What&apos;s new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <span>Just shipped v2.0</span>
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </Link>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {content}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience Dentech, the revolutionary dental practice management software that has been trusted by professionals for over four decades.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href={ctaLink}
              className="rounded-md bg-primary-base px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-base"
            >
              {cta}
            </Link>
            <Link
              href="/support"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <Image
              src="/images/background-hero.jpg"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 