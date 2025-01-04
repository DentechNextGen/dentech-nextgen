import { patientCommunicationSchema } from '@/lib/schema/software'
import { generateBreadcrumbSchema } from '@/lib/schema/breadcrumb'
import { siteConfig } from '@/src/config'

export default function PatientCommunicationLayout({
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
            patientCommunicationSchema,
            generateBreadcrumbSchema([
              { name: 'Home', item: siteConfig.url },
              { name: 'Features', item: `${siteConfig.url}/features` },
              { name: 'Patient Communication', item: `${siteConfig.url}/features/patient-communication` }
            ])
          ])
        }}
      />
      {children}
    </>
  )
} 