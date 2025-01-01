import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Article {
  slug: string
  frontmatter: {
    title: string
    desc: string
    author: string
    authorImage: string
    image: string
    alt: string
    createdAt: string
    tags: string[]
  }
}

export async function getArticles(): Promise<Article[]> {
  const articlesDirectory = path.join(process.cwd(), 'public/articles')
  const fileNames = fs.readdirSync(articlesDirectory)
  
  const articles = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(articlesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data: frontmatter } = matter(fileContents)
    
    const fixImagePath = (path: string) => {
      return path.replace(/^\/public\//, '/').replace(/^\/static\//, '/')
    }

    const processedFrontmatter = {
      ...frontmatter,
      image: fixImagePath(frontmatter.image),
      authorImage: fixImagePath(frontmatter.authorImage),
    }
    
    return {
      slug,
      frontmatter: processedFrontmatter as Article['frontmatter'],
    }
  })

  return articles.sort((a, b) => {
    return new Date(b.frontmatter.createdAt).getTime() - new Date(a.frontmatter.createdAt).getTime()
  })
} 