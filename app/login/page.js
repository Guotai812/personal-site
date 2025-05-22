import Link from 'next/link';
import styles from './page.module.css';

export default function LoginForm() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <form className={styles.form}>
        <label htmlFor="username" className={styles.label}>Username</label>
        <input type="text" id="username" name="username" className={styles.input} required />

        <label htmlFor="password" className={styles.label}>Password</label>
        <input type="password" id="password" name="password" className={styles.input} required />

        <div className={styles.buttons}>
          <button type="submit" className={styles.signin}>Sign In</button>
          <Link href="/signup" className={styles.signup}>Sign Up</Link>
        </div>
      </form>
    </div>
  );
}