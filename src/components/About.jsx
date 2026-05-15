import styles from './About.module.css'

export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <div className={styles.grid}>
        <div className={styles.avatar}>
          <div className={styles.placeholder}>SP</div>
        </div>
        <div className={styles.bio}>
          <p>
            Hey! I'm Shanuj, a Microsoft 365 and Power Platform Engineer with a passion
            for automating workflows and building intelligent business solutions. I specialise
            in SharePoint, Teams, Power Automate, Power Apps, and Power BI.
          </p>
          <p>
            When I'm not building solutions, you'll find me exploring the latest Microsoft
            updates, experimenting with AI tools, or enjoying a good cup of coffee.
          </p>
          <a href="/resume.pdf" className={styles.resumeBtn} download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
