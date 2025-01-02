import Image from 'next/image'
import { team } from '@/src/config/team'
import { features } from '@/src/config/features'

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:max-w-5xl">
          <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">About Us</h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            We are a team of passionate individuals dedicated to revolutionizing dental practice management.
            Our mission is to provide innovative solutions that empower dental practices to deliver exceptional patient care.
          </p>

          {/* Features section */}
          <section className="mt-16 lg:mt-20">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-lime-600">
                      <Image
                        src={feature.icon}
                        alt=""
                        width={24}
                        height={24}
                        className="h-6 w-6 text-white"
                      />
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7">
                    <p className="flex-auto text-gray-600">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Team section */}
          <section className="mt-16 lg:mt-20">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our Team</h3>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Meet the dedicated professionals behind Dentech.
            </p>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
              {team.map((person) => (
                <li key={person.name}>
                  <Image 
                    className="aspect-[3/2] w-full rounded-2xl object-cover"
                    src={person.image}
                    alt={person.name}
                    width={800}
                    height={600}
                  />
                  <h4 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h4>
                  <p className="text-base leading-7 text-gray-600">{person.role}</p>
                  <div className="mt-4 text-base leading-7 text-gray-600">
                    <p>{person.bio}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
} 