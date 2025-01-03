import Link from 'next/link'
import Image from 'next/image'
import { Article } from '@/lib/articles'

export interface ArticleCardProps {
  article: Article
  horizontal?: boolean
}

export default function ArticleCard({ article, horizontal = false }: ArticleCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <article className={`flex flex-col ${horizontal ? 'lg:flex-row lg:gap-16' : ''}`}>
      <div className={`relative aspect-[16/9] ${horizontal ? 'lg:w-1/2' : ''}`}>
        {article.image && (
          <Link href={`/blog/${article.slug}`}>
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        )}
      </div>
      <div className={`mt-8 ${horizontal ? 'lg:w-1/2 lg:mt-0' : ''}`}>
        <div className="flex items-center gap-3 text-sm">
          <time dateTime={article.date} className="text-gray-500">
            {formattedDate}
          </time>
          {article.tags?.map((tag) => (
            <span key={tag} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
              {tag}
            </span>
          ))}
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link href={`/blog/${article.slug}`}>
              <span className="absolute inset-0" />
              {article.title}
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{article.excerpt}</p>
        </div>
        {article.author && article.authorImage && (
          <div className="relative mt-8 flex items-center gap-x-4">
            <Image
              src={article.authorImage}
              alt={article.author}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full bg-gray-50"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <span className="absolute inset-0" />
                {article.author}
              </p>
            </div>
          </div>
        )}
      </div>
    </article>
  )
} 