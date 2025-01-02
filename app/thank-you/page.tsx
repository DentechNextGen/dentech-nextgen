import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Thank You - Dentech',
  description: 'Thank you for requesting a demo of Dentech Next Gen!',
}

export default function ThankYou() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Thank You!
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We appreciate your interest in Dentech. Our team will be in touch with you shortly.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
            >
              Return Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 