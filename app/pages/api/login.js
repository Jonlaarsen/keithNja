// import { Client } from 'pg';
// import bcrypt from 'bcrypt';

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
// });

// client.connect();

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ message: 'Email and password are required' });
//     }

//     try {
//       // Query the Neon database to find the user by email
//       const query = 'SELECT * FROM users WHERE email = $1';
//       const result = await client.query(query, [email]);

//       if (result.rows.length === 0) {
//         return res.status(401).json({ message: 'Invalid credentials' });
//       }

//       const user = result.rows[0];

//       // Compare the provided password with the hashed password in the database
//       const isValid = await bcrypt.compare(password, user.password_hash);
//       if (!isValid) {
//         return res.status(401).json({ message: 'Invalid credentials' });
//       }

//       // Authentication successful, return user data (excluding password)
//       const { password_hash, ...userData } = user; // Exclude password
//       res.status(200).json({ message: 'Login successful', user: userData });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Something went wrong' });
//     }
//   } else {
//     // Only allow POST requests
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }
