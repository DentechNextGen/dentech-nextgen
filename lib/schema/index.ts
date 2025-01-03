import { siteConfig } from '@/src/config'

export interface BaseSchema {
  '@context': 'https://schema.org'
  '@type': string
}

export interface OrganizationSchema extends BaseSchema {
  '@type': 'Organization'
  name: string
  url: string
  logo: {
    '@type': 'ImageObject'
    url: string
  }
  sameAs?: string[]
  description?: string
  address?: {
    '@type': 'PostalAddress'
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  contactPoint?: {
    '@type': 'ContactPoint'
    telephone: string
    contactType: string
  }
}

export const organizationSchema: OrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  logo: {
    '@type': 'ImageObject',
    url: `${siteConfig.url}/images/logo.svg`
  },
  description: 'Leading provider of dental practice management software solutions.',
  sameAs: [
    'https://www.facebook.com/dentech',
    'https://twitter.com/dentech',
    'https://www.linkedin.com/company/dentech'
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Tech Drive',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    postalCode: '94105',
    addressCountry: 'US'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-800-DENTECH',
    contactType: 'sales'
  }
}

export * from './software'
export * from './article'
export * from './faq'
export * from './breadcrumb'
export * from './review' 