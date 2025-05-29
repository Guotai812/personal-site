import styles from './page.module.css'
import { getExperiences } from '@/lib/experiences'

export default async function ExperiencePage() {
  let experiences;
  try {
    experiences = await getExperiences();
  } catch (error) {
    throw new Error('Failed to fetch experiences');
  }

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