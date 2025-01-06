
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        whileInView={true}
        className='w-screen flex-col md:flex-row md:w-[50rem] flex items-center justify-center bg-black text-center p-10 bg-opacity-45'  ref={ref}>
      <h1 className='text-2xl block md:hidden text-white pb-10'>{title}</h1>
      <ul className='w-full md:w-[35rem]'>
          {content.map((item, index) => (
            <li key={index} className="text-lg md:text-3xl text-white mb-2">
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.h2
        className="text-white absolute md:block hidden text-lg md:text-[2.5rem] right-[calc(55%+12rem)] "
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
