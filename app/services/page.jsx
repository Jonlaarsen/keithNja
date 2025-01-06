// "use client"
// import React, { useEffect, useState } from 'react'
// import { motion } from "framer-motion"

// const page = () => {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);


//   return (
//     <motion.div
//     initial={{ opacity:0 }}
//     animate={{ opacity:1 }}
//     transition={{ duration: 1, delay: 0.1 }}
//      className='grid grid-cols-1 md:grid-cols-2 py-[12rem] text-xl'>

//       <div className="py-10 flex h-[30rem] md:h-full items-center justify-center bg-contain bg-[url('https://images.squarespace-cdn.com/content/v1/668baa90a93f73799f48b8ba/1726027125159-27K63FSJQ00WHRYH0MMQ/unsplash-image-ScBDhIfrCDk.jpg?format=2500w')]">
//       <motion.h1
//       initial={{y:1000}}
//           animate={{
            
//             transform: `translateY(${scrollY * -1.3}px)`,
//           }}
//           className="text-4xl md:text-7xl text-white font-bold"
//         >
//           POSTPRODUCTION
//         </motion.h1>
//       </div>
//       <div className='py-10 flex items-center text-center md:text-left md:pl-10 gap-4 min-h-[20rem] text-3xl'>
//         <ul className='flex flex-col gap-4' >
//           <li>Concept Development</li>
//           <li>Research & Scripting</li>
//           <li>Budgeting & Financial Planning</li>
//           <li>Scheduling & Timeline Creation</li>
//           <li>Location Scouting</li>
//           <li>Fixing</li>
//           <li>Crew and Equipment Hire</li>
//           <li>Legal Clearances, Permits & Regulatory Compliance</li>
//           <li>Storyboarding & Shot Planning</li>
//           <li>Logistical Planning</li>
//         </ul>
//       </div>

      
//       <div className='py-10 flex items-center justify-center gap-4 min-h-[40rem] text-3xl '>
//         <ul className='flex flex-col gap-10 text-center md:text-right' >
//           <li>Full Production & Filming Crew <br/> i.e. Producer, Director, DoP, Sound, Drone, PA, etc.</li>
//           <li>Camera & Equipment Rentals</li>
//           <li>Logistical Support & Coordination</li>
//         </ul>
//       </div>
//       <div className=' flex py-10 w-full h-full items-center justify-center bg-cover bg-no-repeat bg-[url("https://images.squarespace-cdn.com/content/v1/668baa90a93f73799f48b8ba/1726027163743-QYWYQZGF887V6VLJ475T/unsplash-image-iBEPt9udRz4.jpg?format=2500w")]'>
//           <motion.h1
//           initial={{y:1000}}
//               animate={{
                
//                 transform: `translateY(${scrollY * -1.3}px)`,
//               }}
//               className="text-4xl md:text-7xl text-white font-bold"
//             >
//               POSTPRODUCTION
//           </motion.h1>
//       </div>

//       <div className=' flex py-10 h-[30rem] w-full md:h-full items-center justify-center bg-cover bg-no-repeat bg-[url("https://images.squarespace-cdn.com/content/v1/668baa90a93f73799f48b8ba/1726027199352-EYD3D2QN7HWL879V5CO6/unsplash-image-U4-_lvnjkd8.jpg?format=2500w")]'>
//         <h1 className='text-4xl md:text-7xl text-white font-bold'>POSTPRODUCTION</h1>
//       </div>
//       <div className='py-10 flex items-center justify-center md:pl-10  gap-4 min-h-[40rem] text-3xl  '>
//           <ul className='flex flex-col gap-4 text-center md:text-left' >
//             <li>Transcoding</li>
//             <li>Editing</li>
//             <li>Colour Grading</li>
//             <li>Fact Checking</li>
//             <li>Sound Design & Mixing</li>
//             <li>Music Composition & Effects</li>
//             <li>Voiceover Recording</li>
//             <li>Subtitling & Translation</li>
//             <li>Archival Footage Integration</li>
//           </ul>        
//        </div>
       

//     </motion.div>
//   )
// }

// export default page
"use client";
import './services.css'

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id, title, content, bgImage }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="relative h-screen w-full bg-cover bg-center" 
    style={{backgroundImage:`url("${bgImage}")`}}
    >
      <div className='w-screen md:w-[50rem] flex items-center justify-center bg-slate-300 text-center p-10 bg-opacity-35'  ref={ref}>
      <ul className='w-full md:w-[35rem]'>
          {content.map((item, index) => (
            <li key={index} className="text-xs md:text-3xl text-slate-100 mb-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <motion.h2
        className="text-white absolute text-lg md:text-[2.5rem] right-[calc(55%+12rem)] "
        style={{ y }}
      >
        {title}
      </motion.h2>
    </section>
  );
}

const sections = [
  {
    id: 1,
    title: "PREPRODUCTIONS",
    bgImage:
        "https://miro.medium.com/v2/resize:fit:1400/0*Er7_azDS4pmwTobF.png",
        content: [
      "Concept Development",
      "Research & Scripting",
      "Budgeting & Financial Planning",
      "Scheduling & Timeline Creation",
      "Location Scouting",
      "Fixing",
      "Crew and Equipment Hire",
      "Legal Clearances, Permits & Regulatory Compliance",
      "Storyboarding & Shot Planning",
      "Logistical Planning"
    ]
  },
  {
    id: 2,
    title: "FILMING ETC",
    bgImage:
      "https://images.squarespace-cdn.com/content/v1/668baa90a93f73799f48b8ba/1726027163743-QYWYQZGF887V6VLJ475T/unsplash-image-iBEPt9udRz4.jpg?format=2500w",
    content: [
      "Full Production & Filming Crew ",
      "(i.e. Producer, Director, DoP, Sound, Drone, PA, etc.)",
      "Camera & Equipment Rentals",
      "Logistical Support & Coordination"
    ]
  },
  {
    id: 3,
    title: "POSTPRODUCTION",
    bgImage:
      "https://images.squarespace-cdn.com/content/v1/668baa90a93f73799f48b8ba/1726027199352-EYD3D2QN7HWL879V5CO6/unsplash-image-U4-_lvnjkd8.jpg?format=2500w",
    content: [
      "Transcoding",
      "Editing",
      "Colour Grading",
      "Fact Checking",
      "Sound Design & Mixing",
      "Music Composition & Effects",
      "Voiceover Recording",
      "Subtitling & Translation",
      "Archival Footage Integration"
    ]
  }
];

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {sections.map((section) => (
        <div key={section.id}>
          <Image id={section.id} title={section.title} content={section.content} bgImage={section.bgImage} />
        </div>
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
