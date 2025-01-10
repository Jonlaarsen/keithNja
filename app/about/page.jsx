"use client"
import React from 'react'
import {motion} from "framer-motion"

const Team = [
  {id:1 ,url:"/tommy.jpeg", name:"Keith Keunhyung Park" ,desc:"Keith Park is a seasoned multimedia producer and director with over 8 years of experience across print, radio, television news, documentary, advertisement, and corporate shoots in South Korea. His work for renowned platforms such as VICE, Netflix, Al Jazeera, CNN, and PBS highlights his expertise in delivering compelling and authentic stories. Keith's dedication to storytelling earned him the prestigious 2020 Peabody Award for Global Pandemic Coverage, recognizing his outstanding production on PBS Newshour’s Global Pandemic and Making Sense: The Victims of the Covid Economy."},
  {id:2 ,url:"/tommy.jpeg", name:"Wooseok Kim" ,desc: "Wooseok Kim is a versatile fixer, and production assistant with a strong track record in documentary filmmaking. His expertise in facilitating seamless production makes him an invaluable asset to any project. His portfolio working as a fixer and logistics expert has been among big channels such as CNA, Channel Sky, ARD, VICE, BRT,  BBC Radio and more."},
  {id:3 ,url:"/tommy.jpeg", name:"Ja Abdulla" ,desc:"Ja Abdulla has joined the team as an project manager and marketing specialist. With a keen interest for storytelling, Ja helps to create powerful and engaging documentary stories. She has assisted on projects for CNA, ADR, NBC and more. Her marketing position makes her in charge of the Posted Productions company, bringing expertise in digital marketing and brand strategy to promote the company's innovative content."},
  {id:4 ,url:"/tommy.jpeg", name:"Tommy Choi" ,desc:"Tommy Choi is a highly experienced cinematographer, editor, and director collaborating with brands such as Gentle Monster, Maison Margiela, AVE, Converse, Vans, Kasina and more. Whilst owning a strong brand marketing portfolio, Tommy is also highly experienced  working as cameraman on documentaries such as ‘The Raincoat Killer’ series on Netflix and shooting music videos with the likes of artists like P1Harmony, Kali Uchis, Travis Scott, 21 Savage."},
  {id:5 ,url:"/tommy.jpeg", name:"Ikk Seung" ,desc:"Ikk is a skilled production manager and editor with a proven track record, having previously worked on the successful YouTube channel Meta Comedy. With expertise in managing complex projects and a keen eye for detail, Ikk brings a wealth of experience to Posted Productions, ensuring smooth operations and seamless execution across all productions. For post-production, Ikk also works as an editor, turning raw content into a polished final product."},
  {id:6 ,url:"/tommy.jpeg", name:"Ideun Jeong" ,desc:"Ideun is a skilled on-set professional who focuses mainly on sound, lighting, editing and script writing. With a background in film, Ideun brings a deep understanding of production equipment, and has a sharp ear for high-quality sound design. Her technical expertise spans both the creative and operational aspects, especially for audio production, allowing her to effectively manage soundscapes. She has had previous experience as a field recorder and a mixer on projects for CNA, BBC Radio, Caper Film (Netflix movie Alienoid), and more!"}
]

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileInView={true}
      className='flex flex-col items-center justify-center pt-[14rem] px-10  min-h-screen '
    // style={{backgroundImage:"url('https://media4.giphy.com/media/xVn3ZmKrKIOLS/giphy.gif?cid=6c09b952js1r6kgk9udzl8zofq8xyqzyh0wzp3grocnl7e6z&ep=v1_gifs_search&rid=giphy.gif&ct=g')"}}
    >
      <h1 className='text-6xl md:text-7xl text-center pb-[5rem] uppercase'>Our team</h1>
      <div className=" flex-wrap md:flex-row flex-col hidden md:flex justify-center gap-4 mb-10 md:mb-[7rem] ">
      &#x2605;
        {Team.map((members) => (
          <div 
          key={members.name}>
            <h1 >
              {members.name} &#x2605;
            </h1>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

        {Team.map((pep) =>(
          <motion.div
            whileHover={{scale:1.1}}
            transition={{duration:0.5 ,delay:0.1}}
           className='min-h-[110vh] h-full md:h-[50rem] pb-10 px-2 md:px-10  ' key={pep.id}>
            <motion.img
            whileHover={{scale:1.2}}
            transition={{duration:0.5 ,delay:0.1}}
             src={pep.url}
            className='h-[10rem] w-[10rem] rounded-full'
             alt="" />
            <h1 className='text-3xl py-10 underline'>{pep.name}</h1>
            <p>{pep.desc}</p>
          </motion.div>
        )
        )}

      </div>

    </motion.div>
  )
}

export default page
