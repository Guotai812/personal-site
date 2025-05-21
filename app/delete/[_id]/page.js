import { deleteExperience } from "@/lib/action";

export default async function Delete({params}) {
    const { _id } = params;
    return(
        <form action={deleteExperience}>
            <input hidden name="id" value={_id} />
            <button>delete</button>
        </form>
    );
}