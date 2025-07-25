"use client";

import { useEffect } from "react";
import Head from "next/head";

declare global {
  interface Window {
    Calendly?: any;
  }
}

interface CalendlyPopUpProps {
  url?: string;
  text?: string;
  color?: string;
  textColor?: string;
  branding?: boolean;
}

const CalendlyPopUp: React.FC<CalendlyPopUpProps> = ({
  url = "https://calendly.com/jane-kaminski/introductory-call",
  text = "Schedule time with me",
  color = "#5fff70",
  textColor = "#ffffff",
  branding = false,
}) => {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      // Initialize badge widget after script loads
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url,
          text,
          color,
          textColor,
          branding,
        });
      }
    };
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, [url, text, color, textColor, branding]);

  return null; // This component doesn't render anything visible directly
};

export default CalendlyPopUp;
