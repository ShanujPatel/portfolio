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
      <p className="section-num">// 005</p>
      <h2 className="section-title">Get In Touch</h2>
      <p className={styles.intro}>
        Have a project in mind or just want to say hi? Drop me a message.
      </p>
      {sent ? (
        <p className={styles.success}>Thanks! I'll get back to you soon.</p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.inputWrap}>
              <input name="name" type="text" placeholder="your_name" required />
            </div>
            <div className={styles.inputWrap}>
              <input name="email" type="email" placeholder="your_email" required />
            </div>
          </div>
          <div className={styles.textareaWrap}>
            <textarea name="message" rows={5} placeholder="your_message" required />
          </div>
          <button type="submit">send_message</button>
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
