import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

type Props = {
  phrases: string[]
  typeSpeed?: number
  backSpeed?: number
  backDelay?: number
  startDelay?: number
  loop?: boolean
  cursorChar?: string
}

export default function TypedText({
  phrases,
  typeSpeed = 50,
  backSpeed = 30,
  backDelay = 1500,
  startDelay = 300,
  loop = true,
  cursorChar = '|',
}: Props) {
  const elRef = useRef<HTMLSpanElement | null>(null)
  const typedRef = useRef<Typed | null>(null)

  useEffect(() => {
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    if (!elRef.current) return

    if (reduce) {
      elRef.current.textContent = phrases[0] ?? ''
      return
    }

    typedRef.current = new Typed(elRef.current, {
      strings: phrases,
      typeSpeed,
      backSpeed,
      backDelay,
      startDelay,
      loop,
      smartBackspace: true,
      showCursor: true,
      cursorChar,
    })

    return () => {
      typedRef.current?.destroy()
      typedRef.current = null
    }
  }, [phrases, typeSpeed, backSpeed, backDelay, startDelay, loop, cursorChar])

  return <span ref={elRef} />
}
