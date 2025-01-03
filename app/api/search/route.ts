import { NextResponse } from 'next/server'
import { getAllArticles } from '@/lib/articles'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')?.toLowerCase() || ''

  if (!query) {
    return NextResponse.json([])
  }

  const articles = await getAllArticles()
  const results = articles
    .filter(article => {
      const searchableContent = [
        article.title,
        article.content,
        article.excerpt,
        ...(article.tags || []),
      ].join(' ').toLowerCase()
      
      return searchableContent.includes(query)
    })
    .map(article => ({
      type: 'article' as const,
      title: article.title,
      description: article.excerpt,
      content: article.content,
      url: `/blog/${article.slug}`,
      tags: article.tags,
      date: article.date,
      image: article.image
    }))

  return NextResponse.json(results)
} 