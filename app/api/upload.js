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
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).json({ error: `Method ${req.method} not allowed` });
//   }
// }


// /api/addObject.js
import { query } from '../../lib/db';
import { Server } from 'socket.io';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, subtitle, description, url } = req.body;

    if (!title || !url) {
      return res.status(400).json({ error: 'Title and URL are required.' });
    }

    try {
      const result = await query(
        `INSERT INTO uploads (title, subtitle, description, url) 
         VALUES ($1, $2, $3, $4) RETURNING *`,
        [title, subtitle, description, url]
      );

      const io = new Server(res.socket.server);
      io.emit('dataUpdate', result.rows[0]);  // Emit to all connected clients

      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error saving to database:', error);
      res.status(500).json({ error: 'Database error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
