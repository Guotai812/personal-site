import classes from "./IntroPage.module.css";

export default function IntroPage() {
    return (
        <div className={classes.main}>
            <p className={classes.top}>你好</p>
            <p className={classes.bottom}>Hello, I'm Guotai</p>
        </div>
    );
}