import { practiceManagementSchema } from '@/lib/schema/software'
import { generateBreadcrumbSchema } from '@/lib/schema/breadcrumb'
import { siteConfig } from '@/src/config'

export default function PracticeManagementLayout({
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
            practiceManagementSchema,
            generateBreadcrumbSchema([
              { name: 'Home', item: siteConfig.url },
              { name: 'Features', item: `${siteConfig.url}/features` },
              { name: 'Practice Management', item: `${siteConfig.url}/features/practice-management` }
            ])
          ])
        }}
      />
      {children}
    </>
  )
} 