import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hi, I'm</p>
        <h1 className={styles.name}>Shanuj Patel</h1>
        <p className={styles.role}>Microsoft 365 &amp; Power Platform Engineer</p>
        <p className={styles.tagline}>
          I design and deliver intelligent Microsoft 365 and Power Platform solutions that streamline business processes and drive productivity.
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
