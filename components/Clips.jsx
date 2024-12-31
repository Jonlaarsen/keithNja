"use client"
import React, { useState } from 'react';




const Clips = ({ uploads }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentiframe, setCurrentiframe] = useState(null);

//   const openModal = (iframe) => {
//     setCurrentiframe(iframe);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setCurrentiframe(null);
//   };

  return (
   <div className=''>
        <h1 className='text-xl md:text-4xl xl:text-7xl'>OUR WORK</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto'>
           {uploads.maps((upload) => )}
        </div>
   </div>
  );
};

export default Clips;



{/* <div className="flex flex-row md:flex-col w-screen h-full justify-center items-center pb-10">
<div className="flex flex-row gap-4 flex-wrap items-center justify-center">
  {uploads.map((upload) => (
    <div
      key={upload.id}
      className="relative group h-[40rem] w-[50rem] bg-black cursor-pointer"
      onClick={() => openModal(upload.videourl)}
    >
      <video
        controls={false}
        poster={upload.imgurl}
        src={upload.videourl}
        loop
        muted
        className="group-hover:opacity-45 opacity-100 h-[40rem] w-[50rem] fill"
      ></video>
      
      <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-[20rem] flex justify-center items-center text-center text-4xl uppercase text-white font-semibold">
        {upload.title}
      </div>
      <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-x-0 top-[25rem] flex justify-center items-center text-xl text-white font-normal">
        {upload.subtitle}
      </div>
    </div>
  ))}
</div>
{isModalOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
    onClick={closeModal}
  >
    <div
      className="bg-white rounded-lg overflow-hidden relative"
      onClick={(e) => e.stopPropagation()}
    >
      <iframe
        src={currentiframe}
        className="w-screen md:w-[50rem] h-auto"
        allowFullScreen
      ></iframe>
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-white text-3xl font-bold"
      >
        &times;
      </button>
    </div>
  </div>
)}
</div> */}