'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { CTA } from '@/components/CTA'
import Script from 'next/script'

// Add type definition for HubSpot
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          region: string
          portalId: string
          formId: string
          target: string
        }) => void
      }
    }
  }
}

// Hero section content
const heroContent = {
  title: 'Support',
  description: 'At Dentech, our customer support is there for you. From hardware to software, and everything in between, every contract comes with unlimited phone call support and quick response email inquiries.'
}

// Our story sections
const faqs = [
  {
    question: 'What hardware and internet connectivity is recommended for Dentech NextGen?',
    answer: 'For optimal performance of Dentech NextGen, please refer to the hardware specifications and internet connectivity guidelines listed on our resource page. It is essential to meet these requirements to ensure the software runs smoothly and efficiently in your dental practice.',
  },
  {
    question: 'What is included when signing up for Dentech NextGen?',
    answer: 'Our comprehensive service package includes dedicated phone and email support available Monday through Friday, regular updates and enhancements to keep your software up-to-date with the latest features, access to an extensive library of training videos, and the assurance of a robust and efficient software system designed for the modern dental practice.',
  },
  {
    question: 'How do I convert my existing practice to Dentech?',
    answer: 'With decades of knowledge and vast experience Dentech\'s conversion team can assist with any conversion from any software platform. A dedicated team will assist you step by step in the process to ensure that the data you need is both there and accurate to make your transition to Dentech as smooth as possible. Call 800.233.4998 ext. 239 or email info@dentech.com',
  },
  {
    question: 'How is patient data transferred to Dentech NextGen?',
    answer: 'We make the transition seamless by providing specialized conversion programs designed to import data from competitor software. Our process involves running a trial conversion to ensure data integrity, followed by the final conversion to securely transfer all your patient data to Dentech NextGen.',
  },
  {
    question: 'How can users stay updated on Dentech NextGen features?',
    answer: 'Stay informed about the latest Dentech NextGen features and updates through our informative newsletter, regularly updated blog, and convenient pop-up displays within the software that highlight recent enhancements and tips for using new functionalities.',
  },
  {
    question: 'What are the system requirements for Dentech?',
    answer: 'Dentech solutions strongly adhere to compliance with MICROSOFT WINDOWS operating systems and specified hardware requirements herein. The entire Dentech solution suite has been tested and certified using the system requirements described herein. Any deviation may result in unpredictable behavior and/or poor performance.',
  },
  {
    question: 'I\'m currently using Dentech Legacy, how do I switch to NextGen?',
    answer: 'Transitioning from Dentech Legacy to NextGen is straightforward. Call us today to speak with one of our customer service representatives who will guide you through the process and answer any questions you may have. We\'re committed to ensuring a smooth upgrade experience for all our clients.',
  },
  {
    question: 'What type of initial training does Dentech provide?',
    answer: 'We offer personalized 1-on-1 training sessions that can be conducted remotely or on-site, depending on your preference and location. Our goal is to ensure that you and your staff are fully comfortable and proficient in using Dentech NextGen from day one.',
  },
  {
    question: 'Do you offer financing plans?',
    answer: 'We offer a variety of options that best fit your financial needs. From leasing, financing to payment plans, Dentech has the financial plan that will work with you. For more information or to get in contact with a sales representative who can answer your questions, please email sales@dentech.com or call 800.233.4998 ext. 239.',
  },
]

// Testimonials
const testimonials = [
  {
    content: 'Dentech has made my life so much easier. My previous practice management software was buggy and was too complex to train employees on. If you\'re just starting your dental practice, go with Dentech.',
    author: {
      name: 'Richard Williams',
      role: 'Dentist at Williams Dental',
      image: '/images/richard-williams.png',
    },
  },
  {
    content: 'Voice activated charting is so good!! My office staff is so happy to finally have voice charting that works!',
    author: {
      name: 'Gabriel Kurti',
      role: 'Dentist at Happy Smiles Dentistry',
      image: '/images/gabriel-kurti.png',
    },
  },
  {
    content: 'The Overall software platform ran our office very smoothly. We noticed a huge change almost instantly.',
    author: {
      name: 'Rennee Jackson',
      role: 'Dentist of Cole Dental Group',
      image: '/images/rennee-jackson.png',
    },
  },
]

export function SupportContent() {
  useEffect(() => {
    // Create a function to initialize HubSpot form
    const initHubSpotForm = () => {
      if (window.hbspt && document.getElementById('hubspotForm')) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "5715587",
          formId: "11505929-7ac7-4a5f-8e07-8a7b81eb0d0c",
          target: "#hubspotForm"
        });
      }
    };

    // Try to initialize immediately if HubSpot is already loaded
    initHubSpotForm();

    // Also set up a listener for when the script loads
    const handleScriptLoad = () => {
      initHubSpotForm();
    };

    window.addEventListener('hubspot:loaded', handleScriptLoad);

    return () => {
      window.removeEventListener('hubspot:loaded', handleScriptLoad);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      <Script 
        src="//js.hsforms.net/forms/embed/v2.js" 
        strategy="afterInteractive"
        onLoad={() => {
          // Trigger initialization when script loads
          if (window.hbspt) {
            window.hbspt.forms.create({
              region: "na1",
              portalId: "5715587",
              formId: "11505929-7ac7-4a5f-8e07-8a7b81eb0d0c",
              target: "#hubspotForm"
            });
          }
        }}
      />
      <div className="bg-white">
        {/* Hero section */}
        <section id="get-started-today" className="bg-primary-100 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="px-6 pt-16 pb-4 lg:px-8">
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="font-display text-3xl font-bold sm:text-4xl">
                  <span className="text-primary">Customer </span>
                  <span className="text-accent">Support</span>
                </h2>
                <div className="mt-6 text-left text-lg leading-8 text-primary">
                  <div className="flex items-start gap-3">
                    <p className="mb-4">{heroContent.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative h-[110px] p-0">
          <svg className="w-full" viewBox="0 0 1920 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ fill: '#F2F5FF' }}>
            <path d="M0 0H1920V23.4197C1920 40.325 1907.32 54.2924 1890.45 55.3984C1744.66 64.9576 1103.56 109.281 970.166 157.83C963.441 160.277 956.559 160.277 949.834 157.83C816.436 109.281 175.342 64.9576 29.5456 55.3984C12.6765 54.2924 0 40.325 0 23.4197V0Z" />
          </svg>
        </div>

        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                <div>
                  <h2 className="font-display text-3xl font-bold text-primary">Get in touch</h2>
                  <p className="mt-4 leading-7 text-primary-600">
                    If you have any questions prior to your consultation, feel free to reach out!
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:col-span-2 lg:gap-8">
                  <div className="rounded-2xl bg-primary-100 p-10 text-gray-700">
                    <h3 className="text-base font-semibold leading-7 text-primary">Support Information</h3>
                    <ul>
                      <li>Email: <a href="mailto:support@dentech.com">support@dentech.com</a></li>
                      <li>General: +1 (800)-233-4998</li>
                      <li>Support: +1 (866)-549-8702</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-primary-100 p-10 text-gray-700">
                    <h3 className="text-base font-semibold leading-7 text-primary">Customer Support Hours</h3>
                    <ul>
                      <li><strong>Monday - Friday</strong>: <a href="mailto:support@dentech.com">8:30 - 5:00 EST</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
                <div>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-primary">Support Form</h2>
                  <p className="mt-4 leading-7 text-primary-600">
                    Need assistance with Dentech NextGen or have any questions? Fill out this form and our dedicated support team will get back to you promptly to ensure your practice runs smoothly.
                  </p>
                </div>
                <div className="lg:col-span-2 lg:gap-8">
                  <div 
                    id="hubspotForm" 
                    className="rounded-2xl bg-primary-100 p-10 w-full h-[800px]"
                    style={{ 
                      minWidth: '320px',
                      height: '100%',
                      overflow: 'hidden'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="faq" aria-labelledby="faq-title" className="relative overflow-hidden bg-accent-200 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 id="faq-title" className="font-display text-3xl font-bold text-primary sm:text-4xl">
                Frequently asked{' '}
                <span className="relative whitespace-nowrap text-accent">
                  <p className="relative">questions</p>
                </span>{' '}
              </h2>
            </div>
            <ul role="list" className="mx-auto mt-16 mb-auto grid max-w-2xl grid-cols-1 content-start gap-8 lg:max-w-none lg:grid-cols-3">
              {[0, 1, 2].map((columnIndex) => (
                <li key={`faq_col_${columnIndex}`}>
                  <ul role="list" className="flex flex-col gap-y-8">
                    {faqs.slice(columnIndex * 3, columnIndex * 3 + 3).map((faq, index) => (
                      <li key={`faq_item_${index}`}>
                        <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                          <h3 className="font-display text-lg font-bold leading-7 text-primary">
                            {faq.question}
                          </h3>
                          <p className="mt-4 border-l-2 border-accent pl-6 text-sm text-primary">
                            {faq.answer}
                          </p>
                        </figure>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="testimonials" aria-label="What our customers are saying" className="bg-slate-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl md:text-center">
              <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
                Loved by our <span className="relative whitespace-nowrap text-accent">Community</span>
              </h2>
              <p className="mt-4 text-lg text-slate-700">
                At Dentech we believe that you shouldn't have to change the way you practice to match your software. We offer premium dental practice management software that is loved across the United States!.
              </p>
            </div>
            <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <li key={index}>
                  <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                    <li>
                      <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-primary/10">
                        <svg
                          aria-hidden="true"
                          width="105"
                          height="78"
                          className="absolute top-6 left-6 fill-slate-100"
                        >
                          <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                        </svg>
                        <blockquote className="relative">
                          <p className="text-lg text-primary">{testimonial.content}</p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                          <div>
                            <div className="font-display text-base font-bold text-primary">
                              {testimonial.author.name}
                            </div>
                            <div className="mt-1 text-sm text-slate-500">{testimonial.author.role}</div>
                          </div>
                          <div className="overflow-hidden rounded-full bg-slate-50">
                            <Image
                              className="h-14 w-14 object-cover"
                              src={testimonial.author.image}
                              alt="Testimonial Img"
                              width={120}
                              height={120}
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <CTA />
      </div>
    </>
  )
} 