'use client'

import Image from 'next/image'
import { useState } from 'react'
import { PhoneIcon, CalendarIcon, ClipboardDocumentCheckIcon, CurrencyDollarIcon, ChartBarSquareIcon, CogIcon } from '@heroicons/react/24/outline'
import FiveStars from '@/app/components/FiveStars'

export default function PracticeManagement() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    'services/practice-management.webp',
    'practice-management-1.webp',
    'practice-management-2.webp',
    'practice-management-3.webp',
    'practice-management-4.webp',
    'practice-management-5.webp'
  ]

  const features = [
    {
      title: "Quick Phone Inquiry",
      description: "With one click, view patient information, history, and insurance, and more.",
      img: "/images/features/inquiry.webp",
      icon: "PhoneIcon",
    },
    {
      title: "Appointment Scheduler",
      description: "Streamline your day and increase your efficiency.",
      img: "/images/features/scheduler.webp",
      icon: "CalendarIcon",
    },
    {
      title: "Treatment Planning",
      description: "An effective tool for presenting proposed treatments to patients.",
      img: "/images/features/planning.webp",
      icon: "ClipboardDocumentCheckIcon",
    },
    {
      title: "Insurance Processing",
      description: "Streamline insurance exceptions and fee schedules and get rid of unnecessary manual tracking.",
      img: "/images/features/insuranceprocessing.webp",
      icon: "CurrencyDollarIcon",
    },
    {
      title: "Advanced Reporting",
      description: "An extensive range of different reports for the benefit of your practice.",
      img: "/images/features/reporting.webp",
      icon: "ChartBarSquareIcon",
    },
    {
      title: "And More",
      description: "Track activity on your system for each employee carrying out work with trackable HIPPA logs. Keep track of employees&apos; working hours and create reports of each employee&apos;s hours with Time Clock. Easily add notes to every patient file with Clinical Notes.",
      img: "/images/features/andmore.webp",
      icon: "CogIcon",
    },
  ]

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-7xl">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
              {/* Gallery */}
              <div className="lg:col-start-1">
                <div className="mx-auto max-w-5xl">
                  {/* Main Image */}
                  <div className="relative rounded-xl bg-white/5 p-2 ring-1 ring-white/10">
                    <Image
                      src={`/images/${selectedImage || galleryImages[0]}`}
                      alt="Practice Management"
                      width={1200}
                      height={800}
                      className="w-full rounded-lg"
                      priority
                    />
                  </div>
                  
                  {/* Thumbnails Grid */}
                  <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-4">
                    {galleryImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className={`relative aspect-[4/3] overflow-hidden rounded-lg border-2 transition-all ${
                          selectedImage === image ? 'border-primary-500 ring-2 ring-primary-500' : 'border-white/10 hover:border-primary-400'
                        }`}
                      >
                        <Image
                          src={`/images/${image}`}
                          alt={`Practice Management Screenshot ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mt-16 lg:mt-0 lg:col-start-2">
                <div className="text-left">
                  <FiveStars />
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Practice Management
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Dental Practice Management Software Done Right
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Our system offers advanced financial and patient reports, all conveniently housed in one place. With our easy insurance processing features, managing your patients&apos; insurance claims becomes a breeze.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    The appointment scheduler is designed to make planning your day completely effortless. Our integrated employee time clock also provides extensive reports, making payroll and accounting tasks smoother than ever.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Prioritize your practice&apos;s security with features like user logs, write-off limits, and more. Experience the convenience with our one-click access to scheduling, insurance verification, and so much more!
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    <a href="/docs/Dentech-System-Requirements-2024.pdf" className="text-lime-400 hover:text-lime-300 underline">
                      View System Requirements →
                    </a>
                  </p>
                  <div className="mt-10 flex items-start gap-x-6">
                    <a
                      href="/schedule"
                      className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Schedule Demo
                    </a>
                    <a
                      href="/support"
                      className="rounded-md ring-1 ring-white px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Complete Practice Management
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <div className="h-5 w-5 flex-none text-primary-600">
                      {feature.icon === "PhoneIcon" && <PhoneIcon className="h-5 w-5" aria-hidden="true" />}
                      {feature.icon === "CalendarIcon" && <CalendarIcon className="h-5 w-5" aria-hidden="true" />}
                      {feature.icon === "ClipboardDocumentCheckIcon" && <ClipboardDocumentCheckIcon className="h-5 w-5" aria-hidden="true" />}
                      {feature.icon === "CurrencyDollarIcon" && <CurrencyDollarIcon className="h-5 w-5" aria-hidden="true" />}
                      {feature.icon === "ChartBarSquareIcon" && <ChartBarSquareIcon className="h-5 w-5" aria-hidden="true" />}
                      {feature.icon === "CogIcon" && <CogIcon className="h-5 w-5" aria-hidden="true" />}
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <Image
                        src={feature.img}
                        alt={feature.title}
                        width={400}
                        height={300}
                        className="rounded-xl shadow-lg"
                      />
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to streamline your practice management?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Schedule a demo today and see how our practice management solutions can transform your practice.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/schedule"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 