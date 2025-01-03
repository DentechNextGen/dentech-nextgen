import Image from 'next/image'
import Link from 'next/link'
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
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <a 
          href="https://www.youtube.com/watch?v=2Xgow_I0Eh0" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block relative aspect-video w-full group"
        >
          <Image
            src="https://img.youtube.com/vi/2Xgow_I0Eh0/maxresdefault.jpg"
            alt="Watch Dentech Video"
            fill
            sizes="100vw"
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
            <svg 
              className="w-16 h-16 text-white opacity-90 group-hover:opacity-100 transition-opacity" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  )
} 