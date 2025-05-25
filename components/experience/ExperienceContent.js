import classes from "./ExperienceContent.module.css";
import { getExperiences } from "@/lib/experiences";


const isLogin = false;

export default async function ExperienceContent() {
    const experiences = await getExperiences();
    return (
        <div className={classes.center}>
            <ul>
                {experiences.map(item => (
                    <li key={item._id.toString()}>
                        <div className={classes.each}>
                            {item.current &&  <p className={classes.time}>CURRENT</p>}
                            {!item.current && <p className={classes.time}>{item.startDate} - {item.endDate}</p>}
                            <p className={classes.title}>{item.title}</p>
                            <p className={classes.des}>{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}