"use server"

import { redirect } from 'next/navigation';
import { getDatabase } from "./mongodb";
import { ObjectId } from 'mongodb';

export async function addExperience(formData) {
    const db = await getDatabase();
    const exp = {
        title: formData.get("title"),
        current: formData.get("isCurrent") === "yes" ? true : false,
        startDate: formData.get("startDate"),
        endDate: formData.get("endDate"),
        description: formData.get("description")
    }
    await db.collection("experiences").insertOne(exp);
    redirect('/');
}

export async function editExp(id, formData) {
    const db = await getDatabase();
    const exp = {
        title: formData.get("title"),
        current: formData.get("isCurrent") === "yes" ? true : false,
        startDate: formData.get("startDate"),
        endDate: formData.get("endDate"),
        description: formData.get("description")
    }
    await db.collection("experiences").updateOne(
        {_id: new ObjectId(id)},
        {$set: exp}
    );
    redirect('/');
}

export async function deleteExperience(formData) {
  const id = formData.get("id");
  const db = await getDatabase();
  await db.collection("experiences").deleteOne({ _id: new ObjectId(id) });
  redirect('/');
}