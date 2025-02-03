import { BrandImgs } from '@/data/ImgData'
import React from 'react'



const LogosComp = () => {
  return (
   
 
    
    <div className='grid md:grid-cols-6 grid-cols-3  w-full bg-blue-100  gap-6 md:gap-20 py-10 px-10 md:px-[12rem] '>
      {BrandImgs.map((item) =>
      (
        <div key={item.id} className='flex items-center justify-center'>
            <img src={item.src} className='md:w-[6rem] w-full h-auto object-fill'  alt="" />
        </div>
      )
    )}
 
    </div>
  )
}

export default LogosComp
