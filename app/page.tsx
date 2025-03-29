import Hero from "@/components/Hero";
import Head from "next/head";



export default async function Page() {

  return (
    <>
    <Head>
    <title>Leading Documentary Production Company in Seoul, South Korea</title>
    <meta name="description" content="Expert production services in South Korea for documentaries, commercials, and films. Trusted production company in Seoul for high-quality content creation." />
    <meta name="keywords" content="Documentary production company in Seoul, Production company in South Korea, Production services in South Korea" />
    <meta property="og:title" content="Leading Documentary Production Company in Seoul, South Korea" />
    <meta property="og:description" content="Expert production services in South Korea for documentaries, commercials, and films. Trusted production company in Seoul for high-quality content creation." />
    <meta property="og:url" content="https://www.posted-productions.com/" />
  </Head>
    <div>
    <Hero/>
    </div>
    </>
  );
}
