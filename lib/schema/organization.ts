import { BaseSchema } from '.'
import { siteConfig } from '@/src/config'

export interface OrganizationSchema extends BaseSchema {
  '@type': 'Organization'
  name: string
  url: string
  logo: {
    '@type': 'ImageObject'
    url: string
  }
  sameAs: string[]
  description: string
}

export const organizationSchema: OrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: {
    '@type': 'ImageObject',
    url: `${siteConfig.url}/images/logo.webp`
  },
  sameAs: [
    'https://facebook.com/dentech',
    'https://twitter.com/dentech',
    'https://linkedin.com/company/dentech'
  ],
  description: siteConfig.description
} 