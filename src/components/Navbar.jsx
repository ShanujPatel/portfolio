import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#hero" className={styles.logo}>{'<Shanuj Patel />'}</a>
      <nav className={`${styles.links} ${open ? styles.open : ''}`}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
        ))}
        <a href="#contact" className={styles.cta} onClick={() => setOpen(false)}>Hire Me</a>
      </nav>
      <button className={styles.burger} onClick={() => setOpen(o => !o)} aria-label="Menu">
        <span /><span /><span />
      </button>
    </header>
  )
}
