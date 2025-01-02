'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function VoiceActivatedCharting() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    'voice-charting-test.jpg',
    'voice-graphics-1.webp',
    'voice-graphics-2.webp',
    'voice-graphics-3.webp',
    'voice-graphics-4.webp',
    'voice-graphics-5.webp'
  ]

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Voice-Activated Charting
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Hassle-Free Perio and Restorative Charting
            </p>
            <p className="mt-6 text-base leading-7 text-gray-300">
              DenChart is our patented voice-activated charting software, allowing you to chart patient exams swiftly—in as little as 5 minutes—all conveniently housed in one place.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/schedule"
                className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                Schedule Demo
              </a>
              <a href="#features" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mx-auto max-w-5xl">
            {/* Main Image */}
            <div className="relative rounded-xl bg-white/5 p-2 ring-1 ring-white/10">
              <Image
                src={`/images/${selectedImage || galleryImages[0]}`}
                alt="Voice-Activated Charting"
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
                    alt={`Voice-Activated Charting Screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Additional Content */}
            <div className="mt-12 text-center">
              <p className="text-lg leading-8 text-gray-300">
                One-click Tooth Review - Click on a tooth and instantly access its history, including previous conditions and treatments, all in one place.
                Auto-Compare Chart History - Our patented feature provides immediate insights into teeth health changes by simply hovering over a tooth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Advanced Voice-Activated Tools
            </p>
          </div>

          {/* Feature Cards */}
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              {[
                {
                  title: "Voice Triplets Commands™",
                  description: "Speak measurements with Triplet Commands to record pocket depths quickly and accurately without interruption.",
                  image: "voice-graphics-1.webp"
                },
                {
                  title: "Exam Focus Window™",
                  description: "View a magnified tooth display from 6ft away, ideal for charting perio or restorative conditions, with versatile viewing options.",
                  image: "exam-focus-window.jpg"
                },
                {
                  title: "Auto Advance/Resume",
                  description: "Automatically move to the next tooth for charting, with the ability to pause for detailed conditions and resume seamlessly.",
                  image: "voice-graphics-2.webp"
                },
                {
                  title: "Patented Feedback Control",
                  description: "Enhance voice-activated precision with adjustable feedback speed, minimizing data entry errors.",
                  image: "voice-graphics-3.webp"
                },
                {
                  title: "Flip Command",
                  description: "Easily switch views between lingual and facial sides of a tooth with a simple voice command.",
                  image: "voice-graphics-4.webp"
                },
                {
                  title: "Zooming and Panning",
                  description: "Exclusive Dentech feature for detailed zooming and panning within the exam focus window.",
                  image: "voice-graphics-5.webp"
                }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <div className="relative aspect-square overflow-hidden rounded-lg mb-6 border border-gray-200">
                    <Image
                      src={`/images/${feature.image}`}
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
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your charting process?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Schedule a demo today and see how our voice-activated charting can streamline your workflow.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/schedule"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Schedule Demo
              </a>
              <a href="/contact" className="text-sm font-semibold leading-6 text-white">
                Contact Sales <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 