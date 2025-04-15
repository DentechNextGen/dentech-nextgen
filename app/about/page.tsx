'use client'

import Banner from '../components/Banner'
import EvolutionTimeline from './about/EvolutionTimeline'
import OurPromise from './about/OurPromise'
import AboutCards from './about/AboutCards'
export default function About() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <Banner
        title="About Dentech"
        content="We are a team of passionate individuals dedicated to revolutionizing dental practice management. Our mission is to provide innovative solutions that empower dental practices to deliver exceptional patient care."
      />

      <AboutCards />


      <EvolutionTimeline />

      <OurPromise />
    </main>
  )
} 