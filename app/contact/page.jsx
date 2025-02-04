"use client"
import React from 'react'
import { motion } from "motion/react";

const page = () => {
  return (
    <>
    <motion.div
    initial={{scale:0.5, opacity:0}}
    animate={{scale:1, opacity:1}}
    transition={{duration:0.7}}
    
     className='grid grid-cols-1 md:grid-cols-2 pt-[12rem] pb-10  gap-4'>
      <div >
        <div className='md:pl-5 '>
          <h1 className=' text-5xl md:text-8xl px-4 font-bold  md:pb-[5rem]'>CONTACT US</h1>
          <p className=' text-xl font-[300] px-5 w-[90%] pb-[3rem]'>Interested in working with us? <br/> Fill out some info and we will be in touch shortly!</p>
        </div>
        
        <form 
        className='flex flex-col gap-5 md:pl-10 '
        action="https://formsubmit.co/contact@posted-productions.com" method="POST">
          <div className='flex md: flex-col gap-5 w-[99vw] md:w-[80%]'>
            <div className='flex px-4 md:px-0 flex-col w-full'>
              <label htmlFor="firstname">First Name</label>
              <input 
              className='h-[3rem] md:pl-5 text-black'
              placeholder='required' type="text" name="firstname" required/>
            </div>
            <div className='flex px-4 md:px-0 flex-col w-full'>
              <label htmlFor="lastname">Last Name</label>
              <input 
              className='h-[3rem] md:pl-5 text-black'
              placeholder='required' type="text" name="lastname" required/>
            </div>
          </div>
          <div className='flex px-4 md:px-0 flex-col w-[99vw] md:w-[80%]'>
            <label htmlFor="email">Email</label>
            <input
            className='h-[3rem]  md:pl-5 text-black'
            placeholder='required' type="email" name="email" required/>
          </div>
          <div className='flex px-4 md:px-0 flex-col w-[99vw] md:w-[80%]'>
            <label htmlFor="email">Message</label>
            <textarea 
            className='h-[5rem] md:pl-5  text-black'
            placeholder='required' name="message" type='text' required></textarea>
          </div>
          <div className='px-4 md:px-0 w-[99vw] md:w-[80%]'>
              <button className='w-full border-2 border-white py-2 px-1 text-xl' type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className='w-full flex justify-center items-center'>
        <div className='w-full  overflow-hidden'>
          <iframe src="https://player.vimeo.com/video/1051779255?h=e8c1e1223f&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
          className=" w-[65rem] h-screen object-fill hidden md:block "        title="Contact us Video">
          </iframe></div>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
      <div>
      </div>
    </motion.div>
    
    </>
  )
}

export default page



