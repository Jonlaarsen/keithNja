"use client"
import React from 'react'
import CountUp, { useCountUp } from 'react-countup'
import LogosComp from './LogosComp'
import { motion } from "motion/react";


const Stats = () => {
  useCountUp({
    ref: 'counter',
    end: 152,
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
      <div>
        <div className='flex md:flex-row flex-col h-full w-screen md:h-[30rem] items-center justify-center pb-10 md:mx-auto'>
           
          <div   className='text-center flex flex-col items-center justify-center w-[20%] p-4 md:p-10'>
            <span id='counter'
            className='text-5xl md:text-9xl font-[200]  text-blue-500'></span>
            <h1 className='md:text-2xl text-xl  font-[300]'>Completed Works</h1>
          </div>

          <div className='text-center max-w-[50%] text-xl  font-[200] hidden md:block '>
          Posted Productions is a space <span className='italic font-bold'>“where vision meets storytelling”. </span> 
            We are a dynamic multimedia production company with <span className='font-bold'>over 9years of experience,
            specialising in documentary filmmaking </span> while also creating impactful content for corporate, branded, news, podcast and music video projects.
            <span className='font-bold'>Our mission is to craft compelling narratives that resonate deeply, </span>
            whether it's capturing the raw authenticity of real-life stories or delivering creative productions for brands.
            At Posted Productions, we believe in the power of visuals to inspire,
            inform, and connect and <span className='font-bold'>we are here to help! </span>                  
          </div>

          <div className='text-center flex flex-col items-center justify-center w-[20%] p-4 md:p-10'>
          <span id='counter2'
            className='text-5xl md:text-9xl font-[200]  text-blue-500'></span>
            <h1 className='md:text-2xl text-xl  font-[300]'>Brand Partners</h1>
          </div>

          <div className='text-center w-full p-10 text-sm  font-[200] md:hidden block '>
          Posted Productions is a space <span className='italic font-bold'>“where vision meets storytelling”. </span> 
            We are a dynamic multimedia production company with <span className='font-bold'>over 9years of experience,
            specialising in documentary filmmaking </span> while also creating impactful content for corporate, branded, news, podcast and music video projects.
            <span className='font-bold'>Our mission is to craft compelling narratives that resonate deeply, </span>
            whether it's capturing the raw authenticity of real-life stories or delivering creative productions for brands.
            At Posted Productions, we believe in the power of visuals to inspire,
            inform, and connect and <span className='font-bold'>we are here to help! </span>                  
          </div>
                    
           
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 justify-evenly gap-10 h-[40rem] w-full mb-[4rem] '>
        <div id='burst-12' className='flex items-center justify-center text-center bg-slate-600 rounded-full overflow-hidden'>
          <img src="https://srv.carbonads.net/static/30242/4b723271609d12c16fec10ddea2ce78e9bba0517" className='object-fill h-full w-full'  alt="" />
        </div>
        <div id='burst-12' className='flex items-center justify-center text-center bg-slate-600 rounded-full'>
          hello
        </div>
        <div id='burst-12' className='flex items-center justify-center text-center bg-slate-600 rounded-full'>
          hello
        </div>
      </div>
      <LogosComp/>
    </motion.div>
  )
}

export default Stats

