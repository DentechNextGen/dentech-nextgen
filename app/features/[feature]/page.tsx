export async function generateStaticParams() {
  return [
    { feature: 'practice-management' },
    { feature: 'voice-activated-charting' },
    { feature: 'document-management' },
    { feature: 'patient-check-in' },
    { feature: 'patient-communication' },
    { feature: 'digital-imaging' },
    { feature: 'managed-services' },
    { feature: 'hardware-solutions' },
  ]
}

export default async function Feature(props: any) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {props.params.feature}
          </h1>
        </div>
      </div>
    </div>
  )
} 