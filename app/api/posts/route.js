// import { Pool } from 'pg'; // Ensure you're using the correct database client

// // Initialize the database connection pool
// const pool = new Pool({
//   connectionString: process.env.NEON_DATABASE_URL, // Neon database connection URL
// });

// // Query function for executing database queries
// const query = (text, params) => pool.query(text, params);

// export default async function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       // Query to fetch the latest posts from the uploads table
//       const result = await query('SELECT * FROM uploads ORDER BY id DESC LIMIT 1');

//       // If new posts exist, send them as an SSE event
//       if (result.rows.length > 0) {
//         const newPost = result.rows[0];
//         res.setHeader('Content-Type', 'text/event-stream');
//         res.setHeader('Cache-Control', 'no-cache');
//         res.setHeader('Connection', 'keep-alive');
//         res.flushHeaders(); // Send the headers immediately

//         // Sending the new post data as an SSE message
//         res.write(`data: ${JSON.stringify(newPost)}\n\n`);
//       } else {
//         res.status(404).json({ error: 'No posts found' });
//       }
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   } else {
//     // If method is not GET, respond with 405 Method Not Allowed
//     res.setHeader('Allow', ['GET']);
//     res.status(405).json({ error: `Method ${req.method} Not Allowed` });
//   }
// }

export default async function handler(req, res) {
    if (req.method === 'GET') {
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');
      res.flushHeaders();
  
      // Send a simple test message every 2 seconds
      let counter = 0;
      const interval = setInterval(() => {
        counter += 1;
        res.write(`data: { "message": "Test message ${counter}" }\n\n`);
      }, 2000);
  
      // Stop sending messages after 10 seconds
      setTimeout(() => {
        clearInterval(interval);
        res.write('data: { "message": "No more updates." }\n\n');
        res.end();
      }, 10000);
    } else {
      res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
  }
  