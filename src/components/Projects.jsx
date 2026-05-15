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
    title: 'Retail Support Portals',
    description: 'Collaborated with Retail teams to build end-to-end support portals using Power Platform — Power Apps for intuitive issue logging in stores, Power Automate flows for approvals, and Power BI reports for comprehensive reporting. Delivered significant time savings for stores and back-office teams in handling and resolving issues.',
    tags: ['Power Apps', 'Power Automate', 'Power BI'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Finance Business Process Improvements',
    description: 'Worked with Finance teams to transition Excel-based forms to Power Apps and Power Automate, automating manual processes and reducing finance staff workload by over 10 hours weekly.',
    tags: ['Power Apps', 'Power Automate', 'Excel'],
    demo: '#',
    code: '#',
  },
  {
    title: 'Legal & Compliance Process Improvement',
    description: 'Led development of upgraded compliance processes via Power Platform and SharePoint — including a user-friendly Power Apps interface for staff to document gifts received from suppliers and clients, and Power BI reporting for the Legal team to efficiently track and oversee compliance across the organisation.',
    tags: ['Power Apps', 'Power Automate', 'SharePoint', 'Power BI'],
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
