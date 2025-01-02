import { siteConfig } from '@/src/config'

export default function Privacy() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Privacy Policy
        </h1>
        <div className="mt-10 prose prose-lg prose-gray">
          <p>
            Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
          
          <h2>Information We Collect</h2>
          <p>
            We collect information that you provide directly to us when you:
          </p>
          <ul>
            <li>Fill out forms on our website</li>
            <li>Subscribe to our newsletter</li>
            <li>Request a demo</li>
            <li>Contact us for support</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Respond to your inquiries</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Improve our website and services</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            <a href="mailto:privacy@dentech.com" className="text-blue-600 hover:text-blue-500">
              privacy@dentech.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
} 