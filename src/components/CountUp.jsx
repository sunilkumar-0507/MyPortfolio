import { useEffect, useRef, useState } from 'react'

// Animates a number from 0 to `end` once it scrolls into view.
export default function CountUp({ end, decimals = 0, suffix = '', prefix = '', duration = 1600 }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            // easeOutCubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(end * eased)
            if (progress < 1) requestAnimationFrame(tick)
            else setValue(end)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}
