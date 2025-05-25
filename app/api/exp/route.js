import { getDatabase } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const db = await getDatabase();
  const data = await db.collection("experiences").find().toArray();
  return NextResponse.json(data);
}