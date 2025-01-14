
import React from 'react'
// import Parallax from '@/components/parallax/Parallax'

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
        <li> Full Production & Filming Crew &#9830;  </li>
        <p key="p1">i.e. Producer, Director, DoP, Sound, Drone, PA, etc.</p>
        <li> Camera & Equipment Rentals &#9830;  </li>
        <li>Logistical Support & Coordination &#9830;  </li>
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

const page = () => {
  return (
    <div className="pt-[10rem]">
      <div className='flex items-center justify-center py-[10rem] '>
        <h1 className='text-5xl text-center w-[80rem] uppercase'>"Posted Productions expertly brings your vision to life through compelling storytelling, <br/>
       offering solutions to all your needs."</h1>
      </div>
      <div className='h-[3rem]  bg-gradient-to-t from-[#ededed] to-[#0a0a0a63] '/>
      <div className='flex items-center justify-center py-[10rem] bg-white'>
        <h1 className='text-4xl text-black text-center w-[70rem] uppercase'>"Posted Productions expertly brings your vision to life through compelling storytelling, <br/>
       offering solutions to all your needs."</h1>
      </div>
      <div className='h-[4rem]  bg-gradient-to-t to-[#ededed] from-[#0a0a0a4d] '/>
      
      {sections.map((item) => (
        <div
          key={item.id}
          className="h-full w-full grid grid-cols-1 md:grid-cols-2"
          style={{ direction: item.id === 2 ? 'rtl' : 'ltr' }} 
        >
          {/* Title Section */}
          <div
            style={{ backgroundImage: `url("${item.bgImage}")` }} 
           className=' flex items-center justify-center bg-cover min-h-[20rem]'
          >
            <h1 className=' text-4xl md:text-6xl md:font-bold '>{item.title}</h1>
          </div>

          {/* Content Section */}
          <div className="flex text-xl font-[300] md:text-3xl items-center text-center md:min-h-[40rem]  justify-center mx-5 py-[5rem]">
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;


