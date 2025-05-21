

import Link from "next/link";
import { addExperience } from "@/lib/action";

export default function NewExperientc() {

    return (
        <form action={addExperience}>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type="text"/>

            <label>
                <input type="radio" name="isCurrent" value="yes" />
                yes
            </label>

            <label>
                <input type="radio" name="isCurrent" value="no" />
                no
            </label>

            <label htmlFor="startDate">Start Date</label>
            <input id="startDate" name="startDate" type="date"/>

            <label htmlFor="endDate">End Date</label>
            <input id="endDate" name="endDate" type="date"/>
            
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" rows="6" cols="50" placeholder="Enter your description" required/>
            <button>Submit</button>
            <Link href="/">Cancel</Link>
        </form>
    
    );
}