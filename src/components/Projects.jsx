import { useState, useRef, useEffect, useCallback } from 'react'
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

const GAP = 16

export default function Projects() {
  const [current, setCurrent] = useState(0)
  const wrapRef = useRef(null)
  const [stepPx, setStepPx] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  const measure = useCallback(() => {
    if (!wrapRef.current) return
    const w = wrapRef.current.offsetWidth
    const visible = w < 600 ? 1 : 3
    setVisibleCount(visible)
    const cardW = (w - (visible - 1) * GAP) / visible
    setStepPx(cardW + GAP)
    setCurrent(c => Math.min(c, projects.length - visible))
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [measure])

  const max = projects.length - visibleCount
  const cardWidth = stepPx ? stepPx - GAP : undefined

  return (
    <section id="projects">
      <p className="section-num">// 004</p>
      <h2 className="section-title">Projects</h2>
      <div className={styles.carouselWrap} ref={wrapRef}>
        <div
          className={styles.track}
          style={{ transform: `translateX(${-current * stepPx}px)` }}
        >
          {projects.map(p => (
            <div key={p.title} className={styles.card} style={{ width: cardWidth }}>
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
      </div>
      <div className={styles.controls}>
        <button
          className={styles.navBtn}
          onClick={() => setCurrent(c => Math.max(0, c - 1))}
          disabled={current === 0}
          aria-label="Previous"
        >‹</button>
        <div className={styles.dots}>
          {Array.from({ length: max + 1 }, (_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          className={styles.navBtn}
          onClick={() => setCurrent(c => Math.min(max, c + 1))}
          disabled={current === max}
          aria-label="Next"
        >›</button>
      </div>
    </section>
  )
}
