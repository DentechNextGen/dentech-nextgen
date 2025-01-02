'use client'

import Image from 'next/image'
import { 
  ClockIcon, 
  HeartIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    title: 'Our History',
    description: 'Over four decades ago, our founder Raymond F. Kaminski saw the growing need for innovation in dental practice management software. He was committed to making his vision a reality—a world in which computer technology and dentistry functioned seamlessly, improving the lives of doctors and patients alike.',
    icon: ClockIcon
  },
  {
    title: 'Our Values',
    description: 'More and more we see the importance of staying customer centric, value focused. At Dentech, each member of our team embodies certain traits that ensure your software is made with the same care you have for your patients.',
    icon: HeartIcon
  },
  {
    title: 'Our Vision',
    description: 'We will stay committed to servicing our customers and the dental industry with the care and concern that we are known for while staying on the cutting edge of technology.',
    icon: RocketLaunchIcon
  }
]

export default function About() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              About Dentech
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We are a team of passionate individuals dedicated to revolutionizing dental practice management.
              Our mission is to provide innovative solutions that empower dental practices to deliver exceptional patient care.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="relative">
                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary-600/10">
                        <Icon className="h-8 w-8 text-primary-600" aria-hidden="true" />
                      </div>
                      <h3 className="mt-6 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Leadership
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Meet the dedicated professionals behind Dentech.
              </p>
            </div>

            <div className="mt-16 lg:mt-20">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="relative aspect-[4/3] lg:aspect-[3/4]">
                  <div className="relative h-full overflow-hidden rounded-2xl">
                    <Image 
                      src="/images/jane-kaminski.jpg"
                      alt="Jane E. Kaminski"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-gray-900/0" />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                      Jane E. Kaminski
                    </h3>
                    <p className="mt-2 text-lg font-semibold leading-8 text-primary-600">
                      Chief Executive Officer
                    </p>
                    <div className="mt-6 space-y-6 text-base leading-7 text-gray-600">
                      <p>
                        Today, under the helm of Jane Kaminski, Dentech continues to provide technology-leading 
                        solutions for dental practice management software. With Dentech 2.0, Jane brings the next 
                        leap forward introducing not only next-gen technology, but also challenging the status quo 
                        as a female software business leader.
                      </p>
                      <blockquote className="border-l-4 border-primary-600 pl-4 italic">
                        &ldquo;With over 40 years of service to our customers and the dental industry as a whole we are 
                        excited for what lies ahead for us as a company, for our customers and the entire dental 
                        industry. It is my goal to not only continue the legacy that my father has built, but to 
                        also leverage modern day technology so that we can continue to provide world class solutions 
                        for our customers.&rdquo;
                      </blockquote>
                      <p>
                        &ldquo;We will stay committed to servicing our customers and the dental industry with the care 
                        and concern that we are known for while staying on the cutting edge of technology. We look 
                        forward to the next 40 years and we thank each of our customers who have supported us and 
                        helped us build the company and products that we are today.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 