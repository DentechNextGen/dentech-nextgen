import { Metadata } from 'next'
import { siteConfig } from '@/config'
import { CTA } from '@/components/CTA'
import { getArticles } from '@/lib/articles'
import Image from 'next/image'
import Link from 'next/link'
import { DocumentTextIcon, AcademicCapIcon, CurrencyDollarIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Resources - Dentech',
  description: 'From our end of year procedures to our financial options and our system requirements, find everything you need to keep your practice running smoothly with Dentech.',
}

export default async function ResourcesPage() {
  const articles = await getArticles()
  const resourceArticles = articles.filter(article => 
    article.frontmatter.tags.some(tag => 
      ['training', 'resources'].includes(tag.toLowerCase())
    )
  )

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Resources</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From our end of year procedures to our financial options and our system requirements, find everything you need to keep your practice running smoothly with Dentech.
            </p>
          </div>
        </div>
      </div>

      {/* Quick links */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Link href="#system-requirements" className="relative block group">
              <div className="rounded-2xl border border-gray-200 p-6 hover:border-gray-300">
                <DocumentTextIcon className="h-8 w-8 text-primary-600" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">System Requirements</h3>
                <p className="mt-2 text-sm text-gray-600">View hardware specifications and connectivity requirements for optimal performance.</p>
              </div>
            </Link>
            <Link href="#training" className="relative block group">
              <div className="rounded-2xl border border-gray-200 p-6 hover:border-gray-300">
                <AcademicCapIcon className="h-8 w-8 text-primary-600" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Training Resources</h3>
                <p className="mt-2 text-sm text-gray-600">Access training materials and support options to get the most out of Dentech.</p>
              </div>
            </Link>
            <Link href="#financial" className="relative block group">
              <div className="rounded-2xl border border-gray-200 p-6 hover:border-gray-300">
                <CurrencyDollarIcon className="h-8 w-8 text-primary-600" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Financial Options</h3>
                <p className="mt-2 text-sm text-gray-600">Explore our flexible financing plans and payment options.</p>
              </div>
            </Link>
            <Link href="#conversion" className="relative block group">
              <div className="rounded-2xl border border-gray-200 p-6 hover:border-gray-300">
                <ArrowPathIcon className="h-8 w-8 text-primary-600" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Data Conversion</h3>
                <p className="mt-2 text-sm text-gray-600">Learn about our seamless data conversion process from any platform.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          {/* System Requirements */}
          <section id="system-requirements" className="scroll-mt-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">System Requirements</h2>
                <p className="mt-4 text-base text-gray-600">
                  Ensure optimal performance with our recommended hardware and connectivity specifications.
                </p>
              </div>
              <div className="lg:col-span-2 space-y-8">
                <div className="rounded-2xl bg-gray-50 p-8">
                  <h3 className="text-lg font-semibold text-gray-900">Hardware Specifications</h3>
                  <ul className="mt-6 list-disc pl-6 space-y-3 text-base text-gray-600">
                    <li>Modern processor (Intel Core i5/i7 or equivalent)</li>
                    <li>Minimum 8GB RAM (16GB recommended)</li>
                    <li>Solid State Drive (SSD) with at least 256GB storage</li>
                    <li>1920x1080 resolution display</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-gray-50 p-8">
                  <h3 className="text-lg font-semibold text-gray-900">Internet Connectivity</h3>
                  <ul className="mt-6 list-disc pl-6 space-y-3 text-base text-gray-600">
                    <li>High-speed broadband internet connection</li>
                    <li>Minimum 50Mbps download/10Mbps upload speeds</li>
                    <li>Stable network infrastructure</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Training Resources */}
          <section id="training" className="mt-24 scroll-mt-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Training Resources</h2>
                <p className="mt-4 text-base text-gray-600">
                  Get the support you need with our comprehensive training options and dedicated support team.
                </p>
              </div>
              <div className="lg:col-span-2 space-y-8">
                <div className="rounded-2xl bg-gray-50 p-8">
                  <h3 className="text-lg font-semibold text-gray-900">Available Training Options</h3>
                  <ul className="mt-6 list-disc pl-6 space-y-3 text-base text-gray-600">
                    <li>Personalized 1-on-1 training sessions (remote or on-site)</li>
                    <li>Extensive library of training videos</li>
                    <li>Regular software updates and feature enhancements</li>
                    <li>Dedicated phone and email support (Monday-Friday)</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-gray-50 p-8">
                  <h3 className="text-lg font-semibold text-gray-900">Support Hours & Contact</h3>
                  <p className="mt-6 text-base text-gray-600">Monday - Friday: 8:30 AM - 5:00 PM EST</p>
                  <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">Contact Information</h4>
                      <ul className="mt-3 space-y-3">
                        <li>
                          <a href="mailto:support@dentech.com" className="text-sm text-primary-600 hover:text-primary-500">
                            support@dentech.com
                          </a>
                        </li>
                        <li>
                          <a href="tel:+18002334998" className="text-sm text-primary-600 hover:text-primary-500">
                            +1 (800) 233-4998
                          </a>
                        </li>
                        <li>
                          <a href="tel:+18665498702" className="text-sm text-primary-600 hover:text-primary-500">
                            +1 (866) 549-8702
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Resources */}
          <section className="mt-24">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Additional Resources</h2>
                <p className="mt-4 text-base text-gray-600">
                  Explore our financial options and data conversion services to make your transition smooth.
                </p>
              </div>
              <div className="lg:col-span-2 space-y-8">
                <div id="financial" className="scroll-mt-16 rounded-2xl bg-gray-50 p-8">
                  <h3 className="text-lg font-semibold text-gray-900">Financial Options</h3>
                  <p className="mt-6 text-base text-gray-600">
                    We offer various financial plans to suit your needs, including:
                  </p>
                  <ul className="mt-6 list-disc pl-6 space-y-3 text-base text-gray-600">
                    <li>Leasing options</li>
                    <li>Flexible financing</li>
                    <li>Custom payment plans</li>
                  </ul>
                  <p className="mt-6 text-sm text-gray-600">
                    For more information about our financial options, contact our sales team at{' '}
                    <a href="mailto:sales@dentech.com" className="text-primary-600 hover:text-primary-500">sales@dentech.com</a>
                    {' '}or call{' '}
                    <a href="tel:+18002334998" className="text-primary-600 hover:text-primary-500">800.233.4998 ext. 239</a>
                  </p>
                </div>
                <div id="conversion" className="scroll-mt-16 rounded-2xl bg-gray-50 p-8">
                  <h3 className="text-lg font-semibold text-gray-900">Data Conversion</h3>
                  <p className="mt-6 text-base text-gray-600">
                    Our experienced conversion team can assist with transitioning from any software platform. We provide step-by-step guidance to ensure your data is accurately transferred and your transition to Dentech is smooth.
                  </p>
                  <p className="mt-6 text-sm text-gray-600">
                    For conversion assistance, contact us at{' '}
                    <a href="mailto:info@dentech.com" className="text-primary-600 hover:text-primary-500">info@dentech.com</a>
                    {' '}or call{' '}
                    <a href="tel:+18002334998" className="text-primary-600 hover:text-primary-500">800.233.4998 ext. 239</a>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          {resourceArticles.length > 0 && (
            <section className="mt-24 mb-32">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="lg:col-span-1">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">Related Articles</h2>
                  <p className="mt-4 text-base text-gray-600">
                    Stay up to date with our latest resources and training materials.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <div className="space-y-16">
                    {resourceArticles.map((article) => (
                      <article key={article.slug} className="relative isolate flex flex-col gap-8 lg:flex-row">
                        <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                          <Image
                            src={article.frontmatter.image}
                            alt={article.frontmatter.alt}
                            fill
                            className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
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
                              <span
                                key={tag}
                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="group relative max-w-xl">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                              <Link href={`/blog/${article.slug}`}>
                                <span className="absolute inset-0" />
                                {article.frontmatter.title}
                              </Link>
                            </h3>
                            <p className="mt-5 text-sm leading-6 text-gray-600">{article.frontmatter.desc}</p>
                          </div>
                          <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                            <div className="relative flex items-center gap-x-4">
                              <Image
                                src={article.frontmatter.authorImage}
                                alt={article.frontmatter.author}
                                width={40}
                                height={40}
                                className="h-10 w-10 rounded-full bg-gray-50"
                              />
                              <div className="text-sm leading-6">
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
            </section>
          )}
        </div>
      </div>

      <CTA />
    </div>
  )
} 