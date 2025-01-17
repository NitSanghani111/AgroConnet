import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedNumberProps {
  value: number
  duration?: number
  className?: string
}

export function AnimatedNumber({
  value,
  duration = 2000,
  className,
}: AnimatedNumberProps) {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const step = (value / duration) * 10
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current > value) {
        setCurrent(value)
        clearInterval(timer)
      } else {
        setCurrent(current)
      }
    }, 10)

    return () => clearInterval(timer)
  }, [value, duration, isInView])

  return (
    <span ref={ref} className={className}>
      {Math.floor(current).toLocaleString()}
    </span>
  )
}

