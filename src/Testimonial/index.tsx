import styles from './index.module.css'

interface TestimonialProps {
  testimonial: {
    id: number
    name: string
    location: string
    rating: number
    text: string
    timeAgo: string
  }
}

function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <span>{testimonial.name.split(' ')[0][0]}{testimonial.name.split(' ')[1]?.[0] || ''}</span>
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

export default Testimonial