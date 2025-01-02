"use client"
import React from 'react'
import { motion } from "motion/react"


const page = () => {
  return (
    <motion.div
    initial={{ opacity:0 }}
    animate={{ opacity:1 }}
    transition={{ duration: 1, delay: 0.1 }}
     className='grid grid-cols-1 md:grid-cols-2 py-[12rem] text-xl'>

      <div className="py-10 flex h-[30rem] md:h-full items-center justify-center bg-contain bg-[url('https://images.squarespace-cdn.com/content/v1/668baa90a93f73799f48b8ba/1726027125159-27K63FSJQ00WHRYH0MMQ/unsplash-image-ScBDhIfrCDk.jpg?format=2500w')]">
        <h1 className='text-4xl md:text-7xl text-white font-bold'>PREPRODUCTIONS</h1>
      </div>
      <div className='py-10 flex items-center text-center md:text-left md:pl-10 gap-4 min-h-[20rem] text-3xl text-white'>
        <ul className='flex flex-col gap-4' >
          <li>Concept Development</li>
          <li>Research & Scripting</li>
          <li>Budgeting & Financial Planning</li>
          <li>Scheduling & Timeline Creation</li>
          <li>Location Scouting</li>
          <li>Fixing</li>
          <li>Crew and Equipment Hire</li>
          <li>Legal Clearances, Permits & Regulatory Compliance</li>
          <li>Storyboarding & Shot Planning</li>
          <li>Logistical Planning</li>
        </ul>
      </div>

      
      <div className='py-10 flex items-center justify-center gap-4 min-h-[40rem] text-3xl text-white'>
        <ul className='flex flex-col gap-10 text-center md:text-right' >
          <li>Full Production & Filming Crew <br/> i.e. Producer, Director, DoP, Sound, Drone, PA, etc.</li>
          <li>Camera & Equipment Rentals</li>
          <li>Logistical Support & Coordination</li>
        </ul>
      </div>
      <div className=' flex py-10 w-full h-full items-center justify-center bg-cover bg-no-repeat bg-[url("https://images.squarespace-cdn.com/content/v1/668baa90a93f73799f48b8ba/1726027163743-QYWYQZGF887V6VLJ475T/unsplash-image-iBEPt9udRz4.jpg?format=2500w")]'>
        <h1 className='text-4xl md:text-7xl text-white font-bold'>FILMING</h1>
      </div>

      <div className=' flex py-10 h-[30rem] w-full md:h-full items-center justify-center bg-cover bg-no-repeat bg-[url("https://images.squarespace-cdn.com/content/v1/668baa90a93f73799f48b8ba/1726027199352-EYD3D2QN7HWL879V5CO6/unsplash-image-U4-_lvnjkd8.jpg?format=2500w")]'>
        <h1 className='text-4xl md:text-7xl text-white font-bold'>POSTPRODUCTION</h1>
      </div>
      <div className='py-10 flex items-center justify-center md:pl-10  gap-4 min-h-[40rem] text-3xl  text-white'>
          <ul className='flex flex-col gap-4 text-center md:text-left' >
            <li>Transcoding</li>
            <li>Editing</li>
            <li>Colour Grading</li>
            <li>Fact Checking</li>
            <li>Sound Design & Mixing</li>
            <li>Music Composition & Effects</li>
            <li>Voiceover Recording</li>
            <li>Subtitling & Translation</li>
            <li>Archival Footage Integration</li>
          </ul>        
       </div>
       

    </motion.div>
  )
}

export default page


{/* <div className='grid  grid-cols-1 md:grid-cols-2 '>
      
<div className="py-10 flex items-center justify-center bg-contain bg-[url('https://images.squarespace-cdn.com/content/v1/668baa90a93f73799f48b8ba/1726027125159-27K63FSJQ00WHRYH0MMQ/unsplash-image-ScBDhIfrCDk.jpg?format=2500w')]">
  <h1 className='text-4xl md:text-7xl text-black font-bold'>PREPRODUCTIONS</h1>
</div>
<div className='py-10 flex items-center justify-center gap-4 text-3xl text-black'>
  <ul className='flex flex-col gap-4' >
    <li>Concept Development</li>
    <li>Research & Scripting</li>
    <li>Budgeting & Financial Planning</li>
    <li>Scheduling & Timeline Creation</li>
    <li>Location Scouting</li>
    <li>Fixing</li>
    <li>Crew and Equipment Hire</li>
    <li>Legal Clearances, Permits & Regulatory Compliance</li>
    <li>Storyboarding & Shot Planning</li>
    <li>Logistical Planning</li>
  </ul>
</div>

<div className=' bg-red-100   h-[90vh]'>

  <div className='py-10 flex items-center justify-center gap-4 text-3xl text-black'>
    <ul className='flex flex-col gap-4' >
      <li>Full Production & Filming Crew i.e. Producer, Director, DoP, Sound, Drone, PA, etc.</li>
      <li>Camera & Equipment Rentals</li>
      <li>Logistical Support & Coordination</li>
    </ul>
  </div>
  <div className='py-10 w-full h-full flex items-center justify-center bg-cover bg-no-repeat bg-[url("https://images.squarespace-cdn.com/content/v1/668baa90a93f73799f48b8ba/1726027163743-QYWYQZGF887V6VLJ475T/unsplash-image-iBEPt9udRz4.jpg?format=2500w")]'>
    <h1>FILMING</h1>
  </div>

</div>

<div className=' bg-slate-300 h-[90vh]'>

</div>
</div> */}