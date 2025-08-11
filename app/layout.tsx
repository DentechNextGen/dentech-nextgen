import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Dela_Gothic_One } from "next/font/google";
import "./globals.css";
import { organizationSchema } from "@/lib/schema/organization";
import { siteConfig } from "@/src/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleTagManager from "@/components/GoogleTagManager";
import LogRocket from "@/app/components/LogRocket";
import InstantlyPixel from "@/app/_analytics/InstantlyPixel";

const inter = Inter({ subsets: ["latin"] });
const delaGothicOne = Dela_Gothic_One({ subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://dentech.com"
  ),
  title: {
    template: "%s | Dentech",
    default: "Dentech - Dental Practice Management Software",
  },
  description:
    "Dentech offers innovative and efficient solutions designed to enhance practice management in the dental industry. The platform simplifies tasks like appointment scheduling and billing, enabling practitioners to reduce administrative efforts and dedicate more time to patient care.",
  openGraph: {
    title: "Dentech - Dental Practice Management Software",
    description:
      "Dentech offers innovative and efficient solutions designed to enhance practice management in the dental industry. The platform simplifies tasks like appointment scheduling and billing, enabling practitioners to reduce administrative efforts and dedicate more time to patient care.",
    url: "https://dentech.com",
    siteName: "Dentech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentech - Dental Practice Management Software",
    description:
      "Dentech offers innovative and efficient solutions designed to enhance practice management in the dental industry. The platform simplifies tasks like appointment scheduling and billing, enabling practitioners to reduce administrative efforts and dedicate more time to patient care.",
    creator: "@dentech",
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "script:ld+json": JSON.stringify(organizationSchema),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <InstantlyPixel />
      </head>
      <GoogleTagManager />
      <LogRocket />
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-white antialiased`}
      >
        <Header />
        <main className="flex-1 pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
