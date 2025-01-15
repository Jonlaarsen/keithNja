import React from 'react'

const BrandLogos =[
    {id:1, src:'/postedlogos/logo1.png'},
    {id:2, src:'/postedlogos/logo2.jpg'},
    {id:3, src:'/postedlogos/logo3.jpg'},
    {id:4, src:'/postedlogos/logo3.png'},
    {id:5, src:'/postedlogos/logo4.png'},
    {id:6, src:'/postedlogos/logo6.jpg'},
    {id:7, src:'/postedlogos/logo7.png'},
    {id:8, src:'/postedlogos/logo8.jpg'},
    {id:9, src:'/postedlogos/logo9.png'},
    {id:10, src:'/postedlogos/logo91.jpg'},
    {id:11, src:'/postedlogos/logo92.png'},
    {id:12, src:'/postedlogos/logo93.png'},
    {id:13, src:'/postedlogos/logo94.png'},
    {id:14, src:'/postedlogos/logo95.png'},
    {id:15, src:'/postedlogos/logo96.png'},
    {id:16, src:'/postedlogos/logo97.png'},
    {id:17, src:'/postedlogos/logo98.jpg'},
    {id:18, src:'/postedlogos/logo99.jpg'},
    {id:19, src:'/postedlogos/logo991.png'},
    {id:20, src:'/postedlogos/logo992.png'},
    {id:21, src:'/postedlogos/logo993.png'},
    {id:22, src:'/postedlogos/logo994.jpg'},
    

]

const LogosComp = () => {
  return (
    <div className='w-[100vw] '>
    <h1 className='md:text-7xl uppercase font-bold text-center  py-[10rem]'>"Companys We Have Worked with"</h1>
    <div className='h-[7rem] w-[100vw] bg-gradient-to-t from-[#ededed] via-[#edededc7] to-[#0a0a0a63] '>
    </div>
    
    <div className='grid md:grid-cols-6 grid-cols-3  w-[100vw] bg-white gap-6 md:gap-20 py-10 px-[4rem] '>
      {BrandLogos.map((item) =>
      (
        <div key={item.id} className='flex items-center justify-center'>
            <img src={item.src} className='md:w-[9rem] w-full h-auto object-contain'  alt="" />
        </div>
      )
    )}
    </div>

    <div className='h-[7rem] w-[100vw] bg-gradient-to-b from-[#ededed] via-[#edededc7] to-[#0a0a0a] '>
    </div>
    <div className='flex flex-col items-center text-center justify-center font-[300] text-xl md:text-4xl gap-[4rem] w-[100vw] py-[7rem] '>
    
    <div>
      <h2 >"insert some review here"</h2><span className='font-[500]' > - wes anderson</span>
    </div>
    <div>
      <h2 >"insert some review here"</h2><span className='font-[500]' > - tarantino</span>
    </div>  
    </div>
    </div>
  )
}

export default LogosComp
