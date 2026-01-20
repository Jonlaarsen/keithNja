import Hero from "@/components/Hero";
import Script from "next/script";
import type { Metadata } from "next";

// Enable immediate revalidation
export const revalidate = 0;

export const metadata: Metadata = {
  title: "South Korea Fixer & Production Company | Posted Productions",
  description:
    "Trusted South Korea fixer services and full production support for films, TV, and commercial projects—your reliable South Korea production company. Posted Productions",
  keywords: [
    "South Korea fixer",
    "South Korea production company",
    "video production service",
    "video production services",
    "video agency",
    "service video production",
    "productions companies",
    "production company",
    "company video production",
    "video production company",
    "video production corporate",
    "video film company",
    "video production firm",
    "filmmaking agency",
    "film production agency",
    "media production services",
    "content production agency",
    "filming companies",
    "video production agencies",
    "commercial videographer",
    "video company",
    "video production agency",
    "video design company",
    "video productions agency",
    "Documentary production company in Seoul",
    "Production company in South Korea",
    "Production services in South Korea",
    "video production services seol",
    "videao agency",
    "commercial videography",
  ].join(", "),
  alternates: {
    canonical: "https://www.posted-productions.com/",
  },
  openGraph: {
    title: "South Korea Fixer & Production Company | Posted Productions",
    description:
      "Trusted South Korea fixer services and full production support for films, TV, and commercial projects—your reliable South Korea production company. Posted Productions",
    url: "https://www.posted-productions.com/",
    siteName: "Posted Productions",
  },
  verification: {
    google: "vgkbFDUp2jclq5hMk8YqTF85zUd4luLVcG1Q_e4Pn_M",
  },
};

export default async function Page() {
  return (
    <>
      <Script
        id="google-tag-manager"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-RJMZTVWS9B"
      ></Script>
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RJMZTVWS9B');
    `,
        }}
      />
      <div>
        <Hero />
        <h1 className="hidden">
          Posted Productions | Expert production services in South Korea for
          documentaries, commercials, and films. Trusted production company in
          Seoul for high-quality content creation.{" "}
        </h1>
      </div>
    </>
  );
}
