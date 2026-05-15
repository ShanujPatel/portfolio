import { useState } from 'react'
import styles from './Experience.module.css'

const jobs = [
  {
    company: 'McLaren Construction',
    url: 'https://www.mclarengroup.com/',
    logo: 'https://logo.clearbit.com/mclarengroup.com',
    period: '2025 – Present',
    role: 'IT Power Platform Engineer',
    current: true,
  },
  {
    company: 'Dr. Martens',
    url: 'https://www.drmartens.com/uk/en_gb/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Dr._Martens_Logo.svg/3840px-Dr._Martens_Logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail',
    period: '2020 – 2025',
    role: 'Microsoft 365 Engineer',
    current: false,
  },
  {
    company: 'NYK Group Europe',
    url: 'https://nykeurope.com/',
    logo: 'https://logo.clearbit.com/nykeurope.com',
    period: '2018 – 2020',
    role: 'Digital Business Analyst (Microsoft 365)',
    current: false,
  },
  {
    company: 'Integrity Global',
    url: 'https://www.integrityglobal.com/',
    logo: 'https://logo.clearbit.com/integrityglobal.com',
    period: '2015 – 2018',
    role: 'IT Apprentice → Data Management Officer',
    current: false,
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
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
