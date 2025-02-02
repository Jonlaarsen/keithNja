
import React from "react";

const Hero = () => {
  return (
    <div className="md:min-h-screen z-10">
      <div className="flex flex-col items-center gap-8 justify-center">
        {/* Background video for larger screens */}
        <div className="top-0 left-0 h-screen w-full items-center justify-center overflow-hidden relative md:block hidden">
          <iframe
            src="https://player.vimeo.com/video/1048469458?h=3224553ac2&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;controls=0&amp;loop=1&amp;dnt=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-h-full min-w-full transform -translate-x-1/2 -translate-y-1/2 box-border pointer-events-none"
          ></iframe>
        </div>

        {/* Vertical video for mobile screens */}
        <div className=" top-0 left-0 h-screen w-full items-center justify-center overflow-hidden relative md:hidden block">
          <iframe
            src="https://player.vimeo.com/video/1050681038?h=746df36bf2&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;controls=0&amp;loop=1&amp;dnt=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="Poster Vertical"
            className="absolute top-0 left-0 w-screen h-screen box-border"
          ></iframe>
        </div>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
};

export default Hero;



