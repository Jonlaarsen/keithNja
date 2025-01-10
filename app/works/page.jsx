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
    <div className='md:py-[15rem] pt-[8rem] bg-contain min-h-screen '
    // style={{backgroundImage:"url('https://i.pinimg.com/originals/6f/9d/c5/6f9dc513096e160a82c2201961b3386b.gif')"}}
    >
      <Clips uploads={uploads}/>
    </div>
  )
}


