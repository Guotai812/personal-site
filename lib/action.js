"use server"

import { redirect } from "next/dist/server/api-utils";
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
    const result = await db.collection("experiences").insertOne(exp);
    redirect("../");
}