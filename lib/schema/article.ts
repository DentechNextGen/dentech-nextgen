import { BaseSchema } from '.'
import { siteConfig } from '@/src/config'

export interface ArticleSchema extends BaseSchema {
  '@type': 'Article'
  headline: string
  description: string
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
  image: {
    '@type': 'ImageObject'
    url: string
    caption?: string
  }
}

export interface ArticleSchemaInput {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  author: string
  image: string
  imageCaption?: string
}

export function generateArticleSchema(input: ArticleSchemaInput): ArticleSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished,
    ...(input.dateModified && { dateModified: input.dateModified }),
    author: {
      '@type': 'Person',
      name: input.author
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/logo.svg`
      }
    },
    image: {
      '@type': 'ImageObject',
      url: input.image.startsWith('http') ? input.image : `${siteConfig.url}${input.image}`,
      ...(input.imageCaption && { caption: input.imageCaption })
    }
  }
} 