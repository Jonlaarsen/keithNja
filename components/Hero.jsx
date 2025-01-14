
import Link from "next/link";
import React from "react";
import InfiniteCarousel from '@/components/InfiniteCarousel'
import RotatingLogo from "./Logo";


const Hero = () => {

 

 

  return (
    
    <div className="md:min-h-screen max-w-[99vw] pb-[5rem] relative">
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
          className="flex top-0 left-0 h-[100vh] w-auto md:w-full md:h-screen items-center justify-center"
          
        >
          <iframe
            rel="preload"
            src="https://geo.dailymotion.com/player.html?video=x98a970"            
            playsInline
            autoPlay
            loop
            className="w-full h-screen object-cover"
          ></iframe>
          
        </div>
        {/* <RotatingLogo/> */}
        

      </div>
    </div>
  
  );
};

export default Hero;

