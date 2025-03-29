import React from "react";
import Stats from "@/components/Stats";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <title>
          Expert Video Storytelling and Production Services in Seoul
        </title>
        <meta
          name="description"
          content="Skilled director in Seoul offering expert video storytelling services. Hire a professional driver in South Korea for seamless production support."
        />
        <meta
          name="keywords"
          content="Driver in South Korea, Director in Seoul, Expert video storytelling services"
        />
        <meta
          property="og:title"
          content="Expert Video Storytelling and Production Services in Seoul"
        />
        <meta
          property="og:description"
          content="Skilled director in Seoul offering expert video storytelling services. Hire a professional driver in South Korea for seamless production support."
        />
        <meta
          property="og:url"
          content="https://www.posted-productions.com/about"
        />
      </Head>
      <div>
        <Stats />
      </div>
    </>
  );
};

export default page;
