import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Article {
  title: string
  slug: string
  date: string
  content: string
  excerpt: string
  image?: string
  author?: string
  authorImage?: string
  tags?: string[]
}

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export async function getAllArticles(): Promise<Article[]> {
  const fileNames = fs.readdirSync(articlesDirectory)
  const articles = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx?$/, '')
    const fullPath = path.join(articlesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.createdAt || data.date,
      content,
      excerpt: data.excerpt || data.desc || content.slice(0, 200) + '...',
      image: data.image,
      author: data.author,
      authorImage: data.authorImage,
      tags: data.tags,
    }
  })

  return articles.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getLatestArticles(count: number): Promise<Article[]> {
  const articles = await getAllArticles()
  return articles.slice(0, count)
}

export async function getArticlesByTags(tags: string[]): Promise<Article[]> {
  const articles = await getAllArticles()
  return articles.filter((article) => 
    article.tags?.some((tag) => tags.includes(tag))
  )
} 