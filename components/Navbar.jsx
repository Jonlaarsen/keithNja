"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion, useCycle } from "framer-motion";



const categories =[
    { id:1 , title:'About', path:"about"},
    { id:2 , title:'Works', path:"works"},
    { id:3 , title:'Services', path:"services"},
    { id:4 , title:'Contact', path:"contact"},

]

const Navbar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);  
   
   

  return (
    <div className="w-screen uppercase h-[10rem] top-0 left-0 fixed z-50 flex flex-row items-center justify-between px-10">
       
        <Link href="/">
            <img className=' h-[6rem] invert' src="/Posted1.svg" alt="" />
        </Link>
        
        <div className="flex items-center">
          <motion.button 
            initial={false}
            animate={isOpen ? "open" : "closed"}
            onClick={() => toggleOpen(true)}
            custom="100%"
            className="focus:outline-none z-30 group"
          >
            <span 
              className={`block w-8 h-1 transition-all duration-300 bg-white ${isOpen ? 'rotate-45 translate-y-2' : ''} group-hover:bg-purple-500`}
            ></span>
            <span 
              className={`block w-8 h-1 my-1 transition-all duration-300 bg-white ${isOpen ? 'opacity-0' : ''} group-hover:bg-purple-500`}
            ></span>
            <span 
              className={`block w-8 h-1 transition-all duration-300 bg-white ${isOpen ? '-rotate-45 -translate-y-2' : ''} group-hover:bg-purple-500`}
            ></span>
          </motion.button>
        </div>


      {/* Mobile Menu */}
      
      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-90 z-20 flex flex-col items-center justify-center'>
            <Link 
            onClick={()=>toggleOpen(false)}
            href={'/'}>
               <img src="/posted3.png" className='w-[14rem] invert pb-10' alt="logo" />
            </Link>
            
          <motion.ul
          >
          {categories.map((link) => (
            <motion.li
            onClick={() => toggleOpen(false)} // Close menu on click
            key={link.id}
            initial={{opacity:0}}
            animate={{opacity:1 }}
            transition={{ duration: 1, delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='pb-10 text-center'
           >
            <Link 
              key={link.id}
              href={link.path} 
              
              className='text-white text-3xl my-4 hover:text-purple-500 transition'
            >
              <h1></h1>
              {link.title}
            </Link>
            </motion.li>
          ))}
          </motion.ul>  
        </div>
      )}
       
       
        

    </div>
  )
}

export default Navbar


       