"use client"

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
  ctaLink = '/schedule',
}: HeroProps) {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-lime-500 to-lime-700 opacity-20"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>
      <div className="mx-auto flex flex-col lg:flex-row items-center max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {content}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Experience Dentech, the revolutionary dental practice management software that has been trusted by professionals for over four decades. Offering unparalleled efficiency, a robust feature set, and customer-centric service, Dentech is the comprehensive solution you&apos;ve been waiting for.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href={ctaLink}
              className="rounded-md bg-lime-600 px-4 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600 transition-colors"
            >
              {cta}
            </Link>
            <Link
              href="/features"
              className="text-base font-semibold leading-6 text-white hover:text-gray-300"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="w-[350px] sm:w-[600px] md:w-[700px] lg:w-[500px] xl:w-[600px]">
            <div className="relative w-full h-0 pb-[56.25%]">
              <div 
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-xl ring-1 ring-white/20 bg-black/50 cursor-pointer group"
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                  const clickedElement = e.currentTarget;
                  const iframe = document.createElement('iframe');
                  iframe.src = "https://www.youtube.com/embed/2Xgow_I0Eh0?si=mLlNKiHPi-2HQeHy&autoplay=1";
                  iframe.className = "absolute top-0 left-0 w-full h-full rounded-xl";
                  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
                  iframe.allowFullscreen = true;
                  
                  if (clickedElement.parentNode) {
                    clickedElement.parentNode.replaceChild(iframe, clickedElement);
                  }
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <img
                  src="https://img.youtube.com/vi/2Xgow_I0Eh0/maxresdefault.jpg"
                  alt="Video thumbnail" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 