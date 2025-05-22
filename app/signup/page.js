'use client';
import styles from './page.module.css';
import Link from 'next/link';

export default function SignUpForm() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');

    await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    window.location.href = '/login';
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Sign Up</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required />

        <button type="submit" className={styles.submitButton}>Sign Up</button>
      </form>
      
      <p className={styles.prompt}>
        Already have an account? <Link href="/login" className={styles.link}>Sign in</Link>
      </p>
    </div>
  );
}