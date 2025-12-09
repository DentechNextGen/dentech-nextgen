import { Metadata } from "next";
import { siteConfig } from "@/src/config";

export const metadata: Metadata = {
  title: "NEA Integration Video - FastAttach Electronic Claim Attachments | Dentech",
  description:
    "Learn how Dentech's NEA Integration powered by FastAttach can eliminate manual claim attachments, accelerate reimbursements, and streamline your revenue cycle management. Discover seamless electronic claim attachment solutions.",
  openGraph: {
    title: "NEA Integration Video - FastAttach Electronic Claim Attachments | Dentech",
    description:
      "Learn how Dentech's NEA Integration powered by FastAttach can eliminate manual claim attachments, accelerate reimbursements, and streamline your revenue cycle management.",
    url: `${siteConfig.url}/nea-integration`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEA Integration Video - FastAttach Electronic Claim Attachments | Dentech",
    description:
      "Learn how Dentech's NEA Integration powered by FastAttach can eliminate manual claim attachments and accelerate reimbursements.",
  },
  alternates: {
    canonical: `${siteConfig.url}/nea-integration`,
  },
};

