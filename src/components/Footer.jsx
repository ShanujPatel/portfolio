import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Designed &amp; built by <strong>Your Name</strong> · {new Date().getFullYear()}</p>
    </footer>
  )
}
