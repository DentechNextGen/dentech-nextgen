import Hero from '@/components/Hero'
import VideoFeature from '@/components/VideoFeature'
import Features from '@/components/Features'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import BlogSection from '@/components/BlogSection'
import CTA from '@/components/CTA'
import { getLatestArticles } from '@/lib/articles'

export default async function Home() {
  const latestArticles = await getLatestArticles(3)
  
  return (
    <main className="bg-white">
      <Hero />
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:max-w-5xl">
          <Features />
          <VideoFeature />
          <FAQ />
          <Testimonials />
          <BlogSection articles={latestArticles} />
          <CTA />
        </div>
      </div>
    </main>
  )
}
