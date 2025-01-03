export interface SearchResult {
  type: 'article'
  title: string
  description: string
  url: string
  tags?: string[]
  date?: string
  image?: string
  content?: string
}

export async function searchContent(query: string): Promise<SearchResult[]> {
  if (!query.trim()) return []

  try {
    const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
    if (!response.ok) {
      throw new Error('Search failed')
    }
    return response.json()
  } catch (error) {
    console.error('Search error:', error)
    return []
  }
} 