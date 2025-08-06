import { Metadata } from "next";
import { ScheduleContent } from "./ScheduleContent";
import Banner from "../components/Banner";

export const metadata: Metadata = {
  title: "Schedule a Demo - Dentech",
  description:
    "Book an introductory call to learn more about how Dentech can help your dental practice.",
};

export default function Schedule() {
  return (
    <main className="bg-white">
      {/* Banner Section */}
      <Banner
        title="Schedule a Demo"
        content="Book an introductory call to learn more about how Dentech can help your dental practice streamline operations, improve patient care, and boost efficiency."
      />

      {/* Calendar Section */}
      <div className="bg-gray-50 py-8 sm:py-12">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Choose Your Preferred Time
              </h2>
              <p className="text-lg text-gray-600">
                Select a convenient time slot for your personalized Dentech
                demonstration
              </p>
            </div>
            <ScheduleContent />
          </div>
        </div>
      </div>
    </main>
  );
}
