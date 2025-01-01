'use client'

import Image from 'next/image'

const testimonials = [
  {
    firstname: 'Richard',
    surname: 'Williams',
    content: 'Dentech has made my life so much easier. My previous practice management software was buggy and was too complex to train employees on. If you&apos;re just starting your dental practice, go with Dentech.'
  },
  {
    firstname: 'Gabriel',
    surname: 'Kurti',
    content: 'Voice activated charting is so good!! My office staff is so happy to finally have voice charting that works!'
  },
  {
    firstname: 'Rennee',
    surname: 'Jackson',
    content: 'The Overall software platform ran our office very smoothly. We noticed a huge change almost instantly.'
  }
]

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Loved by our <span className="relative whitespace-nowrap text-accent">Community</span>
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            At Dentech we believe that you shouldn&apos;t have to change the way you practice to match your software. We offer premium dental practice management software that is loved across the United States!
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <li key={testimonial.firstname}>
              <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                <blockquote className="relative">
                  <p className="text-lg tracking-tight text-slate-900">
                    {testimonial.content}
                  </p>
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div className="font-display text-base text-slate-900">
                      {testimonial.firstname} {testimonial.surname}
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-slate-50">
                    <Image
                      className="h-14 w-14 object-cover"
                      src={`/images/${testimonial.firstname.toLowerCase()}-${testimonial.surname.toLowerCase()}.png`}
                      alt={`${testimonial.firstname} ${testimonial.surname}&apos;s testimonial`}
                      width={56}
                      height={56}
                    />
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
} 