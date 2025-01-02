import { siteConfig } from '@/config'
import { Metadata } from 'next'

interface PageProps {
  params: { feature: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return {
    title: `${params.feature} | ${siteConfig.name}`,
    description: `Learn more about ${params.feature} in ${siteConfig.name}.`,
  }
}

export default async function Feature({ params }: PageProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-display font-bold tracking-tight text-gray-900 sm:text-4xl">
            {params.feature}
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Feature content coming soon.
          </p>
        </div>
      </div>
    </div>
  )
} 