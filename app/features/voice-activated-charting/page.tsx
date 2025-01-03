'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ClipboardDocumentCheckIcon, CurrencyDollarIcon, PhotoIcon, HeartIcon } from '@heroicons/react/24/outline'
import FiveStars from '@/app/components/FiveStars'

export default function VoiceActivatedCharting() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      type: 'video',
      videoId: 'M37USYgy9Ac',
      thumbnail: `https://img.youtube.com/vi/M37USYgy9Ac/hqdefault.jpg`,
      title: "Discover Dentech's Voice Activated Periodontal Charting"
    },
    {
      type: 'video',
      videoId: '02nyPb1jtxE',
      thumbnail: `https://img.youtube.com/vi/02nyPb1jtxE/hqdefault.jpg`,
      title: "Precision at a Glance Dentech's Innovative Approach to Restorative Charting"
    },
    'services/voice-activated-charting.webp',
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
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-7xl">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
              {/* Gallery */}
              <div className="lg:col-start-1">
                <div className="mx-auto max-w-5xl">
                  {/* Main Image */}
                  <div className="relative rounded-xl bg-white/5 p-2 ring-1 ring-white/10">
                    {(selectedImage && typeof selectedImage === 'object' && 'videoId' in selectedImage) || (!selectedImage && typeof galleryImages[0] === 'object' && 'videoId' in galleryImages[0]) ? (
                      <iframe
                        width="1200"
                        height="800"
                        src={`https://www.youtube.com/embed/${(selectedImage as any)?.videoId || (galleryImages[0] as any).videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full rounded-lg aspect-video"
                      />
                    ) : (
                      <Image
                        src={`/images/${selectedImage || galleryImages[0]}`}
                        alt="Voice-Activated Charting"
                        width={1200}
                        height={800}
                        className="w-full rounded-lg"
                        priority
                      />
                    )}
                  </div>
                  
                  {/* Thumbnails Grid */}
                  <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-4">
                    {galleryImages.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(item)}
                        className={`relative aspect-[4/3] overflow-hidden rounded-lg border-2 transition-all ${
                          selectedImage === item ? 'border-primary-500 ring-2 ring-primary-500' : 'border-white/10 hover:border-primary-400'
                        }`}
                      >
                        {typeof item === 'object' && 'videoId' in item ? (
                          <div
                            style={{
                              backgroundImage: `url(${item.thumbnail})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              width: '100%',
                              height: '100%',
                              position: 'absolute'
                            }}
                            aria-label={item.title || `YouTube Video Thumbnail ${index + 1}`}
                          />
                        ) : (
                          <Image
                            src={`/images/${item}`}
                            alt={`Voice-Activated Charting Screenshot ${index + 1}`}
                            fill
                            className="object-cover"
                          />
                        )}
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
                    Voice-Activated Charting
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Make Clinical Charting A Breeze
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    DenChart is our patented voice-activated charting software, allowing you to chart patient exams swiftly—in as little as 5 minutes—all conveniently housed in one place.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Voice Triplets Commands™ - Speak measurements with Triplet Commands to record pocket depths quickly and accurately without interruption.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Exam Focus Window™ - View a magnified tooth display from 6ft away, ideal for charting perio or restorative conditions, with versatile viewing options.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Auto Advance/Resume - Automatically move to the next tooth for charting, with the ability to pause for detailed conditions and resume seamlessly.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Patented Feedback Control - Enhance voice-activated precision with adjustable feedback speed, minimizing data entry errors.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Flip Command - Easily switch views between lingual and facial sides of a tooth with a simple voice command.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-gray-300">
                    Zooming and Panning - Exclusive Dentech feature for detailed zooming and panning within the exam focus window.
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
              Advanced Voice-Activated Charting
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none text-primary-600">
                    <ClipboardDocumentCheckIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Chart Pre-Existing Conditionals and Treatment Plans (Patented)
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Keep track of treatment proposals and completed work. You can also select defaults for various treatments, either manually or by voice. For example, whenever a crown is charted you can have "gold" automatically selected and change if needed.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/preexisting.webp"
                      alt="Chart Pre-Existing Conditionals"
                      width={400}
                      height={300}
                      className="rounded-xl shadow-lg"
                    />
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none text-primary-600">
                    <CurrencyDollarIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Treatment and Insurance Plans (Patented)
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">See which teeth have proposed treatments or scheduled procedures. Treatment Plan View helps your patients understand out-of-pocket vs. insurance costs for each potential treatment. Plus, you can switch to "teeth view" to show patients tooth image graphics, allowing you to further illustrate treatment options.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/plans.webp"
                      alt="Treatment and Insurance Plans"
                      width={400}
                      height={300}
                      className="rounded-xl shadow-lg"
                    />
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none text-primary-600">
                    <PhotoIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Integrated Digital Imaging
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Our clinical charting allows you to load images from Apteryx right into the software. You get one-click access to everything instead of jumping around multiple program windows.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/digitalimaging.webp"
                      alt="Integrated Digital Imaging"
                      width={400}
                      height={300}
                      className="rounded-xl shadow-lg"
                    />
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-5 w-5 flex-none text-primary-600">
                    <HeartIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  Other Reasons To Love Our Charting
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">Dentech's dental charting system offers a one-click tooth review, an Auto-Compare feature for instant health insights, and efficient Voice Triplets Commands™ for measurement. Its Exam Focus Window™, Auto Advance/Resume functionality, and patented Feedback Control ensure precise and user-friendly charting. Additionally, Flip Command and exclusive Zooming and Panning features enhance the examination process, streamlining dental charting significantly.</p>
                  <p className="mt-6">
                    <Image
                      src="/images/other.webp"
                      alt="Other Reasons To Love Our Charting"
                      width={400}
                      height={300}
                      className="rounded-xl shadow-lg"
                    />
                  </p>
                </dd>
              </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 