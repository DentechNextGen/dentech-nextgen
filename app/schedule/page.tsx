import { Metadata } from 'next'
import { ScheduleContent } from './ScheduleContent'

export const metadata: Metadata = {
  title: 'Schedule a Demo - Dentech',
  description: 'Book an introductory call with Jane Kaminski to learn more about how Dentech can help your dental practice.',
}

export default function Schedule() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Schedule a Demo
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Book an introductory call with Jane Kaminski to learn more about how Dentech can help your dental practice.
            </p>
          </div>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <ScheduleContent />
          </div>
        </div>
      </div>
    </main>
  )
} 