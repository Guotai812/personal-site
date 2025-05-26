// app/api/introduction/route.js
import { NextResponse } from 'next/server'
import { getDatabase } from '@/lib/mongodb'


export async function GET() {
  try {
    const db = await getDatabase();
    const collection = db.collection('introduction');
    const doc = await collection.findOne({});

    return NextResponse.json(doc);
  } catch (err) {
    console.error('Mongo error:', err);
    return NextResponse.json(
      { error: 'Failed to fetch introduction' },
      { status: 500 }
    );
  }
}