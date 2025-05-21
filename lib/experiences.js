import { ObjectId } from "mongodb";
import { getDatabase } from "./mongodb";

export async function getExperiences() {
    const db = await getDatabase();
    return db
        .collection("experiences")
        .find({})
        .sort({ current: -1, startTime: -1 })
        .toArray();
}

export async function getExp(id) {
    const db = await getDatabase();
    return db
        .collection("experiences")
        .findOne({ _id: new ObjectId(id) });
}