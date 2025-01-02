import { Metadata } from 'next'
import { ScheduleContent } from './ScheduleContent'

export const metadata: Metadata = {
  title: 'Schedule a Demo - Dentech',
  description: 'Book an introductory call with Jane Kaminski to learn more about how Dentech can help your dental practice.',
}

export default function Schedule() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:max-w-5xl">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Schedule a Demo</h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Book an introductory call with Jane Kaminski to learn more about how Dentech can help your dental practice.
          </p>

          {/* Calendly Embed */}
          <div className="mt-16 lg:mt-20">
            <ScheduleContent />
          </div>
        </div>
      </div>
    </div>
  )
} 