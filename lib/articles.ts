import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'public/articles')

export interface ArticleFrontmatter {
  title: string
  description: string
  date: string
  author: string
  authorImage: string
  image: string
  alt: string
  tags: string[]
  draft?: boolean
}

export interface Article {
  slug: string
  frontmatter: ArticleFrontmatter
  content: string
}

const defaultFrontmatter: ArticleFrontmatter = {
  title: 'Untitled',
  description: '',
  date: new Date().toISOString(),
  author: 'Anonymous',
  authorImage: '/images/default-author.jpg',
  image: '/images/default-blog.jpg',
  alt: '',
  tags: [],
}

export async function getArticles(): Promise<Article[]> {
  try {
    // Check if directory exists
    try {
      await fs.access(articlesDirectory)
    } catch {
      console.warn('Articles directory not found:', articlesDirectory)
      return []
    }

    // Get all MDX files
    const fileNames = await fs.readdir(articlesDirectory)
    const mdxFiles = fileNames.filter(fileName => 
      fileName.endsWith('.mdx') || fileName.endsWith('.md')
    )

    // Process each file
    const articlesPromises = mdxFiles.map(async fileName => {
      const fullPath = path.join(articlesDirectory, fileName)
      const fileContents = await fs.readFile(fullPath, 'utf8')
      
      // Parse frontmatter and content
      const { data, content } = matter(fileContents)
      const frontmatter = { ...defaultFrontmatter, ...data } as ArticleFrontmatter

      // Skip draft articles in production
      if (process.env.NODE_ENV === 'production' && frontmatter.draft) {
        return null
      }

      return {
        slug: fileName.replace(/\.(mdx?|md)$/, ''),
        frontmatter,
        content,
      }
    })

    // Wait for all articles to be processed
    const articles = (await Promise.all(articlesPromises))
      .filter((article): article is Article => article !== null)
      .sort((a, b) => 
        new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
      )

    return articles
  } catch (error) {
    console.error('Error loading articles:', error)
    return []
  }
}

export async function getArticle(slug: string): Promise<Article | null> {
  try {
    const articles = await getArticles()
    return articles.find(article => article.slug === slug) ?? null
  } catch (error) {
    console.error(`Error loading article with slug "${slug}":`, error)
    return null
  }
} 