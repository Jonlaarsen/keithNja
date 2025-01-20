"use client"
import React from 'react'
import CountUp from 'react-countup'
import LogosComp from './LogosComp'

const stats = [
    {
        num: 2,
        text:"parties"
    },
    {
        num: 49,
        text:"beers"
    },
    {
        num: 158,
        text:"ciggies"
    },
]

const Stats = () => {
    


  return (
    <div className='min-h-screen pt-[10rem] w-screen flex flex-col items-center justify-center'>
      <div>
        <div>
            {stats.map((stat) => (
                <div key={stat.num}>
                    <CountUp 
                    end={stat.num}
                    duration={2}
                    delay={0.5}
                    className='text-5xl'
                    />
                    <h1>{stat.text}</h1>
                </div>
            ))}
        </div>
      </div>
      <LogosComp/>
    </div>
  )
}

export default Stats

