"use client";
import React, { useState } from "react";
import { motion } from "motion/react"

const Clips = ({ uploads }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentClip, setCurrentClip] = useState(null);

  const openModal = (clip) => {
    setCurrentClip(clip);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentClip(null);
    document.body.style.overflow = "auto"; // Re-enable background scroll
  };
  console.log(uploads)

  return (
    <motion.div
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    transition={{ duration: 1, delay: 0.1 }}
    whileInView={true}
    
     className="flex flex-col justify-center items-center">
      <h1 className="text-xl md:text-4xl xl:text-7xl pb-10">OUR WORK</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center mx-auto">
      {uploads.map((upload) => (
        <div
            key={upload.id}
            className="cursor-pointer  overflow-hidden relative group min-h[25rem] max-h-[40rem]"
            onClick={() => openModal(upload)}
        >
            <img
            src={upload.imgurl}
            alt=""
            className="w-full h-full object-cover transition-transform duration-500 group-hover:blur-sm group-hover:brightness-50 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-5xl font-semibold">{upload.title}</h1>
            <h2 className="text-2xl font-semibold w-[24rem]">{upload.subtitle}</h2>
            <p className="text-slate-400 font-semibold">"{upload.description}"</p>
            </div>
        </div>
        ))}

      </div>
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
              className="w-full h-[40vh] md:h-[80vh]"
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



