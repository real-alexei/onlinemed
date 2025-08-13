import { useState } from 'react'
import classNames from 'classnames'
import Input from '../Input'
import CodeInput from '../CodeInput'
import styles from './index.module.css'

export default function EmailVerificationForm({ onSubmit }: EmailVerificationFormProps) {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isEmailVerified, setIsEmailVerified] = useState(false)

  return (
    <form
      className={classNames(styles.container, {
        [styles.expanded]: isEmailVerified
      })}
      onSubmit={(e) => {
        e.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
          setIsLoading(false)
          setIsEmailVerified(true)
          onSubmit?.(email)
        }, 2000)
      }}
    >
      <Input
        label='Email'
        placeholder='Enter your email'
        type='email'
        defaultValue={email}
        onChange={(e) => setEmail(e.target.value)}
        loading={isLoading}
        verified={isEmailVerified}
        onReset={() => {
          setEmail('')
          setIsEmailVerified(false)
          setIsLoading(false)
        }}
      />

      <div className={classNames(styles.codeInput, {
        [styles.expanded]: isEmailVerified
      })}>
        <div className={styles.codeInputContent}>
          <div><strong>Enter verification code</strong></div>
          <div>Enter the code sent to {email} to use your saved information.</div>

          <CodeInput style={{ marginTop: '1em', marginBottom: '0.5em' }} />

          <small>
            Didn't receive a code? <a href="#">Send again</a>
          </small>
        </div>
      </div>
    </form>
  )
}