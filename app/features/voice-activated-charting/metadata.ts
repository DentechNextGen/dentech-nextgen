import { Metadata } from 'next'
import { voiceChartingSchema } from '@/lib/schema/software'

export const metadata: Metadata = {
  title: 'Voice-Activated Charting Software | Dentech',
  description: 'Experience efficient dental charting with Dentech\'s patented voice-activated charting software. Features include Voice Triplets Commands™, Exam Focus Window™, and more.',
  alternates: {
    canonical: '/features/voice-activated-charting'
  },
  other: {
    'script:ld+json': {
      type: 'application/ld+json',
      text: JSON.stringify(voiceChartingSchema)
    }
  }
} 