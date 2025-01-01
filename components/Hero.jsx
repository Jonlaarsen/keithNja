import React from "react";

const Hero = () => {
 

  return (
    <div className="md:min-h-screen pb-[5rem] relative">
      <div className="flex flex-col items-center gap-8 justify-center">
        <div
          className="flex top-0 left-0 h-[100vh] z-20 w-auto md:w-screen md:h-screen items-center justify-center"
        >
          <iframe
            // rel="preload"
            // src="https://www.youtube.com/embed/6yDSHC0EPyc?autoplay=1&mute=1&controls=0&playsinline=0"
            // autoPlay
            // muted 
            className="w-screen h-screen bg-red-600 object-cover z-10"
            />
        </div>
      </div>
    </div>
  );
};

export default Hero;