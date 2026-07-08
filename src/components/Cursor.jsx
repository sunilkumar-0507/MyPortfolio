import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e) => {
      dot.style.left = e.clientX + 'px'
      dot.style.top = e.clientY + 'px'
      setTimeout(() => {
        ring.style.left = e.clientX + 'px'
        ring.style.top = e.clientY + 'px'
      }, 60)
    }
    const grow = () => {
      ring.style.width = '60px'
      ring.style.height = '60px'
    }
    const shrink = () => {
      ring.style.width = '40px'
      ring.style.height = '40px'
    }

    document.addEventListener('mousemove', onMove)
    const targets = document.querySelectorAll('a, button, .btn')
    targets.forEach((el) => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
