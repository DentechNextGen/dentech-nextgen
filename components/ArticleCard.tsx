import Image from 'next/image'
import Link from 'next/link'
import { Article } from '@/lib/articles'

interface ArticleCardProps {
  article: Article
  horizontal?: boolean
}

export default function ArticleCard({ article, horizontal = false }: ArticleCardProps) {
  return (
    <article className={`relative isolate flex flex-col ${horizontal ? 'lg:flex-row gap-8' : 'gap-4'}`}>
      {article.image && (
        <div className={`relative ${horizontal ? 'aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0' : 'aspect-[2/1]'}`}>
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
      )}
      <div>
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={article.date} className="text-gray-500">
            {new Date(article.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
          {article.tags?.map((tag) => (
            <span key={tag} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
              {tag}
            </span>
          ))}
        </div>
        <div className="group relative max-w-xl">
          <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
            <Link href={`/blog/${article.slug}`}>
              <span className="absolute inset-0" />
              {article.title}
            </Link>
          </h3>
          <p className="mt-5 text-sm/6 text-gray-600">{article.description}</p>
        </div>
        {article.author && (
          <div className="mt-6 flex border-t border-gray-900/5 pt-6">
            <div className="relative flex items-center gap-x-4">
              {article.authorImage && (
                <Image
                  src={article.authorImage}
                  alt={article.author}
                  width={40}
                  height={40}
                  className="size-10 rounded-full bg-gray-50"
                />
              )}
              <div className="text-sm/6">
                <p className="font-semibold text-gray-900">
                  {article.author}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  )
} 