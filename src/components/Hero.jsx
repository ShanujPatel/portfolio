import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.greeting}>// hello, world</p>
        <h1 className={styles.name}>
          Shanuj Patel<span className={styles.cursor} aria-hidden="true">_</span>
        </h1>
        <p className={styles.role}>&lt; Microsoft 365 &amp; Power Platform Engineer /&gt;</p>
        <p className={styles.tagline}>
          <span className={styles.commentMark}>/*</span>
          {' '}I design and deliver intelligent M365 and Power Platform solutions that streamline business processes and drive productivity.{' '}
          <span className={styles.commentMark}>*/</span>
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.primary}>
            view_work
          </a>
          <a href="#contact" className={styles.secondary}>
            get_in_touch
          </a>
        </div>
      </div>
    </section>
  )
}
