"use server"

import { redirect } from 'next/navigation';
import { getDatabase } from "./mongodb";

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


export async function editExp(title, formData) {
    const db = await getDatabase();
    const id = crypto.randomUUID();
    const exp = {
        title: formData.get("title"),
        current: formData.get("isCurrent") === "yes" ? true : false,
        startDate: formData.get("startDate"),
        endDate: formData.get("endDate"),
        description: formData.get("description")
    }
    await db.collection("experiences").updateOne(
        {title: title},
        {$set: exp}
    );
    redirect('/');
}