"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Hero = () => {

 

 

  return (
    
    <div className="md:min-h-screen pb-[5rem] relative">
      <div className="flex flex-col items-center gap-8 justify-center">
        <div
          className="flex top-0 left-0 h-[100vh] z-20 w-auto md:w-screen md:h-screen items-center justify-center"
        >

        <iframe
          id="videoIframe"
          src="https://drive.google.com/file/d/1YJ8V-UUgOD0MslPW74o7z0QfspjoB-5U/preview?&loop=1&controls=0&playsinline=1"
          className="w-screen h-screen bg-red-600 object-cover z-10 bg-video"
          allow="autoplay"
        ></iframe>
         
        </div>
      </div>
      <div className="flex flex-col text-md md:text-2xl gap-8 items-center justify-center h-[50vh] md:h-[30rem]">
        <h1 className="text-4xl text-center md:text-6xl">" Where vision meets storytelling "</h1>
        <p>Production & Services in Seoul and Worldwide</p>
        <Link href="emailto:blabla@email.com">contact@posted-productions.com</Link>
        <img 
        className="w-[7rem] py-10"
        src="https://images.squarespace-cdn.com/content/v1/668baa90a93f73799f48b8ba/7dcfb365-6ff7-417b-9a68-566e5ef07ecc/PngItem_506629.png?format=500w" alt="" />
      </div>
      <InfiniteCarousel/>
    </div>
  
  );
};

export default Hero;





const logos = [
  "/logos/3m.svg",
  "/logos/barstool-store.svg",
  "/logos/budweiser.svg",
  "/logos/buzzfeed.svg",
  "/logos/forbes.svg",
  "/logos/macys.svg",
  "/logos/menshealth.svg",
  "/logos/mrbeast.svg",
];

export const InfiniteCarousel = ()=> {
  return (
    <div className="relative overflow-hidden py-12">
      <motion.div
        className="flex whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{ x: `-${100}%` }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {logos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Logo ${index + 1}`}
            className="h-12 mx-10"
          />
        ))}
        {/* Duplicate logos for infinite effect */}
        {logos.map((src, index) => (
          <img
            key={`duplicate-${index}`}
            src={src}
            alt={`Logo duplicate ${index + 1}`}
            className="h-12 mx-10"
          />
        ))}
      </motion.div>
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 h-full w-64 bg-gradient-to-r from-[var(--background)] to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-64 bg-gradient-to-l from-[var(--background)] to-transparent pointer-events-none"></div>
    </div>
  );
}
