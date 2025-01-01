import { Metadata } from 'next'
import { ScheduleContent } from './ScheduleContent'

export const metadata: Metadata = {
  title: 'Schedule a Demo - Dentech',
  description: 'Book an introductory call with Jane Kaminski to learn more about how Dentech can help your dental practice.',
}

export default function SchedulePage() {
  return <ScheduleContent />
} 