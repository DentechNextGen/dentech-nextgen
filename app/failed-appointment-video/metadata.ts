import { Metadata } from "next";
import { siteConfig } from "@/src/config";

export const metadata: Metadata = {
  title: "Appointment Tracking Solutions Video | Dentech",
  description:
    "Learn how to unlock peak efficiency and recapture revenue with Dentech's sophisticated appointment tracking tools. Master failed and canceled appointment management to optimize your schedule and boost practice performance.",
  openGraph: {
    title: "Appointment Tracking Solutions Video | Dentech",
    description:
      "Learn how to unlock peak efficiency and recapture revenue with Dentech's sophisticated appointment tracking tools. Master failed and canceled appointment management to optimize your schedule and boost practice performance.",
    url: `${siteConfig.url}/failed-appointment-video`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Appointment Tracking Solutions Video | Dentech",
    description:
      "Learn how to unlock peak efficiency and recapture revenue with Dentech's sophisticated appointment tracking tools.",
  },
  alternates: {
    canonical: `${siteConfig.url}/failed-appointment-video`,
  },
};

