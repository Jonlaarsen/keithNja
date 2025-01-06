"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

const Clips = ({ uploads }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentClip, setCurrentClip] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const youtubeRegex = /^(https?:\/\/)?(www\.)?youtube\.com\/(watch\?v=|embed\/)([a-zA-Z0-9_-]{11})/;

  const openModal = (clip) => {
    if (youtubeRegex.test(clip.videourl)) {
      // Open in modal if it's a YouTube link
      setCurrentClip(clip);
      setIsModalOpen(true);
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      // Open external links in a new tab
      window.open(clip.videourl, "_blank");
    }
  };
  

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentClip(null);
    document.body.style.overflow = "auto"; // Re-enable background scroll
  };

  // Filter uploads based on the selected category
  const filteredUploads =
    selectedCategory === "All"
      ? uploads
      : uploads.filter((upload) => upload.categories === selectedCategory);

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
      transition={{ duration: 1, delay: 0.1 }}
      whileInView={true}
      className="flex flex-col justify-center  items-center"
    >
      {/* Category Filter Links */}
      <div className=" flex flex-wrap md:flex-row flex-col justify-center md:border-2 border-purple-500 mb-10 md:mb-[7rem] ">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={`md:px-6 px-2 text-white py-2 md:text-xl font-[300] uppercase ${
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center md:mx-10">
        {filteredUploads.map((upload) => (
          <div
            key={upload.id}
            className="cursor-pointer overflow-hidden relative group h-[15rem]"
            onClick={() => openModal(upload)}
          >
            <img
              src={upload.imgurl}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:brightness-50 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
              <h1 className="hidden group-hover:block text-3xl font-semibold">{upload.title}</h1>
              <h3 className="hidden group-hover:block text-xl font-semibold w-[24rem]">{upload.subtitle}</h3>
              <p className="hidden group-hover:block text-slate-400 font-semibold">"{upload.description}"</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && currentClip && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal on background click
        >
          <div
            className="bg-white relative overflow-hidden w-screen md:w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // Prevent closing on inside click
          >
            <iframe
              allowFullScreen
              src={currentClip.videourl}
              className="w-full h-screen md:h-[50vh] xl:h-[90vh]"
              title={currentClip.title}
            ></iframe>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black rounded-full px-4 py-2 text-xl font-bold"
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
