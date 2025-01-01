const domain = 'dentech.com'

export const siteConfig = {
  name: 'Dentech',
  legalName: 'Dentech Services',
  slogan: 'Transform Your Dental Practice with Dentech',
  description: 'Experience Dentech, the revolutionary dental practice management software that has been trusted by professionals for over four decades.',
  url: `https://${domain}`,
  ogImage: `https://${domain}/og.jpg`,
  links: {
    calendly: 'https://calendly.com/jane-kaminski/introductory-call',
  },
  founder: 'Jane Kaminski',
  contact: {
    email: 'support@dentech.com',
    phone: '(800) 233-4998',
  },
  analytics: {
    googleTagManagerId: 'GTM-N9TJ4QR',
  },
  theme: {
    fonts: {
      sans: ['var(--font-poppins)'],
    },
    colors: {
      primary: {
        base: '37, 53, 108',
        '100': '242, 245, 255',
        '200': '180, 197, 229',
        '800': '29, 41, 79',
        '900': '22, 31, 59',
      },
      accent: {
        base: '133, 196, 64',
        '100': '216, 232, 212',
        '500': '119, 176, 57',
        '600': '53, 88, 52',
        '800': '17, 39, 11',
      },
    },
  },
}

export type SiteConfig = typeof siteConfig 