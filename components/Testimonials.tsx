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

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 sm:text-4xl">
            Loved by our <span className="relative whitespace-nowrap text-blue-600">Community</span>
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            At Dentech we believe that you shouldn&apos;t have to change the way you practice to match your software. We offer premium dental practice management software that is loved across the United States!
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <li key={index}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                    <blockquote className="relative">
                      <p className="text-lg text-gray-900">{testimonial.content}</p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div className="font-display text-base font-bold text-gray-900">
                          {testimonial.firstname} {testimonial.surname}
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                          {testimonial.surname}
                        </div>
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
  )
} 