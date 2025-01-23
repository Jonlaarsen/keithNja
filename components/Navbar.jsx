"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion, useCycle } from "framer-motion";
import { usePathname, useRouter } from 'next/navigation';



const categories =[
    { id:1 , title:'About', path:"about"},
    { id:2 , title:'Our Team', path:"team"}, // fix new page
    { id:3 , title:'Services', path:"services"},
    { id:4 , title:'Works', path:"works"},
    { id:5 , title:'Contact', path:"contact"},

]

const Navbar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);  
    const pathname = usePathname();
    const isHomePage = pathname === "/";


  


  return (
    <div className="w-full uppercase  top-0 left-0 absolute  z-50 flex flex-row items-center justify-between px-10">
       
       {isHomePage ? (
        <Link href="/">
          <img
            className="h-[8rem] py-5 invert"
            src="/postedlogo.png"
            alt="homepage logo"
          />
        </Link>
      ) : (
        <Link href="/">
          <img
            className="h-[6.5rem] md:h-[8rem] py-5 invert absolute left-1/2 transform -translate-x-1/2 top-2"
            src="/posted3.png"
            alt="other pages logo"
          />
        </Link>
      )}
        <div className="flex items-center absolute right-[2rem] top-6">
          <motion.button 
            initial={false}
            animate={isOpen ? "open" : "closed"}
            onClick={() => toggleOpen(true)}
            custom="100%"
            className="focus:outline-none z-30 group"
          >
            <span 
              className={`block w-[3rem] mb-2 h-1 transition-all duration-300 bg-white ${isOpen ? 'rotate-45 translate-y-3' : ''} group-hover:bg-blue-800`}
            ></span>
            <span 
              className={`block w-[3rem] mb-2 h-1 my-1 transition-all duration-300 bg-white ${isOpen ? 'opacity-0' : ''} group-hover:bg-blue-800`}
            ></span>
            <span 
              className={`block w-[3rem] mb-2 h-1 transition-all duration-300 bg-white ${isOpen ? '-rotate-45 -translate-y-3' : ''} group-hover:bg-blue-800`}
            ></span>
          </motion.button>
        </div>


      {/* Mobile Menu */}
      
      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-90 z-20 flex flex-col bg-cover items-center justify-center'
         style={{backgroundImage:"url('https://i.pinimg.com/originals/6f/9d/c5/6f9dc513096e160a82c2201961b3386b.gif')"}} >
            <Link 
            onClick={()=>toggleOpen(false)}
            href={'/'}>
               <img src="/posted3.png" className='w-[18rem] invert pb-10' alt="logo" />
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
              
              className='text-white text-3xl md:text-5xl my-4 hover:text-blue-800 transition'
            >
              
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


       