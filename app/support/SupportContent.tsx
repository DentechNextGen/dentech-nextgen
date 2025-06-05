'use client'

import { useEffect } from 'react'
import { faqs } from '@/src/config/faqs'

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (opts: {
          portalId: string
          formId: string
          target?: string
          region?: string
          css?: string
        }) => void
      }
    }
  }
}

const SupportContent = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script')
    script.src = "//js.hsforms.net/forms/embed/v2.js"
    script.charset = "utf-8"
    script.type = "text/javascript"
    document.head.appendChild(script)

    // Once the script is loaded, create the form
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "5715587",
          formId: "11505929-7ac7-4a5f-8e07-8a7b81eb0d0c",
          target: "#hubspot-form-container",
          css: `
            .hs-form {
              display: flex;
              flex-direction: column;
              gap: 1rem;
              max-width: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            .hs-form input, .hs-form textarea, .hs-form select {
              width: 100% !important;
              padding: 0.75rem 1rem !important;
              border-radius: 0.5rem !important;
              border: 1px solid #e5e7eb !important;
              background-color: white !important;
            }
            .hs-form input:focus, .hs-form textarea:focus, .hs-form select:focus {
              outline: none !important;
              ring: 2px !important;
              ring-offset: 2px !important;
              ring-primary-600 !important;
              border-color: #2563eb !important;
            }
            .hs-form label {
              font-weight: 500 !important;
              color: #111827 !important;
              margin-bottom: 0.5rem !important;
            }
            .hs-form-required {
              color: #dc2626 !important;
            }
            .hs-error-msg {
              color: #dc2626 !important;
              margin-top: 0.25rem !important;
              font-size: 0.875rem !important;
            }
            .hs-button {
              background-color: #2563eb !important;
              color: white !important;
              padding: 0.75rem 1.5rem !important;
              border-radius: 0.5rem !important;
              font-weight: 600 !important;
              transition: background-color 0.2s !important;
              border: none !important;
              cursor: pointer !important;
            }
            .hs-button:hover {
              background-color: #1d4ed8 !important;
            }
            .hs-richtext {
              margin-bottom: 1rem !important;
            }
            .submitted-message {
              color: #059669 !important;
              font-weight: 500 !important;
              text-align: center !important;
              padding: 1rem !important;
            }
          `
        })
      }
    }

    return () => {
      // Cleanup
      const formContainer = document.getElementById('hubspot-form-container')
      if (formContainer) {
        formContainer.innerHTML = ''
      }
      document.head.removeChild(script)
    }
  }, [])

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              At Dentech, our customer support is there for you. From hardware to software, and everything in between, 
              every contract comes with unlimited phone call support and quick response email inquiries.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Get in touch</h2>
            <p className="mt-4 leading-7 text-gray-600">
              If you have any questions prior to your consultation, feel free to reach out!
            </p>
            
            <div className="mt-16">
              <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
              <dl className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <a href="mailto:support@dentech.com" className="text-primary-600 hover:text-primary-500">
                      Email: support@dentech.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">General Phone</dt>
                  <dd>General: +1 (800)-233-4998</dd>
                </div>
                <div>
                  <dt className="sr-only">Support Phone</dt>
                  <dd>Support: +1 (866)-549-8702</dd>
                </div>
                <div>
                  <dt className="sr-only">Support Hours</dt>
                  <dd>Monday - Friday: 8:30 - 5:00 EST</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Support Form Section */}
      <div id="contact-form" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Support Form</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Need assistance with Dentech or have any questions? Fill out this form and our dedicated 
                support team will get back to you promptly to ensure your practice runs smoothly.
              </p>
            </div>
            <div className="mt-16 bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5">
              <div id="hubspot-form-container" className="px-6 py-12 sm:p-12" />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <div key={faq.question} className="pt-6">
                  <dt>
                    <h3 className="text-base font-semibold leading-7 text-gray-900">
                      {faq.question}
                    </h3>
                  </dt>
                  <dd className="mt-4 text-base leading-7 text-gray-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </main>
  )
}

export { SupportContent } 