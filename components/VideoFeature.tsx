import Image from 'next/image'
import { 
  ClockIcon,
  UserGroupIcon,
  CursorArrowRaysIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    title: 'Revolutionizing Dental Practice Management For Over 40 Years',
    description: 'Dentech originated from the era of pegboard-based patient appointment tracking in dental practices. Our foundation lies in understanding practice owners\' needs and innovatively using technology to address their daily challenges.',
    icon: ClockIcon
  },
  {
    title: 'White-Glove Service',
    description: 'We continue that tradition of listening to your needs as a practice owner and provide a level of service that\'s in a class of its own, anytime you need us.',
    icon: UserGroupIcon
  },
  {
    title: 'Intuitive and User-Friendly Design',
    description: 'The one-button control has a digital readout for setting temperature and turning the kettle on and off.',
    icon: CursorArrowRaysIcon
  },
  {
    title: 'Robust Security',
    description: 'Enjoy peace of mind with Dentech\'s advanced security features, ensuring your practice\'s data is managed accurately and securely.',
    icon: ShieldCheckIcon
  }
]

export default function VideoFeature() {
  return (
    <div className="bg-gray-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                What Can Dentech Do For You
              </h2>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.title} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon className="absolute left-0 top-1 h-5 w-5 text-lime-500" aria-hidden="true" />
                      {feature.title}
                    </dt>
                    <dd className="inline ml-1">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <iframe
              className="w-full aspect-video rounded-xl shadow-xl ring-1 ring-white/10"
              src="https://www.youtube.com/embed/2Xgow_I0Eh0?si=mLlNKiHPi-2HQeHy"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/practice-management-1.webp"
                alt="Practice Management Feature 1"
                width={500}
                height={300}
                className="rounded-xl shadow-xl ring-1 ring-white/10"
              />
              <Image
                src="/images/practice-management-2.webp"
                alt="Practice Management Feature 2"
                width={500}
                height={300}
                className="rounded-xl shadow-xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 