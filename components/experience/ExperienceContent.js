import Link from "next/link";
import classes from "./ExperienceContent.module.css";
import { getExperiences } from "@/lib/experiences";



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
                            <Link href={`/edit/${encodeURIComponent(item._id.toString())}`}>EDIT</Link>
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