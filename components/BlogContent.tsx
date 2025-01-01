'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import type { Article } from '@/lib/articles'

export function BlogContent({ articles }: { articles: Article[] }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Get unique tags from all articles
  const allTags = Array.from(new Set(articles.flatMap(article => article.frontmatter.tags)))

  // Filter articles based on search query and selected tag
  const filteredArticles = articles.filter(article => {
    const searchContent = [
      article.frontmatter.title,
      article.frontmatter.desc,
      article.frontmatter.author,
      ...article.frontmatter.tags,
    ].join(' ').toLowerCase()
    
    const matchesSearch = searchQuery === '' || searchContent.includes(searchQuery.toLowerCase())
    const matchesTag = !selectedTag || article.frontmatter.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-[300px,1fr]">
            {/* Sidebar */}
            <div className="lg:block">
              <div className="sticky top-4">
                {/* Search */}
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    name="search"
                    className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    placeholder="Search articles"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Tags filter */}
                <div className="mt-8">
                  <h3 className="text-sm font-medium text-gray-500">Categories</h3>
                  <div className="mt-4 flex flex-col gap-2">
                    <button
                      className={`text-left text-sm ${!selectedTag ? 'font-semibold text-primary-600' : 'text-gray-600 hover:text-gray-900'}`}
                      onClick={() => setSelectedTag(null)}
                    >
                      All Categories
                    </button>
                    {allTags.map((tag) => (
                      <button
                        key={tag}
                        className={`text-left text-sm ${selectedTag === tag ? 'font-semibold text-primary-600' : 'text-gray-600 hover:text-gray-900'}`}
                        onClick={() => setSelectedTag(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div>
              <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">From the blog</h2>
              <p className="mt-2 text-lg/8 text-gray-600">
                Learn about Dentech updates, industry insights, and best practices.
              </p>
              <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                {filteredArticles.map((article) => (
                  <article key={article.slug} className="relative isolate flex flex-col gap-8 lg:flex-row">
                    <div className="relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                      <Image
                        src={article.frontmatter.image}
                        alt={article.frontmatter.alt}
                        fill
                        className="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"
                      />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div>
                      <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime={article.frontmatter.createdAt} className="text-gray-500">
                          {new Date(article.frontmatter.createdAt).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </time>
                        {article.frontmatter.tags.map((tag) => (
                          <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                      <div className="group relative max-w-xl">
                        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                          <Link href={`/blog/${article.slug}`}>
                            <span className="absolute inset-0" />
                            {article.frontmatter.title}
                          </Link>
                        </h3>
                        <p className="mt-5 text-sm/6 text-gray-600">{article.frontmatter.desc}</p>
                      </div>
                      <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                        <div className="relative flex items-center gap-x-4">
                          <Image
                            src={article.frontmatter.authorImage}
                            alt={article.frontmatter.author}
                            width={40}
                            height={40}
                            className="size-10 rounded-full bg-gray-50"
                          />
                          <div className="text-sm/6">
                            <p className="font-semibold text-gray-900">
                              {article.frontmatter.author}
                            </p>
                            <p className="text-gray-600">Chief Operating Officer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 