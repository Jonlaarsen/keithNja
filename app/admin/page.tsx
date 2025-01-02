import{ create }from "@/app/api/create"

const page = () => {
  return (
    <div className=' pt-[13rem]'>
         <form
        action={create}
        style={{ flex: "true", maxWidth: '400px', margin: 'auto' }}
      >
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="title">Title</label>
          <input id="title" name="title" type="text" className='text-black' required style={{ display: 'block', width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="subtitle">Subtitle</label>
          <input id="subtitle" name="subtitle" type="text" className='text-black' style={{ display: 'block', width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" className='text-black' style={{ display: 'block', width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="imgURL">image URL</label>
          <input id="imgURL" name="imgURL" type="url" required className='text-black' style={{ display: 'block', width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="videoURL">video URL</label>
          <input id="videoURL" name="videoURL" type="url" required className='text-black' style={{ display: 'block', width: '100%' }} />
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
          Submit
        </button>
      </form>

    </div>
  )
}

export default page
