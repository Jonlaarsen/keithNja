
import Link from "next/link";
import React from "react";
import InfiniteCarousel from '@/components/InfiniteCarousel'
import RotatingLogo from "./Logo";


const Hero = () => {

 

 

  return (
    
    <div className="md:min-h-screen pb-[5rem] z-10">
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
        {/* <div className="flex top-0 left-0  h-screen md:h-[56vw] max-w-screen w-full items-center justify-center relative overflow-hidden">
          <iframe 
          src="https://player.vimeo.com/video/1048469458?h=3224553ac2&amp;autoplay=1&amp;controls=0&amp;loop=1&amp;muted=1" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          className="w-full h-screen md:h-full object-cover"
          ></iframe>
        </div> */}
        <div className="flex top-0 left-0 h-screen w-full items-center justify-center overflow-hidden relative">
          <iframe 
            src="https://player.vimeo.com/video/1048469458?h=3224553ac2&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;controls=0&amp;loop=1&amp;dnt=1"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-h-full min-w-full transform -translate-x-1/2 -translate-y-1/2 box-border pointer-events-none"
          ></iframe>
          {/* <script src="https://player.vimeo.com/api/player.js"></script> */}
        </div>

      </div>
    </div>
  
  );
};

export default Hero;

