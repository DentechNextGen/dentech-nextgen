import { Hero } from '@/components/Hero'
import { VideoFeature } from '@/components/VideoFeature'
import { Features } from '@/components/Features'
import { FAQ } from '@/components/FAQ'
import { Testimonials } from '@/components/Testimonials'
import { BlogSection } from '@/components/BlogSection'
import { CTA } from '@/components/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <VideoFeature />
      <FAQ />
      <Testimonials />
      <BlogSection />
      <CTA />
    </main>
  )
}
