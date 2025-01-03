import { siteConfig } from '.'

export const defaultSEO = {
  defaultTitle: 'Dentech | Modern Dental Practice Management Software',
  titleTemplate: '%s | Dentech',
  description: 'Transform your dental practice with Dentech\'s comprehensive practice management software. Streamline operations, enhance patient care, and boost efficiency.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: 'Dentech',
    title: 'Dentech | Modern Dental Practice Management Software',
    description: 'Transform your dental practice with Dentech\'s comprehensive practice management software. Streamline operations, enhance patient care, and boost efficiency.',
    images: [
      {
        url: `${siteConfig.url}/images/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'Dentech Software Interface',
      },
    ],
  },
  twitter: {
    handle: '@dentech',
    site: '@dentech',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'theme-color',
      content: '#65A30D',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/icons/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
}

export const pageSEO = {
  home: {
    title: 'Modern Dental Practice Management Software',
    description: 'Experience Dentech, the revolutionary dental practice management software trusted by professionals for over four decades. Streamline your practice operations today.',
  },
  features: {
    title: 'Comprehensive Dental Software Features',
    description: 'Discover Dentech\'s powerful features including practice management, voice-activated charting, digital imaging, and more. Everything you need to run your dental practice efficiently.',
  },
  about: {
    title: 'About Dentech - Leading Dental Software Provider',
    description: 'Learn about Dentech\'s journey in revolutionizing dental practice management software. Over four decades of innovation and customer-centric solutions.',
  },
  blog: {
    title: 'Dental Practice Management Insights & Updates',
    description: 'Stay informed with the latest insights, tips, and updates about dental practice management and industry trends from Dentech\'s expert team.',
  },
  support: {
    title: 'Expert Dental Software Support',
    description: 'Get the support you need with Dentech\'s dedicated customer service team. Access resources, training materials, and technical assistance.',
  },
  schedule: {
    title: 'Schedule a Demo - See Dentech in Action',
    description: 'Book a personalized demo to see how Dentech can transform your dental practice. Experience our comprehensive software solution firsthand.',
  },
  contact: {
    title: 'Contact Dentech - Get in Touch',
    description: 'Have questions about Dentech? Our team is here to help. Reach out for information about our dental practice management solutions.',
  },
} 