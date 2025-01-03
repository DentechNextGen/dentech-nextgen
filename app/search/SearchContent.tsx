'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { SearchResult, searchContent } from '@/lib/search'
import ArticleCard from '@/components/ArticleCard'

function getContentPreview(content: string, searchQuery: string, previewLength: number = 200): string {
  const normalizedContent = content.toLowerCase()
  const normalizedQuery = searchQuery.toLowerCase()
  const index = normalizedContent.indexOf(normalizedQuery)
  
  if (index === -1) return content.slice(0, previewLength) + '...'
  
  const start = Math.max(0, index - previewLength / 2)
  const end = Math.min(content.length, index + previewLength / 2)
  
  return (start > 0 ? '...' : '') + 
         content.slice(start, end).trim() + 
         (end < content.length ? '...' : '')
}

export default function SearchContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    const performSearch = async () => {
      if (!query.trim()) {
        setResults([])
        return
      }

      setIsSearching(true)
      try {
        const searchResults = await searchContent(query)
        setResults(searchResults)
      } catch (error) {
        console.error('Search error:', error)
      } finally {
        setIsSearching(false)
      }
    }

    const timeoutId = setTimeout(performSearch, 300)
    return () => clearTimeout(timeoutId)
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Search Articles
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Search through our articles and blog posts
            </p>

            <form onSubmit={handleSearch} className="mt-8">
              <div className="relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full rounded-md border-0 bg-white/5 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-lime-500 sm:text-sm"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            {isSearching ? (
              <div className="text-center">
                <p className="text-gray-600">Searching...</p>
              </div>
            ) : results.length > 0 ? (
              <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                {results.map((result, index) => {
                  const contentPreview = result.content ? 
                    getContentPreview(result.content, query) : 
                    result.description

                  return (
                    <ArticleCard
                      key={index}
                      horizontal
                      article={{
                        title: result.title,
                        slug: result.url.split('/').pop() || '',
                        date: result.date || new Date().toISOString(),
                        content: result.content || '',
                        excerpt: contentPreview,
                        image: result.image,
                        tags: result.tags
                      }}
                    />
                  )
                })}
              </div>
            ) : query ? (
              <div className="text-center">
                <p className="text-gray-600">No results found</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  )
} 