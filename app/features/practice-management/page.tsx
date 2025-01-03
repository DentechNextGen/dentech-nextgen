'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function PracticeManagement() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    'practice-management-1.webp',
    'practice-management-2.webp',
    'practice-management-3.webp',
    'practice-management-4.webp',
    'practice-management-5.webp',
    'exam-focus-window.jpg'
  ]

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Practice Management
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Dental Practice Management Software Done Right. Our system offers advanced financial and patient reports, 
                all conveniently housed in one place. With our easy insurance processing features, managing your patients&apos; 
                insurance claims becomes a breeze.
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

            {/* Gallery */}
            <div className="mt-16">
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
              
              <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-4">
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
                      sizes="(max-width: 640px) 30vw, (max-width: 768px) 15vw, 12vw"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <div className="max-w-2xl">
              <h2 className="text-base font-semibold leading-7 text-primary-600">Features</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                Powerful Practice Management Tools
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our integrated system provides extensive features to make your practice management smoother than ever.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Quick Phone Inquiry",
                  description: "With one click, view patient information, history, and insurance, and more.",
                  image: "inquiry.jpg"
                },
                {
                  title: "Appointment Scheduler",
                  description: "Streamline your day and increase your efficiency.",
                  image: "scheduler.jpg"
                },
                {
                  title: "Treatment Planning",
                  description: "An effective tool for presenting proposed treatments to patients.",
                  image: "planning.jpg"
                },
                {
                  title: "Insurance Processing",
                  description: "Streamline insurance exceptions and fee schedules and get rid of unnecessary manual tracking.",
                  image: "insuranceprocessing.jpg"
                },
                {
                  title: "Advanced Reporting",
                  description: "An extensive range of different reports for the benefit of your practice.",
                  image: "reporting.jpg"
                },
                {
                  title: "And More",
                  description: "Track activity on your system for each employee carrying out work with trackable HIPPA logs. Keep track of employees' working hours and create reports of each employee's hours with Time Clock. Easily add notes to every patient file with Clinical Notes.",
                  image: "andmore.jpg"
                }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <div className="relative aspect-square overflow-hidden rounded-lg mb-6 border border-gray-200">
                    <Image
                      src={`/images/features/${feature.image}`}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to transform your practice?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                Schedule a demo today and see how our practice management software can streamline your operations.
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