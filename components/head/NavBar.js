// components/NavBar.js
"use client";
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './NavBar.module.css'

export default function NavBar() {
  const [show, setShow] = useState(true)
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      // if we scrolled down, hide; if up, show
      if (currentY > lastY && currentY > 100) {
        setShow(false)
      } else {
        setShow(true)
      }
      setLastY(currentY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastY])

  return (
    <nav className={`${styles.nav} ${show ? '' : styles.navHidden}`}>
      <ul className={styles.navLeft}>
        <li><Link href="/"      className={styles.link}>Home</Link></li>
        <li><Link href="/experience" className={styles.link}>Experience</Link></li>
        <li><Link href="/projects"   className={styles.link}>Projects</Link></li>
        <li><Link href="/contact"    className={styles.link}>Contact</Link></li>
      </ul>
      <ul className={styles.navRight}>
        <li>
          <Link href="https://github.com/Guotai812"
                target="_blank" rel="noopener noreferrer"
                className={styles.link}>GitHub</Link>
        </li>
        <li>
          <Link href="https://twitter.com/your-twitter-handle"
                target="_blank" rel="noopener noreferrer"
                className={styles.link}>Twitter</Link>
        </li>
      </ul>
    </nav>
  )
}