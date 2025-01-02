import Link from 'next/link'
import { siteConfig } from '@/src/config'
import Image from 'next/image'

interface HeroProps {
  content?: string
  cta?: string
  ctaLink?: string
  bgColor?: string
}

export default function Hero({
  content = 'Transform Your Dental Practice Management Software with Dentech',
  cta = 'Schedule Demo',
  ctaLink = siteConfig.links.calendly,
  bgColor = 'bg-white',
}: HeroProps) {
  return (
    <section 
      className={`${bgColor} relative isolate overflow-hidden`}
      aria-label="Hero section"
    >
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {content}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience Dentech, the revolutionary dental practice management software that has been trusted by professionals for over four decades. Offering unparalleled efficiency, a robust feature set, and customer-centric service, Dentech is the comprehensive solution you&apos;ve been waiting for. With the flexibility of both cloud-based and server-based solutions, we are equipped to meet the unique needs of your dental practice.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href={ctaLink}
              className="rounded-md bg-blue-600 px-4 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              {cta}
            </Link>
            <Link
              href="/features"
              className="rounded-md border border-blue-600 px-4 py-2.5 text-base font-semibold text-blue-600 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-1 lg:pl-10">
          <Image
            src="/images/background-hero.jpg"
            alt="Dentech Platform Interface"
            width={800}
            height={600}
            loading="eager"
            priority={true}
            className="w-full h-auto rounded-xl shadow-xl ring-1 ring-gray-400/10"
          />
        </div>
      </div>
    </section>
  )
} 