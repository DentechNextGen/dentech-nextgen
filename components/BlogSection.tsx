'use client'

import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    id: 1,
    title: 'Your First Look Into The All New Dentech!',
    href: '/blog/your-first-look-into-the-all-new-dentech',
    date: 'Nov 16, 2020',
    author: 'Jane Kaminski',
    authorImage: '/images/jane-kaminski-author.jpg',
    image: '/images/your-first-look-into-the-all-new-dentech.webp',
    desc: 'I have been hemming and hawing this for awhile now. Reason being is that I am your textbook Type A perfectionist. I always want the projects I am working on to be perfect before showing it to others.'
  },
  {
    id: 2,
    title: 'Windows Server 2012 and 2012 R2 End of Support Notice',
    href: '/blog/windows-server-2012-and-2012-R2-end-of-support-notice',
    date: 'Oct 10, 2023',
    author: 'Jane Kaminski',
    authorImage: '/images/jane-kaminski-author.jpg',
    image: '/images/windows-server-2012-and-2012-R2-end-of-support-notice.webp',
    desc: 'Microsoft has announced the end of support for Windows Server 2012 and Windows Server 2012 R2. After October 10, 2023, these products will no longer receive security updates.'
  },
  {
    id: 3,
    title: 'What is the Difference?',
    href: '/blog/what-is-the-difference',
    date: 'Sep 15, 2023',
    author: 'Jane Kaminski',
    authorImage: '/images/jane-kaminski-author.jpg',
    image: '/images/what-is-the-difference.webp',
    desc: 'When it comes to dental software, there are many options available in the market. But what sets Dentech apart from the rest?'
  }
]

export const BlogSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the Blog</h2>
          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start">
                <div className="relative w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={672}
                    height={378}
                    className="aspect-video w-full rounded-2xl object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {post.date}
                    </time>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.desc}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full bg-gray-100"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {post.author}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/blog" className="text-sm font-semibold leading-6 text-primary-base hover:text-primary-800">
              See All <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 