import Link from 'next/link'
import React from 'react'

const categories =[
    { id:1 , title:'About', path:"about"},
    { id:2 , title:'Works', path:"works"},
    { id:3 , title:'Services', path:"services"},
    { id:4 , title:'Contact', path:"contact"},

]

const Navbar = () => {
  return (
    <div className="w-screen uppercase h-[12rem] top-0 left-0 fixed z-50 flex flex-col items-center justify-center">
        <Link href="/">
            <img className='w-[10rem] h-[7rem]' src="/Posted.png" alt="" />
        </Link>
        <div className='w-screen h-[4rem] flex items-center gap-6 justify-center text-xl '>
            {categories.map((cat) => (
                <div 
                className='py-10'
                key={cat.id}>
                <Link  href={cat.path}>
                    {cat.title}
                </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Navbar
