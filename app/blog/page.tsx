import { siteConfig } from '@/config'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getArticles } from '@/lib/articles'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.name}`,
  description: 'Latest articles and updates from our team.',
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description: 'Latest articles and updates from our team.',
    type: 'website',
  },
}

export default async function Blog() {
  const articles = await getArticles()

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-display font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest Articles
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn about dental practice management, efficiency, and technology.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {articles.map((article) => {
            const { slug, frontmatter } = article
            const { title, description, date, author, authorImage, image, alt, tags } = frontmatter

            return (
              <article 
                key={slug} 
                className="flex flex-col items-start"
              >
                <div className="relative w-full">
                  <Link href={`/blog/${slug}`} aria-label={title}>
                    <Image
                      src={image}
                      alt={alt}
                      width={500}
                      height={300}
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] transition-transform hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </Link>
                </div>

                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={date} className="text-gray-500">
                      {new Date(date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="group relative">
                    <h2 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href={`/blog/${slug}`}>
                        <span className="absolute inset-0" />
                        {title}
                      </Link>
                    </h2>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {description}
                    </p>
                  </div>

                  <div className="relative mt-8 flex items-center gap-x-4">
                    <Image
                      src={authorImage}
                      alt={author}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full bg-gray-100"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        {author}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button
                      href={`/blog/${slug}`}
                      variant="outline"
                      color="primary"
                      size="sm"
                    >
                      Read more <span aria-hidden="true">→</span>
                    </Button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
} 