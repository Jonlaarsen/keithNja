"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Hero = () => {

 

 

  return (
    
    <div className="md:min-h-screen pb-[5rem] relative">
      <div className="flex flex-col items-center gap-8 justify-center">
        {/* <div
          className="flex top-0 left-0 h-[100vh] z-20 w-auto md:w-screen md:h-screen items-center justify-center"
        >
          <iframe src="https://geo.dailymotion.com/player.html?video=x98a970"
          className="top-0 left-0 w-screen h-screen object-cover"
          playsInline
          allowFullScreen
          title="Dailymotion Video Player"
          allow="web-share">
        </iframe>
        <iframe
          id="videoIframe"
          src="https://player.vimeo.com/video/1016625668?h=b71bbce9d6"
          autoplay
          className="w-screen h-screen bg-red-600 object-cover z-10 bg-video"
          allow="autoplay"
        ></iframe>
         
        </div> */}
        <div
          className="flex top-0 left-0 h-[100vh] w-auto md:w-screen md:h-screen items-center justify-center"
          
        >
          <iframe
            rel="preload"
            src="https://geo.dailymotion.com/player.html?video=x98a970"            
            playsInline
            autoPlay
            loop
            muted = {true}
            className="w-screen h-screen object-cover"
          ></iframe>
          
        </div>
        

      </div>
      <div className="flex flex-col text-md md:text-2xl gap-[2rem] text-center items-center justify-center h-[80vh] md:h-[40rem]">
        <h1 className="text-4xl text-center md:text-5xl pb-10">"Where vision meets storytelling"</h1>
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
