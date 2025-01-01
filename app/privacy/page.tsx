import { Metadata } from 'next'
import { siteConfig } from '@/config'

export const metadata: Metadata = {
  title: `Privacy Policy - ${siteConfig.name}`,
  description: 'Learn about how Dentech protects your data and maintains HIPAA compliance in our dental practice management software.',
}

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-primary-100 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="font-display text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Privacy Policy
            </h1>
          </div>
        </div>
      </div>

      {/* Content sections */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <article className="prose prose-slate mx-auto max-w-4xl dark:prose-invert prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-base">
            <div className="prose prose-slate dark:prose-invert">
              <h2>Introduction</h2>
              <p>
                At {siteConfig.name}, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our dental practice management software and related services.
              </p>

              <h2>Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including:
              </p>
              <ul>
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Practice information</li>
                <li>Payment information</li>
                <li>Usage data and preferences</li>
              </ul>

              <h2>HIPAA Compliance</h2>
              <p>
                As a provider of dental practice management software, we maintain strict compliance with HIPAA regulations. We implement appropriate technical and organizational measures to ensure the security of your data.
              </p>

              <h2>Data Security</h2>
              <p>
                We use industry-standard security measures to protect your information, including:
              </p>
              <ul>
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and assessments</li>
                <li>Access controls and authentication</li>
                <li>Secure data centers and backup systems</li>
              </ul>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                Email: {siteConfig.contact.email}<br />
                Phone: {siteConfig.contact.phone}
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
} 