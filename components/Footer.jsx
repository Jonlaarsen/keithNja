
import Link from "next/link";
import React from "react";
import InfiniteCarousel from '@/components/InfiniteCarousel'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col text-md md:text-2xl gap-[2rem] text-center items-center justify-center h-[80vh] md:h-[40rem]">
        <h1 className="text-4xl text-center md:text-5xl pb-10">"Where vision meets storytelling"</h1>
        <p className="font-[200]">Production & Services in Seoul and Worldwide</p>
        <Link href="emailto:blabla@email.com" className="font-[200]">contact@posted-productions.com</Link>
        <img 
        className="w-[7rem] py-10"
        src="https://images.squarespace-cdn.com/content/v1/668baa90a93f73799f48b8ba/7dcfb365-6ff7-417b-9a68-566e5ef07ecc/PngItem_506629.png?format=500w" alt="" />
      </div>
      <InfiniteCarousel/>
    </div>
  )
}

export default Footer
