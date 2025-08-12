import { useState } from 'react'
import Sidebar from './Sidebar'
import classNames from 'classnames'
import styles from './App.module.css'
import Input from './Input'
import CodeInput from './CodeInput'

function App() {
  let [email, setEmail] = useState<string>()
  let [isLoading, setIsLoading] = useState<boolean>(false)
  let [isEmailVerified, setIsEmailVerified] = useState<boolean>(false)

  return (
    <div className={styles.page}>
      <Sidebar className={styles.sidebar} />

      <main className={styles.contentWrapper}>

        <div className={styles.content}>
          <div className={styles.step}><em>Step 3</em>/9</div>
          <div className={styles.title}>What is your email?</div>
          <div className={styles.description}>This is where we send the note</div>

          <form
            className={classNames(styles.container, {
              [styles.expanded]: isEmailVerified
            })}
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIsLoading(true)
              setTimeout(() => {
                setIsLoading(false)
                setIsEmailVerified(true)
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
              <div style={{ padding: '16px' }}>
                <div><strong>Enter verification code</strong></div>
                <div>Enter the code sent to {email} to use your saved information.</div>

                <CodeInput
                  style={{ marginTop: '1em', marginBottom: '0.5em' }}
                />

                <small>
                  Didn’t receive a code? <a href="#">Send again</a>
                </small>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default App
