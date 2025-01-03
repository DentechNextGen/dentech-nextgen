import { Metadata } from 'next'
import { generateSoftwareSchema, generateBreadcrumbSchema } from '@/lib/schema'

const metadata: Metadata = {
  title: 'Voice-Activated Charting Software',
  description: 'Experience efficient dental charting with Dentech\'s voice-activated charting software. Our patented DenChart technology allows you to complete patient exams in as little as 5 minutes.',
  openGraph: {
    title: 'Voice-Activated Charting Software | Dentech',
    description: 'Experience efficient dental charting with Dentech\'s voice-activated charting software. Our patented DenChart technology allows you to complete patient exams in as little as 5 minutes.',
  },
  other: {
    'script:ld+json': JSON.stringify([
      generateSoftwareSchema(
        'Dentech Voice-Activated Charting',
        'Experience efficient dental charting with Dentech\'s voice-activated charting software. Our patented DenChart technology allows you to complete patient exams in as little as 5 minutes.',
        'https://dentech.com/features/voice-activated-charting'
      ),
      generateBreadcrumbSchema([
        { name: 'Home', item: 'https://dentech.com' },
        { name: 'Features', item: 'https://dentech.com/features' },
        { name: 'Voice-Activated Charting', item: 'https://dentech.com/features/voice-activated-charting' },
      ])
    ])
  }
}

export default metadata 