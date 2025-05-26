// app/page.js
"use client";
import { useEffect } from 'react'
import styles from './page.module.css'

export default function Home() {
  // Smooth scroll polyfill for older browsers (optional)
  useEffect(() => {
    if ('scrollBehavior' in document.documentElement.style === false) {
      import('smoothscroll-polyfill').then((module) => module.polyfill())
    }
  }, [])

  const scrollToSummary = () => {
    document.getElementById('summary')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome!</h1>
        <p className={styles.subtitle}>
          I’m Guotai Xiao, a Computer Science student at the University of Newcastle.
        </p>
        <div className={styles.arrow} onClick={scrollToSummary} />
      </main>

      <section id="summary" className={styles.summary}>
        <h2 className={styles.summaryTitle}>Summary</h2>
        <p className={styles.summaryText}>
          adkjhjkafhajdhkjsfhjkahldahdjajkfhadfjkhsjkdfjkajkdfjkashdhasdhashdkjajksdhjkadjkahskjdhkjahdjaksdhkjahsjkhajksdhjahsdkjahskjdhjkashdkjahsdjkajksdjkasdhj
        </p>
      </section>
    </>
  )
}