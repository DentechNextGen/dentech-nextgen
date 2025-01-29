import Link from 'next/link'
import { HomeIcon } from '@heroicons/react/24/outline'
import { getAllArticles } from '@/lib/articles'
import { useSearchParams } from 'next/navigation'

// Helper function to extract keywords from URL
function extractKeywords(url: string): string[] {
  return url
    .toLowerCase()
    .split('/')
    .filter(Boolean)
    .reduce((acc: string[], segment) => {
      // Split by common separators and filter out common words
      const words = segment
        .split(/[-_]/)
        .filter(word => word.length > 2 && !['the', 'and', 'for', 'with'].includes(word))
      
      // Add both the original segment and individual words
      return [...acc, segment, ...words]
    }, [])
}

async function getSuggestedContent(pathname: string = '') {
  try {
    // Get all articles and sitemap data
    const articles = await getAllArticles()
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://dentech.com'
    
    // Get main pages and feature pages from sitemap structure
    const mainPages = [
      { url: baseUrl, title: 'Homepage', description: 'Welcome to Dentech - Modern Dental Practice Management Software' },
      { url: `${baseUrl}/about`, title: 'About', description: 'Learn about Dentech and our mission to revolutionize dental practice management' },
      { url: `${baseUrl}/blog`, title: 'Blog', description: 'Latest insights and updates from Dentech' },
      { url: `${baseUrl}/support`, title: 'Support', description: 'Get help and support for your Dentech software' },
      { url: `${baseUrl}/resources`, title: 'Resources', description: 'Helpful resources and documentation for Dentech users' },
      { url: `${baseUrl}/schedule`, title: 'Schedule Demo', description: 'Schedule a demo of Dentech software' },
      { url: `${baseUrl}/go-to-assist`, title: 'Go To Assist', description: 'Get remote technical support and assistance' },
      { url: `${baseUrl}/features`, title: 'Features', description: 'Explore all features of Dentech software' },
      { url: `${baseUrl}/features/practice-management`, title: 'Practice Management', description: 'Comprehensive tools for managing your dental practice' },
      { url: `${baseUrl}/features/voice-activated-charting`, title: 'Voice-Activated Charting', description: 'Revolutionary voice-controlled charting system' },
      { url: `${baseUrl}/features/digital-imaging`, title: 'Digital Imaging', description: 'Advanced digital imaging solutions' },
      { url: `${baseUrl}/features/patient-check-in`, title: 'Patient Check-In', description: 'Streamline your patient check-in process' },
      { url: `${baseUrl}/features/patient-communication`, title: 'Patient Communication', description: 'Enhanced patient engagement tools' },
      { url: `${baseUrl}/features/document-management`, title: 'Document Management', description: 'Secure digital document management' },
      { url: `${baseUrl}/features/eservices`, title: 'Eservices', description: 'Digital solutions for modern dental practices' },
      { url: `${baseUrl}/features/managed-services`, title: 'Managed Services', description: 'Comprehensive IT management solutions' },
      { url: `${baseUrl}/features/hardware-solutions`, title: 'Hardware Solutions', description: 'Complete hardware solutions for your practice' }
    ]
    
    // Extract search terms from the path
    const searchTerms = pathname
      .replace(/[/-]/g, ' ')
      .toLowerCase()
      .trim()
      .split(' ')
      .filter(term => term.length > 2)
      .filter(term => !['the', 'and', 'for', 'with'].includes(term))

    const termsToUse = searchTerms.length > 0 
      ? searchTerms 
      : ['dental', 'practice', 'management']

    console.log('Raw Path:', pathname)
    console.log('Search terms:', termsToUse)
    
    // Search in site pages using URL-based matching
    const relevantPages = mainPages
      .filter(page => {
        const pageKeywords = extractKeywords(page.url)
        const pageText = `${page.title} ${page.description}`.toLowerCase()
        
        return termsToUse.some(term => 
          pageText.includes(term) || 
          pageKeywords.some(keyword => 
            keyword.includes(term) || 
            term.includes(keyword)
          )
        )
      })
      .map(page => ({
        title: page.title,
        description: page.description,
        slug: page.url.replace(baseUrl, ''),
        isPage: true
      }))

    // Search in articles
    const relevantArticles = articles
      .filter(article => {
        if (!article.title || !article.description) return false
        const articleText = `${article.title} ${article.description}`.toLowerCase()
        return termsToUse.some(term => articleText.includes(term))
      })
      .map(article => ({
        title: article.title,
        description: article.description,
        slug: `/blog/${article.slug}`,
        isPage: false
      }))

    // Combine and limit results
    const combinedResults = [...relevantPages, ...relevantArticles].slice(0, 3)

    console.log('Found results:', combinedResults.length)
    return combinedResults

  } catch (error) {
    console.error('Error getting suggestions:', error)
    return []
  }
}

export default async function NotFound() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : ''
  const suggestedContent = await getSuggestedContent(pathname)

  return (
    <main className="flex-1">
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {suggestedContent.length > 0 ? (
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  Let&apos;s find what you&apos;re looking for
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  The page you requested wasn&apos;t found, but we have some suggestions that might help:
                </p>
                <div className="mt-10 space-y-4">
                  {suggestedContent.map((content) => (
                    <Link
                      key={content.slug}
                      href={content.slug}
                      className="block rounded-lg bg-gray-800/50 p-6 transition hover:bg-gray-800 text-left hover:ring-2 hover:ring-lime-500"
                    >
                      <h3 className="text-xl font-medium text-white flex items-center gap-2">
                        {content.title}
                        {content.isPage && (
                          <span className="text-xs bg-lime-600/10 text-lime-500 px-2 py-1 rounded">
                            Feature
                          </span>
                        )}
                      </h3>
                      {content.description && (
                        <p className="mt-2 text-base text-gray-300 line-clamp-2">
                          {content.description}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  Let&apos;s get you back on track
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  While we couldn&apos;t find the exact page, here are some helpful resources:
                </p>
                <div className="mt-10 space-y-4">
                  <Link 
                    href="/features" 
                    className="block rounded-lg bg-gray-800/50 p-6 transition hover:bg-gray-800 text-left hover:ring-2 hover:ring-lime-500"
                  >
                    <h3 className="text-xl font-medium text-white">Explore Our Features</h3>
                    <p className="mt-2 text-base text-gray-300">
                      Discover all the powerful features Dentech has to offer for your dental practice.
                    </p>
                  </Link>
                  <Link 
                    href="/blog" 
                    className="block rounded-lg bg-gray-800/50 p-6 transition hover:bg-gray-800 text-left hover:ring-2 hover:ring-lime-500"
                  >
                    <h3 className="text-xl font-medium text-white">Latest Articles</h3>
                    <p className="mt-2 text-base text-gray-300">
                      Read our latest insights and tips for dental practice management.
                    </p>
                  </Link>
                </div>
              </div>
            )}

            <div className="mt-12 flex items-center justify-center gap-x-6">
              <Link
                href="/"
                className="rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
              >
                <span className="flex items-center gap-2">
                  <HomeIcon className="h-5 w-5" />
                  Back to Homepage
                </span>
              </Link>
              <Link
                href="/support"
                className="text-sm font-semibold text-white hover:text-lime-500"
              >
                Contact Support <span aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="mt-12 text-sm text-gray-500">
              Error 404 - Page Not Found
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 