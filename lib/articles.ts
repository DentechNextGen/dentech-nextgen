'use server'

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
  tags?: string[]
  author?: string
  authorImage?: string
}

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export async function getAllArticles(): Promise<Article[]> {
  const fileNames = fs.readdirSync(articlesDirectory)
  const articles = fileNames.map((fileName) => {
    const slug = fileName
      .replace(/\.md$/, '')
      .replace(/–/g, '-')
      .replace(/'/g, '')
      .replace(/[^a-zA-Z0-9-]/g, '-')
      .replace(/-+/g, '-')
      .toLowerCase()

    const fullPath = path.join(articlesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      title: data.title || slug,
      slug,
      date: data.createdAt || data.date || new Date().toISOString(),
      content,
      excerpt: data.excerpt || data.desc || content.slice(0, 200) + '...',
      image: data.image,
      tags: data.tags || [],
      author: data.author,
      authorImage: data.authorImage
    }
  })

  // Sort articles by date in descending order
  return articles.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
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