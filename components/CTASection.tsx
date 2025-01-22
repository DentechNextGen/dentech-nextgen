interface CTASectionProps {
  title: string
  description: string
  primaryButtonText?: string
  primaryButtonLink?: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

export default function CTASection({
  title,
  description,
  primaryButtonText = 'Schedule Demo',
  primaryButtonLink = '/schedule',
  secondaryButtonText = 'Contact Sales',
  secondaryButtonLink = '/support'
}: CTASectionProps) {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-16 sm:py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="mx-auto max-w-2xl text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            {title}
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-gray-300">
            {description}
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
            <a
              href={primaryButtonLink}
              className="w-full sm:w-auto rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {primaryButtonText}
            </a>
            <a 
              href={secondaryButtonLink} 
              className="text-sm font-semibold leading-6 text-white hover:text-gray-300"
            >
              {secondaryButtonText} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 