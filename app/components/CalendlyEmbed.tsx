"use client";

import { useEffect, useRef, useState } from "react";

interface CalendlyEmbedProps {
  url?: string;
  hideEventTypeDetails?: boolean;
  hideGdprBanner?: boolean;
  backgroundColor?: string;
  textColor?: string;
  primaryColor?: string;
  minWidth?: string;
  height?: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({
  url = "https://calendly.com/jane-kaminski/introductory-call",
  hideEventTypeDetails = true,
  hideGdprBanner = true,
  backgroundColor = "ffffff",
  textColor = "374151",
  primaryColor = "84cc16",
  minWidth = "320px",
  height = "700px",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    script.onload = () => {
      // Small delay to ensure widget initializes
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    document.body.appendChild(script);

    // Cleanup function
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Build the URL with parameters
  const buildUrl = () => {
    const params = new URLSearchParams();
    if (hideEventTypeDetails) params.append("hide_event_type_details", "1");
    if (hideGdprBanner) params.append("hide_gdpr_banner", "1");
    if (backgroundColor) params.append("background_color", backgroundColor);
    if (textColor) params.append("text_color", textColor);
    if (primaryColor) params.append("primary_color", primaryColor);

    return `${url}?${params.toString()}`;
  };

  return (
    <div className="relative">
      {/* Loading State */}
      {isLoading && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-lime-50 to-green-50 flex items-center justify-center z-10 rounded-lg"
          style={{ height }}
        >
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-lime-600 mb-4"></div>
            <p className="text-gray-600 font-medium">Loading Calendar...</p>
            <p className="text-sm text-gray-500 mt-2">
              Preparing your scheduling experience
            </p>
          </div>
        </div>
      )}

      {/* Calendly Widget */}
      <div
        ref={containerRef}
        className={`calendly-inline-widget transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        data-url={buildUrl()}
        style={{
          minWidth,
          height,
          borderRadius: "8px",
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default CalendlyEmbed;
