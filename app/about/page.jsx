import React from 'react'

const Team = [
  {id:1 ,url:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", name:"Keith Keunhyung Park" ,desc:"Keith Park is a seasoned multimedia producer and director with over 8 years of experience across print, radio, television news, documentary, advertisement, and corporate shoots in South Korea. His work for renowned platforms such as VICE, Netflix, Al Jazeera, CNN, and PBS highlights his expertise in delivering compelling and authentic stories. Keith's dedication to storytelling earned him the prestigious 2020 Peabody Award for Global Pandemic Coverage, recognizing his outstanding production on PBS Newshour’s Global Pandemic and Making Sense: The Victims of the Covid Economy."},
  {id:2 ,url:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", name:"Wooseok Kim" ,desc: "Wooseok Kim is a versatile fixer, and production assistant with a strong track record in documentary filmmaking. His expertise in facilitating seamless production makes him an invaluable asset to any project. His portfolio working as a fixer and logistics expert has been among big channels such as CNA, Channel Sky, ARD, VICE, BRT,  BBC Radio and more."},
  {id:3 ,url:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", name:"Ja Abdulla" ,desc:"Ja Abdulla has joined the team as an project manager and marketing specialist. With a keen interest for storytelling, Ja helps to create powerful and engaging documentary stories. She has assisted on projects for CNA, ADR, NBC and more. Her marketing position makes her in charge of the Posted Productions company, bringing expertise in digital marketing and brand strategy to promote the company's innovative content."},
  {id:4 ,url:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", name:"Tommy Choi" ,desc:"Tommy Choi is a highly experienced cinematographer, editor, and director collaborating with brands such as Gentle Monster, Maison Margiela, AVE, Converse, Vans, Kasina and more. Whilst owning a strong brand marketing portfolio, Tommy is also highly experienced  working as cameraman on documentaries such as ‘The Raincoat Killer’ series on Netflix and shooting music videos with the likes of artists like P1Harmony, Kali Uchis, Travis Scott, 21 Savage."},
  {id:5 ,url:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", name:"Ikk Seung" ,desc:"Ikk is a skilled production manager and editor with a proven track record, having previously worked on the successful YouTube channel Meta Comedy. With expertise in managing complex projects and a keen eye for detail, Ikk brings a wealth of experience to Posted Productions, ensuring smooth operations and seamless execution across all productions. For post-production, Ikk also works as an editor, turning raw content into a polished final product."},
  {id:6 ,url:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png", name:"Ideun Jeong" ,desc:"Ideun is a skilled on-set professional who focuses mainly on sound, lighting, editing and script writing. With a background in film, Ideun brings a deep understanding of production equipment, and has a sharp ear for high-quality sound design. Her technical expertise spans both the creative and operational aspects, especially for audio production, allowing her to effectively manage soundscapes. She has had previous experience as a field recorder and a mixer on projects for CNA, BBC Radio, Caper Film (Netflix movie Alienoid), and more!"}
]

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-[14rem]  min-h-screen '>
      <h1 className='text-5xl md:text-7xl text-center pb-[5rem]'>Learn more about the team!</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>

        {Team.map((pep) =>(
          <div className='h-[50rem] px-8 ' key={pep.id}>
            <img src={pep.url}
            className='h-[10rem] w-[10rem] rounded-full'
             alt="" />
            <h1 className='text-4xl py-10'>{pep.name}</h1>
            <p>{pep.desc}</p>
          </div>
        )
        )}

      </div>

    </div>
  )
}

export default page
