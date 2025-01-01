import { neon } from '@neondatabase/serverless';
import Clips from '@/components/Clips'
import Hero from '@/components/Hero'

export const create = async (formData) => {
  'use server';

  // Connect to the Neon database
  const sql = neon(`${process.env.DATABASE_URL}`);

  // Extract data from the form
  const title = formData.get('title') ;
  const subtitle = formData.get('subtitle')  ;
  const description = formData.get('description')  ;
  const imgURL = formData.get('imgURL') ;
  const videoURL = formData.get('videoURL') ;

  

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
export default async function page() {
  const uploads = await fetchUploads(); // Fetch uploads data from the database

  return (
    <div className='py-[15rem]'>
      <Clips uploads={uploads}/>
    </div>
  )
}


