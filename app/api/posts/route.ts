// import { NextRequest, NextResponse } from 'next/server';
// import { Pool } from 'pg';

// // Initiera databasanslutning
// const pool = new Pool({
//   connectionString: process.env.NEON_DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false, // This is required for some cloud database setups, like Neon.
//   },
// });

// // Query-funktion för att utföra SQL-frågor
// const query = (text: string, params?: any[]) => pool.query(text, params);

// export async function GET(req: NextRequest) {
//   try {
//     // Hämta de senaste posterna från "uploads"-tabellen
//     const result = await query('SELECT * FROM uploads ORDER BY id DESC LIMIT 1');

//     if (result.rows.length > 0) {
//       const newPost = result.rows[0];

//       // Skapa en ReadableStream för SSE
//       const readableStream = new ReadableStream({
//         start(controller) {
//           // Formatera SSE-datan korrekt och enqueu den i strömmen
//           controller.enqueue(`data: ${JSON.stringify(newPost)}\n\n`);
//           controller.close(); // Avsluta strömmen direkt
//         },
//       });

//       return new Response(readableStream, {
//         headers: {
//           'Content-Type': 'text/event-stream',
//           'Cache-Control': 'no-cache',
//           'Connection': 'keep-alive',
//         },
//       });
//     } else {
//       return NextResponse.json({ error: 'No posts found' }, { status: 404 });
//     }
//   } catch (error) {
//     console.error('Error fetching posts:', error);
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
//   }
// }
