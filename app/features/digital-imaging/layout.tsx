import { digitalImagingSchema } from '@/lib/schema/software'
import { generateBreadcrumbSchema } from '@/lib/schema/breadcrumb'
import { siteConfig } from '@/src/config'

export default function DigitalImagingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            digitalImagingSchema,
            generateBreadcrumbSchema([
              { name: 'Home', item: siteConfig.url },
              { name: 'Features', item: `${siteConfig.url}/features` },
              { name: 'Digital Imaging', item: `${siteConfig.url}/features/digital-imaging` }
            ])
          ])
        }}
      />
      {children}
    </>
  )
} 