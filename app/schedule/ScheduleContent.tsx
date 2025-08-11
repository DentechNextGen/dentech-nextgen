"use client";

import CalendlyEmbed from "../components/CalendlyEmbed";

export function ScheduleContent() {
  return (
    <div className="w-full">
      <CalendlyEmbed
        url="https://calendly.com/jane-kaminski/introductory-call"
        hideEventTypeDetails={true}
        hideGdprBanner={true}
        backgroundColor="ffffff"
        textColor="374151"
        primaryColor="84cc16"
        minWidth="100%"
        height="700px"
      />
    </div>
  );
}
