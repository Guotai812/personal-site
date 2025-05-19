import classes from "./NavBar.module.css";

export default function NavBar() {
    return (
        <nav className={classes.nav}>
            <ul>
              <li>
                <a>Experience</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </nav>
    );
}