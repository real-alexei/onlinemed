import classNames from 'classnames'
import styles from './index.module.css'
import Spinner from '../Spinner'

export default function Input(props) {
  let { label, loading, verified, placeholder, onReset, ...rest } = props
  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.loading]: loading,
        [styles.verified]: verified
      })}
    >
      <label className={styles.label}>{label}</label>
      <input
        {...rest}
        disabled={loading || verified}
        className={styles.input}
        placeholder={placeholder}
      />
      <button type='submit' style={{ display: 'none' }} />
      <button className={styles.reset} onClick={() => onReset?.()} type="reset">Change</button>
      <Spinner className={styles.spinner} />
    </div>
  )
}