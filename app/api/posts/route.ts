// // import { NextRequest, NextResponse } from 'next/server';
// // import { Pool } from 'pg';

// // const pool = new Pool({
// //   connectionString: process.env.NEON_DATABASE_URL,
// //   ssl: {
// //     rejectUnauthorized: false,
// //   },
// // });

// // // Define a more specific type for query parameters (could be string, number, or boolean)
// // const query = (text: string, params?: Array<string | number | boolean>) => pool.query(text, params);

// // export async function GET(req: NextRequest) {
// //   let lastPostId: number | null = null; // Track the last sent post ID
  
// //   try {
// //     const readableStream = new ReadableStream({
// //       start(controller) {
// //         // Poll for new posts every 5 seconds
// //         const interval = setInterval(async () => {
// //           const result = await query('SELECT * FROM uploads ORDER BY id DESC LIMIT 1');
          
// //           if (result.rows.length > 0) {
// //             const newPost = result.rows[0];
            
// //             // If the post ID is different from the last sent post, send it via SSE
// //             if (newPost.id !== lastPostId) {
// //               lastPostId = newPost.id;
              
// //               // Format the message and send it to the client
// //               const message = `data: ${JSON.stringify(newPost)}\n\n`;
// //               controller.enqueue(new TextEncoder().encode(message));
// //             }
// //           }
// //         }, 5000); // Poll every 5 seconds

// //         req.headers.set("Access-Control-Allow-Origin", "*");
// //         req.headers.set("Access-Control-Allow-Methods", "GET, POST");
// //         req.headers.set("Access-Control-Allow-Headers", "Content-Type");

// //         // Cleanup when the connection is closed
// //         req.signal.addEventListener('abort', () => {
// //           clearInterval(interval); // Clear the interval when the SSE connection is closed
// //         });
// //       },
// //     });

// //     return new Response(readableStream, {
// //       headers: {
// //         'Content-Type': 'text/event-stream',
// //         'Cache-Control': 'no-cache',
// //         'Connection': 'keep-alive',
// //         'Access-Control-Allow-Origin': '*',
// //       },
// //     });
// //   } catch (error) {
// //     console.error('Error fetching posts:', error);
// //     return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
// //   }
// // }
// import { NextResponse } from 'next/server';
// import { Pool } from 'pg';

// // Create a connection to your Neon database
// const pool = new Pool({
//   connectionString: process.env.NEON_DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });

// // Utility to query the database
// const query = (text: string, params?: Array<string | number | boolean>) => pool.query(text, params);

// // GET endpoint to check for new posts
// export async function GET() {
//   try {
//     // Query the latest post
//     const result = await query('SELECT * FROM uploads ORDER BY id DESC LIMIT 1');
    
//     // Check if there are any posts
//     if (result.rows.length > 0) {
//       const newPost = result.rows[0];

//       // Send the latest post as a response
//       return NextResponse.json({ newPost }, { status: 200 });
//     } else {
//       // If no posts found, send an appropriate response
//       return NextResponse.json({ message: 'No new posts found.' }, { status: 200 });
//     }
//   } catch (error) {
//     console.error('Error fetching posts:', error);
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
//   }
// }
