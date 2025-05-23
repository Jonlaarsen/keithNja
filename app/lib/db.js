import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Replace with your Neon database URL
});

export const query = (text, params) => pool.query(text, params);
