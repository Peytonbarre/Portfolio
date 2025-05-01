"use client"

import { useEffect } from 'react'

export default function CursorSpotlight() {
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.className = 'cursor-spotlight'
    document.body.appendChild(cursor)

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    window.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.body.removeChild(cursor)
    }
  }, [])

  return null
} 