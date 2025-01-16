import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.NEON_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const query = (text: string, params?: any[]) => pool.query(text, params);

export async function GET(req: NextRequest) {
  let lastPostId: null = null; // Track the last sent post ID

  try {
    const readableStream = new ReadableStream({
      start(controller) {
        // Poll for new posts every 5 seconds
        const interval = setInterval(async () => {
          const result = await query('SELECT * FROM uploads ORDER BY id DESC LIMIT 1');
          
          if (result.rows.length > 0) {
            const newPost = result.rows[0];
            
            // If the post ID is different from the last sent post, send it via SSE
            if (newPost.id !== lastPostId) {
              lastPostId = newPost.id;
              const message = `data: ${JSON.stringify(newPost)}\n\n`;
              controller.enqueue(new TextEncoder().encode(message));
            }
          }
        }, 5000);

        // Cleanup when the connection is closed
        req.signal.addEventListener('abort', () => {
          console.log('Connection aborted by client.');
          clearInterval(interval); // Clear interval when the connection is closed
        });
      },
    });

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*', // Allow cross-origin requests if necessary
      },
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
