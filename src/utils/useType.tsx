import { useEffect, useState } from 'react'

const TYPING_INTERVAL = 150
const PAUSING_INTERVAL = 1000
const DELETING_INTERVAL = 50

const useType = (whatToType: string) => {
  const [phase, setphase] = useState('typing')
  const [typed, setTyped] = useState('')

  useEffect(() => {
    switch (phase) {
      case 'typing':
        const nextToType = whatToType.slice(0, typed.length + 1)
        if (nextToType === typed) {
          setphase('pause')
          return
        }
        const typingTime = setTimeout(() => {
          setTyped(nextToType)
        }, TYPING_INTERVAL)
        return () => clearTimeout(typingTime)
      case 'deleting':
        const nextTodelete = whatToType.slice(0, typed.length - 1)
        if (nextTodelete === '') {
          setphase('typing')
          return
        }
        const deletingTime = setTimeout(() => {
          setTyped(nextTodelete)
        }, DELETING_INTERVAL)
        return () => clearTimeout(deletingTime)
      default:
        const pauseTime = setTimeout(() => {
          setphase('deleting')
        }, PAUSING_INTERVAL)
        return () => clearTimeout(pauseTime)
    }
  }, [typed, whatToType, phase])
  return [typed]
}

export default useType
