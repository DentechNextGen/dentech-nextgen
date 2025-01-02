'use client'

import { useEffect } from 'react'
import { faqs } from '@/src/config/faqs'
import { testimonials } from '@/src/config/testimonials'

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (opts: {
          portalId: string
          formId: string
          target: string
        }) => void
      }
    }
  }
}

const SupportContent = () => {
  useEffect(() => {
    // Initialize HubSpot form after the script loads
    const script = document.createElement('script')
    script.src = "//js.hsforms.net/forms/embed/v2.js"
    script.charset = "utf-8"
    script.type = "text/javascript"
    document.head.appendChild(script)

    script.addEventListener('load', () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "5715587",
          formId: "11505929-7ac7-4a5f-8e07-8a7b81eb0d0c",
          target: "#hubspot-form-container"
        })
      }
    })

    return () => {
      // Cleanup
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:max-w-5xl">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Support</h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Get help with your Dentech software. Our support team is here to assist you.
          </p>

          {/* Contact Info */}
          <section className="mt-16 lg:mt-20">
            <div className="mx-auto max-w-4xl">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Contact Us</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                At Dentech, our customer support is there for you. From hardware to software, and everything in between, 
                every contract comes with unlimited phone call support and quick response email inquiries.
              </p>

              <div className="mt-8">
                <h4 className="text-xl font-semibold text-gray-900">Get in touch</h4>
                <p className="mt-2 text-gray-600">
                  If you have any questions prior to your consultation, feel free to reach out!
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Contact</h4>
                  <dl className="mt-4 space-y-2 text-gray-600">
                    <div>
                      <dt className="sr-only">Email</dt>
                      <dd>
                        <a href="mailto:support@dentech.com" className="text-blue-600 hover:text-blue-500">
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
                  </dl>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Customer Support Hours</h4>
                  <p className="mt-4 text-gray-600">
                    Monday - Friday: 8:30 - 5:00 EST
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Support Form */}
          <section className="mt-16 lg:mt-20">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Support Form</h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Need assistance with Dentech NextGen or have any questions? Fill out this form and our dedicated support team will get back to you promptly to ensure your practice runs smoothly.
            </p>
            <div id="hubspot-form-container" className="mt-8 w-full min-h-[600px] rounded-2xl bg-gray-50" />
          </section>

          {/* FAQ section */}
          <section className="mt-16 lg:mt-20">
            <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
              <h3 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                Frequently asked questions
              </h3>
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {faqs.map((faq) => (
                  <div key={faq.question} className="pt-6">
                    <dt>
                      <h4 className="text-base font-semibold leading-7 text-gray-900">
                        {faq.question}
                      </h4>
                    </dt>
                    <dd className="mt-4 text-base leading-7 text-gray-600">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* Testimonials section */}
          <section className="mt-16 lg:mt-20">
            <div className="mx-auto max-w-xl text-center">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Loved by our Community
              </h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                See what our customers are saying about their experience with our support team.
              </p>
            </div>
            <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
              <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.author.name} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                    <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                      <blockquote className="text-gray-900">
                        <p>{testimonial.content}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                          <div className="text-gray-600">{testimonial.author.role}</div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export { SupportContent } 