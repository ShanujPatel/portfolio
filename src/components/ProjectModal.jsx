import { useEffect, useState } from 'react'
import styles from './ProjectModal.module.css'

export default function ProjectModal({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const hasImages = project.images && project.images.length > 0

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>

        <div className={styles.header}>
          <span className={styles.dots}>● ● ●</span>
          <span className={styles.title}>{project.title}</span>
          <button className={styles.close} onClick={onClose} aria-label="Close">×</button>
        </div>

        <div className={styles.body}>
          <div className={styles.imageArea}>
            {hasImages ? (
              <>
                <img
                  src={project.images[activeImage]}
                  alt={`${project.title} screenshot ${activeImage + 1}`}
                  className={styles.image}
                />
                {project.images.length > 1 && (
                  <div className={styles.imageDots}>
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        className={`${styles.imageDot} ${i === activeImage ? styles.imageDotActive : ''}`}
                        onClick={() => setActiveImage(i)}
                        aria-label={`Image ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className={styles.placeholder}>
                <div className={styles.placeholderInner}>
                  <span className={styles.placeholderComment}>// no_preview_available</span>
                  <span className={styles.placeholderHint}>{'> add screenshots to projects data'}</span>
                </div>
              </div>
            )}
          </div>

          <div className={styles.details}>
            <div className={styles.tags}>
              {project.tags.map(t => <span key={t}>{t}</span>)}
            </div>

            <p className={styles.description}>{project.details || project.description}</p>

            {project.features && project.features.length > 0 && (
              <div className={styles.featuresBlock}>
                <p className={styles.featuresHeading}>// key_features</p>
                <ul className={styles.features}>
                  {project.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </div>
            )}

            {(project.demo !== '#' || project.code !== '#') && (
              <div className={styles.links}>
                {project.demo !== '#' && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className={styles.linkPrimary}>
                    Live ↗
                  </a>
                )}
                {project.code !== '#' && (
                  <a href={project.code} target="_blank" rel="noreferrer" className={styles.linkSecondary}>
                    Code ↗
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
