import { voiceChartingSchema } from '@/lib/schema/software'
import { generateBreadcrumbSchema } from '@/lib/schema/breadcrumb'
import { siteConfig } from '@/src/config'

export default function VoiceChartingLayout({
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
            voiceChartingSchema,
            generateBreadcrumbSchema([
              { name: 'Home', item: siteConfig.url },
              { name: 'Features', item: `${siteConfig.url}/features` },
              { name: 'Voice-Activated Charting', item: `${siteConfig.url}/features/voice-activated-charting` }
            ])
          ])
        }}
      />
      {children}
    </>
  )
} 