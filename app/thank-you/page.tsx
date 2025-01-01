import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You - Dentech',
  description: 'Thank you for requesting a demo of Dentech Next Gen!',
}

export default function ThankYouPage() {
  return (
    <div className="bg-primary-100">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Thank You!
          </h1>
          <div className="mt-10 flex flex-col gap-6 text-lg leading-8 text-gray-600">
            <p>
              Thank you for requesting a demo of Dentech Next Gen! We are excited to show you how our cutting-edge dental practice management software can revolutionize your practice. In a short while, you will be receiving an email to confirm your email address as well as further details. We cannot wait to help you explore the many ways Dentech can streamline your operations and enhance patient care.
            </p>
            <p>
              All the best,
            </p>
            <p>
              The Dentech Team
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 