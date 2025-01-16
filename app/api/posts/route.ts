import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.NEON_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // This is required for some cloud database setups, like Neon.
  },
});

// Query-funktion för att utföra SQL-frågor
const query = (text: string, params?: any[]) => pool.query(text, params);

export async function GET(req: NextRequest) {
  try {
    const result = await query('SELECT * FROM uploads ORDER BY id DESC LIMIT 1');

    if (result.rows.length > 0) {
      const newPost = result.rows[0];

      const readableStream = new ReadableStream({
        start(controller) {
          const encoder = new TextEncoder();
          
          // Log the message to check its content
          console.log("Sending new post:", newPost);
          
          const message = `data: ${JSON.stringify(newPost)}\n\n`;

          // Ensure we are sending the correct format
          controller.enqueue(encoder.encode(message));

          // Optionally, send a keep-alive message (if needed)
          setTimeout(() => {
            controller.enqueue(encoder.encode("data: {}\n\n"));
          }, 10000); // Send a dummy message every 10 seconds (to keep the connection alive)

          // Optionally, remove the controller.close() if you want to keep the connection open
          // controller.close();
        },
      });

      return new Response(readableStream, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
          'Access-Control-Allow-Origin': '*', // Allow all origins
          'Access-Control-Allow-Methods': 'GET', // Allow GET requests
          'Access-Control-Allow-Headers': 'Content-Type', // Allow content-type headers
        },
      });
    } else {
      return NextResponse.json({ error: 'No posts found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}



// export async function GET() {
//   try {
//     const readableStream = new ReadableStream({
//       start(controller) {
//         const encoder = new TextEncoder();
        
//         // Encode the message as a Uint8Array
//         const message = `data: ${JSON.stringify({ message: "Hello, world!" })}\n\n`;
//         controller.enqueue(encoder.encode(message));
        
//         // Optionally, keep the stream open for future messages
//         // controller.close(); // Remove this if you want to keep the connection open
//       },
//     });

//     return new Response(readableStream, {
//       headers: {
//         "Content-Type": "text/event-stream",
//         "Cache-Control": "no-cache",
//         "Connection": "keep-alive",
//       },
//     });
//   } catch (error) {
//     return new Response("Internal Server Error", { status: 500 });
//   }
// }
