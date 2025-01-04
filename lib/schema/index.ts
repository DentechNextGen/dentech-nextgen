import { siteConfig } from '@/src/config'

export interface BaseSchema {
  '@context': 'https://schema.org'
  '@type': string
}

export * from './organization'
export * from './software'
export * from './review'
export * from './faq'
export * from './breadcrumb' 