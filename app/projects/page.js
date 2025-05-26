import styles from './page.module.css'
import { getProjects } from '@/lib/projects'

export default async function ProjectsPage() {
  const projects = await getProjects()
  return (
    <main className={styles.main}>
      <h1 className={styles.header}>Projects</h1>
      <div className={styles.grid}>
        {projects.map((item) => (
          <div key={item._id.toString()} className={styles.card}>
            <h2 className={styles.title}>{item.name}</h2>
            <p className={styles.description}>{item.description}</p>
            {item.techniques && item.techniques.length > 0 && (
              <ul className={styles.techList}>
                {item.techniques.map((tech) => (
                  <li key={tech} className={styles.techItem}>{tech}</li>
                ))}
              </ul>
            )}
            <a
              href={item.url}
              className={styles.urlButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}