// /pages/api/posts.js
import { query } from "../../lib/db";  // Assuming query function is in lib/db.js

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Set headers for SSE
    res.setHeader("Content-Type", "text/event-stream"); // Set to EventStream
    res.setHeader("Cache-Control", "no-cache"); // Disable caching
    res.setHeader("Connection", "keep-alive"); // Keep connection open
    res.flushHeaders(); // Send the headers immediately

    const listenForNewPosts = async () => {
      try {
        while (true) {
          // Query the database to get the latest posts (you could also track post creation time)
          const result = await query("SELECT * FROM uploads ORDER BY id DESC LIMIT 1");

          if (result.rows.length > 0) {
            const newPost = result.rows[0];
            // Send new post to the client via SSE
            res.write(`data: ${JSON.stringify(newPost)}\n\n`);
          }

          // Poll the database every 10 seconds (adjustable)
          await new Promise(resolve => setTimeout(resolve, 10000));
        }
      } catch (error) {
        console.error("Error in SSE connection:", error);
        res.write("data: {\"error\":\"Connection error\"}\n\n");
      }
    };

    // Start the process of polling for new posts
    listenForNewPosts();
  } else {
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
