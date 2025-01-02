import { siteConfig } from '@/src/config'
import { navigationConfig } from '@/src/config/navigation'
import Image from 'next/image'
import Link from 'next/link'
import SocialIcons from '@/components/SocialIcons'

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Image
              src="/icons/logo.svg"
              alt={siteConfig.name}
              width={150}
              height={50}
              className="h-12 w-auto"
              style={{ width: "auto", height: "48px" }}
            />
            <p className="text-sm leading-6 text-gray-600">
              {siteConfig.description}
            </p>
            <SocialIcons />
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            {navigationConfig.footerNav.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  {section.title}
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 