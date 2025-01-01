import { DateTime } from 'luxon'
import { EMediaType, ESocialPlatform } from './enums'

export interface ISeedTenant {
  tenant: {
    name: string
    legalName: string
    slogan: string
    founder: string
    type: string
    languages: string[]
    areaServed: string[]
    description: string
    foundingDate: Date
    domain: string
    email: string
    phone: string
    keywords: string[]
    logo: string
    servicesName: string
    servicesSlug: string
    footerDescription: string
    disclaimer: string
    fonts: string[]
    calendlyUrl: string
    googleTagManagerId: string
    features: {
      title: string
      desc: string
      icon: string
    }[]
    theme: {
      fontSize: Record<string, { fontSize: string; lineHeight: string }>
      extend: {
        borderRadius: Record<string, string>
        fontFamily: Record<string, string[]>
        maxWidth: Record<string, string>
        colors: Record<string, Record<string, string>>
      }
    }
  }
  peopleAndAccounts: {
    person: {
      firstName: string
      middleName?: string
      surname: string
      title: string
      bio?: string
      url?: string
      type: string
    }
    account?: {
      email: string
      password: string
    }
  }[]
  socials: {
    platform: ESocialPlatform
    url: string
  }[]
  serviceArea: {
    name: string
    region: string
    locality: string
    lat: string
    lng: string
  }
  services: {
    name: string
    thumbnailFileName: string
    summary: string
    content: string
    itemType: string
    slug: string
    media: {
      type: EMediaType
      name?: string
      url?: string
      alt?: string
      width?: number
      height?: number
    }[]
    description: string
    features: {
      title: string
      description: string
      img: string
    }[]
  }[]
  faqs: {
    question: string
    answer: string
  }[]
  ctaComponent: {
    cta: string
    href: string
    content: string
  }
  heroComponent: {
    content: string
    cta: string
    ctaLink: string
  }
  heroSubComponents: {
    title: string
    description: string[]
    bgColor: string
    variant: string
  }[]
  pagesMetadata: {
    type: string
    title: string
    description: string
    keywords?: string[]
  }[]
  contactRowComponent: {
    title: string
    description: string
    cardsContent: string[]
  }
  privacy: {
    updatedAt: Date
    content: string
  }
  navigationItems: {
    title: string
    slug?: string
    href: string
    category: string
    displayOrder: number
  }[]
  headerComponent: {
    content: string
  }
  dividerComponent: {
    path: string
    color: string
    variant: string
  }[]
  scheduleStructuredData: {
    personName: string
    description: string
    name: string
    startDate: Date
    startTime: string
    endTime: string
    scheduleTimezone: string
    repeatFrequency: string
    repeatCount: number
    eventStatus: string
    eventAttendanceMode: string
    locationUrl: string
    locationType: string
    imageName: string
    offers: {
      '@type': string
      url: string
      price: string
      priceCurrency: string
      availability: string
      validFrom: string
    }[]
  }
  contactStructuredData: {
    description: string
    founders: {
      name: string
      desc: string
    }[]
    keywords: string[]
  }
  secondaryServicesComp: {
    content: string
  }
  testimonialsComp: {
    content: string
  }
  testimonials: {
    firstname: string
    surname: string
    content: string
  }[]
  serviceFeaturesComponent: {
    content: string
  }
  articles: any[]
  videoMedia: {
    type: EMediaType
    url: string
    alt: string
    width: number
    height: number
    fileName: string
  }[]
  videoFeatures: {
    variant: string
    content: string
    videoUrl: string
    imageNames: string[]
    features: {
      name: string
      desc: string
    }[]
  }[]
} 