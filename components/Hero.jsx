import React from "react";

const Hero = () => {
  return (
    <div className="md:min-h-screen ">
      <div className="flex flex-col items-center gap-8 justify-center">
        {/* Background video for larger screens */}
        <div className="top-0 left-0 h-screen w-full items-center justify-center overflow-hidden relative md:block hidden">
          <video
            src="https://videos-clone-local-tommy.s3.ap-northeast-2.amazonaws.com/posted__80000+(2160p).mp4"
            autoPlay
            loop
            playsInline
            muted
            alt="Posted Productions"
            className="w-screen h-screen object-cover"
          ></video>
        </div>

        {/* Vertical video for mobile screens */}
        <div className="flex top-0 left-0 h-[100vh] w-auto md:w-screen md:h-screen md:hidden  items-center justify-center">
          <video
            src="https://videos-clone-local-tommy.s3.ap-northeast-2.amazonaws.com/Poster+Vertical.mp4"
            // src="https://player.vimeo.com/video/1050681038?h=746df36bf2&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;controls=0&amp;loop=1&amp;dnt=1"
            autoPlay
            playsInline
            loop
            muted
            // allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            // title="Poster Vertical"
            className="w-screen h-screen object-cover"
            alt="Posted Productions Vertical"
          ></video>
        </div>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
};

export default Hero;
