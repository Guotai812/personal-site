import { getDatabase } from "./mongodb";

export async function getExperiences() {
    const db = await getDatabase();
    return db
        .collection("experienes")
        .find({})
        .sort({ current: -1, startTime: -1 })
        .toArray();
}