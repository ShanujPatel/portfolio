import styles from './Skills.module.css'

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs'] },
  { category: 'Tools', items: ['Git', 'Docker', 'Figma', 'VS Code'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <h2 className="section-title">Skills</h2>
      <div className={styles.grid}>
        {skills.map(({ category, items }) => (
          <div key={category} className={styles.card}>
            <h3>{category}</h3>
            <ul>
              {items.map(skill => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
