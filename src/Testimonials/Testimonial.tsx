import { getInitials } from '../util'
import styles from './Testimonial.module.css'

export default function Testimonial({ testimonial }) {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <span>{getInitials(testimonial.name)}</span>
        </div>
        <div className={styles.info}>
          <div><strong>{testimonial.name}</strong></div>
          <small>{testimonial.location}</small>
        </div>
      </div>
      <div className={styles.ratingLine}>
        <div className={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <span key={i} className={styles.star}>★</span>
          ))}
        </div>
        <small>{testimonial.timeAgo}</small>
      </div>
      <div className={styles.text}>{testimonial.text}</div>
    </div>
  )
}