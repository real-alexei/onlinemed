import classNames from 'classnames'
import { useState } from 'react'
import styles from './App.module.css'
import Input from './Input'
import CodeInput from './CodeInput'

function App() {
  let [email, setEmail] = useState<string>()
  let [isLoading, setIsLoading] = useState<boolean>(false)
  let [isEmailVerified, setIsEmailVerified] = useState<boolean>(false)

  return (
    <>
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
          }, 3000)
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
            <div>Enter the code sent to justin2013@gmail.com to use your saved information.</div>
            
            <CodeInput
              style={{ marginTop: '1em', marginBottom: '0.5em' }}
            />
            
            <small>
              Didn’t receive a code? <a href="#">Send again</a>
            </small>
          </div>
        </div>
      </form>
    </>
  )
}

export default App
