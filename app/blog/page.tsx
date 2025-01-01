import { getArticles } from '@/lib/articles'
import { BlogContent } from '@/components/BlogContent'

export default async function BlogPage() {
  const articles = await getArticles()
  
  return <BlogContent articles={articles} />
} 