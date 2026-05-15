import { useState } from 'react'
import styles from './Experience.module.css'

const jobs = [
  {
    company: 'McLaren Construction',
    url: 'https://www.mclarengroup.com/',
    logo: 'https://i0.wp.com/asbp.org.uk/wp-content/uploads/2025/07/McLaren.png?fit=1200%2C1200&ssl=1&w=640',
    period: '2025 – Present',
    role: 'IT Power Platform Engineer',
    current: true,
    description: 'Add your description here — outline your key responsibilities, achievements, and the technologies you work with day-to-day in this role.',
  },
  {
    company: 'Dr. Martens',
    url: 'https://www.drmartens.com/uk/en_gb/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Dr._Martens_Logo.svg/3840px-Dr._Martens_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail',
    period: '2020 – 2025',
    role: 'Microsoft 365 Engineer',
    current: false,
    description: 'Lead the development and support of Microsoft 365 and the Power Platform with the aim of maximising platforms\' capabilities and maintaining a high standard of functionality. Assessed existing business processes and recommended improvements utilising Microsoft 365. Ensured thorough documentation of new solutions and provided adequate training for super users aimed at enhancing user proficiency in Microsoft 365 applications. Provided third-line support for daily operational issues for Azure, Microsoft 365 and Power Platform. Stayed informed about new Microsoft technologies to contribute to future business advancements, as well as helping to plan future roadmaps for embedding new Microsoft technologies.',
  },
  {
    company: 'NYK Group Europe',
    url: 'https://nykeurope.com/',
    logo: 'https://media.licdn.com/dms/image/v2/C510BAQHwJjFbTGtL2Q/company-logo_200_200/company-logo_200_200/0/1631345382532?e=2147483647&v=beta&t=hnUbN7xh-93E2YJ9_fb4PercCrmeoMgKq2_DH72sS7I',
    period: '2018 – 2020',
    role: 'Digital Business Analyst (Microsoft 365)',
    current: false,
    description: 'Add your description here — outline your key responsibilities, achievements, and the technologies you worked with during this role.',
  },
  {
    company: 'Integrity Global',
    url: 'https://www.integrityglobal.com/',
    logo: 'https://www.developmentaid.org/files/organizationLogos/integrity-40606.jpg',
    period: '2015 – 2018',
    role: 'IT Apprentice → Data Management Officer',
    current: false,
    description: 'Add your description here — outline your key responsibilities, achievements, and the technologies you worked with during this role.',
  },
]

function Logo({ src, alt }) {
  const [error, setError] = useState(false)
  if (error) {
    return (
      <div className={styles.logoFallback}>
        {alt.charAt(0)}
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      className={styles.logoImg}
      onError={() => setError(true)}
    />
  )
}

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <div className={styles.timeline}>
        {jobs.map((job, i) => (
          <div key={i} className={styles.item}>
            {/* Vertical line connector */}
            <div className={styles.line}>
              <div className={`${styles.dot} ${job.current ? styles.dotCurrent : ''}`} />
              {i < jobs.length - 1 && <div className={styles.connector} />}
            </div>

            {/* Card */}
            <div className={`${styles.card} ${job.current ? styles.cardCurrent : ''}`}>
              <div className={styles.cardHeader}>
                <a
                  href={job.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.logoWrap}
                  title={job.company}
                >
                  <Logo src={job.logo} alt={job.company} />
                </a>
                <div className={styles.meta}>
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.company}
                  >
                    {job.company}
                  </a>
                  <span className={styles.period}>{job.period}</span>
                </div>
                {job.current && (
                  <span className={styles.badge}>Current</span>
                )}
              </div>
              <p className={styles.role}>{job.role}</p>
              <p className={styles.description}>{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
