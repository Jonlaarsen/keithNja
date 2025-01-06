// "use client";
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const router = useRouter(); // Next.js router for redirecting

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     const response = await fetch('/api/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await response.json();

//     setLoading(false);

//     if (response.ok) {
//       // Store the user session (for example, using localStorage or cookies)
//       localStorage.setItem('user', JSON.stringify(data.user)); // Storing the user data

//       // Redirect to the admin page after successful login
//       router.push('/admin');
//     } else {
//       setError(data.message);
//     }
//   };

//   return (
//     <div className='flex h-screen flex-col items-center justify-center'>
//       <form className='flex flex-col gap-10' onSubmit={handleSubmit}>
//         <div className='flex flex-col'>
//           <label>Email:</label>
//           <input
//             className='w-[20rem] text-black'
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className='flex flex-col'>
//           <label>Password:</label>
//           <input
//             className='w-[20rem] text-black'
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <button type="submit" disabled={loading}>
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </form>
//     </div>
//   );
// }
