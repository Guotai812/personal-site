"use client";
import { useEffect, useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [introduction, setIntroduction] = useState("");
  
  useEffect(() => {
    if ('scrollBehavior' in document.documentElement.style === false) {
      import('smoothscroll-polyfill').then((module) => module.polyfill())
    }
  }, [])

  const scrollToSummary = () => {
    document.getElementById('summary')?.scrollIntoView({ behavior: 'smooth' , block: 'center'})
  }
  
  useEffect(() => {
    async function fetchIntroduction() {
      try {
        setLoading("loading");
        const { content } = await (await fetch('/api/introduction')).json()
        setIntroduction(content)  
      } catch(error) {
        setError(error)
      }
      setLoading(null);
    }
    fetchIntroduction();
  }, [])


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
        <h2 className={styles.summaryTitle}>Introduction</h2>
        {loading && <p className={styles.summaryText}>{loading}</p>}
        {error && <p className={styles.summaryText}>Fail to fetch introduction</p>}
        <p className={styles.summaryText}>{introduction}</p>
      </section>
    </>
  )
}