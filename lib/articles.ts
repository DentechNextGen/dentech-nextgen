import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'public/articles')

export interface Article {
  slug: string
  frontmatter: {
    title: string
    description: string
    date: string
    author: string
    authorImage: string
    image: string
    alt: string
    tags: string[]
  }
  content: string
}

export async function getArticles(): Promise<Article[]> {
  // Check if directory exists
  if (!fs.existsSync(articlesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(articlesDirectory)
  const articles = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const fullPath = path.join(articlesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        slug: fileName.replace(/\.mdx$/, ''),
        frontmatter: {
          title: data.title || 'Untitled',
          description: data.description || '',
          date: data.date || new Date().toISOString(),
          author: data.author || 'Anonymous',
          authorImage: data.authorImage || '/images/default-author.jpg',
          image: data.image || '/images/default-blog.jpg',
          alt: data.alt || '',
          tags: data.tags || [],
        },
        content,
      }
    })
    .sort((a, b) => (new Date(b.frontmatter.date)).getTime() - (new Date(a.frontmatter.date)).getTime())

  return articles
} 