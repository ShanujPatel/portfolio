import styles from './Projects.module.css'

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack web app that solves a real-world problem using React and Node.js.',
    tags: ['React', 'Node.js', 'MongoDB'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Project Two',
    description: 'An e-commerce platform with payment integration and real-time inventory.',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Project Three',
    description: 'A mobile-first dashboard with data visualisation and live updates.',
    tags: ['TypeScript', 'D3.js', 'WebSockets'],
    demo: '#',
    code: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <div className={styles.grid}>
        {projects.map(p => (
          <div key={p.title} className={styles.card}>
            <div className={styles.cardTop}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
            <div className={styles.cardBottom}>
              <div className={styles.tags}>
                {p.tags.map(t => <span key={t}>{t}</span>)}
              </div>
              <div className={styles.links}>
                <a href={p.demo} target="_blank" rel="noreferrer">Live</a>
                <a href={p.code} target="_blank" rel="noreferrer">Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
