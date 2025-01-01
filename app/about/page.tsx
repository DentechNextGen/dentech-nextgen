import { Metadata } from 'next'
import Image from 'next/image'
import { CTA } from '@/components/CTA'

export const metadata: Metadata = {
  title: 'About Dentech: Family-owned, 40 years experience',
  description: 'As the pioneers in dental practice management software, the most striking thing about Dentech is their innovative dental solutions!',
}

// Hero section content
const heroContent = {
  title: 'About Us',
  description: 'As the original pioneers in the advancement of dental practice management software and computer technology, customers nationwide have trusted Dentech for over 40 years. Our organization thrives due to our commitment to building lifelong relationships and making customer satisfaction our #1 priority. Through our world-class, innovative dental solutions, Dentech ensures your practice can provide the best patient care imaginable. Our expert team and commitment to quality dental solutions and customer relationships are the heart of Dentech.'
}

// Our story sections
const features = [
  {
    title: 'Our History',
    description: 'Over four decades ago, our founder Raymond F. Kaminski saw the growing need for innovation in dental practice management software. He was committed to making his vision a reality—a world in which computer technology and dentistry functioned seamlessly, improving the lives of doctors and patients alike.',
    icon: '/icons/mission.svg',
  },
  {
    title: 'Our Values',
    description: 'More and more we see the importance of staying customer centric, value focused. At Dentech, each member of our team embodies certain traits that ensure your software is made with the same care you have for your patients.',
    icon: '/icons/people.svg',
  },
  {
    title: 'Our Vision',
    description: 'We will stay committed to servicing our customers and the dental industry with the care and concern that we are known for while staying on the cutting edge of technology.',
    icon: '/icons/vision.svg',
  },
]

// Leadership section
const team = [
  {
    name: 'Jane E. Kaminski',
    role: 'Chief Operating Officer',
    image: '/images/jane-kaminski.jpg',
    bio: 'Today, under the helm of his daughter, Jane Kaminski, Dentech continues to provide technology-leading solutions for dental practice management software. With Dentech 2.0, Jane brings the next leap forward introducing not only next-gen technology, but also challenging the status quo as a female software business leader.\n\n"With over 40 years of service to our customers and the dental industry as a whole we are excited for what lies ahead for us as a company, for our customers and the entire dental industry. It is my goal to not only continue the legacy that my father has built, but to also leverage modern day technology so that we can continue to provide world class solutions for our customers. We will stay committed to servicing our customers and the dental industry with the care and concern that we are known for while staying on the cutting edge of technology. We look forward to the next 40 years and we thank each of our customers who have supported us and helped us build the company and products that we are today.\n\nThank you."\n\n– Jane E. Kaminski, CEO'
  },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <section id="get-started-today" className="bg-accent-100 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="px-6 pt-16 pb-4 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                <span className="text-primary">About </span>
                <span className="text-accent">Us</span>
              </h2>
              <div className="mt-6 text-left text-lg leading-8 text-primary">
                <div className="flex items-start gap-3">
                  <p className="mb-4">{heroContent.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story section */}
      <div className="bg-accent-200 py-0 pb-16">
        <div>
          <section id="secondary-features" aria-label="Our story" className="relative pb-16 pt-4 sm:pb-16 sm:pt-4 lg:pb-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative z-20 mt-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.title} className="relative h-full rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                    <div className="w-18 rounded-lg">
                      <Image
                        className="h-18 w-18 rounded object-cover"
                        src={feature.icon}
                        alt={feature.title}
                        width={64}
                        height={64}
                        priority
                      />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold uppercase text-primary">{feature.title}</h3>
                    <p className="mt-4 text-sm text-primary">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Leadership section */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
            {team.map((person) => (
              <li key={person.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
                <Image
                  className="w-2/5 flex-none rounded-2xl object-cover"
                  src={person.image}
                  alt=""
                  width={1600}
                  height={1600}
                />
                <div className="max-w-xl flex-auto">
                  <h3 className="font-display text-3xl font-bold text-primary sm:text-4xl">{person.name}</h3>
                  <p className="text-base leading-7 text-gray-600">{person.role}</p>
                  <div className="mt-6 text-base leading-7 text-primary">
                    <div className="flex items-start gap-3">{person.bio}</div>
                  </div>
                  <a href="/schedule">
                    <span className="group inline-flex w-full items-center justify-center rounded-lg py-2 px-4 text-sm uppercase font-semibold bg-accent px-8 py-3 text-white hover:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 focus:ring-offset-gray-50 mt-6">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="-ml-0.5 mr-2 h-5 w-5">
                        <path d="M3.505 2.365A41.369 41.369 0 019 2c1.863 0 3.697.124 5.495.365 1.247.167 2.18 1.108 2.435 2.268a4.45 4.45 0 00-.577-.069 43.141 43.141 0 00-4.706 0C9.229 4.696 7.5 6.727 7.5 8.998v2.24c0 1.413.67 2.735 1.76 3.562l-2.98 2.98A.75.75 0 015 17.25v-3.443c-.501-.048-1-.106-1.495-.172C2.033 13.438 1 12.162 1 10.72V5.28c0-1.441 1.033-2.717 2.505-2.914z" />
                        <path d="M14 6c-.762 0-1.52.02-2.271.062C10.157 6.148 9 7.472 9 8.998v2.24c0 1.519 1.147 2.839 2.71 2.935.214.013.428.024.642.034.2.009.385.09.518.224l2.35 2.35a.75.75 0 001.28-.531v-2.07c1.453-.195 2.5-1.463 2.5-2.915V8.998c0-1.526-1.157-2.85-2.729-2.936A41.645 41.645 0 0014 6z" />
                      </svg>
                      Schedule a Meeting with Jane
                    </span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA section */}
      <CTA />
    </div>
  )
} 