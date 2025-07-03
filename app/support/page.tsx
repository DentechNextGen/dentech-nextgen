"use client";

import Banner from "../components/Banner";
import SupportCards from "./components/SupportCards";
import FormSection from "./components/FormSection";
import NewCTA from "./components/NewCTA";
import FAQSection from "./components/FAQSection";
import PopUp, { usePopUp } from "../components/PopUp";
import { AnimatePresence } from "framer-motion";

export default function Support() {
  const { isVisible, closePopUp } = usePopUp();

  return (
    <main className="bg-white">
      <Banner
        title="Contact Us"
        content="At Dentech, our customer support is there for you. From hardware to software, and everything in between."
      />
      <SupportCards />
      <FormSection />
      <div className="max-w-7xl mx-auto">
        <NewCTA />
      </div>
      <FAQSection />

      <AnimatePresence>
        {isVisible && (
          <PopUp
            title="Get a Free Demo Today!"
            content="Experience the future of dental practice management firsthand. Schedule a personalized demo and see how Dentech NextGen can transform your practice."
            ctaText="Schedule Demo"
            ctaLink="/schedule"
            onClose={closePopUp}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
