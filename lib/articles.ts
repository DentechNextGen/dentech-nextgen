import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'content/articles')

export interface Article {
  slug: string
  title: string
  date: string
  description: string
  content: string
  tags?: string[]
  author?: string
  authorImage?: string
  image?: string
}

export async function getAllArticles(): Promise<Article[]> {
  // Create the directory if it doesn't exist
  if (!fs.existsSync(articlesDirectory)) {
    fs.mkdirSync(articlesDirectory, { recursive: true })
    // Create a sample article if the directory is empty
    const sampleArticle = `---
title: Welcome to Dentech Blog
date: '2024-03-21'
description: Learn about the latest updates and features in Dentech.
tags: ['News', 'Updates']
---

Welcome to the Dentech blog! Here you'll find the latest updates, features, and insights about dental practice management.`

    fs.writeFileSync(path.join(articlesDirectory, 'welcome.md'), sampleArticle)
  }

  const fileNames = fs.readdirSync(articlesDirectory)
  const articles = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(articlesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date || data.createdAt || data.updatedAt,
        description: data.description || data.desc,
        tags: data.tags || [],
        author: data.author,
        authorImage: data.authorImage,
        image: data.image,
        content,
      }
    })
    .sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))

  return articles
}

export async function getArticlesByTags(tags: string[]): Promise<Article[]> {
  const articles = await getAllArticles()
  return articles.filter((article) => 
    article.tags?.some((tag) => tags.includes(tag))
  )
}

export async function getLatestArticles(count: number): Promise<Article[]> {
  const articles = await getAllArticles()
  return articles.slice(0, count)
} 