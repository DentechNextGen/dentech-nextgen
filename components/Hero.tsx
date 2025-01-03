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
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              {content}
            </h1>
            <p className="mt-6 text-base md:text-lg text-gray-300">
              Experience Dentech, the revolutionary dental practice management software that has been trusted by professionals for over four decades. Offering unparalleled efficiency, a robust feature set, and customer-centric service, Dentech is the comprehensive solution you&apos;ve been waiting for.
            </p>
            <div className="mt-8 flex flex-col md:flex-row items-center md:items-start gap-4">
              <Link
                href={ctaLink}
                className="w-full md:w-auto rounded-md bg-lime-600 px-6 py-3 text-base font-semibold text-white hover:bg-lime-700 text-center"
              >
                {cta}
              </Link>
              <Link
                href="/features"
                className="text-base font-semibold text-white hover:text-gray-300"
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
  )
} 