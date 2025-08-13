import classNames from 'classnames'
import { useState } from 'react'
import styles from './index.module.css'
import Testimonial from './Testimonial'

export default function Testimonials({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  return <>
    <Testimonial testimonial={items[currentIndex]} />
    <div className={styles.dots}>
      {items.map((_, at) => (
        <span
          key={at}
          onClick={() => setCurrentIndex(at)}
          className={classNames(styles.dot, {
            [styles.active]: currentIndex === at
          })}
        />
      ))}
    </div>
  </>
}