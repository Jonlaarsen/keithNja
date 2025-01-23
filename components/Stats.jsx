"use client"
import React from 'react'
import CountUp from 'react-countup'
import LogosComp from './LogosComp'
import { motion } from "motion/react";

const stats = [
    
    {
        num: 49,
        text:"Projects"
    },
    {
        num: 158,
        text:"Brand Partners"
    },
]

const Stats = () => {
    


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4, delay: 0.1 }}
      whileInView={true}
      className='min-h-screen pt-[10rem] w-full flex flex-col items-center justify-center'>
      <div>
        <div>
            {stats.map((stat) => (
                <div key={stat.num} className='flex md:flex-row flex-col h-full py-[4rem] mx-10 items-center justify-center md:justify-evenly'>

                  <div className='text-center md:w-[30%] h-full pb-10 md:pb-0'>
                    <CountUp 
                    end={stat.num}
                    duration={2}
                    delay={0.5}
                    className='text-7xl md:text-[10rem] font-[200]  text-blue-500'
                    />
                    <h1 className='md:text-2xl text-xl font-[300]'>{stat.text}</h1>
                  </div>
  
                  <div className='text-center text-sm md:text-xl h-full font-[200] md:w-[70%]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odio inventore distinctio delectus assumenda unde dolor, officia ipsam cumque laborum soluta error sapiente nostrum iure quis tempora ab? Non, harum?
                  </div>
                    
                </div>
            ))}
        </div>
      </div>
      <LogosComp/>
    </motion.div>
  )
}

export default Stats

