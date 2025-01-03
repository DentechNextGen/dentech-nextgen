import { BaseSchema } from '.'
import { siteConfig } from '@/src/config'

export interface BreadcrumbListSchema extends BaseSchema {
  '@type': 'BreadcrumbList'
  itemListElement: {
    '@type': 'ListItem'
    position: number
    name: string
    item: string
  }[]
}

export function generateBreadcrumbSchema(items: { name: string; path: string }[]): BreadcrumbListSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path.startsWith('http') ? item.path : `${siteConfig.url}${item.path}`
    }))
  }
}

// Helper function to generate breadcrumb items from a path
export function generateBreadcrumbItems(path: string): { name: string; path: string }[] {
  const segments = path.split('/').filter(Boolean)
  const items: { name: string; path: string }[] = [{ name: 'Home', path: '/' }]

  let currentPath = ''
  segments.forEach(segment => {
    currentPath += `/${segment}`
    items.push({
      name: segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      path: currentPath
    })
  })

  return items
} 