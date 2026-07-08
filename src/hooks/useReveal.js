import { useEffect } from 'react'

// Adds the `visible` class to `.reveal` elements as they scroll into view.
export function useReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 60)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )
    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
