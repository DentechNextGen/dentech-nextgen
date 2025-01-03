import Image from 'next/image'
import Link from 'next/link'
import { Article } from '@/lib/articles'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="flex flex-col md:flex-row gap-6">
      {article.image && (
        <div className="relative aspect-[16/9] md:w-1/3">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="rounded-lg object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <div className="flex-1">
        <div className="flex flex-wrap gap-3 text-sm">
          <time dateTime={article.date} className="text-gray-500">
            {new Date(article.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
          {article.tags?.map((tag) => (
            <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-gray-600">
              {tag}
            </span>
          ))}
        </div>
        <div>
          <h3 className="mt-3 text-xl font-semibold text-gray-900">
            <Link href={`/blog/${article.slug}`} className="hover:text-gray-600">
              {article.title}
            </Link>
          </h3>
          <p className="mt-3 text-gray-600">{article.description}</p>
        </div>
        {article.author && (
          <div className="mt-4 flex items-center gap-4 border-t border-gray-200 pt-4">
            {article.authorImage && (
              <Image
                src={article.authorImage}
                alt={article.author}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <p className="font-medium text-gray-900">
              {article.author}
            </p>
          </div>
        )}
      </div>
    </article>
  )
} 