import Link from 'next/link'
import { siteConfig } from '@/src/config'
import Image from 'next/image'

interface HeroProps {
  content?: string
  cta?: string
  ctaLink?: string
}

export default function Hero({
  content = 'Transform Your Dental Practice Management Software with Dentech',
  cta = 'Schedule Demo',
  ctaLink = siteConfig.links.calendly,
}: HeroProps) {
  return (
    <div className="relative bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:max-w-5xl">
          <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-8">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {content}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Experience Dentech, the revolutionary dental practice management software that has been trusted by professionals for over four decades. Offering unparalleled efficiency, a robust feature set, and customer-centric service, Dentech is the comprehensive solution you&apos;ve been waiting for.
              </p>
              <div className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-x-6">
                <Link
                  href={ctaLink}
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {cta}
                </Link>
                <Link
                  href="/features"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-12 md:mt-0">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/background-hero.jpg"
                  alt="Dentech Platform Interface"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-lg shadow-xl ring-1 ring-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 