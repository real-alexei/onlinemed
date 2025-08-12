import classNames from 'classnames'
import styles from './index.module.css'
import Testimonial from '../Testimonial'
import MoneyBackSVG from './moneyBack.svg?react'

export default function Sidebar({ className }) {
  const testimonials = [
    {
      id: 1,
      name: 'Nick P.',
      location: 'Student • New York',
      rating: 5,
      text: 'Woke up with severe stomach flu and needed documentation for work. The doctor was thorough, professional, and I had my note in minutes.',
      timeAgo: '1 week ago'
    }
  ]

  const currentTestimonial = testimonials[0]

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.logo}>OnlineMed</div>



      <main className={styles.main}>
        <div className={styles.moneyBack}>
          <MoneyBackSVG className={styles.moneyBackIcon} />
          <span>Money Back Guarantee</span>
        </div>
        <h1 className={styles.slogan}>
          Your <em>Work</em> Note<br />
          is Minutes Away
        </h1>
        <p className={styles.description}>
          Note: Due to capacity we are currently only able to provide a limited number of notes per day. To see if you qualify please fill out the following short survey!
        </p>
      </main>

      <footer className={styles.footer}>
        <Testimonial testimonial={currentTestimonial} />
        <div className={styles.carouselDots}>
          <span className={styles.dot + ' ' + styles.active}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </footer>
    </div>
  )
}
