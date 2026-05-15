import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hi, I'm</p>
        <h1 className={styles.name}>Your Name</h1>
        <p className={styles.role}>Full-Stack Developer &amp; Designer</p>
        <p className={styles.tagline}>
          I build fast, accessible, and beautiful web experiences.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.primary}>View My Work</a>
          <a href="#contact" className={styles.secondary}>Get In Touch</a>
        </div>
      </div>
      <div className={styles.blob} aria-hidden="true" />
    </section>
  )
}
