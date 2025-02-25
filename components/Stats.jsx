"use client"
import React from 'react'
import CountUp, { useCountUp } from 'react-countup'
import LogosComp from './LogosComp'
import { motion } from "motion/react";
import { TextAnimate } from './ui/text-animate';


const Stats = () => {
  useCountUp({
    ref: 'counter',
    end: 167,
    enableScrollSpy: true,
    scrollSpyDelay: 200,
  });
  useCountUp({
    ref: 'counter2',
    end: 48,
    enableScrollSpy: true,
    scrollSpyDelay: 200,
  });
    


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4, delay: 0.1 }}
      className='min-h-screen pt-[10rem] w-full flex flex-col items-center mx-auto justify-evenly'>

      
        <div className='flex md:flex-row flex-col w-full md:h-full items-center justify-center  md:mx-auto'>
          <div   className='text-center flex flex-col items-center justify-center md:w-[25%] p-4 md:p-10'>
            <span id='counter'
            className='text-5xl md:text-9xl font-[200]  text-blue-500'></span>
            <h1 className='md:text-2xl text-xl  font-[300]'>Completed Works</h1>
          </div>
          <div className='text-justify  text-lg font-[200] hidden h-full w-[47rem] md:block '>
          Posted Productions is a space <span className='italic font-bold'>“where vision meets storytelling”. </span> 
            We are a dynamic multimedia production company with <span className='font-bold'>over 9 years of experience,
            specialising in documentary filmmaking </span> while also creating impactful content for corporate, branded, news, podcast, and music videos.
            <span className='font-bold'> Our mission is to craft compelling narratives that resonate deeply, </span>
            whether it's capturing the raw authenticity of real-life stories or delivering creative productions for brands.
            At Posted Productions, we believe in the power of visuals to inspire,
            inform, and connect and <span className='font-bold'>we are here to help! </span>                  
          </div>

          <div className='text-center flex flex-col items-center justify-center md:w-[25%] p-4 md:p-10'>
          <span id='counter2'
            className='text-5xl md:text-9xl font-[200]  text-blue-500'></span>
            <h1 className='md:text-2xl text-xl  font-[300]'>Global Channels & Brand Partners</h1>
          </div>

          <div className='text-justify w-full p-10 text-sm  font-[200] md:hidden block '>
          Posted Productions is a space <span className='italic font-bold'>“where vision meets storytelling”. </span> 
            We are a dynamic multimedia production company with <span className='font-bold'>over 9 years of experience,
            specialising in documentary filmmaking </span> while also creating impactful content for corporate, branded, news, podcast, and music videos.
            <span className='font-bold'> Our mission is to craft compelling narratives that resonate deeply, </span>
            whether it's capturing the raw authenticity of real-life stories or delivering creative productions for brands.
            At Posted Productions, we believe in the power of visuals to inspire,
            inform, and connect and <span className='font-bold'>we are here to help! </span>                  
          </div>
        </div>

      
      <div className='flex flex-col md:grid md:grid-cols-3 justify-evenly items-center gap-10 h-full md:h-[40rem] w-full mb-[4rem] '>
        <div className='flex items-center justify-center text-center bg-slate-600 rounded-full overflow-hidden w-[10rem] h-[10rem] md:h-[25rem] md:w-[25rem]'>
        <video src="/videos/video1.mov" autoPlay loop muted className='object-cover md:w-[50rem] md:h-[50rem]'   alt="" />
        </div>
        <div className='flex  items-center justify-center text-center bg-slate-600 rounded-full overflow-hidden w-[10rem] h-[10rem] md:h-[25rem] md:w-[25rem]'>
          <video src="/videos/video2.mov" autoPlay loop muted className='object-cover md:w-[50rem] md:h-[50rem]'   alt="" />
        </div>
        <div className='flex items-center justify-center text-center bg-slate-600 rounded-full overflow-hidden w-[10rem] h-[10rem] md:h-[25rem] md:w-[25rem]'>
        <video src="/videos/video3.mov" autoPlay loop muted className='object-cover md:w-[50rem] md:h-[50rem]'  alt="" />
        </div>
      </div>
      <h1 className='text-2xl md:text-5xl pt-10 text-blue-600 uppercase text-center'>Global Channels & Brand Collaborators so far...</h1>
      <LogosComp/>
    </motion.div>
  )
}

export default Stats


