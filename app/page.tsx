import { neon } from '@neondatabase/serverless';
import Clips from '@/components/Clips'

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


// This is a server component that fetches data on the server side
const fetchUploads = async () => {
  const sql = neon(`${process.env.DATABASE_URL}`);

  try {
    const result = await sql(`SELECT * FROM uploads ORDER BY title ASC`);
    return result; // Return the fetched uploads
  } catch (error) {
    console.error('Error fetching uploads:', error);
    throw new Error('Failed to fetch data from the database.');
  }
};

// Server Component that fetches data
export default async function Page() {
  const uploads = await fetchUploads(); // Fetch uploads data from the database

  return (
    <>
      <form
        action={create}
        style={{ maxWidth: '400px', margin: 'auto' }}
      >
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="title">Title</label>
          <input id="title" name="title" type="text" required style={{ display: 'block', width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="subtitle">Subtitle</label>
          <input id="subtitle" name="subtitle" type="text" style={{ display: 'block', width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" style={{ display: 'block', width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="imgURL">image URL</label>
          <input id="imgURL" name="imgURL" type="url" required style={{ display: 'block', width: '100%' }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="videoURL">video URL</label>
          <input id="videoURL" name="videoURL" type="url" required style={{ display: 'block', width: '100%' }} />
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>
          Submit
        </button>
      </form>

      {/* Pass fetched uploads data to Clips component */}
      <Clips uploads={uploads} />
    </>
  );
}
