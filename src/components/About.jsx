import styles from './About.module.css'

export default function About() {
  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <div className={styles.grid}>
        <div className={styles.avatar}>
          <div className={styles.placeholder}>YN</div>
        </div>
        <div className={styles.bio}>
          <p>
            Hey! I'm a passionate developer who loves turning ideas into
            real-world products. I specialise in building clean, user-friendly
            applications with modern web technologies.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new tech, contributing
            to open source, or enjoying a good cup of coffee.
          </p>
          <a href="/resume.pdf" className={styles.resumeBtn} download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
