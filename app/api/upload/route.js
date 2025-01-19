import { query } from '../../lib/db';
import { NextResponse } from 'next/server';
import { TriggerWorkflow } from '@/app/lib/githubWorkflow';

// app/api/upload/route.js
// import { query } from '../../../lib/db'; // Adjust path if needed

// Handle POST requests
export async function POST(req, res) {
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

    await TriggerWorkflow('create');

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error saving to database:', error);
    res.status(500).json({ error: 'Database error' });
  }
}


// export async function GET(req) {
 

//   return NextResponse.json({ message: 'GET request successful' }, { status: 200 });
// }


// Handle PUT requests
export async function PUT(req) {
  const {id, title, subtitle, description, imgurl, videourl, categories } = await req.json();

  if (!title || !videourl) {
    return NextResponse.json({ error: 'Title and Video URL are required.' }, { status: 400 });
  }

  try {
    // Check if the clip exists
    const checkClip = await query(
      `SELECT * FROM uploads WHERE id = $1`,
      [id]
    );

    if (checkClip.rows.length === 0) {
      return NextResponse.json({ error: 'Clip not found.' }, { status: 404 });
    }

    // Update the clip
    const result = await query(
      `UPDATE uploads
       SET title = $1, subtitle = $2, description = $3, imgurl = $4, videourl = $5, categories = $6
       WHERE id = $7 RETURNING *`,
      [title, subtitle, description, imgurl, videourl, categories, id]
    );

    await TriggerWorkflow('edit');

    return NextResponse.json(result.rows[0], { status: 200 });
  } catch (error) {
    console.error('Error updating clip:', error);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}
export async function DELETE(req) {
  const { id } = await req.json();
  
  if (!id) {
    return NextResponse.json({ error: 'ID is required.' }, { status: 400 });
  }

  try {
    const checkClip = await query(
      `SELECT * FROM uploads WHERE id = $1`,
      [id]
    );

    if (checkClip.rows.length === 0) {
      console.error('Clip not found in the database');
      return NextResponse.json({ error: 'Clip not found.' }, { status: 404 });
    }

    // Delete the clip
    await query(
      `DELETE FROM uploads WHERE id = $1`,
      [id]
    );

    await TriggerWorkflow('delete');

    // Return empty response with 204 status
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting clip:', error);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}


// export async function PUT(req) {
//   const { id, title, subtitle, description, imgurl, videourl, categories } = await req.json();

//   if (!title || !videourl) {
//     return NextResponse.json({ error: 'Title and Video URL are required.' }, { status: 400 });
//   }

//   try {
//     const checkClip = await query(`SELECT * FROM uploads WHERE id = $1`, [id]);

//     if (checkClip.rows.length === 0) {
//       return NextResponse.json({ error: 'Clip not found.' }, { status: 404 });
//     }

//     const result = await query(
//       `UPDATE uploads
//        SET title = $1, subtitle = $2, description = $3, imgurl = $4, videourl = $5, categories = $6
//        WHERE id = $7 RETURNING *`,
//       [title, subtitle, description, imgurl, videourl, categories, id]
//     );

//     // Trigger GitHub Actions workflow
//     await triggerWorkflow('edit');

//     return NextResponse.json(result.rows[0], { status: 200 });
//   } catch (error) {
//     console.error('Error updating clip:', error);
//     return NextResponse.json({ error: 'Database error' }, { status: 500 });
//   }
// }


// export async function DELETE(req) {
//   const { id } = await req.json();

//   if (!id) {
//     return NextResponse.json({ error: 'ID is required.' }, { status: 400 });
//   }

//   try {
//     const checkClip = await query(`SELECT * FROM uploads WHERE id = $1`, [id]);

//     if (checkClip.rows.length === 0) {
//       return NextResponse.json({ error: 'Clip not found.' }, { status: 404 });
//     }

//     await query(`DELETE FROM uploads WHERE id = $1`, [id]);

//     // Trigger GitHub Actions workflow
//     await triggerWorkflow('delete');

//     return new NextResponse(null, { status: 204 });
//   } catch (error) {
//     console.error('Error deleting clip:', error);
//     return NextResponse.json({ error: 'Database error' }, { status: 500 });
//   }
// }
