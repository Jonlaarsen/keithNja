import { neon } from '@neondatabase/serverless';
import Clips from '@/components/Clips'



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
      <h1 className="text-xl md:text-4xl xl:text-7xl pb-10">OUR WORK</h1>
      <Clips uploads={uploads}/>
    </div>
  )
}


