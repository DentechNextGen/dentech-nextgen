import { Metadata } from 'next'
import { ScheduleContent } from './ScheduleContent'

export const metadata: Metadata = {
  title: 'Schedule a Demo - Dentech',
  description: 'Book an introductory call with Jane Kaminski to learn more about how Dentech can help your dental practice.',
}

export default function Schedule() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mx-auto max-w-3xl lg:max-w-4xl mb-8">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Schedule a Demo</h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Book an introductory call with Jane Kaminski to learn more about how Dentech can help your dental practice.
          </p>
        </div>

        {/* Calendly Embed */}
        <div className="w-full">
          <ScheduleContent />
        </div>
      </div>
    </div>
  )
} 