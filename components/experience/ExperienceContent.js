import Link from "next/link";
import classes from "./ExperienceContent.module.css";
import { getExperiences } from "@/lib/experiences";

const DUMMY = [
    {
        id: 1,
        title: "Volunteer",
        current: true,
        startTime: "2022-8-20",
        endTime: "2022-9-20",
        description: "asdasdkjhjkahsdjkfgjkahadaddfidfsalfhjshfkhkajshdfaddj asjdhjkahsdjhasjkdasdkj asjdkjahdkjhas"
    }, 
    {
        id: 2,
        title: "Volunteer",
        current: false,
        startTime: "2022-8-20",
        endTime: "2022-9-20",
        description: "asdasdkjhjkahsdjkfgjkahddj asjdhjkahsdjhasjkdasdkj asjdkjahdkjhas"
    }, 
    {
        id: 3,
        title: "Volunteer",
        current: false,
        startTime: "2022-8-20",
        endTime: "2022-9-20",
        description: "asdasdkjhjkahsdjkfgjkahddj asjdhjkahsdjhasjkdasdkj asjdkjahdkjhas"
    }, 
];

let isLogin = true;

export default async function ExperienceContent() {
    const experiences = await getExperiences();
    return (
        <div className={classes.center}>
            <ul>
                {experiences.map(item => (
                    <li key={item.title}>
                        <div className={classes.each}>
                            {item.current &&  <p className={classes.time}>CURRENT</p>}
                            {!item.current && <p className={classes.time}>{item.startDate} - {item.endDate}</p>}
                            <p className={classes.title}>{item.title}</p>
                            <p className={classes.des}>{item.description}</p>
                            {isLogin && <div className={classes.actions}>
                            <Link href="/edit">EDIT</Link>
                            <button>DELETE</button>
                        </div>}
                        </div>
                    </li>
                ))}
            </ul>
            {isLogin && <Link href="/add">Add</Link>}
        </div>
    );
}