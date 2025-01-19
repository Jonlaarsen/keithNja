import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.NEON_DATABASE_URL, // Ensure this is set in your environment
  ssl: { rejectUnauthorized: false }, // Add SSL settings if required by your database
});

export const query = async (text, params) => {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res; // Return the result of the query
  } catch (err) {
    console.error('Error executing query', err);
    throw new Error('Database query failed');
  } finally {
    client.release(); // Always release the client back to the pool
  }
};
