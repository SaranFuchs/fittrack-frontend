import { useEffect } from 'react'

export function NumberInputWheelGuard() {
  useEffect(() => {
    const stopWheelAdjustment = (event) => {
      const target = event.target
      if (target instanceof HTMLInputElement && target.type === 'number' && document.activeElement === target) {
        target.blur()
      }
    }
    document.addEventListener('wheel', stopWheelAdjustment, { capture: true, passive: true })
    return () => document.removeEventListener('wheel', stopWheelAdjustment, { capture: true })
  }, [])

  return null
}
