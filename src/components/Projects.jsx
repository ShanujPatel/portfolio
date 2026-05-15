import styles from './Projects.module.css'

const projects = [
  {
    title: 'Employee Onboarding Automation',
    description: 'End-to-end Power Automate flow that provisions Microsoft 365 accounts, assigns licences, creates SharePoint sites, and sends a personalised Teams welcome — reducing onboarding time from days to minutes.',
    tags: ['Power Automate', 'SharePoint', 'Teams', 'Graph API'],
    demo: '#',
    code: '#',
  },
  {
    title: 'IT Helpdesk Power App',
    description: 'Canvas app built in Power Apps enabling staff to log, track, and escalate IT requests. Integrated with SharePoint lists for data storage and Power Automate for email notifications and SLA alerts.',
    tags: ['Power Apps', 'Power Automate', 'SharePoint'],
    demo: '#',
    code: '#',
  },
  {
    title: 'M365 Adoption Dashboard',
    description: 'Interactive Power BI dashboard pulling Microsoft 365 usage data via the Graph API, giving leadership real-time visibility of Teams, SharePoint, and OneDrive adoption across the organisation.',
    tags: ['Power BI', 'Graph API', 'SharePoint Online'],
    demo: '#',
    code: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <p className="section-num">// 004</p>
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
