import { ESocialPlatform } from '@/lib/types/enums'

export const navigationConfig = {
  mainNav: [
    {
      title: 'Features',
      href: '/features',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'Resources',
      href: '/resources',
    },
    {
      title: 'Schedule',
      href: '/schedule',
    },
    {
      title: 'Support',
      href: '/support',
    },
  ],
  footerNav: {
    solutions: [
      {
        title: 'Practice Management',
        href: '/features/practice-management',
      },
      {
        title: 'Voice-Activated Charting',
        href: '/features/voice-activated-charting',
      },
      {
        title: 'Patient Check-In',
        href: '/features/patient-check-in',
      },
      {
        title: 'Patient Communication',
        href: '/features/patient-communication',
      },
      {
        title: 'Digital Imaging',
        href: '/features/digital-imaging',
      },
      {
        title: 'eServices',
        href: '/features/eservices',
      },
      {
        title: 'Managed Services',
        href: '/features/managed-services',
      },
      {
        title: 'Hardware Solutions',
        href: '/features/hardware-solutions',
      },
    ],
    support: [
      {
        title: 'Schedule Demo',
        href: '/schedule',
      },
      {
        title: 'Support',
        href: '/support',
      },
      {
        title: 'Resources',
        href: '/resources',
      },
      {
        title: 'Go To Assist',
        href: '/go-to-assist',
      },
    ],
    company: [
      {
        title: 'About',
        href: '/about',
      },
      {
        title: 'Blog',
        href: '/blog',
      },
    ],
    legal: [
      {
        title: 'Privacy',
        href: '/privacy',
      },
    ],
  },
  social: [
    {
      title: ESocialPlatform.LinkedIn,
      href: 'https://www.linkedin.com/company/dentech-pm',
      category: 'social',
      displayOrder: 1,
    },
    {
      title: ESocialPlatform.Facebook,
      href: 'https://www.facebook.com/dentechsoftware',
      category: 'social',
      displayOrder: 2,
    },
    {
      title: ESocialPlatform.Instagram,
      href: 'https://www.instagram.com/dentech_dental_software',
      category: 'social',
      displayOrder: 3,
    },
    {
      title: ESocialPlatform.YouTube,
      href: 'https://www.youtube.com/channel/UCXwTt7Ut9QW9Je1CzOKrlXw',
      category: 'social',
      displayOrder: 4,
    },
  ],
} 