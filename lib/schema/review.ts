import { BaseSchema } from '.'
import { siteConfig } from '../../src/config'

export interface ReviewSchema extends BaseSchema {
  '@type': 'Review'
  reviewRating: {
    '@type': 'Rating'
    ratingValue: number
    bestRating: number
  }
  author: {
    '@type': 'Person'
    name: string
  }
  reviewBody: string
  datePublished: string
  itemReviewed: {
    '@type': 'SoftwareApplication'
    name: string
  }
}

export function generateReviewSchema(
  authorName: string,
  rating: number,
  reviewText: string,
  datePublished: string,
  productName: string = 'Dentech'
): ReviewSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: rating,
      bestRating: 5
    },
    author: {
      '@type': 'Person',
      name: authorName
    },
    reviewBody: reviewText,
    datePublished,
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: productName
    }
  }
}

// Pre-defined reviews for testimonials
export const testimonialReviews = [
  generateReviewSchema(
    'Dr. Sarah Johnson',
    5,
    'Dentech has revolutionized our practice management. The voice-activated charting is a game-changer for efficiency.',
    '2024-01-15'
  ),
  generateReviewSchema(
    'Dr. Michael Chen',
    5,
    'The practice management features have streamlined our operations and improved patient care significantly.',
    '2024-02-01'
  ),
  generateReviewSchema(
    'Dr. Emily Rodriguez',
    5,
    'Outstanding software with excellent support. The document management system has made our practice completely paperless.',
    '2024-02-15'
  )
]

export interface AggregateRatingSchema extends BaseSchema {
  '@type': 'AggregateRating'
  ratingValue: number
  bestRating: number
  ratingCount: number
  reviewCount: number
}

export function generateAggregateRatingSchema(
  ratingValue: number,
  ratingCount: number,
  reviewCount: number = ratingCount,
  bestRating: number = 5
): AggregateRatingSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue,
    bestRating,
    ratingCount,
    reviewCount
  }
}

export const dentechAggregateRating = generateAggregateRatingSchema(5, 500, 500)

// Update the software schema to include aggregate rating
export function generateSoftwareWithReviewSchema(
  name: string,
  description: string,
  features: string[],
  screenshots: { url: string; caption?: string }[] = [],
  aggregateRating: AggregateRatingSchema
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    applicationCategory: 'Dental Practice Management Software',
    operatingSystem: 'Windows',
    offers: {
      '@type': 'Offer',
      price: 'Contact for Pricing',
      priceCurrency: 'USD'
    },
    featureList: features,
    screenshot: screenshots.map(s => ({
      '@type': 'ImageObject',
      url: `${siteConfig.url}${s.url}`,
      caption: s.caption
    })),
    aggregateRating
  }
} 