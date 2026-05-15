import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>/* designed &amp; built by <strong>Shanuj Patel</strong> · {new Date().getFullYear()} */</p>
    </footer>
  )
}
