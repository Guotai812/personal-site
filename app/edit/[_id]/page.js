import Link from "next/link";
import { getExp } from "@/lib/experiences";
import { editExp } from "@/lib/action";

export default async function Edit({ params }) {
    const { _id } = params;
    const exp = await getExp(_id);
    async function handleEdit(formData) {
        "use server";
        await editExp(_id, formData);
    }
    return (
        <form action={handleEdit}>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type="text" required defaultValue={exp.title}/>

            <label>
                <input type="radio" name="isCurrent" value="yes" required defaultChecked={exp.current === true}/>
                yes
            </label>

            <label>
                <input type="radio" name="isCurrent" value="no" required defaultChecked={exp.current === false}/>
                no
            </label>

            <label htmlFor="startDate">Start Date</label>
            <input id="startDate" name="startDate" type="date" required={exp.current === true ? false : true} defaultValue={exp.startDate}/>

            <label htmlFor="endDate">End Date</label>
            <input id="endDate" name="endDate" type="date" required={exp.current === true ? false : true} defaultValue={exp.endDate}/>
            
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" rows="6" cols="50" placeholder="Enter your description" required defaultValue={exp.description}/>
            <button>Submit</button>
            <Link href="/">Cancel</Link>
        </form>
    
    );
}