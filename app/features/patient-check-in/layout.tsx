import { patientCheckInSchema } from '@/lib/schema/software'
import { generateBreadcrumbSchema } from '@/lib/schema/breadcrumb'
import { siteConfig } from '@/src/config'

export default function PatientCheckInLayout({
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
            patientCheckInSchema,
            generateBreadcrumbSchema([
              { name: 'Home', item: siteConfig.url },
              { name: 'Features', item: `${siteConfig.url}/features` },
              { name: 'Patient Check-In', item: `${siteConfig.url}/features/patient-check-in` }
            ])
          ])
        }}
      />
      {children}
    </>
  )
} 