import{ create }from "@/app/lib/create"

const page = () => {
  return (
    <div className=' pt-[13rem]'>
         <form
        action={create}
        style={{ flex: "true", maxWidth: '600px', margin: 'auto' }}
      >
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="title">Client name</label>
          <input id="title" name="title" type="text" className='text-black text-xl pl-3 h-[2rem]' placeholder="Company, brand name etc" required style={{ display: 'block', width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="subtitle">title</label>
          <input id="subtitle" name="subtitle" type="text" className='text-black text-xl pl-3 h-[2rem]' placeholder="title of video" style={{ display: 'block', width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="description">Role</label>
          <textarea id="description" name="description" placeholder="remember commas between roles" className='text-black text-xl pl-3 h-[2rem]'  style={{ display: 'block', width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="imgURL">image URL</label>
          <input id="imgURL" name="imgURL" type="url" required className='text-black text-xl pl-3 h-[2rem]' placeholder="imageurl (clicked so not pixelated)" style={{ display: 'block', width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="videoURL">video URL</label>
          <input id="videoURL" name="videoURL" type="url" required className='text-black text-xl pl-3 h-[2rem]' placeholder="make sure its an short link ex https://www.youtube.com/watch?v=abc123abc" style={{ display: 'block', width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="category">Category</label>
        <select id="category" name="category" className='text-black text-xl pl-3 h-[2rem]'  style={{ display: 'block', width: '100%' }} required>
          <option value="">Select a category</option>
          <option value="All">All</option>
          <option value="docummentary">Docummentary</option>
          <option value="MusicVideo">Music video</option>
          <option value="Branded And corporate">Branded And corporate</option>
          <option value="news and podcast">News and podcast</option>
        </select>
      </div>
      <button type="submit" className="mt-10 text-2xl border-2" style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
        Submit
      </button>
      </form>

    </div>
  )
}

export default page
