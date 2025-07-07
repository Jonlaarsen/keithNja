import { neon } from "@neondatabase/serverless";
import Clips from "@/components/Clips";
import Head from "next/head";

// Enable immediate revalidation
export const revalidate = 0;

// This is a server component that fetches data on the server side
const fetchUploads = async () => {
  const sql = neon(`${process.env.DATABASE_URL}`);

  try {
    const result = await sql(
      `SELECT * FROM uploads ORDER BY categories ASC, title ASC`
    );
    return result;
  } catch (error) {
    console.error("Error fetching uploads:", error);
    throw new Error("Failed to fetch data from the database.");
  }
};

// Server Component that fetches data
export default async function page() {
  const uploads = await fetchUploads();

  return (
    <>
      <Head>
        <title>
          Branded Content Production and Fixer Services in South Korea
        </title>
        <meta
          name="description"
          content="Expert branded content production and fixer services in South Korea. Seamless video production support for films, documentaries, and commercials."
        />
        <meta
          name="keywords"
          content="Branded content production, Fixer in South Korea"
        />
        <meta
          property="og:title"
          content="Branded Content Production and Fixer Services in South Korea"
        />
        <meta
          property="og:description"
          content="Expert branded content production and fixer services in South Korea. Seamless video production support for films, documentaries, and commercials."
        />
        <meta
          property="og:url"
          content="https://www.posted-productions.com/works"
        />
      </Head>

      <div
        className="md:py-[9rem] max-w-[99vw] pt-[2rem] bg-contain min-h-screen "
        // style={{backgroundImage:"url('https://i.pinimg.com/originals/6f/9d/c5/6f9dc513096e160a82c2201961b3386b.gif')"}}
      >
        <Clips uploads={uploads} />
      </div>
    </>
  );
}
