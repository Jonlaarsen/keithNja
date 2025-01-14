"use client";
import '@/components/parallax/services.css'

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
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileInView={true}
        className='w-screen flex-col xl:flex-row md:w-[50rem] flex items-center justify-center bg-black text-center p-10 bg-opacity-45'  ref={ref}>
      <h1 className='text-2xl block xl:hidden lg:text-4xl text-white pb-10'>{title}</h1>
      <ul className='w-full md:w-[35rem]s'>
          {content.map((item, index) => (
            <li key={index} className="text-lg md:text-2xl text-white ">
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.h2
        className="text-white absolute xl:block hidden text-lg md:text-[1.5rem] sm:text-[1rem] lg:text-[2rem] 2xl:text-[2.5rem]  right-[calc(54%+12rem)] "
        style={{ y }}
      >
        {title}
      </motion.h2>
    </section>
  );
}

const sections = [
  // {
  //   id:1,
  //   content : [
  //     <div className='h-[50vh]'>
  //     <h1>Posted Productions expertly brings your vision to life through compelling storytelling, offering solutions for all your production needs.</h1>
  //   </div>
  //   ]
  // },
  {
    id: 1,
    title: "PREPRODUCTIONS",
    bgImage:
      "https://miro.medium.com/v2/resize:fit:1400/0*Er7_azDS4pmwTobF.png",
    content: [
      <ul key="list1" className='flex flex-col gap-6'>
        <li>&#9830; Concept Development</li>
        <li>&#9830; Research & Scripting</li>
        <li>&#9830; Budgeting & Financial Planning</li>
        <li>&#9830; Scheduling & Timeline Creation</li>
        <li>&#9830; Location Scouting</li>
        <li>&#9830; Fixing</li>
        <li>&#9830; Crew and Equipment Hire</li>
        <li>&#9830; Legal Clearances, Permits & Regulatory Compliance</li>
        <li>&#9830; Storyboarding & Shot Planning</li>
        <li>&#9830; Logistical Planning</li>
      </ul>
    ]
  },
  {
    id: 2,
    title: "FILMING ETC",
    bgImage:
      "https://images.squarespace-cdn.com/content/v1/668baa90a93f73799f48b8ba/1726027163743-QYWYQZGF887V6VLJ475T/unsplash-image-iBEPt9udRz4.jpg?format=2500w",
    content: [
      <ul key="list2" className='flex flex-col gap-6'>
        <li>&#9830;  Full Production & Filming Crew</li>
        <p key="p1">i.e. Producer, Director, DoP, Sound, Drone, PA, etc.</p>
        <li>&#9830;  Camera & Equipment Rentals</li>
        <li>&#9830;  Logistical Support & Coordination</li>
      </ul>
    ]
  },
  {
    id: 3,
    title: "POSTPRODUCTION",
    bgImage:
      "https://images.squarespace-cdn.com/content/v1/668baa90a93f73799f48b8ba/1726027199352-EYD3D2QN7HWL879V5CO6/unsplash-image-U4-_lvnjkd8.jpg?format=2500w",
    content: [
      <ul key="list3" className='flex flex-col gap-6'>
        <li>&#9830; Transcoding</li>
        <li>&#9830; Editing</li>
        <li>&#9830; Colour Grading</li>
        <li>&#9830; Fact Checking</li>
        <li>&#9830; Sound Design & Mixing</li>
        <li>&#9830; Music Composition & Effects</li>
        <li>&#9830; Voiceover Recording</li>
        <li>&#9830; Subtitling & Translation</li>
        <li>&#9830; Archival Footage Integration</li>
      </ul>
    ]
  }
];

export default function Parallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
    <div className='h-screen'>
      <h1>HELLO</h1>
    </div>
      {sections.map((section) => (
        
        <div key={section.id}>
          <Image id={section.id} title={section.title} content={section.content} bgImage={section.bgImage} />
        </div>
        
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
