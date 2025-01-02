import Image from 'next/image'

const testimonials = [
  {
    id: '1',
    content:
      'The support team at DenTech is amazing. They helped me transition my practice to their software seamlessly.',
    author: 'Dr. Sarah Johnson',
    role: 'General Dentist',
    image: '/images/testimonial-1.jpg',
  },
  {
    id: '2',
    content:
      'Whenever I have questions, their support team is quick to respond and always helpful.',
    author: 'Dr. Michael Chen',
    role: 'Orthodontist',
    image: '/images/testimonial-2.jpg',
  },
  {
    id: '3',
    content:
      'The training and support provided by DenTech has been invaluable to our practice.',
    author: 'Dr. Emily Rodriguez',
    role: 'Pediatric Dentist',
    image: '/images/testimonial-3.jpg',
  },
]

export default function Support() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Support & Training
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            We&apos;re here to help you succeed with our comprehensive support and training programs.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col">
              <div className="flex flex-1 flex-col justify-between">
                <div className="relative flex items-center gap-x-4">
                  <Image
                    src={testimonial.image}
                    alt=""
                    width={48}
                    height={48}
                    className="rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-600">{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 