"use client"
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
// Dynamically import the socket.io-client only on the client side
import dynamic from 'next/dynamic';

const io = dynamic(() => import('socket.io-client'), { ssr: false });

const Clips = ({ uploads }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentClip, setCurrentClip] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [realTimeUploads, setRealTimeUploads] = useState(uploads);

  // Open modal logic for clips
  const openModal = (clip) => {
    if (youtubeRegex.test(clip.videourl)) {
      setCurrentClip(clip);
      setIsModalOpen(true);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      window.open(clip.videourl, "_blank");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentClip(null);
    document.body.style.overflow = "auto"; // Re-enable background scroll
  };

  // Initialize socket connection and listen for real-time updates
  useEffect(() => {
    const socket = io();  // Initialize socket client
    socket.on("dataUpdate", (newUpload) => {
      setRealTimeUploads((prevUploads) => [...prevUploads, newUpload]);
    });

    return () => {
      socket.disconnect(); // Clean up on unmount
    };
  }, []);

  // Filter uploads based on selected category
  const filteredUploads = selectedCategory === "All" 
    ? realTimeUploads 
    : realTimeUploads.filter((upload) => upload.categories === selectedCategory);


  const categories = [
    { label: "All", value: "All" },
    { label: "Documentary", value: "docummentary" },
    { label: "Music Video", value: "MusicVideo" },
    { label: "Branded And Corporate", value: "Branded And corporate" },
    { label: "News and Podcast", value: "News and podcast" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileInView={true}
      className="flex flex-col justify-center max-w-[98vw] overflow-x-hidden items-center w-screen"
    >
      {/* Category Filter Links */}
      <div className=" flex flex-wrap md:flex-row flex-col justify-center md:border-2 border-purple-500 mb-10 md:mb-[7rem] ">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`md:px-6 px-2 text-white py-2 md:text-xl font-[400] uppercase ${
              selectedCategory === category.value
                ? "bg-purple-500 text-white"
                : "hover:bg-purple-500 hover:text-white"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Display Clips */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center lg:mx-10">
        {filteredUploads.map((upload) => (
          <div
            key={upload.id}
            className="cursor-pointer overflow-hidden relative group w-screen h-auto md:max-w-[25rem] lg:max-w-[27rem] 2xl:max-w-[31rem] md:h-[13.5rem] lg:h-[15rem]  2xl:h-[16.5rem]"
            onClick={() => openModal(upload)}
          >
            <img
              src={upload.imgurl}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:brightness-[.25] group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center mx-8 text-center text-white">
              <h1 className="hidden group-hover:block text-3xl mb-2  font-bold">{upload.title}</h1>
              <h3 className="hidden group-hover:block text-[1.25rem] font-semibold w-[24rem]">"{upload.subtitle}"</h3>
              <p className="hidden group-hover:block text-slate-200 font-semibold">{`{ `}{upload.description}{` }`}</p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal} // Closes modal when clicking outside
        >
          <div
            className="bg-white rounded-lg overflow-hidden relative"
            onClick={(e) => e.stopPropagation()} // Prevents close on inside clicks
          >
            
            <iframe controls autoPlay className="w-screen md:w-[60rem] h-[35rem]"
             allow="autoplay"
             src={currentVideo.videourl} type="video/mp4" />
            

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Clips;
