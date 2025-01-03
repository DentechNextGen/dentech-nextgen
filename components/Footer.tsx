import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/src/config'

const navigation = {
  features: [
    { name: 'Practice Management', href: '/features/practice-management' },
    { name: 'Voice-Activated Charting', href: '/features/voice-activated-charting' },
    { name: 'Document Management', href: '/features/document-management' },
    { name: 'Patient Check-In', href: '/features/patient-check-in' },
    { name: 'Patient Communication', href: '/features/patient-communication' },
    { name: 'Digital Imaging', href: '/features/digital-imaging' },
    { name: 'Eservices', href: '/features/eservices' },
    { name: 'Managed Services', href: '/features/managed-services' },
    { name: 'Hardware Solutions', href: '/features/hardware-solutions' },
  ],
  support: [
    { name: 'Schedule Demo', href: '/schedule' },
    { name: 'Support', href: '/support' },
    { name: 'Go To Assist', href: '/go-to-assist' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/dentech-pm',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/dentechsoftware',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/dentech_dental_software',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UCXwTt7Ut9QW9Je1CzOKrlXw',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Image
              src="/icons/logo.svg"
              alt={siteConfig.name}
              width={150}
              height={50}
              className="h-12 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="mt-4 text-sm text-gray-300">
              Dentech&apos;s cutting-edge, efficient solutions are designed to speed up your practice. Our platform streamlines all aspects of practice management, from appointment scheduling to billing, into one seamless process.
            </p>
            <div className="mt-4 flex gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Features</h3>
            <ul className="mt-4 space-y-2">
              {navigation.features.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-2">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-300 hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Dentech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 