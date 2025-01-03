import { neon } from '@neondatabase/serverless';

export const create = async (formData: FormData) => {
  'use server';

  const sql = neon(`${process.env.DATABASE_URL}`);
  const title = formData.get('title') as string;
  const subtitle = formData.get('subtitle') as string | null;
  const description = formData.get('description') as string | null;
  const imgURL = formData.get('imgURL') as string;
  let videoURL = formData.get('videoURL') as string;
  const category = formData.get('category') as string;

  if (!title || !imgURL || !videoURL) {
    throw new Error('Title, imgURL, and videoURL are required.');
  }

  // Validate and transform the YouTube URL
  const youtubeRegex = /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/;
  const match = videoURL.match(youtubeRegex);

  if (match) {
    const videoId = match[3];
    videoURL = `https://www.youtube.com/embed/${videoId}`;
  } else {
    alert("INVALID LINK")
    throw new Error('Invalid YouTube video link.');
  }

  try {
    await sql(
      `INSERT INTO uploads (title, subtitle, description, imgURL, videoURL, categories) 
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [title, subtitle, description, imgURL, videoURL, category]
    );
    console.log('Data inserted successfully!');
  } catch (error) {
    console.error('Error inserting data:', error);
    throw new Error('Database insertion failed.');
  }
};
