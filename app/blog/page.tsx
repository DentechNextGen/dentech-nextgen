import { Metadata } from 'next'
import { getAllArticles } from '@/lib/articles'
import BlogContent from '@/components/BlogContent'

export const metadata: Metadata = {
  title: 'Blog - Dentech',
  description: 'Stay up to date with the latest news, updates, and insights from the Dentech team.',
}

export default async function Blog() {
  const articles = await getAllArticles()
  return <BlogContent articles={articles} />
} 