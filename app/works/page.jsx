import { neon } from '@neondatabase/serverless';
import Clips from '@/components/Clips'



// This is a server component that fetches data on the server side
const fetchUploads = async () => {
  const sql = neon(`${process.env.DATABASE_URL}`);

  try {
    const result = await sql(`SELECT * FROM uploads ORDER BY categories ASC, title ASC`);
    return result;
  } catch (error) {
    console.error('Error fetching uploads:', error);
    throw new Error('Failed to fetch data from the database.');
  }
};


// Server Component that fetches data
export default async function page() {
  const uploads = await fetchUploads(); // Fetch uploads data from the database
  console.log(uploads)
  return (
    <div className='py-[15rem] bg-[50%] md:bg-contain min-h-screen '
    style={{backgroundImage:"url('https://i.pinimg.com/originals/18/27/52/182752a98afdd09d8d69d83dee3ad75f.jpg')"}}
    >
      <Clips uploads={uploads}/>
    </div>
  )
}


