'use client'

import { siteConfig } from '@/config'
import Image from 'next/image'

const testimonials = [
  {
    body: "Dentech has made my life so much easier. My previous practice management software was buggy and was too complex to train employees on. If you're just starting your dental practice, go with Dentech.",
    author: {
      name: 'Dr. Richard Williams',
      handle: 'Dentist at Williams Dental',
      imageUrl: '/images/richard-williams.png',
    },
  },
  {
    body: "Voice activated charting is so good!! My office staff is so happy to finally have voice charting that works!",
    author: {
      name: 'Dr. Gabriel Kurti',
      handle: 'Dentist at Happy Smiles Dentistry',
      imageUrl: '/images/gabriel-kurti.png',
    },
  },
  {
    body: "The Overall software platform ran our office very smoothly. We noticed a huge change almost instantly.",
    author: {
      name: 'Rennee Jackson',
      handle: 'Dental Assistant of Bull City Dental',
      imageUrl: '/images/rennee-jackson.png',
    },
  },
]

export const Testimonials = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary-base">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by our Community
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            At Dentech we believe that you shouldn't have to change the way you practice to match your software. We offer premium dental practice management software that is loved across the United States!
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`"${testimonial.body}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src={testimonial.author.imageUrl}
                      alt={testimonial.author.name}
                      width={40}
                      height={40}
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600">{testimonial.author.handle}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 