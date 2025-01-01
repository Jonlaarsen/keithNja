import { neon } from '@neondatabase/serverless';


export const create = async (formData: FormData) => {
  'use server';

  // Connect to the Neon database
  const sql = neon(`${process.env.DATABASE_URL}`);

  // Extract data from the form
  const title = formData.get('title') as string;
  const subtitle = formData.get('subtitle') as string | null;
  const description = formData.get('description') as string | null;
  const imgURL = formData.get('imgURL') as string;
  const videoURL = formData.get('videoURL') as string;

  

  // Validate required fields
  if (!title || !imgURL || !videoURL) {
    throw new Error('Title and imgURL and videoURL are required.');
  }

  // Insert the data into the Neon database
  try {
    await sql(
      `INSERT INTO uploads (title, subtitle, description, imgURL, videoURL) 
       VALUES ($1, $2, $3, $4, $5)`,
      [title, subtitle, description,imgURL ,videoURL]
    );
    console.log('Data inserted successfully!');
  } catch (error) {
    console.error('Error inserting data:', error);
    throw new Error('Database insertion failed.');
  }
};

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
