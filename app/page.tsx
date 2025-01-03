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
    <main>
      <Hero />
      <Features />
      <VideoFeature />
      <FAQ />
      <Testimonials />
      <BlogSection articles={latestArticles} />
      <CTA />
    </main>
  )
}
