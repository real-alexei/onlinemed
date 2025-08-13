import classNames from 'classnames'
import styles from './index.module.css'
import Testimonials from '../Testimonials'
import MoneyBackSVG from './moneyBack.svg?react'

export default function Sidebar({ className }) {
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
        <Testimonials items={TESTIMONIALS} />
      </footer>
    </div>
  )
}

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Nick P.',
    location: 'Student • New York',
    rating: 5,
    text: 'Woke up with severe stomach flu and needed documentation for work. The doctor was thorough, professional, and I had my note in minutes.',
    timeAgo: '1 week ago'
  },
  {
    id: 2,
    name: 'Steve J.',
    location: 'CEO • Cupertino',
    rating: 5,
    text: 'Woke up with severe stomach flu and needed documentation for work. The doctor was thorough, professional, and I had my note in minutes.',
    timeAgo: '2 week ago'
  },
  {
    id: 3,
    name: 'Alexei S.',
    location: 'Dev • HelloWorld',
    rating: 5,
    text: 'Woke up with severe stomach flu and needed documentation for work. The doctor was thorough, professional, and I had my note in minutes.',
    timeAgo: '2 week ago'
  }
]