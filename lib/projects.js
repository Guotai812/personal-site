import { getDatabase } from "./mongodb";

export async function getProjects() {
    const db = await getDatabase();
    return db
        .collection("projects")
        .find({})
        .sort({ name: -1 })
        .toArray();
}