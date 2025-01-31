
"use client"
import React from 'react'
import { TextAnimate } from '@/components/ui/text-animate';




const page = () => {
  return (
    <div className='flex flex-col  pt-[8rem] items-center'>
      <div className='h-full pb-10  w-full md:w-[70rem] flex flex-col text-center items-center px-4 md:px-0  justify-center'>
        
          <TextAnimate animation='slideLeft' startOnView={false} className='footerheader font-bold text-3xl md:text-7xl text-blue-800'>Your Vision. Perfectly Crafted By Us</TextAnimate>
          <TextAnimate animation='slideDown' startOnView={false} className='font-light text-lg italic'>We create and refine premium content across genres - news, podcast, travel, sports, music, social issues, true crime, entertainment, commercials, music video, brand contents and more</TextAnimate>
      
          
      </div>

      <div className='h-full w-full flex flex-col py-2 md:py-10'
      >          
      <TextAnimate animation='slideRight' by='character'  className='text-4xl md:text-7xl uppercase flex md:relative w-full left-[2rem] top-11 text-blue-600'>PREPRODUCTION</TextAnimate>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div>
          <div className='h-[20rem] w-screen md:w-full md:h-[30rem] overflow-hidden '>
          <iframe src="https://player.vimeo.com/video/1051779123?h=d0a2ca8508&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
          className='h-[20rem] w-screen md:w-[120%] md:h-[100%]  '
          title="POST PRODUCTION"></iframe>
          </div>
        </div>
          <div className='h-full md:h-[30rem] bg-black py-2 md:py-0'>
          <ul className='flex flex-col gap-6 h-full text-sm md:text-xl font-light text-center p-2 md:pl-5 justify-center'>
              <li
              >&#9830; Creative development & scripting</li>
              <li
              >&#9830; Budgeting & Scheduling</li>
              <li
              >&#9830; Location Scouting & Fixing</li>
              <li
              >&#9830; Crew & Equipment Hire</li>
              <li
              >&#9830; Legal / Permit & Logistics Management</li>
            </ul>
          </div>
        </div>
        <div className='md:flex items-center justify-center md:mt-[-2rem] text-center flex-col  '>
         <TextAnimate animation="blurInUp" by="word" startOnView={false} className='text-3xl md:text-5xl  md:w-[45rem] bg-blue-600 bg-opacity-50 footerheader py-2 px-8'>
          From Concept To Completion
         </TextAnimate>
          <TextAnimate animation='slideUp' className='text-xl md:text-3xl uppercase md:w-[40rem] font-[400] italic'>We handle it all no matter the scale!</TextAnimate>
          
        </div>
        
      </div>
      
      <div className='h-full w-full flex flex-col py-2 md:py-10'
       >          
      <TextAnimate animation='slideRight' by='character' className='text-4xl md:text-7xl uppercase flex md:relative w-full left-[2rem] top-11 text-blue-400'>FILMING</TextAnimate>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className=' h-full w-sc md:hidden block overflow-hidden '>
        <iframe src="https://player.vimeo.com/video/1051778908?h=bbd723567f&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          className='h-[20rem] w-[400px] md:w-[116%] md:h-[100%] object-fill '
           title="Filming and Production Service"></iframe>
        </div>
      
        <div className='h-full md:h-[30rem] bg-black py-2 md:py-0'>
        <ul className='flex flex-col gap-6 h-full text-sm md:text-xl font-light text-center p-2 md:pl-5 justify-center'>
              <li >
                &#9830; Full Production Crew  
              <p >i.e. Producer, Director, DoP, Sound, Drone, PA, and more.</p>
              </li>
              <li
              >&#9830; Top-Tier Rentals: Cameras, lighting, gear, and vehicles tailored to your project.</li>
              <li
              >&#9830; Expert Logistics: From setup to wrap-up, we handle every detail.</li>
            </ul>
          </div>
          <div>
          <div className='bg-black md:w-full md:h-[30rem] hidden md:block overflow-hidden '>
          <iframe src="https://player.vimeo.com/video/1051778908?h=bbd723567f&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          className='h-[20rem] w-[400px] md:w-[116%] md:h-[100%] object-fill '
           title="Filming and Production Service"></iframe>
          
          </div>
      </div>
        </div>
        <div className='md:flex items-center md:mt-[-2rem] justify-center text-center flex-col  '>
         
          <TextAnimate animation='blurInUp' by="word" className='text-3xl md:text-5xl  md:w-[40rem] bg-blue-400 bg-opacity-50 footerheader py-2 px-8'>Focus on your vision</TextAnimate>
          <TextAnimate animation='slideUp' className='text-xl md:text-3xl uppercase md:w-[40rem] font-[400] italic'>we will take care of the rest! Seamless Filming, From Start to Finish</TextAnimate>
         
        </div>
      </div>

      <div className='h-full w-full flex flex-col py-2 md:py-10'
      >          
      <TextAnimate animation='slideRight' by='character' className='text-4xl md:text-7xl uppercase flex md:relative w-full left-[2rem] top-8 text-blue-200'>POSTPRODUCTION</TextAnimate>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div>
          <div className='h-[20rem] w-screen md:w-full md:h-[30rem] overflow-hidden '>
          <iframe src="https://player.vimeo.com/video/1051779050?h=155e4c030a&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;background=1" 
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
          className='h-[20rem] w-[400px] md:w-[116%] md:h-[100%] object-fill '
          title="POST PRODUCTION"></iframe>
          
          </div>
        </div>
          <div className='h-full md:h-[30rem] bg-black py-2 md:py-0'>
          <ul
            className='flex flex-col gap-6 h-full text-sm md:text-xl font-light text-center p-2 md:pl-5 justify-center'>
              <li
              >&#9830; Transcoding & Editing: Precision at every frame.</li>
              <li
              >&#9830; Color Grading: Visuals that captivate.</li>
              <li
              >&#9830; Sound Design & Mixing: Immersive audio perfection.</li>
              <li
              >
                &#9830; Custom Music & Effects: Tailored for your story.</li>
                <li
              >&#9830; Voiceovers, Subtitles & Translation: Multilingual and seamless.</li>
               <li
              >&#9830; Archival Footage Integration: Bringing the past to the present.</li>
               <li
              >&#9830; Fact Checking: Ensuring every detail is accurate.</li>
            </ul>
          </div>
        </div>
        <div className='flex items-center justify-center md:mt-[-2rem] text-center w-full flex-col '>
         
          <TextAnimate animation='blurInUp' by="word" className='text-3xl md:text-5xl w-full md:w-[40rem] bg-blue-200 bg-opacity-50 footerheader py-2 px-8'>Bring your project to life</TextAnimate>
          <TextAnimate animation='slideUp' className='text-lg md:text-3xl uppercase md:w-[40rem] font-[400] italic'>with our expert postproduction services!</TextAnimate>
        
        </div>
      </div>
    </div>
    
  );
};

export default page;

