import styles from './page.module.css'
import { getExperiences } from '@/lib/experiences'

export default async function ExperiencePage() {
  const experiences = await getExperiences()
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Experience</h1>
      <div className={styles.grid}>
        {experiences.map((item) => (
          <div key={item._id.toString()} className={styles.card}>
            <p className={styles.time}>
              {item.current ? 'CURRENT' : `${item.startDate} - ${item.endDate}`}
            </p>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
}