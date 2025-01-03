import { generateBreadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/src/config'
import type { Metadata } from 'next'
import GoToAssistContent from './GoToAssistContent'

const goToAssistSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Dentech Remote Support",
  "description": "Real-time remote technical support for Dentech dental practice management software.",
  "provider": {
    "@type": "Organization",
    "name": "Dentech",
    "url": "https://dentech.com"
  },
  "serviceType": "Technical Support",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://dentech.com/go-to-assist",
    "servicePhone": "(866) 549-8702"
  }
}

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', item: 'https://dentech.com' },
  { name: 'Remote Support', item: 'https://dentech.com/go-to-assist' }
])

export const metadata: Metadata = {
  title: 'Dentech Expert Support | Go To Assist Remote Help',
  description: 'Our technicians are ready to provide real-time remote support to solve your software issues promptly, ensuring your dental practice operates smoothly.',
  openGraph: {
    title: 'Dentech Expert Support | Go To Assist Remote Help',
    description: 'Our technicians are ready to provide real-time remote support to solve your software issues promptly, ensuring your dental practice operates smoothly.',
    url: 'https://dentech.com/go-to-assist',
    siteName: 'Dentech',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dentech Expert Support | Go To Assist Remote Help',
    description: 'Our technicians are ready to provide real-time remote support to solve your software issues promptly, ensuring your dental practice operates smoothly.',
    creator: '@dentech',
  },
  other: {
    'script:ld+json': [
      JSON.stringify(goToAssistSchema),
      JSON.stringify(breadcrumbSchema)
    ]
  }
}

export default function GoToAssistPage() {
  return <GoToAssistContent />
} 