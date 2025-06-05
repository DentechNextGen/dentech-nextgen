"use client";

import Banner from "../components/Banner";
import EvolutionTimeline from "./components/EvolutionTimeline";
import OurPromise from "./components/OurPromise";
import AboutCards from "./components/AboutCards";
export default function About() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <Banner
        title="About Dentech"
        content="We are a team of passionate individuals dedicated to revolutionizing dental practice management software. Our mission is to provide innovative solutions that empower dental practices to deliver exceptional patient care."
      />

      <AboutCards />

      <EvolutionTimeline />

      <div className="px-4 md:px-0">
        <OurPromise />
      </div>
    </main>
  );
}
