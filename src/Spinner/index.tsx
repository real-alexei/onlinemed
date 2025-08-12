import classNames from 'classnames'
import Circle from './circle.svg?react'
import styles from './index.module.css'

export default function Spinner(props) {
  let { className, ...rest } = props
  return (
    <Circle className={classNames(styles.circle, className)} {...rest} />
  )
}