import Sidebar from './Sidebar'
import EmailVerificationForm from './EmailVerificationForm'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.page}>
      <Sidebar className={styles.sidebar} />

      <main className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.step}><em>Step 3</em>/9</div>
          <div className={styles.title}>What is your email?</div>
          <div className={styles.description}>This is where we send the note</div>
          
          <EmailVerificationForm onSubmit={() => {}} />
        </div>
      </main>
    </div>
  )
}

export default App
