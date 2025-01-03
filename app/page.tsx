import Hero from '@/components/Hero'
import VideoFeature from '@/components/VideoFeature'
import Features from '@/components/Features'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import BlogSection from '@/components/BlogSection'
import CTA from '@/components/CTA'
import { getLatestArticles } from '@/lib/articles'
import { generateSoftwareSchema, generateFAQSchema } from '@/lib/schema'
import { siteConfig } from '@/src/config'
import type { Metadata } from 'next'

const schemas = [
  generateSoftwareSchema(
    'Dentech',
    'Comprehensive dental practice management software that streamlines operations and enhances patient care.',
    [
      'Practice Management',
      'Voice-Activated Charting',
      'Digital Imaging',
      'Patient Communication',
      'Document Management',
      'E-Services'
    ],
    [
      { url: '/images/features/practice-management.webp', caption: 'Practice Management Dashboard' }
    ]
  ),
  generateFAQSchema([
    {
      question: 'What is Dentech?',
      answer: 'Dentech is a comprehensive dental practice management software that streamlines all aspects of practice management, from appointment scheduling to billing, into one seamless process.'
    },
    {
      question: 'How can Dentech help my practice?',
      answer: 'Dentech helps reduce administrative tasks, allowing you to spend more time providing exceptional care to your patients. Our platform offers features like appointment scheduling, billing management, and patient communication tools.'
    }
  ])
]

const organizationSchema = {
  "@type": "Organization",
  "@id": "https://dentech.com/#organization",
  "name": "Dentech",
  "url": "https://dentech.com",
  "logo": "https://dentech.com/logo.webp",
  "description": "Experience Dentech, the revolutionary dental practice management software that has been trusted by professionals for over four decades.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Farmington Hills",
    "addressRegion": "MI",
    "addressCountry": "United States"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "42.5019851",
    "longitude": "-83.3626884"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "(800) 233-4998",
    "contactType": "customer service",
    "email": "support@dentech.com"
  },
  "sameAs": [
    "https://www.linkedin.com/company/dentech-pm",
    "https://www.facebook.com/dentechsoftware",
    "https://www.instagram.com/dentech_dental_software",
    "https://www.youtube.com/channel/UCXwTt7Ut9QW9Je1CzOKrlXw"
  ]
}

export const metadata: Metadata = {
  title: 'Dentech | Trusted By Dentists For Over 40 Years',
  description: 'Trusted By Dentists For Over 40 Years: The Original, All-In-One Dental Practice Management Software Family-Owned. User-Guided. Trusted By Thousands of Practices Nationwide.',
  openGraph: {
    title: 'Dentech - Dental Practice Management Software',
    description: siteConfig.description,
    url: 'https://dentech.com',
    siteName: 'Dentech',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dentech - Dental Practice Management Software',
    description: siteConfig.description,
    creator: '@dentech',
  },
  other: {
    'script:ld+json': [
      JSON.stringify(organizationSchema)
    ]
  }
}

export default async function Home() {
  const latestArticles = await getLatestArticles(3)
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <main>
        <Hero />
        <Features />
        <VideoFeature />
        <FAQ />
        <Testimonials />
        <BlogSection articles={latestArticles} />
        <CTA />
      </main>
    </>
  )
}
