import { query } from '../../lib/db';

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

let clients = []; // To store connected clients

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { title, subtitle, description, url } = req.body;

    if (!title || !url) {
      return res.status(400).json({ error: 'Title and URL are required.' });
    }

    try {
      // Simulate saving to the database
      const newPost = { title, subtitle, description, url };

      // Notify all connected clients
      clients.forEach((client) =>
        client.res.write(`data: ${JSON.stringify(newPost)}\n\n`)
      );

      return res.status(201).json(newPost);
    } catch (error) {
      console.error('Error saving post:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else if (req.method === 'GET') {
    // Handle SSE connections
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    clients.push({ id: Date.now(), res });

    req.on('close', () => {
      clients = clients.filter((client) => client.res !== res);
    });
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
