import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // Replace with your form service (Formspree, EmailJS, etc.)
    setSent(true)
  }

  return (
    <section id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className={styles.intro}>
        Have a project in mind or just want to say hi? Drop me a message.
      </p>
      {sent ? (
        <p className={styles.success}>Thanks! I'll get back to you soon.</p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <input name="name" type="text" placeholder="Your Name" required />
            <input name="email" type="email" placeholder="Your Email" required />
          </div>
          <textarea name="message" rows={5} placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      )}
      <div className={styles.socials}>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/shanuj-patel/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:you@example.com">Email</a>
      </div>
    </section>
  )
}
