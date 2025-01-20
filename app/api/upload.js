// // import { query } from '../../lib/db';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { title, subtitle, description, url } = req.body;

//     if (!title || !url) {
//       return res.status(400).json({ error: 'Title and URL are required.' });
//     }

//     try {
//       const result = await query(
//         `INSERT INTO uploads (title, subtitle, description, url) 
//          VALUES ($1, $2, $3, $4) RETURNING *`,
//         [title, subtitle, description, url]
//       );
//       console.log("sup cunt")

//       res.status(201).json(result.rows[0]);
//     } catch (error) {
//       console.error('Error saving to database:', error);
//       res.status(500).json({ error: 'Database error' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).json({ error: `Method ${req.method} not allowed` });
//   }
// }

// // let clients = []; // To store connected clients

// // export default function handler(req, res) {
// //   if (req.method === 'POST') {
// //     const { title, subtitle, description, url } = req.body;

// //     if (!title || !url) {
// //       return res.status(400).json({ error: 'Title and URL are required.' });
// //     }

// //     try {
// //       // Simulate saving to the database
// //       const newPost = { title, subtitle, description, url };

// //       // Notify all connected clients
// //       clients.forEach((client) =>
// //         client.res.write(`data: ${JSON.stringify(newPost)}\n\n`)
// //       );

// //       return res.status(201).json(newPost);
// //     } catch (error) {
// //       console.error('Error saving post:', error);
// //       return res.status(500).json({ error: 'Internal server error' });
// //     }
// //   } else if (req.method === 'GET') {
// //     // Handle SSE connections
// //     res.setHeader('Content-Type', 'text/event-stream');
// //     res.setHeader('Cache-Control', 'no-cache');
// //     res.setHeader('Connection', 'keep-alive');

// //     clients.push({ id: Date.now(), res });

// //     req.on('close', () => {
// //       clients = clients.filter((client) => client.res !== res);
// //     });
// //   } else {
// //     res.setHeader('Allow', ['POST', 'GET']);
// //     res.status(405).json({ error: `Method ${req.method} not allowed` });
// //   }
// // }


// import { query } from '../../lib/db';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { title, subtitle, description, url } = req.body;

//     if (!title || !url) {
//       return res.status(400).json({ error: 'Title and URL are required.' });
//     }

//     try {
//       const result = await query(
//         `INSERT INTO uploads (title, subtitle, description, url) 
//          VALUES ($1, $2, $3, $4) RETURNING *`,
//         [title, subtitle, description, url]
//       );

//       res.status(201).json(result.rows[0]);
//     } catch (error) {
//       console.error('Error saving to database:', error);
//       res.status(500).json({ error: 'Database error' });
//     }
//   } else if (req.method === 'PUT') {
//     const { id } = req.query;
//     const { title, subtitle, description, url } = req.body;

//     if (!title || !url) {
//       return res.status(400).json({ error: 'Title and URL are required.' });
//     }

//     try {
//       // Check if the clip exists
//       const checkClip = await query(
//         `SELECT * FROM uploads WHERE id = $1`,
//         [id]
//       );

//       if (checkClip.rows.length === 0) {
//         return res.status(404).json({ error: 'Clip not found.' });
//       }

//       // Update the clip
//       const result = await query(
//         `UPDATE uploads
//          SET title = $1, subtitle = $2, description = $3, url = $4
//          WHERE id = $5 RETURNING *`,
//         [title, subtitle, description, url, id]
//       );

//       res.status(200).json(result.rows[0]);
//     } catch (error) {
//       console.error('Error updating clip:', error);
//       res.status(500).json({ error: 'Database error' });
//     }
//   } else if (req.method === 'DELETE') {
//     const { id } = req.query;

//     try {
//       // Check if the clip exists
//       const checkClip = await query(
//         `SELECT * FROM uploads WHERE id = $1`,
//         [id]
//       );

//       if (checkClip.rows.length === 0) {
//         return res.status(404).json({ error: 'Clip not found.' });
//       }

//       // Delete the clip
//       await query(
//         `DELETE FROM uploads WHERE id = $1`,
//         [id]
//       );

//       res.status(204).end(); // No content returned after successful delete
//     } catch (error) {
//       console.error('Error deleting clip:', error);
//       res.status(500).json({ error: 'Database error' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST', 'PUT', 'DELETE']);
//     res.status(405).json({ error: `Method ${req.method} not allowed` });
//   }
// }


