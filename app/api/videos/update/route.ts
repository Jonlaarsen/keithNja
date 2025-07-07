import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function PUT(req: Request) {
  try {
    const { id, title, subtitle, imgURL, videoURL, category } = await req.json();

    if (!id || !title || !imgURL || !videoURL) {
      return NextResponse.json({ 
        error: 'ID, title, imgURL, and videoURL are required.' 
      }, { status: 400 });
    }

    const sql = neon(`${process.env.DATABASE_URL}`);

    // Check if the video exists
    const checkVideo = await sql(
      `SELECT * FROM videos WHERE id = $1`,
      [id]
    );

    if (checkVideo.length === 0) {
      return NextResponse.json({ error: 'Video not found.' }, { status: 404 });
    }

    // Update the video
    const result = await sql(
      `UPDATE videos
       SET title = $1, subtitle = $2, imgURL = $3, videoURL = $4, category = $5
       WHERE id = $6 RETURNING *`,
      [title, subtitle, imgURL, videoURL, category, id]
    );

    // Revalidate cache
    revalidatePath('/');
    revalidatePath('/work');
    revalidatePath('/admin');

    return NextResponse.json(result[0], { status: 200 });
  } catch (error) {
    console.error('Error updating video:', error);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
} 