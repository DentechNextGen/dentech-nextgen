import { BaseSchema } from '.'
import { siteConfig } from '@/src/config'

export interface ArticleSchema extends BaseSchema {
  '@type': 'Article'
  headline: string
  description: string
  image: {
    '@type': 'ImageObject'
    url: string
    caption?: string
  }
  datePublished: string
  dateModified?: string
  author: {
    '@type': 'Person'
    name: string
  }
  publisher: {
    '@type': 'Organization'
    name: string
    logo: {
      '@type': 'ImageObject'
      url: string
    }
  }
}

export function generateArticleSchema(
  headline: string,
  description: string,
  imageUrl: string,
  imageCaption: string | undefined,
  datePublished: string,
  dateModified: string | undefined,
  authorName: string
): ArticleSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}${imageUrl}`,
      caption: imageCaption
    },
    datePublished,
    ...(dateModified && { dateModified }),
    author: {
      '@type': 'Person',
      name: authorName
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/logo.svg`
      }
    }
  }
} 