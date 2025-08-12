import { useRef, useState } from 'react'
import type { KeyboardEvent, ChangeEvent, FocusEvent, ClipboardEvent } from 'react'
import styles from './index.module.css'

function CodeInput(props) {
  let {
    length = 4,
    value = '',
    onChange,
    onComplete,
    ...rest
  } = props

  const [code, setCode] = useState<string[]>(() => {
    const initialCode = new Array(length).fill('')
    if (value) {
      value.split('').forEach((char, index) => {
        if (index < length) {
          initialCode[index] = char
        }
      })
    }
    return initialCode
  })
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null)
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (index: number, newValue: string) => {
    if (newValue.length > 1) {
      const pastedCode = newValue.slice(0, length).split('')
      const newCode = [...code]
      pastedCode.forEach((char, i) => {
        if (index + i < length) {
          newCode[index + i] = char
        }
      })
      setCode(newCode)
      const fullCode = newCode.join('')
      onChange?.(fullCode)
      if (fullCode.length === length && !fullCode.includes('')) {
        onComplete?.(fullCode)
      }
      const nextIndex = Math.min(index + pastedCode.length, length - 1)
      inputsRef.current[nextIndex]?.focus()
      return
    }

    const newCode = [...code]
    newCode[index] = newValue
    setCode(newCode)

    const fullCode = newCode.join('')
    onChange?.(fullCode)

    if (newValue && index < length - 1) {
      inputsRef.current[index + 1]?.focus()
    }

    if (fullCode.length === length && !fullCode.includes('')) {
      onComplete?.(fullCode)
    }
  }

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (!code[index] && index > 0) {
        inputsRef.current[index - 1]?.focus()
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      e.preventDefault()
      inputsRef.current[index - 1]?.focus()
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      e.preventDefault()
      inputsRef.current[index + 1]?.focus()
    }
  }

  const handleFocus = (index: number) => (e: FocusEvent<HTMLInputElement>) => {
    setFocusedIndex(index)
    e.target.select()
  }

  const handleBlur = () => {
    setFocusedIndex(null)
  }

  const handlePaste = (index: number) => (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text')
    handleChange(index, pastedData)
  }

  return (
    <div className={styles.container} {...rest}>
      {code.map((digit, index) => (
        <input
          key={index}
          ref={el => { inputsRef.current[index] = el }}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={digit}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onFocus={handleFocus(index)}
          onBlur={handleBlur}
          onPaste={handlePaste(index)}
          className={`${styles.input} ${focusedIndex === index ? styles.focused : ''}`}
          autoComplete="off"
        />
      ))}
    </div>
  )
}

export default CodeInput