import React from 'react'

const page = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-screen pt-[12rem]  gap-4  md:ml-10'>
      <div >
        <div>
          <h1 className='text-5xl md:text-8xl px-4 font-bold  pb-[5rem]'>CONTACT US</h1>
          <p className='text-xl font-[300] px-5 w-[90%] pb-[3rem]'>Interested in working with us? <br/> Fill out some info and we will be in touch shortly!</p>
        </div>
        
        <form 
        className='flex flex-col gap-5'
        action="https://formsubmit.co/contact@posted-productions.com" method="POST">
          <div className='flex md: flex-col gap-5 w-screen md:w-[80%]'>
            <div className='flex px-4 md:px-0 flex-col w-full'>
              <label htmlFor="firstname">First Name</label>
              <input 
              className='h-[3rem] pl-2 md:pl-5'
              placeholder='required' type="text" name="firstname" required/>
            </div>
            <div className='flex px-4 md:px-0 flex-col w-full'>
              <label htmlFor="lastname">Last Name</label>
              <input 
              className='h-[3rem] pl-2 md:pl-5'
              placeholder='required' type="text" name="lastname" required/>
            </div>
          </div>
          <div className='flex px-4 md:px-0 flex-col w-screen md:w-[80%]'>
            <label htmlFor="email">Email</label>
            <input
            className='h-[3rem]  pl-2 md:pl-5'
            placeholder='required' type="email" name="email" required/>
          </div>
          <div className='flex px-4 md:px-0 flex-col w-screen md:w-[80%]'>
            <label htmlFor="email">Message</label>
            <textarea 
            className='h-[5rem] pl-2 md:pl-5 text-black'
            placeholder='required' name="message" type='text' required></textarea>
          </div>
          <div className='px-4 md:px-0 w-screen md:w-[80%]'>
              <button className='w-full border-2 border-white py-2 px-1 text-xl' type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className='hidden  w-full md:flex justify-center items-center'>
        <img className='w-full h-[40rem]' 
        src='https://media4.giphy.com/media/vbOojWvKFNfbi/giphy.gif?cid=6c09b952oi7seksjmfz0xqxhzt4wkb6kz3lc677hukbb88cc&ep=v1_gifs_search&rid=giphy.gif&ct=g'
        alt="" />
      </div>
     
    </div>
  )
}

export default page
