"use client"
import React, { use, useState } from 'react'
import {motion} from "framer-motion"

//change to our team REMEMBER SAFARI LOOK! lilita FONT

const Team = [
  {id:1 ,url:"/profile-pictures/KeithPP.jpeg", name:"Keith Park" ,desc:"Keith Park is a seasoned multimedia producer and director with over 8 years of experience across print, radio, television news, documentary, advertisement, and corporate shoots in South Korea. His work for renowned platforms such as VICE, Netflix, Al Jazeera, CNN, and PBS highlights his expertise in delivering compelling and authentic stories. Keith's dedication to storytelling earned him the prestigious 2020 Peabody Award for Global Pandemic Coverage, recognizing his outstanding production on PBS Newshour’s Global Pandemic and Making Sense: The Victims of the Covid Economy."},
  {id:2 ,url:"/profile-pictures/WooPP.jpeg", name:"Wooseok Kim" ,desc: "Wooseok Kim is a versatile fixer, and production assistant with a strong track record in documentary filmmaking. His expertise in facilitating seamless production makes him an invaluable asset to any project. His portfolio working as a fixer and logistics expert has been among big channels such as CNA, Channel Sky, ARD, VICE, BRT,  BBC Radio and more."},
  {id:3 ,url:"/profile-pictures/JaPP.jpeg", name:"Ja Abdulla" ,desc:"Ja Abdulla has joined the team as an project manager and marketing specialist. With a keen interest for storytelling, Ja helps to create powerful and engaging documentary stories. She has assisted on projects for CNA, ADR, NBC and more. Her marketing position makes her in charge of the Posted Productions company, bringing expertise in digital marketing and brand strategy to promote the company's innovative content."},
  {id:4 ,url:"/profile-pictures/TommyPP.jpeg", name:"Tommy Choi" ,desc:"Tommy Choi is a highly experienced cinematographer, editor, and director collaborating with brands such as Gentle Monster, Maison Margiela, AVE, Converse, Vans, Kasina and more. Whilst owning a strong brand marketing portfolio, Tommy is also highly experienced  working as cameraman on documentaries such as ‘The Raincoat Killer’ series on Netflix and shooting music videos with the likes of artists like P1Harmony, Kali Uchis, Travis Scott, 21 Savage."},
  {id:5 ,url:"/profile-pictures/IkkPP.jpeg", name:"Ikk Seung" ,desc:"Ikk is a skilled production manager and editor with a proven track record, having previously worked on the successful YouTube channel Meta Comedy. With expertise in managing complex projects and a keen eye for detail, Ikk brings a wealth of experience to Posted Productions, ensuring smooth operations and seamless execution across all productions. For post-production, Ikk also works as an editor, turning raw content into a polished final product."},
  {id:6 ,url:"/profile-pictures/IdeunPP.jpeg", name:"Ideun Jeong" ,desc:"Ideun is a skilled on-set professional who focuses mainly on sound, lighting, editing and script writing. With a background in film, Ideun brings a deep understanding of production equipment, and has a sharp ear for high-quality sound design. Her technical expertise spans both the creative and operational aspects, especially for audio production, allowing her to effectively manage soundscapes. She has had previous experience as a field recorder and a mixer on projects for CNA, BBC Radio, Caper Film (Netflix movie Alienoid), and more!"}
]

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPep, setCurrentPep ] = useState()

  const openModal = (pep) => {
    
      setCurrentPep(pep);
      setIsModalOpen(true);
      document.body.style.overflow = "hidden"; 
    
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentPep(null);
    document.body.style.overflow = "auto"; 
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4, delay: 0.1 }}
      whileInView={true}
      className='flex flex-col items-center justify-center pt-[14rem] md:px-10  min-h-screen '
    // style={{backgroundImage:"url('https://media4.giphy.com/media/xVn3ZmKrKIOLS/giphy.gif?cid=6c09b952js1r6kgk9udzl8zofq8xyqzyh0wzp3grocnl7e6z&ep=v1_gifs_search&rid=giphy.gif&ct=g')"}}
    >
      <h1 className='text-6xl md:text-7xl text-center pb-[5rem] uppercase'>Our team</h1>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 '>

        {Team.map((pep) =>(
          <motion.div
            onClick={() => openModal(pep)}
            whileHover={{scale:1.1}}
            transition={{duration:0.5 ,delay:0.1}}
           className=' h-[35rem] group pb-10  md:px-10 relative ' key={pep.id}>
            <motion.img
            whileHover={{scale:1.1}}
            transition={{duration:0.5 ,delay:0.1}}
            src={pep.url}
            className='h-[25rem] group inset-0 w-screen md:w-[25rem] object-cover group-hover:brightness-50'
             alt={pep.name} />
                <div className="absolute inset-0 flex flex-col justify-center items-center mx-8 text-center text-white">
                <h1 className='hidden absolute group-hover:block text-xl text-blue-400 uppercase font-[300]' >Learn More</h1>
                </div>
            <h1 className='text-3xl text-center md:text-left footerheader py-10'>{pep.name}</h1>
          {/*   <p>{pep.desc}</p> */}
          </motion.div>
        )
        )}

      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-85  flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale:1}}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileInView={true}
            className="bg-black text-white  h-full md:h-auto w-[56rem] gap-10 overflow-hidden flex flex-col md:flex-row items-center justify-center  relative"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img 
            initial={{ scale: 1.3 }}
            animate={{ scale:1}}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileInView={true}
            src={currentPep.url} className='md:h-auto h-[20rem] w-screen md:w-[20rem] object-cover' alt="" />

            <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale:1}}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileInView={true}
             className='flex flex-col font-[500] gap-4 text-center mx-4 md:text-left md:mx-0'>
              <h1 className='footerheader text-3xl font-semibold md:text-5xl '>{currentPep.name}</h1>
              <p>{currentPep.desc}</p>
            </motion.div>

            <button
              onClick={closeModal}
              className="absolute top-4 text-white right-4  text-3xl font-bold"
            >
              &times;
            </button>
            </motion.div>
          </div>
        
      )}

    </motion.div>
  )
}

export default page
