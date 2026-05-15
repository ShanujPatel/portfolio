import { useState, useRef, useEffect, useCallback } from 'react'
import styles from './Projects.module.css'
import ProjectModal from './ProjectModal'

const projects = [
  {
    title: 'Employee Onboarding Automation',
    description: 'End-to-end Power Automate flow that provisions Microsoft 365 accounts, assigns licences, creates SharePoint sites, and sends a personalised Teams welcome — reducing onboarding time from days to minutes.',
    details: 'Designed and built a fully automated employee onboarding pipeline using Power Automate and the Microsoft Graph API. When HR submits a new starter form, the flow provisions a Microsoft 365 account, assigns appropriate licences, creates a personalised SharePoint site, adds the user to relevant Teams channels, and sends a branded welcome message — all without manual IT intervention. This reduced onboarding time from several days to under 10 minutes.',
    features: [
      'Automated M365 account provisioning via Graph API',
      'Dynamic licence assignment based on job role',
      'SharePoint site creation with pre-populated templates',
      'Teams channel enrolment and personalised welcome message',
      'Error handling with automatic IT helpdesk ticket creation on failure',
    ],
    tags: ['Power Automate', 'SharePoint', 'Teams', 'Graph API'],
    images: [],
    demo: '#',
    code: '#',
  },
  {
    title: 'IT Helpdesk Power App',
    description: 'Canvas app built in Power Apps enabling staff to log, track, and escalate IT requests. Integrated with SharePoint lists for data storage and Power Automate for email notifications and SLA alerts.',
    details: 'Built a full-featured IT helpdesk canvas app in Power Apps to replace an email-based support process. Staff can log incidents, track status in real time, and escalate urgent requests. The app connects to SharePoint lists for persistent data storage, with Power Automate flows handling email notifications, SLA breach alerts, and auto-assignment to the correct support tier.',
    features: [
      'Incident logging with category, priority, and attachment support',
      'Real-time status tracking for all open and resolved tickets',
      'Automated SLA alerts when tickets approach or breach deadlines',
      'Role-based views for end users and IT administrators',
      'Power BI embedded reporting for helpdesk performance metrics',
    ],
    tags: ['Power Apps', 'Power Automate', 'SharePoint'],
    images: [],
    demo: '#',
    code: '#',
  },
  {
    title: 'Retail Support Portals',
    description: 'Collaborated with Retail teams to build end-to-end support portals using Power Platform — Power Apps for intuitive issue logging in stores, Power Automate flows for approvals, and Power BI reports for comprehensive reporting.',
    details: 'Worked closely with Retail operations teams to design and deliver support portals that replaced fragmented email and phone-based processes. Store staff use a Power Apps interface to log issues directly from the shop floor, which triggers Power Automate approval flows routed to the correct back-office team. Power BI dashboards give management real-time visibility into issue volume, resolution times, and recurring problem areas — delivering significant time savings across stores and back-office personnel.',
    features: [
      'Intuitive Power Apps interface optimised for in-store use on tablets',
      'Automated approval and escalation flows via Power Automate',
      'Power BI dashboard for issue tracking and trend analysis',
      'Category-based routing to relevant back-office departments',
      'Reduced average issue resolution time significantly',
    ],
    tags: ['Power Apps', 'Power Automate', 'Power BI'],
    images: [],
    demo: '#',
    code: '#',
  },
  {
    title: 'Finance Business Process Improvements',
    description: 'Worked with Finance teams to transition Excel-based forms to Power Apps and Power Automate, automating manual processes and reducing finance staff workload by over 10 hours weekly.',
    details: 'Partnered with Finance stakeholders to identify and modernise high-effort manual processes still running on legacy Excel forms. Rebuilt these workflows as Power Apps with integrated Power Automate flows, introducing automated data validation, approval chains, and audit trails. The transition eliminated duplicate data entry, reduced errors, and freed over 10 hours of staff time per week.',
    features: [
      'Replaced multiple Excel-based forms with a unified Power Apps interface',
      'Automated multi-stage approval workflows with delegation support',
      'Built-in data validation to reduce entry errors',
      'Full audit trail stored in SharePoint for compliance purposes',
      'Saved over 10 hours of manual work per week across the Finance team',
    ],
    tags: ['Power Apps', 'Power Automate', 'Excel'],
    images: [],
    demo: '#',
    code: '#',
  },
  {
    title: 'Legal & Compliance Process Improvement',
    description: 'Led development of upgraded compliance processes via Power Platform and SharePoint — including a Power Apps interface for staff to document gifts received from suppliers and clients, and Power BI reporting for the Legal team.',
    details: 'Led the end-to-end design and delivery of a compliance management solution to help the organisation meet legal obligations around gift and hospitality reporting. Staff across the business use a Power Apps interface to log gifts received from suppliers and clients, with Power Automate enforcing approval and notification workflows. The Legal team gains full visibility through a Power BI dashboard, enabling efficient tracking and audit-ready reporting.',
    features: [
      'Staff-facing Power Apps interface for logging gifts and hospitality',
      'Automated approval workflows with Legal team notifications',
      'SharePoint-backed data store with version history for compliance',
      'Power BI dashboard for Legal team oversight and trend reporting',
      'Organisation-wide rollout with in-app guidance for all user levels',
    ],
    tags: ['Power Apps', 'Power Automate', 'SharePoint', 'Power BI'],
    images: [],
    demo: '#',
    code: '#',
  },
  {
    title: 'M365 Adoption Dashboard',
    description: 'Interactive Power BI dashboard pulling Microsoft 365 usage data via the Graph API, giving leadership real-time visibility of Teams, SharePoint, and OneDrive adoption across the organisation.',
    details: 'Developed an executive-facing Power BI dashboard that surfaces Microsoft 365 adoption metrics across the organisation by querying usage data through the Microsoft Graph API. Leadership can drill into Teams meeting activity, SharePoint site engagement, and OneDrive usage patterns — enabling data-driven decisions on training initiatives, licence optimisation, and platform rollout priorities.',
    features: [
      'Live M365 usage data pulled via Microsoft Graph API',
      'Drill-through views for Teams, SharePoint, and OneDrive adoption',
      'Trend analysis and month-on-month comparison charts',
      'Department-level segmentation for targeted insights',
      'Scheduled data refresh with automated alerts on adoption dips',
    ],
    tags: ['Power BI', 'Graph API', 'SharePoint Online'],
    images: [],
    demo: '#',
    code: '#',
  },
]

const GAP = 16

export default function Projects() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
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
            <div
              key={p.title}
              className={styles.card}
              style={{ width: cardWidth }}
              onClick={() => setSelected(p)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setSelected(p)}
            >
              <div className={styles.cardTop}>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.tags}>
                  {p.tags.map(t => <span key={t}>{t}</span>)}
                </div>
                <span className={styles.viewMore}>view details →</span>
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

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
