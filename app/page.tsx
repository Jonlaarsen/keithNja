import Hero from "@/components/Hero";
import Head from "next/head";
import Script from "next/script";

// Enable immediate revalidation
export const revalidate = 0;

export default async function Page() {
  return (
    <>
      <Head>
        <title>
          Leading Documentary Production Company in Seoul, South Korea
        </title>
        <meta
          name="google-site-verification"
          content="vgkbFDUp2jclq5hMk8YqTF85zUd4luLVcG1Q_e4Pn_M"
        />
        <meta
          name="description"
          content="Expert production services in South Korea for documentaries, commercials, and films. Trusted production company in Seoul for high-quality content creation."
        />
        <meta
          name="keywords"
          content="Documentary production company in Seoul, Production company in South Korea, Production services in South Korea"
        />
        <meta
          property="og:title"
          content="Leading Documentary Production Company in Seoul, South Korea"
        />
        <meta
          property="og:description"
          content="Expert production services in South Korea for documentaries, commercials, and films. Trusted production company in Seoul for high-quality content creation."
        />
        <meta property="og:url" content="https://www.posted-productions.com/" />
        <meta
          name="google-site-verification"
          content="vgkbFDUp2jclq5hMk8YqTF85zUd4luLVcG1Q_e4Pn_M"
        />
      </Head>
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
      </div>
    </>
  );
}
