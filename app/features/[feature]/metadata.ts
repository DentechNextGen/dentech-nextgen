import { Metadata } from 'next'
import { generateBreadcrumbSchema, generateSoftwareSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: { feature: string } }): Promise<Metadata> {
  const featureName = params.feature.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')

  return {
    title: `${featureName} - Dentech Dental Software`,
    description: `Learn about Dentech's ${featureName.toLowerCase()} feature and how it can help streamline your dental practice operations.`,
    openGraph: {
      title: `${featureName} | Dentech`,
      description: `Learn about Dentech's ${featureName.toLowerCase()} feature and how it can help streamline your dental practice operations.`,
    },
    other: {
      'script:ld+json': JSON.stringify([
        generateSoftwareSchema(
          `Dentech ${featureName}`,
          `Comprehensive ${featureName.toLowerCase()} solution for dental practices.`,
          `https://dentech.com/features/${params.feature}`,
          {
            applicationCategory: 'Dental Practice Management Software',
            operatingSystem: 'Cloud-based'
          }
        ),
        generateBreadcrumbSchema([
          { name: 'Home', item: 'https://dentech.com' },
          { name: 'Features', item: 'https://dentech.com/features' },
          { name: featureName, item: `https://dentech.com/features/${params.feature}` },
        ])
      ])
    }
  }
}

export default generateMetadata 