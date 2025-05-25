import styles from './page.module.css';

export default function Home() {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Welcome</h1>
      <p className={styles.intro}>
        I'm Guotai, a Computer Science student with a passion for building efficient and user-friendly software.
      </p>
    </section>
  );
}