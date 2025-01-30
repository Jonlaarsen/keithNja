
"use client"
import React from 'react'
import { motion } from "motion/react";
import {} from '@/components/BoxReveal';
import { TextAnimate } from '@/components/ui/text-animate';




const page = () => {
  return (
    <div className='flex flex-col  pt-[8rem] items-center'>
      <div className='h-full pb-10  w-full md:w-[70rem] flex flex-col text-center items-center px-4 md:px-0  justify-center'>
        
          <TextAnimate animation='slideLeft' className='footerheader font-bold text-3xl md:text-7xl text-blue-800'>Your Vision. Perfectly Crafted By Us</TextAnimate>
          <TextAnimate animation='slideDown' className='font-light text-lg italic'>We create and refine premium content across genres - news, podcast, travel, sports, music, social issues, true crime, entertainment, commercials, music video, brand contents and more</TextAnimate>
      
          
      </div>

      <div className='h-full w-full flex flex-col py-2 md:py-10'
      >          
      <h1 className='text-4xl md:text-7xl uppercase flex md:relative w-full left-[2rem] top-11 text-blue-600'>PREPRODUCTION</h1>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div>
          <div className='h-full md:h-[30rem] overflow-hidden '>
          
            <iframe src="https://player.vimeo.com/video/1051779123?h=d0a2ca8508&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;controls=0" 
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
             title="Pre production"
             className='h-[20rem] w-full md:w-[116%] md:h-[100%] object-fill '
             >
             </iframe>
          </div>
          </div>
          <div className='h-full md:h-[30rem] bg-black py-2 md:py-0'>
          <ul className='flex flex-col gap-6 h-full text-sm md:text-xl font-light text-center p-2 md:pl-5 justify-center'>
              <motion.li
              initial={{  opacity: 0}}
              whileInView={{  opacity: 1}}
              transition={{duration:1 ,delay:0.1}}
              >&#9830; Creative development & scripting</motion.li>
              <motion.li
              initial={{  opacity: 0}}
              whileInView={{  opacity: 1}}
              transition={{duration:1 ,delay:0.2}}
              >&#9830; Budgeting & Scheduling</motion.li>
              <motion.li
              initial={{  opacity: 0}}
              whileInView={{  opacity: 1}}
              transition={{duration:1 ,delay:0.3}}
              >&#9830; Location Scouting & Fixing</motion.li>
              <motion.li
              initial={{  opacity: 0}}
              whileInView={{  opacity: 1}}
              transition={{duration:1 ,delay:0.4}}
              >&#9830; Crew & Equipment Hire</motion.li>
              <motion.li
              initial={{  opacity: 0}}
              whileInView={{  opacity: 1}}
              transition={{duration:1 ,delay:0.5}}
              >&#9830; Legal / Permit & Logistics Management</motion.li>
            </ul>
          </div>
        </div>
        <div className='md:flex items-center justify-center md:mt-[-2rem] text-center flex-col  '>
         <TextAnimate animation="blurInUp" by="character" className='text-3xl md:text-5xl  md:w-[45rem] bg-blue-600 bg-opacity-50 footerheader py-2 px-8'>
          From Concept To Completion
         </TextAnimate>
          <TextAnimate animation='blurInUp'   className='text-xl md:text-3xl uppercase md:w-[40rem] font-[400] italic'>We handle it all no matter the scale!</TextAnimate>
          
        </div>
        
      </div>
      
      <div className='h-full w-full flex flex-col py-2 md:py-10'
       >          
      <h1 className='text-4xl md:text-7xl uppercase flex md:relative w-full left-[2rem] top-11 text-blue-400'>FILMING</h1>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className=' h-full md:h-[30rem] md:hidden block overflow-hidden '>
          <iframe src="https://player.vimeo.com/video/1051778908?h=bbd723567f&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;controls=0" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          className='h-[20rem] w-[400px] md:w-[116%] md:h-[100%] object-fill '
           title="Filming and Production Service"></iframe>
        </div>
      
        <div className='h-full md:h-[30rem] bg-black py-2 md:py-0'>
        <ul className='flex flex-col gap-6 h-full text-sm md:text-xl font-light text-center p-2 md:pl-5 justify-center'>
              <motion.li
              initial={{  opacity: 0}}
              whileInView={{  opacity: 1}}
              transition={{duration:1 ,delay:0.1}}
              >
                &#9830; Full Production Crew  
              <p >i.e. Producer, Director, DoP, Sound, Drone, PA, and more.</p>
              </motion.li>
              <motion.li
              initial={{  opacity: 0}}
              whileInView={{  opacity: 1}}
              transition={{duration:1 ,delay:0.3}}
              >&#9830; Top-Tier Rentals: Cameras, lighting, gear, and vehicles tailored to your project.</motion.li>
              <motion.li
              initial={{  opacity: 0}}
              whileInView={{  opacity: 1}}
              transition={{duration:1 ,delay:0.5}}
              >&#9830; Expert Logistics: From setup to wrap-up, we handle every detail.</motion.li>
            </ul>
          </div>
          <div>
          <div className='bg-black h-full md:h-[30rem] hidden md:block overflow-hidden '>
          <iframe src="https://player.vimeo.com/video/1051778908?h=bbd723567f&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;controls=0" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          className='h-[20rem] w-[400px] md:w-[116%] md:h-[100%] object-fill '
           title="Filming and Production Service"></iframe>
          
          </div>
      </div>
        </div>
        <div className='md:flex items-center md:mt-[-2rem] justify-center text-center flex-col  '>
         
          <TextAnimate animation='blurInUp' className='text-3xl md:text-5xl  md:w-[40rem] bg-blue-400 bg-opacity-50 footerheader py-2 px-8'>Focus on your vision</TextAnimate>
          <TextAnimate animation='blurInUp' className='text-xl md:text-3xl uppercase md:w-[40rem] font-[400] italic'>we will take care of the rest! Seamless Filming, From Start to Finish</TextAnimate>
         
        </div>
      </div>

      <div className='h-full w-full flex flex-col py-2 md:py-10'
      >          
      <h1 className='text-4xl md:text-7xl uppercase flex md:relative w-full left-[2rem] top-8 text-blue-200'>POSTPRODUCTION</h1>
      <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
          <div className='h-[20rem] md:h-[30rem] overflow-hidden '>
          <iframe src="https://player.vimeo.com/video/1051779050?h=155e4c030a&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;controls=0" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
          className='h-[20rem] w-[400px] md:w-[116%] md:h-[100%] object-fill '
          title="POST PRODUCTION"></iframe>
          
          </div>
          </div>
          <div className='h-full md:h-[30rem] bg-black py-2 md:py-0'>
          <ul
            className='flex flex-col gap-6 h-full text-sm md:text-xl font-light text-center p-2 md:pl-5 justify-center'>
              <motion.li
              initial={{  opacity: 0}}
              whileInView={{  opacity: 1}}
              transition={{duration:1 ,delay:0.1}}
              >&#9830; Transcoding & Editing: Precision at every frame.</motion.li>
              <motion.li
              initial={{  opacity: 0}}
              whileInView={{  opacity: 1}}
              transition={{duration:1 ,delay:0.2}}
              >&#9830; Color Grading: Visuals that captivate.</motion.li>
              <motion.li
              initial={{  opacity: 0}}
              whileInView={{  opacity: 1}}
              transition={{duration:1 ,delay:0.3}}
              >&#9830; Sound Design & Mixing: Immersive audio perfection.</motion.li>
              <motion.li
              initial={{  opacity: 0}}
              whileInView={{  opacity: 1}}
              transition={{duration:1 ,delay:0.4}}
              >
                &#9830; Custom Music & Effects: Tailored for your story.</motion.li>
                <motion.li
              initial={{  opacity: 0}}
              whileInView={{  opacity: 1}}
              transition={{duration:1 ,delay:0.5}}
              >&#9830; Voiceovers, Subtitles & Translation: Multilingual and seamless.</motion.li>
               <motion.li
              initial={{  opacity: 0}}
              whileInView={{  opacity: 1}}
              transition={{duration:1 ,delay:0.6}}
              >&#9830; Archival Footage Integration: Bringing the past to the present.</motion.li>
               <motion.li
              initial={{  opacity: 0}}
              whileInView={{  opacity: 1}}
              transition={{duration:1 ,delay:0.7}}
              >&#9830; Fact Checking: Ensuring every detail is accurate.</motion.li>
            </ul>
          </div>
        </div>
        <div className='flex items-center justify-center md:mt-[-2rem] text-center flex-col '>
         
          <TextAnimate animation='blurInUp' by='character' className='text-3xl md:text-5xl sw-full md:w-[40rem] bg-blue-200 bg-opacity-50 footerheader py-2 px-8'>Bring your project to life</TextAnimate>
          <TextAnimate animation='blurInUp'  className='text-lg md:text-3xl uppercase md:w-[40rem] font-[400] italic'>with our expert postproduction services!</TextAnimate>
        
        </div>
      </div>
    </div>
    
  );
};

export default page;


// {sections.map((item)=>(
//   <div key={item.title} className='grid grid-cols-2 items-center h-[35rem] w-screen justify-evenly'
//   style={{ backgroundImage: `url("${item.bgImage}")` }} >
//     <div className='h-full'>
//       <h1 className='text-3xl md:text-5xl uppercase flex sticky top-5 left-[2rem] text-blue-600'>{item.title}</h1>
//       <div className='bg-black h-full w-full'> hello</div>
//     </div>
//     <div className='bg-black bg-opacity-50 text-xl font-light pl-10 py-4'>
//       {item.content}
//     </div>
//   </div>
// ))}


{/* <div className="pt-[10rem] overflow-hidden">
      <div className='flex items-center  justify-center py-10 md:py-[5rem] mx-5 '>
        <FlipWordsDemo/>
      </div>
      
      {sections.map((item) => (
        <motion.div
          key={item.id}
          className="h-full w-full grid grid-cols-1 md:grid-cols-2"
          style={{ direction: item.id === 2 ? 'rtl' : 'ltr' }} 
        >
          
          <div
            style={{ backgroundImage: `url("${item.bgImage}")` }} 
           className=' flex items-center justify-center bg-cover min-h-[20rem]'
          >
            <motion.h1 
            initial={{ y:200, opacity: 0}}
            whileInView={{y:0, opacity: 1}}
            transition={{duration:1}}
            className=' text-4xl md:text-6xl md:font-bold '>{item.title}</motion.h1>
          </div>

         
          <div className="flex text-xl font-[300] md:text-3xl items-center text-center md:min-h-[40rem]  justify-center mx-5 py-[5rem]">
            {item.content}
          </div>
        </motion.div>
      ))}
    </div> */}