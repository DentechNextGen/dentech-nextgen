import { generateSoftwareSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { siteConfig } from '@/src/config'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const featureName = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  const title = `${featureName} | Dentech`
  const description = `Learn about Dentech's ${params.slug.split('-').join(' ')} feature and how it can enhance your dental practice.`
  const url = `${siteConfig.url}/features/${params.slug}`

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: `Dentech ${featureName}`,
      description,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Windows',
      featureList: [
        'Quick Phone Inquiry',
        'Appointment Scheduler',
        'Treatment Planning',
        'Insurance Processing',
        'Advanced Reporting'
      ],
      screenshot: [
        {
          '@type': 'ImageObject',
          url: `${siteConfig.url}/images/features/${params.slug}.webp`,
          caption: `${featureName} Dashboard`
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${siteConfig.url}/`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Features',
          item: `${siteConfig.url}/features`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: featureName,
          item: `${siteConfig.url}/features/${params.slug}`
        }
      ]
    }
  ]

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Dentech',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@dentech',
    },
    other: {
      'script:ld+json': JSON.stringify(schemas)
    }
  }
}

export default function FeaturePage({ params }: { params: { slug: string } }) {
  return (
    <main>
      {/* Feature page content */}
    </main>
  )
} 