import { siteConfig } from '@/config'
import { classNames } from '@/lib/utils/utils'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

interface HeroProps {
  content?: string
  cta?: string
  ctaLink?: string
  bgColor?: string
}

export default function Hero({
  content = siteConfig.slogan,
  cta = 'Schedule Demo',
  ctaLink = siteConfig.links.calendly,
  bgColor = 'bg-white',
}: HeroProps) {
  return (
    <section 
      className={classNames(bgColor, 'relative isolate overflow-hidden')}
      aria-label="Hero section"
    >
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <Link 
              href={ctaLink}
              className="inline-flex items-center gap-x-2 rounded-full bg-primary-50 px-3 py-1 text-sm font-semibold leading-6 text-primary-600 ring-1 ring-inset ring-primary-600/10 hover:bg-primary-100 transition-colors"
              aria-label="View latest updates"
            >
              <span>What&apos;s new</span>
              <span className="inline-flex items-center gap-x-1 text-primary-600/80">
                <span>Just shipped v2.0</span>
                <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {content}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href={ctaLink}
              className="rounded-md bg-primary-600 px-4 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
            >
              {cta}
            </Link>
            <Link
              href="/support"
              className="rounded-md border border-primary-600 px-4 py-2.5 text-base font-semibold text-primary-600 hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-colors"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="relative">
              <Image
                src="/images/background-hero.jpg"
                alt="Dentech software interface screenshot"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                priority
              />
              <div className="absolute inset-0 rounded-md ring-1 ring-inset ring-gray-900/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 