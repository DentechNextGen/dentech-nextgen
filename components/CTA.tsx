'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function CTA() {
  return (
    <div className="relative isolate">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/practice-management.jpg"
          alt=""
          className="h-full w-full object-cover"
          width={2000}
          height={1000}
        />
        <div className="absolute inset-0 bg-primary-900/90 mix-blend-multiply" />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get Started Today
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We are committed to supporting you in providing the best possible patient care. With Dentech Next-Gen, we have focused on simplifying tasks and enhancing your workflow. It is about making your day easier so you can focus on what matters most.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/schedule"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-base shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Schedule Demo
            </Link>
            <Link href="/support" className="text-sm font-semibold leading-6 text-white">
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 