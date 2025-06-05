'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.css'

export default function ContactPage() {
  const [status, setStatus] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('Sending…')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    })
    setStatus(res.ok ? 'Message sent!' : 'Error sending message.')
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Contact Me</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} name="name" placeholder="Your Name"  required />
        <input className={styles.input} name="email" type="email" placeholder="Your Email" required />
        <textarea className={styles.textarea} name="message" placeholder="Your Message" required />
        <button className={styles.button} type="submit">Send</button>
      </form>
      {status && <p className={styles.status}>{status}</p>}
    </main>
  )
}