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
        date: data.date,
        description: data.description,
        content,
      }
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))

  return articles
} 