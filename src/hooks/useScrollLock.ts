import { useEffect } from 'react'

export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return
    const prev = document.body.style.overflow
    const prevPos = window.scrollY
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
      window.scrollTo(0, prevPos)
    }
  }, [locked])
}
