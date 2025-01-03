export const generateSoftwareSchema = (name: string, description: string, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Windows',
  description,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '1250',
  },
  provider: {
    '@type': 'Organization',
    name: 'Dentech',
    url,
  },
})

export const generateFAQSchema = (questions: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: questions.map((q) => ({
    '@type': 'Question',
    name: q.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: q.answer,
    },
  })),
})

export const generateBreadcrumbSchema = (items: { name: string; item: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.item,
  })),
})

export const generateArticleSchema = (article: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified: string
  author: string
  image: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.title,
  description: article.description,
  url: article.url,
  datePublished: article.datePublished,
  dateModified: article.dateModified,
  author: {
    '@type': 'Person',
    name: article.author,
  },
  image: article.image,
  publisher: {
    '@type': 'Organization',
    name: 'Dentech',
    url: 'https://dentech.com',
  },
}) 